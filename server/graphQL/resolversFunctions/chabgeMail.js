const User = require("../../models/user");

const changeEmail = async ({ data, _id }) => {
  let answer;
  const userRecord = await User.findById(_id);
  const testMail = await User.findOne({ mail: data.mail });
  if (testMail) answer = "User with this email is already exist.";
  else if (!userRecord) answer = "Can`t find current user by id";
  else if (userRecord.mail === data.mail)
    answer = "Your current email is the same as you passing.";
  else {
    userRecord.mail = data.mail;
    await userRecord.save();
    answer = userRecord;
  }
  return answer;
};

module.exports = changeEmail;
