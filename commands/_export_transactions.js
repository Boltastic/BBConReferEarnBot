/*CMD
  command: /export_transactions
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

var claimhistory = User.getProperty("claimhistory", []);

if (claimhistory.length === 0) {
  Bot.sendMessage("❌ No transactions found to export.");
  return;
}

// CSV Header
var csvData = "Date,Type,Amount,Wallet\n";

// Loop through transactions and format them
for (var i = 0; i < claimhistory.length; i++) {
  var record = claimhistory[i];
  var parts = record.match(/📤 <b>(.*?)<\/b>: <code>(.*?) INR<\/code> \| 🏦 <b>Wallet:<\/b> <code>(.*?)<\/code> \| 📅 (.*)/);
  
  if (parts) {
    var type = parts[1]; // Transaction type
    var amount = parts[2]; // Amount
    var wallet = parts[3]; // Wallet ID
    var date = parts[4]; // Date

    csvData += `${date},${type},${amount},${wallet}\n`;
  }
}

// Save CSV file
var fileName = "transactions.csv";
var filePath = "/mnt/data/" + fileName;
Bot.setProperty(fileName, csvData, "string");

// Send the file
Api.sendDocument({
  chat_id: user.telegramid,
  document: filePath,
  caption: "📂 Here is your transaction history."
});

