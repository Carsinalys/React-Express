const crypto = require("crypto");
const User = require("../models/user");
const Token = require("../models/token");

const obj = {
  generateRandomId: () => randomGenerator(40),
  generateRandomToken: () => randomGenerator(200),
  generateRandomRefreshToken: () => randomGenerator(300),
  UserFun: (req, res) => UserFun(req, res),
  updateUserFun: (req, res) => updateUser(req, res),
  getUserInfoFun: (req, res) => getUserInfo(req, res)
};
module.exports = obj;

async function getUserInfo(req, res) {
  try {
    if (req.params.query === "getInfo") {
      const userRecord = await User.findOne({ localId: req.query.id });
      res.status(200).json({ status: "ok", data: userRecord });
    }
  } catch (err) {
    res.status(400).send({
      error: err,
      status: "fail",
      message: err
    });
  }
}

async function updateUser(req, res) {
  try {
    if (req.params.query === "setAddress") {
      const updateContent = { ...req.body };
      delete updateContent.token;
      delete updateContent.id;
      await updateUserRecordParam(req.body.id, updateContent);
      const userRecord = await User.findOne({ localId: req.body.id });
      res.status(200).json({ status: "ok", data: userRecord });
    }
  } catch (err) {
    res.status(400).send({
      error: err,
      status: "fail",
      message: err
    });
  }
}

async function UserFun(req, res) {
  try {
    if (req.params.query === "create") {
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
      //coding password for database
      crypto.pbkdf2(
        req.body.password,
        process.env.SALT,
        100000,
        64,
        "sha512",
        (err, derivedKey) => {
          if (err) throw err;
          //create response object
          const userObj = {
            localId: obj.generateRandomId(),
            token: obj.generateRandomToken(),
            refreshToken: obj.generateRandomRefreshToken(),
            mail: req.body.mail,
            expireAt: 3600
          };
          //object for database
          const userObjForBase = {
            ...userObj,
            password: derivedKey.toString("hex"),
            lastLoginAt: new Date().getTime(),
            createdAt: new Date().getTime()
          };
          //sending response
          User.create(userObjForBase);
          //creating token record
          Token.create({
            token: userObj.token,
            localId: userObj.localId,
            expireAt: new Date().getTime() + 3600 * 1000
          });
          res.status(200).json(userObj);
        }
      );
    } else if (req.params.query === "authentication") {
      const userRecord = await User.find({ mail: req.body.mail });
      //checking for right mail
      if (userRecord.length === 0) {
        return res.status(404).json({
          error: "this mail is doesn't exist",
          status: "fail",
          message: "this mail is doesn't exist"
        });
      }
      crypto.pbkdf2(
        req.body.password,
        process.env.SALT,
        100000,
        64,
        "sha512",
        (err, derivedKey) => {
          const pass = derivedKey.toString("hex");
          //checking for math passwords
          if (userRecord[0].password !== pass) {
            return res.status(400).json({
              error: "password is don't match",
              status: "fail",
              message: "password is don't match"
            });
          }
          const newToken = obj.generateRandomToken();
          // updating token record
          updateTokenRecord(userRecord[0].localId, newToken);
          // updating user record (time)
          updateUserRecord(userRecord[0].localId);
          //sending new token
          res.status(200).json({
            token: newToken,
            expireAt: 3600,
            refreshToken: userRecord[0].refreshToken,
            localId: userRecord[0].localId,
            mail: userRecord[0].mail
          });
        }
      );
    } else if (req.params.query === "refreshAuthentification") {
      const userRecord = await User.find({
        refreshToken: req.body.refresh_token
      });
      if (userRecord.length === 0) {
        return res.status(400).json({
          error: "didn't find token",
          status: "fail",
          message: "didn't find token"
        });
      }
      const newToken = obj.generateRandomToken();
      updateTokenRecord(userRecord[0].localId, newToken);
      res.status(200).json({
        token: newToken,
        expiresAt: 3600,
        localId: userRecord[0].localId,
        refreshToken: userRecord[0].refreshToken
      });
    }
  } catch (err) {
    res.status(400).send({
      error: err,
      status: "fail",
      message: err
    });
  }
}

function updateTokenRecord(id, newToken) {
  try {
    Token.findOneAndUpdate(
      { localId: id },
      {
        $set: {
          token: newToken,
          expireAt: new Date().getTime() + 3600 * 1000
        }
      },
      { new: true, runValidators: true },
      (err, doc) => {
        if (err) throw new Error(err);
        //console.log(doc);
      }
    );
  } catch (err) {
    res.status(400).send({
      error: err,
      status: "fail",
      message: err
    });
  }
}

function updateUserRecord(id) {
  try {
    User.findOneAndUpdate(
      { localId: id },
      {
        $set: {
          lastLoginAt: new Date().getTime()
        }
      },
      { new: true, runValidators: true },
      (err, doc) => {
        if (err) throw new Error(err);
        //console.log(doc);
      }
    );
  } catch (err) {
    res.status(400).send({
      error: err,
      status: "fail",
      message: err
    });
  }
}

async function updateUserRecordParam(id, data) {
  try {
    await User.findOneAndUpdate(
      { localId: id },
      {
        $set: data
      },
      { new: true, runValidators: true },
      (err, doc) => {
        if (err) throw new Error(err);
        //console.log(doc);
      }
    );
  } catch (err) {
    res.status(400).send({
      error: err,
      status: "fail",
      message: err
    });
  }
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
