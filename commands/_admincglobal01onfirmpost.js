/*CMD
  command: /admincglobal01onfirmpost
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

var b = [[{ title: "⬅️ Back", command: "/admin" }]]
let ad = Bot.getProperty("adminID")
let id = User.getProperty("aa")
if (chat.chatid == ad) {
  if (params) {
    if (params == "con") {
      Bot.runAll({
        command: "/gloconfirm",
        for_chats: "private-chats"
      })
      Bot.editMessage(
        "✅ *You global post has been successfully sent to your all users*",
        id
      )

      Bot.editInlineKeyboard(b, id)
    } else {
      Bot.editMessage("❌ *Your global post has been cancelled*", id)

      Bot.editInlineKeyboard(b, id)
    }
  }
} else {
  Bot.runCommand("/start")
}

