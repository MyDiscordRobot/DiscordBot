exports.run = (client, message, args) => {
const fetch = require('node-fetch');
if(!args) return message.reply("You need to put a word!");
const word = args;
fetch('https://words.bighugelabs.com/api/2/${api}/${word}/json')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => ...)
}