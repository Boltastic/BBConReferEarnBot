/*CMD
  command: /unban
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

Api.editMessageText({
  message_id: aa,
  text: "<b>🆔 Send I'd Of User:</>",
  parse_mode: "html",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [[{ text: "⬅️ Return", callback_data: "/user_settings" }]]
  }
})
Bot.runCommand("/unban#2")

