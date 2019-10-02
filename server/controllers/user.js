const User = require("../models/user");
const cachAsync = require("../utils/catchErrors");
const AppError = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
//multer settings
// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "dist/assets/users");
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split("/")[1];
//     cb(null, `user-${req.user._id}-${Date.now()}.${ext}`);
//   }
// });
const multerStorage = multer.memoryStorage();
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image", 400), false);
  }
};
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

const obj = {
  UserFun: (req, res) => UserFunCached(req, res),
  updateUserFun: (req, res) => updateUserCached(req, res),
  getUserInfoFun: (req, res) => getUserInfoCached(req, res),
  changeEmailFun: (req, res) => changeEmail(req, res),
  logOutFun: (req, res) => logOut(req, res),
  uploadUserPhotoFun: (req, res, next) => uploadUserPhoto(req, res, next),
  resizeUserPhotoFun: (req, res, next) => resizeUserPhoto(req, res, next)
};
module.exports = obj;
const resizeUserPhoto = cachAsync(async (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `user-${req.user._id}-${Date.now()}.jpeg`;
  await sharp(req.file.buffer)
    .resize(300)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`dist/assets/users/${req.file.filename}`);
  next();
});
//upload photo
const uploadUserPhoto = upload.single("avatar");
//cookie options
const cookieOption = {
  expires: new Date(Date.now() + 3600 * 1000),
  httpOnly: true
};
if (process.env.NODE_ENV === "production") cookieOption.secure = true;

const getUserInfoCached = cachAsync(async (req, res) => {
  const checkRegExp = new RegExp(/^[0-9a-fA-F]{24}$/);
  if (req.params.query === "getInfo" && checkRegExp.test(req.query.id)) {
    const userRecord = await User.findOne({ _id: req.query.id }).select(
      "-password -refreshToken -passwordChangeAt -lastLoginAt"
    );
    res.status(200).json({ status: "ok", data: userRecord });
  } else {
    res
      .status(404)
      .json({ status: "fail", error: "Need to pass id for getting user data" });
  }
});

const updateUserCached = cachAsync(async (req, res, next) => {
  // console.log(req.file);
  if (req.body.password) {
    next(new AppError("This route is not for changing password.", 400));
  }
  if (req.params.query === "setAddress") {
    await updateUserRecordParamCatch(req.user._id, req.body);
    const userRecord = await User.findOne({ localId: req.body.id }).select(
      "-password -refreshToken -passwordChangeAt -lastLoginAt"
    );
    res.status(200).json({ status: "ok", data: userRecord });
  } else if (req.file.filename) {
    const data = {
      photo: req.file.filename
    };
    await updateUserRecordParamCatch(req.user._id, data);
    if (req.user.photo !== "man.svg") {
      try {
        fs.unlinkSync(
          path.join(__dirname, `../../dist/assets/users/${req.user.photo}`)
        );
      } catch (e) {
        console.log(e);
      }
    }
    res.status(200).redirect("/");
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
        localId: userRecord._id,
        name: userRecord.name,
        photo: userRecord.photo
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
    //condition if esle for stayin stayout and checking validation password
    if (
      (await userRecord.correctPassword(
        req.body.password,
        userRecord.password
      )) &&
      !req.body.stayIn
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
          localId: userRecord._id,
          name: userRecord.name,
          photo: userRecord.photo
        });
    } else if (
      (await userRecord.correctPassword(
        req.body.password,
        userRecord.password
      )) &&
      req.body.stayIn
    ) {
      const newToken = createLongToken(userRecord._id);
      // updating user record (time)
      updateUserRecordCached(userRecord._id);
      //sending new token
      res
        .status(200)
        .cookie("jwt", newToken, cookieOption)
        .json({
          expireAt: 604800,
          localId: userRecord._id,
          name: userRecord.name,
          photo: userRecord.photo
        });
    } else {
      return res.status(400).json({
        error: "password is don't match",
        status: "fail",
        message: "password is don't match"
      });
    }
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
      { _id: id },
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

function createLongToken(id) {
  return jwt.sign(
    { id: id, exp: Math.floor(Date.now() / 1000) + 60 * process.env.SRAYIN },
    process.env.SALT
  );
}

const changeEmail = cachAsync(async (req, res, next) => {
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

const logOut = cachAsync(async (req, res) => {
  res
    .status(200)
    .cookie("jwt", "logingOut", {
      expires: new Date(Date.now() + 10000),
      httpOnly: true
    })
    .json({
      status: "ok"
    });
});
