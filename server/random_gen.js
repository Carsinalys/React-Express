const crypto = require("crypto");

const obj = {
  generateRandomId: () => randomGenerator(20),
  generateRandomToken: () => randomGenerator(200),
  generateRandomRefreshToken: () => randomGenerator(300),
  createUser: (mail, pass, check) => createUser(mail, pass, check)
};

module.exports = obj;

function randomGenerator(qty) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < qty; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function createUser(mail, pass, save) {
  crypto.pbkdf2(pass, "salt", 100000, 64, "sha512", (err, derivedKey) => {
    if (err) throw err;
    console.log(derivedKey);
    console.log(derivedKey.toString("hex"));
  });
  return {
    id: obj.generateRandomId(),
    token: obj.generateRandomToken(),
    refreshToken: obj.generateRandomRefreshToken(),
    mail: mail,
    pass: pass,
    save: save
  };
}
