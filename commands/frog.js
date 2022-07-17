exports.run = (client, message, args) => {

const response = fetch('https://www.reddit.com/r/${subreddit}.json?sort=top&t=week');
const body = response.text();

const posts = body.data.children
  .filter(post => !!post.data.url && !post.data.over_18)
  .filter(post => post.data.url.endsWith('.jpg') || post.data.url.endsWith('.png') || post.data.url.endsWith('.gif'));

console.log(body);
if (posts.length) {
const randomPost = posts[Math.floor(Math.random() * posts.length)]
const embed = new Discord.MessageEmbed()
  .setTitle("Frog!")
  .setImage(randomPost)
message.channel.send({ embeds: [embed] });
  }
}

exports.name = "frog";
