const sharp = require("sharp");
const base64js = require("base64-js");
const User = require("../../models/user");

const changeUserPhoto = async ({ data, _id }) => {
  const parts = data.photo.split(";");
  const mimType = parts[0].split(":")[1];
  const imageData = parts[1].split(",")[1];
  let result;

  let img = new Buffer(imageData, "base64");
  img = await sharp(img)
    .resize(200, 200)
    .toBuffer();
  result = await User.findById(_id);
  result.photo = `data:${mimType};base64,${base64js.fromByteArray(img)}`;
  await result.save();
  return result;
};

module.exports = changeUserPhoto;
