/*CMD
  command: /reply_2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Enter a Reply Message to Send to User*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adm = Bot.getProperty("adminID")
if (user.telegramid == adm) {
  var id = User.getProperty("reply?id")
  Bot.sendInlineKeyboardToChatWithId(
    id,
    [{ title: "↩️ Reply to Administrator", command: "/support" }],
    "*🔍 Message From Administrator:*\n\n" + message + ""
  )
  Bot.sendMessage("*♨️ Message Sent To User!*")
} else {
  return
}

