const Redis = require("redis");

let Client;
if (process.env.REDIS_HOST)
  Client = Redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST);
else if (process.env.REDIS_URL)
  Client = Redis.createClient(process.env.REDIS_URL);
else Client = Redis.createClient();

Client.set("test", "redis online");
Client.get("test", (err, data) => {
  if (err) console.log(err);
  console.log(data);
});

const get = name =>
  new Promise((resolve, reject) => {
    Client.get(name, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });

const set = (name, data) =>
  new Promise((resolve, reject) => {
    Client.set(name, data, (err, msg) => {
      if (err) reject(err);
      resolve(msg);
    });
  });

const del = name =>
  new Promise((resolve, reject) => {
    Client.del(name, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });

// function promisify(f) {
//   return function(...args) {
//     // return a wrapper-function
//     return new Promise((resolve, reject) => {
//       function callback(err, result) {
//         // our custom callback for f
//         if (err) {
//           return reject(err);
//         } else {
//           resolve(result);
//         }
//       }
//
//       args.push(callback); // append our custom callback to the end of f arguments
//
//       f.call(this, ...args); // call the original function
//     });
//   };
// }

exports.get = get;
exports.set = set;
exports.del = del;
