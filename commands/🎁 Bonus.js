/*CMD
  command: 🎁 Bonus
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

var inlkey = [[]]
var lIndex
inlkey[1] = []
inlkey[2] = []
inlkey[3] = []
var keyboardRow = 0

var bttn = [[{ title: "🎁 Cᴏʟʟᴇᴄᴛ", command: "🎁 Bonus" }]]
//Bot.sendInlineKeyboard(bttn, "🤓 _Collect Your _*Daily Bonus* _Now! _")

function canRun(name, perid) {
  var period = parseInt(perid)
  var last_run_at = User.getProperty(name)
  if (!last_run_at) {
    return true
  }

  var minutes = (Date.now() - last_run_at) / 1000 / 60

  var minutes_in_day = 24 * 60 * period
  var next = minutes_in_day - minutes
  //var wait_daily = Math.floor
  var wait_minutes = Math.floor(next)
  var seconds = Math.floor((next - wait_minutes) * 60)
  if (minutes < minutes_in_day) {
    var bb12 = "Claimed" //"🚨 _You Cannot Collect For next :_ \n⏰ "+wait_minutes+"* Minutes *" + seconds+ " *Seconds*"
    return bb12
  }
  return true
}
if (canRun("last_run_at", 1) == "Claimed") {
} else {
  inlkey[keyboardRow].push({
    text: "🎁 Cᴏʟʟᴇᴄᴛ Dᴀɪʟʏ Bᴏɴᴜs",
    callback_data: "🎁 Daily Bonus"
  })
}
var keyboardRow = keyboardRow + 1

if (canRun("last_week_run_at", 7) == "Claimed") {
} else {
  inlkey[keyboardRow].push({
    text: "🎁 Wᴇᴇᴋʟʏ Bᴏɴᴜs",
    callback_data: "🎁 Weekly Bonus"
  })
  //var bttn = [[{title:"🎁 Collect", command:"🎁 Weekly Bonus"}]]
  //Bot.sendInlineKeyboard(bttn, "🤓 _Collect Your _*Weekly Bonus* _Now! _")
}
if (canRun("last_month_run_at", 30) == "Claimed") {
} else {
  inlkey[keyboardRow].push({
    text: "🎁 Mᴏɴᴛʜʟʏ Bᴏɴᴜs",
    callback_data: "🎁 Monthly Bonus"
  })

  //var bttn = [[{title:"🎁 Collect", command:"🎁 Monthly Bonus"}]]
  //Bot.sendInlineKeyboard(bttn, "🤓 _Collect Your _*Monthly Bonus* _Now! _")
}
if (
  canRun("last_month_run_at", 30) == "Claimed" &&
  canRun("last_week_run_at", 7) == "Claimed" &&
  canRun("last_run_at", 1) == "Claimed"
) {
  function newRun(pro) {
    var last_run_at = User.getProperty("last_run_at")
    var minutes = (Date.now() - last_run_at) / 1000 / 60

    var minutes_in_day = 24 * 60 * 1
    var next = minutes_in_day - minutes
    var wait_minutes = Math.floor(next)
    var seconds = Math.floor((next - wait_minutes) * 60)
    if (minutes < minutes_in_day) {
      if (pro == "min") {
        return wait_minutes
      } else if (pro == "sec") {
        return seconds
      }
    }
  }
  Bot.sendMessage(
    "⌛ *Yᴏᴜ ʜᴀᴠᴇ ᴄʟᴀɪᴍᴇᴅ ʏᴏᴜʀ ʙᴏɴᴜs ɴᴏᴡ *\n🚨 _Cᴏᴍᴇ ʙᴀᴄᴋ ᴀғᴛᴇʀ :_\n⏰ " +
      newRun("min") +
      " *Mɪɴᴜᴛᴇs* " +
      newRun("sec") +
      " *Sᴇᴄᴏɴᴅs*"
  )
  return
}

Api.sendMessage({
  text: " 🤓 _Cᴏʟʟᴇᴄᴛ ʏᴏᴜʀ ʙᴏɴᴜs ɴᴏᴡ ! _",
  parse_mode: "markdown",
  reply_markup: { inline_keyboard: inlkey }
})
