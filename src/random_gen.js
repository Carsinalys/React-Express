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
  return {
    id: obj.generateRandomId(),
    token: obj.generateRandomToken(),
    refreshToken: obj.generateRandomRefreshToken(),
    mail: mail,
    pass: pass,
    save: save
  };
}
