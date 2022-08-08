const logger = require("../../modules/logger.js");
exports.run = (client, message, args) => {
    if(args.message != NaN){
        let answer = args;
        answer;
        message.reply(answer);
    } else {
        message.reply("Use numbers.");
    }
};
