const socket = server => {
  const socketIo = require("socket.io");
  const Message = require("../models/message");
  const catchAsync = require("../utils/catchErrors");
  const Rooms = require("../models/rooms");

  const io = socketIo(server);

  io.on("connection", async function(socket) {
    socket.on("joinToDefault", () => {
      socket.join("default");
      io.to("default").emit(
        "userCount",
        io.sockets.adapter.rooms["default"].length
      );
    });
    socket.emit("messageFromExpress", { socket: "connected" });
    socket.on("messageFromReact", async data => {
      const newMessage = await Message.create(data);
      io.emit("messageToState", newMessage);
    });
    socket.on("disconnect", async () => {
      const curRooms = await Rooms.find();
      curRooms.forEach(room => {
        if (io.sockets.adapter.rooms[room.name]) {
          io.to(room.name).emit(
            "userCount",
            io.sockets.adapter.rooms[room.name].length
          );
        }
      });
    });
    const curRooms = await Rooms.find();
    curRooms.forEach(item => {
      socket.on(item.name, (id, msg) => {
        const curRoom = socket.rooms[Object.keys(socket.rooms)[1]];
        socket.leave(curRoom);
        socket.join(item.name);
        if (io.sockets.adapter.rooms[curRoom])
          io.to(curRoom).emit(
            "userCount",
            io.sockets.adapter.rooms[curRoom].length
          );
        if (io.sockets.adapter.rooms[item.name])
          io.to(item.name).emit(
            "userCount",
            io.sockets.adapter.rooms[item.name].length
          );
      });
    });
  });
};

module.exports = socket;
