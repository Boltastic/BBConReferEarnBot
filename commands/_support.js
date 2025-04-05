/*CMD
  command: /support
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *🥢 Send Your Message Shortly*

  <<KEYBOARD

  KEYBOARD
  aliases: 🆘 support
  group: 
CMD*/

var adm = Bot.getProperty("adminID")
var user_link = Libs.commonLib.getLinkFor(user)

var txt =
  "*📣 New Support Message Came From User* " + user_link + "\n\n" + message + ""
Bot.sendInlineKeyboardToChatWithId(
  adm,
  [
    {
      title: "↩️ Reply to " + user.first_name + "",
      command: "/reply " + user.telegramid + ""
    }
  ],
  txt
)

Api.forwardMessage({
  chat_id: adm,
  from_chat_id: user.telegramid,
  message_id: request.message_id
})

Bot.sendMessage(
  "*Message was sended successfully you will get your reply shortly*"
)

