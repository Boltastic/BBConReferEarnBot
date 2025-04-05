/*CMD
  command: /add_bal_3
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

Api.deleteMessage({ message_id: request.message_id })
var uu = User.getProperty("add_bal")
var us = Bot.getProperty("Chat" + uu)
var cur = "INR"
var adm = Bot.getProperty("adminID")
if (adm == chat.chatid) {
  var bal = Libs.ResourcesLib.anotherUserRes("balance", uu)
  bal.add(+message)

  var tt =
    "<b>✅ User Successful Found In Database.\n\n👤 Name:</> " +
    us.user.first_name +
    "\n\n💰 <b>Balance:</> " +
    bal.value().toFixed(3) +
    " <b>" +
    cur +
    "\n\n🎁 Balance Successfully Updated.</>"
  Api.sendMessage({
    chat_id: uu,
    text: "*➕ Balance Added :* " + message + " " + cur + "",
    parse_mode: "Markdown"
  })
  Api.editMessageText({
    message_id: User.getProperty("aa"),
    text: tt,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [[{ text: "⬅️ Return", callback_data: "/user_settings" }]]
    }
  })
  return
}

