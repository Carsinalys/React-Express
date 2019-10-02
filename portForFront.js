export const port =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "";

export const socketType = process.env.NODE_ENV === "development" ? "ws" : "wss";
