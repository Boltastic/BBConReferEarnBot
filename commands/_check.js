/*CMD
  command: /check
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

if (content) {
  const { status, is_joined } = JSON.parse(content);

  if (status === "false") {
    return Bot.sendMessage("*Please make the bot an admin on your All channels*");
  }

  if (is_joined) {
    Bot.sendMessage("Thank You For Join Our Channels!");
    Bot.runCommand("/mainmenu")
  } else {
    Bot.sendMessage("*⚠️ You need to join all channels To Use Our Bot.*");
  }
}
