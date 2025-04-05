/*CMD
  command: /approveWithdraw
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

var adminID = Bot.getProperty("adminID"); 
if (user.telegramid != adminID) {
  Bot.sendMessage("❌ You are not authorized to approve withdrawals.");
  return;
}

var userId = params; 
var amount = User.getProperty(userId + "_withdrawAmount");
var wallet = User.getProperty(userId + "_withdrawWallet");
var userName = User.getProperty(userId + "_withdrawUserName");

if (!amount || !wallet) {
  Bot.sendMessage("❌ No pending withdrawal for this user.");
  return;
}

// ✅ Notify the user about approval
Bot.sendMessageToChatWithId(
  userId,
  "✅ Your withdrawal request has been approved! 🎉\n\n" +
  "💰 Amount: " + amount + " INR\n" +
  "💼 Wallet: " + wallet + "\n\n" +
  "🎊 Payment sent successfully! 🚀"
);

// ✅ Automatically announce the reward
Bot.runCommand("/announceReward " + userId);

// ✅ Clear withdrawal data
User.setProperty(userId + "_withdrawAmount", null);
User.setProperty(userId + "_withdrawWallet", null);
User.setProperty(userId + "_withdrawUserName", null);

