function getRandom() {
  return Math.random() * (999999999 - 0) + min;
}
exports.run = (client, args, message) => {
message.reply(getRandom());
}
exports.name = "test";