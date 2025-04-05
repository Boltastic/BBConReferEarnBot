/*CMD
  command: /add_bal
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

var tt = "🆔 <b>Send User Telegram ID. </>"

Api.editMessageText({
  message_id: User.getProperty("aa"),
  text: tt,
  parse_mode: "html",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [[{ text: "⬅️ Return", callback_data: "/user_settings" }]]
  }
})
Bot.runCommand("/add_bal_2") 
