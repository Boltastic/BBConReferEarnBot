/*CMD
  command: /announceReward
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var userId = params;
var amount = User.getProperty(userId + "_withdrawAmount");
var wallet = User.getProperty(userId + "_withdrawWallet");
var userName = User.getProperty(userId + "_withdrawUserName");

if (!amount || !wallet) {
  Bot.sendMessage("❌ No reward found for this user.");
  return;
}

var publicChannel = Bot.getProperty("publicChannel"); 

Api.sendMessage({
  chat_id: -1002625523657,
  text:
    "🎉 *New Withdrawl Approved!* 🎉\n\n" +
    "🔹 *User:* [" + userName + "](tg://user?id=" + userId + ")\n" +
    "💰 *Amount:* " + amount + " INR\n" +
    "💼 *Wallet:* " + wallet + "\n\n" +
    "🚀 *Keep referring and earning!*",
  parse_mode: "Markdown",
  disable_web_page_preview: true
});

// ✅ Clear withdrawal data
User.setProperty(userId + "_withdrawAmount", null);
User.setProperty(userId + "_withdrawWallet", null);
User.setProperty(userId + "_withdrawUserName", null);

