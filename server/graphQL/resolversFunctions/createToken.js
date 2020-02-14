const jwt = require("jsonwebtoken");

function createToken(id, time) {
  return jwt.sign(
    { id: id, exp: Math.floor(Date.now() / 1000) + 60 * time },
    process.env.SALT
  );
}

module.exports = createToken;
