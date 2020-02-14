const User = require("../../models/user");
const createToken = require("./createToken");
const AppError = require("../../utils/errorHandler");

const signIn = async input => {
  let result;
  let newToken;
  if (!input.mail || !input.password)
    return new AppError("You must enter mail and password to proceed", 400);
  const userRecord = await User.findOne({ mail: input.mail });
  //checking for right mail
  if (!userRecord) {
    result = {
      error: "this mail is doesn't exist",
      status: "fail",
      message: "this mail is doesn't exist"
    };
  }
  //condition if esle for stayin stayout and checking validation password
  if (userRecord)
    if (
      (await userRecord.correctPassword(input.password, userRecord.password)) &&
      !input.stayIn
    ) {
      newToken = createToken(userRecord._id, process.env.EXPIRE);
      // updating user record (time)
      await updateUserRecordCached(userRecord._id);
      //sending new token
      result = {
        expireAt: 3600,
        localId: userRecord._id,
        name: userRecord.name,
        photo: userRecord.photo
      };
    } else if (
      (await userRecord.correctPassword(input.password, userRecord.password)) &&
      input.stayIn
    ) {
      newToken = createToken(userRecord._id, process.env.SRAYIN);
      // updating user record (time)
      await updateUserRecordCached(userRecord._id);
      //sending new token
      result = {
        expireAt: 604800,
        localId: userRecord._id,
        name: userRecord.name,
        photo: userRecord.photo
      };
    } else {
      result = {
        error: "password is don't match",
        status: "fail",
        message: "password is don't match"
      };
    }
  return { result, newToken };
};

module.exports = signIn;

const updateUserRecordCached = async function updateUserRecord(id) {
  User.findByIdAndUpdate(
    id,
    {
      $set: {
        lastLoginAt: new Date().getTime()
      }
    },
    { new: true, runValidators: true },
    (err, doc) => {
      new AppError("Couldn't update user record", 500);
      //console.log(doc);
    }
  );
};
