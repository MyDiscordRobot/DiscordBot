const fetch = require('node-fetch');
exports.run = (client, message, args) => {
const word = args;
if(!args) return message.reply("You need to put a word!");
fetch('https://words.bighugelabs.com/api/2/' + process.env.api +'/' + word + '/json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
}