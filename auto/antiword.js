client.on("MessageCreate", message =>{
const wordz = ["sus", "amongus", "bald", "bozo"]; 
if (wordz.some(word => message.content.toLowerCase().includes(word.toLowerCase())) && message./*make it permission(admin) and owner sensitive*/) { 
  message.reply("bad word bad");
  delay(2500);
  message.delete();
  console.log("blocked word");
  }
}
console.log("blocking " + wordz);