/*CMD
  command: /setwallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*✏️ Now Send Your Paytm Number To Use It For Future Withdrawals*

⚠️_ This Wallet Will Be Used For Future Withdrawals !!_
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var wa = message
if (wa.length < 10 || wa.length > 10) {
  Bot.sendMessage("⛔ *Please Send a Valid Paytm Number*")
  Bot.runCommand("/setwallet")
  return
}

function validNum(num) {
  var regex = /^[6-9]\d{9}$/
  return regex.test(num)
}
if (validNum(wa)) {
  User.setProperty("wallet", wa, "string")
  Api.sendMessage({
    text: "🗂<b> Wallet Address Set To:</b>\n<code>" + message + "</code>",
    parse_mode: "html"
  })
  return
} else {
  Bot.sendMessage("⛔ *Please Send a Valid Paytm Number*")
  Bot.runCommand("/setwallet")
  return
}
