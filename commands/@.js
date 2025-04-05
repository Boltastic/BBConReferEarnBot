/*CMD
  command: @
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

var to = Bot.getProperty("maintenance")
var adm = Bot.getProperty("adminID")
var aa = User.getProperty("aa")
var refAmount = Bot.getProperty("refAmt", "1")
var stat = Bot.getProperty("" + user.telegramid + "")
if (stat == "ban") {
  Bot.sendMessage("*❌You are Banned to Use These Bot*")
}
if (user.telegramid != adm) {
  if (to == "On") {
    Bot.sendMessage(
      "🔰*Sorry Our Bot Is Currently Under Maintaice* 🙇‍♀\n\n_Bot will start Working in next some hours...._✅\n\n_Regards - @" +
        bot.name +
        "_"
    )
  }
}

