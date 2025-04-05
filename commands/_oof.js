/*CMD
  command: /oof
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

Api.editMessageText({
  message_id: User.getProperty("aa"),
  text: "<b>🚀 Management Mode is Currently: Off</b>",
  parse_mode: "html",
  reply_markup: {
    inline_keyboard: [
      [
        { text: "✅ Turn On", callback_data: "/oon" },
        { text: "🛑 Turn OFF", callback_data: "/oof" }
      ],
      [{ text: "↩️ Back", callback_data: "/admin" }]
    ]
  }
})

Bot.setProperty("maintenance", "off", "string")
return

