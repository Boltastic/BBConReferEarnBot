/*CMD
  command: /bot_settings
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

var ad = Bot.getProperty("adminID")
if (user.telegramid != ad) {
  return
}

var botn = [
  [{ text: "⚠️ Maintenance", callback_data: "/maintainence" }],
  [{ text: "⌫ Back", callback_data: "/admin" }]
]
var up = "*📒 Welcome to Bot Settings Panel*\nChoose Something to Change"

Api.editMessageText({
  message_id: aa,
  text: up,
  parse_mode: "markdown",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: botn }
})

