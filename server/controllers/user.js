const User = require("../models/user");
const cachAsync = require("../utils/catchErrors");
const AppError = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");

const obj = {
  generateRandomRefreshToken: () => randomGenerator(300),
  UserFun: (req, res) => UserFunCached(req, res),
  updateUserFun: (req, res) => updateUserCached(req, res),
  getUserInfoFun: (req, res) => getUserInfoCached(req, res),
  changeEmailFun: (req, res) => changeEmail(req, res)
};
module.exports = obj;

const cookieOption = {
  expires: new Date(Date.now() + 3600 * 1000),
  httpOnly: true
};
if (process.env.NODE_ENV === "production") cookieOption.secure = true;

const getUserInfoCached = cachAsync(async (req, res) => {
  if (req.params.query === "getInfo") {
    const userRecord = await User.findById(req.query.id).select(
      "-password -refreshToken -passwordChangeAt -lastLoginAt"
    );
    res.status(200).json({ status: "ok", data: userRecord });
  }
});

const updateUserCached = cachAsync(async (req, res, next) => {
  if (req.body.password) {
    next(new AppError("This route is not for changing password.", 400));
  }
  if (req.params.query === "setAddress") {
    const updateContent = { ...req.body };
    delete updateContent.id;
    await updateUserRecordParamCatch(req.body.id, updateContent);
    const userRecord = await User.findOne({ localId: req.body.id }).select(
      "-password"
    );
    res.status(200).json({ status: "ok", data: userRecord });
  }
});

const UserFunCached = cachAsync(async (req, res, next) => {
  if (req.params.query === "create") {
    if (!req.body.mail || !req.body.password)
      return next(
        new AppError("You must enter mail and password to proceed", 400)
      );
    const checkMail = await User.find({
      mail: req.body.mail
    });
    //throw error if mail exist
    if (checkMail.length > 0) {
      return res.status(400).json({
        error: "this mail is already exist",
        status: "fail",
        message: "this mail is already exist"
      });
    }
    //object for database
    const userObjForBase = {
      localId: "",
      refreshToken: obj.generateRandomRefreshToken(),
      mail: req.body.mail,
      expireAt: 3600,
      password: req.body.password,
      lastLoginAt: new Date().getTime(),
      createdAt: new Date().getTime()
    };
    //sending response
    const userRecord = await User.create(userObjForBase);
    const token = createToken(userRecord._id);
    res
      .status(201)
      .cookie("jwt", token, cookieOption)
      .json({
        expireAt: 3600,
        localId: userRecord._id
      });
  } else if (req.params.query === "authentication") {
    if (!req.body.mail || !req.body.password)
      return next(
        new AppError("You must enter mail and password to proceed", 400)
      );
    const userRecord = await User.findOne({ mail: req.body.mail });
    //checking for right mail
    if (!userRecord) {
      return res.status(404).json({
        error: "this mail is doesn't exist",
        status: "fail",
        message: "this mail is doesn't exist"
      });
    }
    if (
      await userRecord.correctPassword(req.body.password, userRecord.password)
    ) {
      const newToken = createToken(userRecord._id);
      // updating user record (time)
      updateUserRecordCached(userRecord._id);
      //sending new token
      res
        .status(200)
        .cookie("jwt", newToken, cookieOption)
        .json({
          expireAt: 3600,
          localId: userRecord._id
        });
    } else {
      return res.status(400).json({
        error: "password is don't match",
        status: "fail",
        message: "password is don't match"
      });
    }
  } else if (req.params.query === "refreshAuthentification") {
    if (!req.body.refresh_token)
      return next(new AppError("You must enter refresh token to proceed", 400));
    const userRecord = await User.findOne({
      refreshToken: req.body.refresh_token
    });
    if (!userRecord) {
      return res.status(400).json({
        error: "didn't find token",
        status: "fail",
        message: "didn't find token"
      });
    }
    res.status(200).json({
      token: createToken(userRecord._id),
      expiresAt: 3600,
      localId: userRecord.localId,
      refreshToken: userRecord.refreshToken
    });
  }
});

const updateUserRecordCached = cachAsync(async function updateUserRecord(id) {
  User.findByIdAndUpdate(
    id,
    {
      $set: {
        lastLoginAt: new Date().getTime()
      }
    },
    { new: true, runValidators: true },
    (err, doc) => {
      if (err) new AppError("Couldn't update user record", 500);
      //console.log(doc);
    }
  );
});

const updateUserRecordParamCatch = cachAsync(
  async function updateUserRecordParam(id, data) {
    await User.findOneAndUpdate(
      { localId: id },
      {
        $set: data
      },
      { new: true, runValidators: true },
      (err, doc) => {
        if (err) new AppError("Couldn't update user record", 500);
        //console.log(doc);
      }
    );
  }
);

function createToken(id) {
  return jwt.sign(
    { id: id, exp: Math.floor(Date.now() / 1000) + 60 * process.env.EXPIRE },
    process.env.SALT
  );
}

function randomGenerator(qty) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < qty; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const changeEmail = cachAsync(async (req, res, next) => {
  console.log(req.body);
  const userRecord = await User.findOne({ localId: req.body.id });
  const testMail = await User.findOne({ mail: req.body.mail });
  if (testMail) {
    return res.status(400).json({
      status: "fail",
      error: "User with this email is already exist.",
      message: "User with this email is already exist."
    });
  }
  if (!userRecord)
    return next(new AppError("Can`t find current user by id", 404));
  if (userRecord.mail === req.body.mail)
    return next(
      new AppError("Your current email is the same as you passing.", 400)
    );
  userRecord.mail = req.body.mail;
  await userRecord.save();
  res.status(200).json({
    status: "ok",
    message: "mail has been changed"
  });
});
