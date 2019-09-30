const WebSocket = require("ws");
const Message = require("./models/message");
const catchAsync = require("./utils/catchErrors");

const socket = catchAsync(async () => {
  const webSocketServer = new WebSocket.Server({ port: 8080 });

  webSocketServer.on("connection", async webSocket => {
    webSocket.on("message", async message => {
      const newMessage = await Message.create(JSON.parse(message));
      broadcast(JSON.stringify(newMessage));
    });
  });

  function broadcast(data) {
    webSocketServer.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  }
});

module.exports = socket;
