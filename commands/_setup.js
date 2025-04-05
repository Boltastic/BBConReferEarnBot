/*CMD
  command: /setup
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

var panel = {
  title: "Admin Settings",
  description: "Manage bot administrators",
  index: 0,
  icon: "settings",
  button_title: "Save",
  fields: [
    {
      name: "adminID",
      title: "Admin Telegram ID",
      description: "Enter the Telegram ID of the admin",
      type: "string",
      placeholder: "e.g., 123456789",
    }
  ]
};

AdminPanel.setPanel({
  panel_name: "AdminSettings",
  data: panel
});

