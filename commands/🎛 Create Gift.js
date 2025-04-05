/*CMD
  command: 🎛 Create Gift
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

Bot.sendMessage("🎁 *Enter the amount you want to convert into a gift code:*", {
  parse_mode: "Markdown"
});
Bot.runCommand("/creategift#2");

