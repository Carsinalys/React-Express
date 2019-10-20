const socket = server => {
  const socketIo = require("socket.io");
  const Message = require("./models/message");
  const catchAsync = require("./utils/catchErrors");

  const io = socketIo(server);

  io.on("connection", async function(socket) {
    socket.emit("messageFromExpress", { socket: "connected" });
    socket.on("messageFromReact", async data => {
      const newMessage = await Message.create(data);
      io.emit("messageToState", newMessage);
    });
    socket.on("disconnect", () => {
      console.log("disconnected");
    });
  });
};

module.exports = socket;
