/*CMD
  command: /mass_settings
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
if (chat.chatid == ad) {
  let yo = "markdown" //formatting style here, like: html, markdown
  let x =
    "*Now Send Me your global message with formatting.*\n*Avialabe variable lists:*\n\n*{mention}* - _For mention user profile link_\n*{name}* - _For show user full name_\n*{username}* - _For show user username_\n*{id}* - _For show user telegramid_\n \n_For text formate you currently setupped_ *" +
    yo +
    "*"
  Bot.runCommand("/msgglo01")
  Api.editMessageText({
    message_id: User.getProperty("aa"),
    text: x,
    parse_mode: "markdown",
    reply_markup: {
      inline_keyboard: [[{ text: "⬅️ Return", callback_data: "/admin" }]]
    }
  })

  return
}

