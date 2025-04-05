/*CMD
  command: /setref
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

if (user.telegramid == adm) {
  Api.editMessageText({
    message_id: aa,
    text: "<b>💸 Send Refer Amount That You Want To Set</>",
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [[{ text: "⬅️ Return", callback_data: "/admin" }]]
    }
  })
  Bot.runCommand("/setref#2")
}

