/*CMD
  command: /clear_transactions
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

// ✅ Clear the user's transaction history
User.setProperty("claimhistory", [], "json");

Bot.sendMessage("✅ Your transaction history has been cleared successfully! 🧹");

