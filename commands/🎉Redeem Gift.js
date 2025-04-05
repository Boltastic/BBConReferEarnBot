/*CMD
  command: 🎉Redeem Gift
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

Bot.sendMessage("🎁 *Enter the gift code you want to redeem:*", {
  parse_mode: "Markdown"
});
Bot.runCommand("/redeem#2");

