/*CMD
  command: /ban#2
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

var adm = Bot.getProperty("adminID")
Api.deleteMessage({ message_id: request.message_id })
if (user.telegramid == adm) {
  Bot.setProperty("" + message + "", "ban", "string")
  Bot.sendMessageToChatWithId(
    "" + message + "",
    "*⏰Alert\nYou Are Banned from Using me by Owner\n\n☣️ Need Support = /support*"
  )
  Api.editMessageText({
    message_id: aa,
    text: "<b>🛑 User " + message + " Has Been Banned Successfully</>",
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [[{ text: "⬅️ Return", callback_data: "/admin" }]]
    }
  })
}

