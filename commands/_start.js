/*CMD
  command: /start
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

var adm = Bot.getProperty("adminID")
if (!adm) {
  Bot.setProperty("adminID", user.telegramid, "string")
  Bot.sendMessage(
    "🧑‍💻 *Successfully Login As An Admin With* " + chat.chatid + " *ID.*"
  )
  return
}
Api.sendMessage({
  text:
    "<b>⛔ Must Join All Our Channels</b>\n\n➡️ @referearnbotreb\n\n✅ <b>After Joining, Click on 🟢 Joined</b>",
  parse_mode: "html",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [[{ text: "🟢 Joined", callback_data: "/joined" }]]
  }
})

if (user.username != undefined) {
  var hh = "[@" + user.username + "]"
} else {
  var hh = ""
}

function touchingOwnLink() {
  Bot.sendMessage("*❌ Stop Clicking Your Own Link*")
}
function attractedByUser(refUser) {
  Api.sendMessage({
    chat_id: refUser.telegramid,
    text:
      "<b>🔋 You Got a New </b><a href='tg://user?id=" +
      user.telegramid +
      "'>Referral</a> " +
      hh +
      "\n<i>💡 Reward Only If Referral Solves the Captcha and Joins Our Channel</i>",
    parse_mode: "html",
    disable_web_page_preview: true
  })
}
function alreadyStarted() {
  Bot.sendMessage("*🚫 You Have Already Started The Bot *")
}

var tracks = {
  onTouchOwnLink: touchingOwnLink,
  onAtractedByUser: attractedByUser,
  onAlreadyAttracted: alreadyStarted,
  linkPrefix: "Bot"
}

RefLib.track(tracks)
if (!User.getProperty("UserDone")) {
  Bot.setProperty("Chat" + user.telegramid, chat, "json")
  User.setProperty("UserDone", true, "boolean")
  var stat = Libs.ResourcesLib.anotherChatRes("status", "global")
  stat.add(1)
  Api.sendMessage({
    chat_id: adm, //admin telegram id here
    text:
      "➕ <b>New User Notification</b> ➕\n\n👤<b>User:</b> <a href='tg://user?id=" +
      user.telegramid +
      "'>" +
      user.first_name +
      "</a> " +
      hh +
      "\n\n🆔<b> User ID :</b> <code>" +
      user.telegramid +
      "</code>\n\n🌝 <b>Total User's Count: " +
      stat.value() +
      "</b>",
    parse_mode: "html",
    disable_web_page_preview: true
  })
}

