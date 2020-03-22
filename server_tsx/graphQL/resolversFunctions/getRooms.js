const Rooms = require("../../models/rooms");

const getRomms = async () => {
  return await Rooms.find();
};

module.exports = getRomms;
