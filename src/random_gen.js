const obj = {
  generateRandomId: () => randomGenerator(20),
  generateRandomToken: () => randomGenerator(200),
  generateRandomRefreshToken: () => randomGenerator(300)
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
