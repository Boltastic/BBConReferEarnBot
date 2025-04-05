/*CMD
  command: /creategift#2
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

var amount = parseFloat(message);
var balance = Libs.ResourcesLib.userRes("balance");

if (isNaN(amount) || amount <= 0) {
  Bot.sendMessage("❌ *Invalid amount! Please enter a valid number.*");
  return;
}

if (amount > balance.value()) {
  Bot.sendMessage("❌ *Insufficient balance!* You have " + balance.value() + " INR.");
  return;
}

// Deduct amount and generate unique code
balance.remove(amount);
var code = "GIFT" + Math.random().toString(36).substr(2, 8).toUpperCase();

// Store the gift code with amount
var giftCodes = Bot.getProperty("giftCodes", {});
giftCodes[code] = { amount: amount, used: false };
Bot.setProperty("giftCodes", giftCodes, "json");

Bot.sendMessage("✅ *Gift code created successfully!* 🎁\n\n🔢 *Your Code:* `" + code + "`\n💰 *Amount:* " + amount + " INR", {
  parse_mode: "Markdown"
});

