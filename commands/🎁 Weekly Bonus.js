/*CMD
  command: 🎁 Weekly Bonus
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

let bal = Libs.ResourcesLib.userRes("balance")
var bonus = "0.2"


function canRun(){
var last_run_at = User.getProperty("last_week_run_at");
if(!last_run_at){ return true }

var minutes = (Date.now() - last_run_at) /1000/60;

var minutes_in_day = 24 * 60 * 7
var next = minutes_in_day - minutes
//var wait_daily = Math.floor
var wait_minutes = Math.floor(next)
var seconds = Math.floor((next - wait_minutes) * 60)
if (minutes < minutes_in_day) {
var bb12 = "🚨 _Yᴏᴜ ᴄᴀɴɴᴏᴛ ᴄᴏʟʟᴇᴄᴛ ғᴏʀ ɴᴇxᴛ :_ \n⏰ "+wait_minutes+"* Mɪɴᴜᴛᴇs *" 
+ seconds+ " *Sᴇᴄᴏɴᴅs*" 

Bot.sendMessage(bb12)


return
}
return true;
}

if(!canRun()){ return }
User.setProperty("last_week_run_at", Date.now(), "integer");
bal.add(+bonus)
var bn1 = "*🎉 Wᴇᴇᴋʟʏ Bᴏɴᴜs Cʟᴀɪᴍᴇᴅ ! \n*+"+bonus+"* INR💎*"
Bot.sendMessage(bn1)
