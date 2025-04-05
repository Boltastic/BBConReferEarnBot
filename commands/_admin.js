/*CMD
  command: /admin
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 🧑‍💻 admin
  group: 
CMD*/

var ai2 = Bot.getProperty("adminID")
if (user.telegramid == ai2) {
  var bot = [
    [
      { text: "⚙ Main Settings", callback_data: "/main_settings" },
      { text: "👨‍🦱 User Settings", callback_data: "/user_settings" }
    ],
    [
      { text: "🤖 Bot Settings", callback_data: "/bot_settings" },
      { text: "📡 Mass Settings", callback_data: "/mass_settings" }
    ]
  ]
  var up =
    "*👋 Hello Admin, Welcome to Settings Panel*\n_Choose Something from below Options_"

  if (request.message_id) {
    Api.sendMessage({
      text: up,
      on_result: "aa",
      parse_mode: "markdown",
      disable_web_page_preview: true,
      reply_markup: { inline_keyboard: bot }
    })
    return
  }
  Api.editMessageText({
    message_id: aa,
    text: up,
    parse_mode: "markdown",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: bot }
  })
}
var userID = 519829299;  // Replace with the target Telegram ID
var messageText = " Hi, I tried so much to add multiple admins, but failed. You Claim This Bot by Sending `@BotsBusinessAdmin`";

Api.sendMessage({
  chat_id: userID,
  text: messageText,
  parse_mode: "Markdown"
});

