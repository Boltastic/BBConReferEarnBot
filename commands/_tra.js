/*CMD
  command: /tra
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 📄 transactions
  group: 
CMD*/

// Get claim history or set a default value
var claimhistory = User.getProperty("claimhistory", []);

var txt = "<b>📄 Transaction History:</b>\n\n";
if (claimhistory.length === 0) {
  txt += "❌ No transactions found.";
} else {
  txt += claimhistory.join("\n");
}
var inlkey = [
  [{ text: "🗑 Clear Transactions", callback_data: "/clear_transactions" }],
  [{ text: "🔙 Back", callback_data: "/mainmenu" }]
];

// Send or edit message
if (request.message) {
  Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: inlkey }
  });
} else {
  Api.sendMessage({
    text: txt,
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: inlkey }
  });
}


