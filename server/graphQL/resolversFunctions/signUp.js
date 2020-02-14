const User = require("../../models/user");
const createToken = require("./createToken");
const AppError = require("../../utils/errorHandler");

const signUp = async input => {
  let result;
  let newToken;
  if (!input.mail || !input.password)
    return next(
      new AppError("You must enter mail and password to proceed", 400)
    );
  const checkMail = await User.find({
    mail: input.mail
  });
  //throw error if mail exist
  if (checkMail.length > 0) {
    result = {
      error: "this mail is already exist",
      status: "fail",
      message: "this mail is already exist"
    };
  } else {
    //object for database
    const userObjForBase = {
      localId: "",
      mail: input.mail,
      expireAt: 3600,
      password: input.password,
      lastLoginAt: new Date().getTime(),
      createdAt: new Date().getTime()
    };
    //sending response
    const userRecord = await User.create(userObjForBase);
    newToken = createToken(userRecord._id);
    result = {
      expireAt: 3600,
      localId: userRecord._id,
      name: userRecord.name,
      photo: userRecord.photo
    };
  }
  return { result, newToken };
};

module.exports = signUp;
