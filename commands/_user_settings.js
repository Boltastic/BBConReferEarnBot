/*CMD
  command: /user_settings
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
  [
    { text: "🔴 Ban User", callback_data: "/ban" },
    { text: "🟢 UnBan User", callback_data: "/unban" }
  ],
  [{ text: "🔭 Add And Cut Balance", callback_data: "/add_bal" }],
  [{ text: "⌫ Back", callback_data: "/admin" }]
]
var up = "*📒 Welcome to User Settings Panel*\nChoose Something to Change"

Api.editMessageText({
  message_id: aa,
  text: up,
  parse_mode: "markdown",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: botn }
})

