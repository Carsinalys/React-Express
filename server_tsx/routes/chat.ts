const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../controllers/isAuthenticated");
const room = require("../controllers/rooms");
const message = require("../controllers/message");

router
  .route("/api/v1.0/chatRooms")
  .post(isAuthenticated, room.createroom)
  .get(room.getRooms);

router
  .route("/api/v1.0/roomMessages")
  .get(message.getMessages)
  .delete(message.deleteMessage);

module.exports = router;
