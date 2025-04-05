/*CMD
  command: 💰 Balance
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /balance
  group: 
CMD*/

const level = Libs.ResourcesLib.userRes("level");
let balance = Libs.ResourcesLib.userRes("balance");
var phpsbuy = Libs.ResourcesLib.userRes("phpsbuy");
let acc = "Free";
let lib = Libs.ReferralLib;
let reflist = lib.currentUser.refList;
reflist = lib.currentUser.refList.get();
let tgid = user.telegramid;

Api.sendPhoto({
  photo: "https://t.me/ghgfhkkj/343",
  caption:
    "👤 *Name:* " +
    user.first_name +
    "\n*🆔 User ID:* " +
    tgid +
    "\n\n*💵 Balance:* " +
    balance.value() +
    " INR\n👨‍👦‍👦 *Total Referral:* " +
    Libs.ReferralLib.getRefCount() +
    " *User*", 
  parse_mode: "Markdown",
  disable_web_page_preview: true
});
