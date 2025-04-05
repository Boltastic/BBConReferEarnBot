/*CMD
  command: /reply
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

var adm = Bot.getProperty("adminID")
if ((user.telegramid = adm)) {
  if (params) {
    var id = params
    User.setProperty("reply?id", id, "string")
    Bot.runCommand("/reply_2")
    return
  } else {
    Bot.sendMessage("*♨️ User ID Not Found to Reply!*")
    return
  }
} else {
  Bot.sendMessage("You aren't an Admin!")
}
return

