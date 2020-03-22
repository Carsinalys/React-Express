const Message = require("../../models/message");

const getMessagesRoom = async room => {
  let curMessages;
  curMessages = await Message.find({ room });
  if (!curMessages.length) curMessages = [];
  return curMessages;
};

module.exports = getMessagesRoom;
