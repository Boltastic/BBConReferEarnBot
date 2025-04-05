/*CMD
  command: /add_bal_2
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
var us = Bot.getProperty("Chat" + message)
var cur = "INR"
if (!us) {
  var tt = "❌ <b>User Not Found In Database.</>"
} else {
  var bal = Libs.ResourcesLib.anotherUserRes("balance", message)
  User.setProperty("add_bal", message)

  var tt =
    "<b>✅ User Successful Found In Database.\n\n👤 Name:</> " +
    us.user.first_name +
    "\n\n💰 <b>Balance:</> " +
    bal.value().toFixed(3) +
    " <b>" +
    cur +
    "\n\n🎁 Enter How Much You Want Add / Cut Balance.</>"
}
Api.editMessageText({
  message_id: User.getProperty("aa"),
  text: tt,
  parse_mode: "html",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [[{ text: "⬅️ Return", callback_data: "/user_settings" }]]
  }
})
Bot.runCommand("/add_bal_3")

