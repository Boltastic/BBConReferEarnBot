/*CMD
  command: 🎁 Daily Bonus
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

/*function canRun(){
  var last_run_at = User.getProperty("last_run_at");
  if(!last_run_at){ return true }
  
  var minutes = (Date.now() - last_run_at) /1000/60;
  
 var minutes_in_day = 24 * 60
          var next = minutes_in_day - minutes
          var wait_hours = Math.floor(next / 60)
          next -= wait_hours * 24
          var wait_minutes = Math.floor(next)
          var seconds = Math.floor((next - wait_minutes) * 60)
          if (minutes < minutes_in_day) {
   Bot.sendMessage("*🚨 You Cannot Collect For next:*\n⏰_ "+wait_minutes+" Minutes " 
 + seconds+ " Seconds_" );
   return
 }
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_at", Date.now(), "integer");

let balance = Libs.ResourcesLib.userRes("balance")
balance.add(0.05)
Bot.sendMessage(
  "*🎁 Congratulations , You've Received* 0.05 BP💎!")
  */
  
  
  
  
let bal = Libs.ResourcesLib.userRes("balance")
var bonus = "0.1"


function canRun(){
var last_run_at = User.getProperty("last_run_at");
if(!last_run_at){ return true }

var minutes = (Date.now() - last_run_at) /1000/60;

var minutes_in_day = 24 * 60
var next = minutes_in_day - minutes
var wait_minutes = Math.floor(next)
var seconds = Math.floor((next - wait_minutes) * 60)
if (minutes < minutes_in_day) {
var bb12 = "🚨 _ʏᴏᴜ ᴄᴀɴɴᴏᴛ ᴄᴏʟʟᴇᴄᴛ ʙᴇғᴏʀᴇ:_ \n⏰ "+wait_minutes+"* Mɪɴᴜᴛᴇs *" 
+ seconds+ " *Sᴇᴄᴏɴᴅs*" 

Bot.sendMessage(bb12)


return
}
return true;
}

if(!canRun()){ return }
User.setProperty("last_run_at", Date.now(), "integer");
bal.add(+bonus)
var bn1 = "*🎉 ʏᴏᴜ ʜᴀᴠᴇ ᴇᴀʀɴ *+"+bonus+"* INR💎*"
Bot.sendMessage(bn1)
