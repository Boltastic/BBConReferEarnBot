/*CMD
  command: 📤 Withdraw
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Enter The Amount You Want To Withdraw*

  <<KEYBOARD

  KEYBOARD
  aliases: /withdraw
  group: 
CMD*/

var maxwith = parseFloat(100000000000000000000); // Maximum Withdrawal Amount
var minwith = parseFloat(10); // Minimum Withdrawal Amount
var channel = "-1002625523657"; // Admin Channel ID
var stat = Bot.getProperty("" + user.telegramid + "?Ban");

if (stat == "ban") {
  Bot.sendMessage("*❌ You are banned from using this bot!*");
} else {
  var payouts = Libs.ResourcesLib.anotherChatRes("payouts", "global");
  var wallet = User.getProperty("wallet");
  var balance = Libs.ResourcesLib.userRes("balance");

  if (message < minwith) {
    Bot.sendMessage("_❌ Minimum withdrawal amount is " + minwith + " INR._");
  } else if (message > maxwith) {
    Bot.sendMessage("❌ *Maximum withdrawal amount is " + maxwith + " INR.*");
    return;
  } else {
    if (message > balance.value()) {
      Bot.sendMessage(
        "❌ *Insufficient Balance!*\n_Enter an amount below or equal to " +
          balance.value().toFixed(2) +
          " INR._"
      );
    } else {
      function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }

      var value = message;
      if (!isNumeric(value)) {
        Bot.sendMessage("*📛 Invalid input. Please enter a numeric value.*", {
          is_reply: true
        });
        return;
      }

      // ✅ Deduct from balance and update total payouts
      balance.remove(parseFloat(message));
      payouts.add(parseFloat(message));

      // ✅ Store transaction in history
      var claimhistory = User.getProperty("claimhistory", []);
      var transactionRecord =
        "📤 <b>Withdrawal</b>: <code>" +
        message +
        " INR</code> | 🏦 <b>Wallet:</b> <code>" +
        wallet +
        "</code> | 📅 " +
        new Date().toLocaleString();
      
      claimhistory.unshift(transactionRecord); // Add new transaction at the start

      // ✅ Keep only the last 20 transactions
      if (claimhistory.length > 20) {
        claimhistory.pop(); // Remove the oldest transaction
      }

      User.setProperty("claimhistory", claimhistory, "json");

      // ✅ Store pending withdrawal request for approval
      User.setProperty(user.telegramid + "_withdrawAmount", message, "string");
      User.setProperty(user.telegramid + "_withdrawWallet", wallet, "string");
      User.setProperty(user.telegramid + "_withdrawUserName", user.first_name, "string");

      // ✅ Notify user
      Bot.sendMessage(
        "*✅ Withdrawal Requested Successfully!*\n\n" +
          "💳 *Transaction Details:*\n" +
          "💰 Amount: " + message + " INR\n" +
          "💼 Wallet: " + wallet + "\n\n" +
          "⏳ _Wait 1-12 hours for processing._\n\n" +
          "✅ *Important!* ❗\n" +
          "_Fake referrals will lead to a ban._\n\n" +
          "🌹 *Payment Channel: @bbpoinideposit*"
      );

      // ✅ Notify Admins
      Api.sendMessage({
        chat_id: channel,
        text:
          "<b>💰 New INR Withdrawal Request 🏦</b>\n\n" +
          "▪️ <b>Status:</b> Pending\n" +
          "▪️ <b>User:</b> <a href='tg://user?id=" +
          user.telegramid +
          "'>" +
          user.first_name +
          "</a>\n" +
          "▪️ <b>User ID:</b> <code>" +
          user.telegramid +
          "</code>\n" +
          "▪️ <b>Amount:</b> " +
          message +
          " ₹\n" +
          "▪️ <b>Wallet:</b> " +
          wallet +
          "\n\n" +
          "👮🏻‍♂️ <b>Bot:</b> @" +
          bot.name +
          "\n\n" +
          "🛠 Admin, use: <code>/approveWithdraw " + user.telegramid + "</code>",
        parse_mode: "html",
        disable_web_page_preview: true
      });
    }
  }
}

