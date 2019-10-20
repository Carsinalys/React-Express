const socket = server => {
  const socketIo = require("socket.io");
  const Message = require("../models/message");
  const catchAsync = require("../utils/catchErrors");
  const Rooms = require("../models/rooms");

  const io = socketIo(server);

  io.on("connection", async function(socket) {
    socket.join("default");
    socket.emit("userCount", io.sockets.adapter.rooms["default"].length);
    socket.on("disconnected", () => {
      console.log("disconnected");
    });
    socket.emit("messageFromExpress", { socket: "connected" });
    socket.on("messageFromReact", async data => {
      const newMessage = await Message.create(data);
      io.emit("messageToState", newMessage);
    });
    socket.on("disconnect", () => {
      console.log("disconnected");
    });
    const curRooms = await Rooms.find();
    curRooms.forEach(item => {
      socket.on(item.name, (id, msg) => {
        console.log(socket.rooms);
        const curRoom = socket.rooms[Object.keys(socket.rooms)[1]];
        socket.leave(curRoom);
        socket.join(item.name);
        console.log(io.sockets.adapter.rooms[curRoom]);
        console.log(io.sockets.adapter.rooms[item.name]);
        console.log("join");
        setTimeout(() => console.log(socket.rooms), 1000);
      });
    });
  });
};

module.exports = socket;
