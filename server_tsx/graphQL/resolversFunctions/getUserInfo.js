const User = require("../../models/user");

const getUserInfo = async input => {
  const checkRegExp = new RegExp(/^[0-9a-fA-F]{24}$/);
  if (checkRegExp.test(input.id)) {
    const userRecord = await User.findOne({ _id: input.id }).select(
      "-password -refreshToken -passwordChangeAt -lastLoginAt -passwordResetExrires -passwordResetToken"
    );
    return userRecord;
  }
};

module.exports = getUserInfo;
