/*CMD
  command: /main_settings
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

var ai2 = Bot.getProperty("adminID")
if (user.telegramid == ai2) {
  var botn = [
    [{ text: "📌 Set Reffer Amount ", callback_data: "/setref" }],

    [{ text: "⬅️ Back", callback_data: "/admin" }]
  ]

  var up =
    '<a href="' +
    "tg://user?id=" +
    user.telegramid +
    '">' +
    user.first_name +
    "</a>" +
    "<b> Select an Option That You want To Manage Your Bot</b>"

  Api.editMessageText({
    message_id: aa,
    text: up,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: botn }
  })
}

