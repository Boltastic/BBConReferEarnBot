/*CMD
  command: /setref#2
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

if (user.telegramid == adm) {
  Bot.setProperty("refAmt", message, "string")
  Api.deleteMessage({ message_id: request.message_id })
  Api.editMessageText({
    message_id: aa,
    text: "<b>🧿 Refer Amount Update To: ₹" + message + "</>",
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [[{ text: "⬅️ Return", callback_data: "/admin" }]]
    }
  })
}

