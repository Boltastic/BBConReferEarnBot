/*CMD
  command: /myrefers
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

if(request.data){
Api.deleteMessage({
message_id : request.message.message_id
})
}

let refList = Libs.ReferralLib.getRefList();

if (!refList.exist) {
  Bot.sendMessage("No any affiliated users");
  return
}

var users_rows = ""
var users = refList.getUsers()
for (var ind in users) {
  users_rows =
    users_rows +
    "\n\n*➡️ Your Total Reffer: " +
    Libs.ReferralLib.getRefCount() +
    "\n\n👨‍👨‍👦 Your Reffer Users ⬇️*\n\n👤 " +
    Libs.commonLib.getLinkFor(users[ind])
}

var inl = [[{ text: "🔙 Back", callback_data: "/invite" }]]

Api.sendMessage({
  text: users_rows,
  parse_mode: "markdown",
  reply_markup: { inline_keyboard: inl }
})
