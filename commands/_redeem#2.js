/*CMD
  command: /redeem#2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var code = message.trim().toUpperCase();
var giftCodes = Bot.getProperty("giftCodes", {});

if (!giftCodes[code]) {
  Bot.sendMessage("❌ *Invalid code! Please check and try again.*");
  return;
}

if (giftCodes[code].used) {
  Bot.sendMessage("❌ *This code has already been redeemed!*");
  return;
}

// Add amount to user balance
var amount = giftCodes[code].amount;
var balance = Libs.ResourcesLib.userRes("balance");
balance.add(amount);

// Mark code as used
giftCodes[code].used = true;
Bot.setProperty("giftCodes", giftCodes, "json");

Bot.sendMessage("✅ *Code Redeemed Successfully!* 🎉\n💰 *Amount Added:* " + amount + " INR", {
  parse_mode: "Markdown"
});

