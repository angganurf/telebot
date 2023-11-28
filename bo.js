const TelegramBot = require("node-telegram-bot-api");

// replace the value below with the Telegram token you receive from @BotFather
const token = "6738344485:AAERNjiTZTkApcGaS1JWfqw3hj_1mMRke4s";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(
    chatId,
    "Salam Kaka, Serius mau VCS sama aku. Tapi jangan disini, biar saling privasi ke meet Pribadi aku, biar kita bisa tau tentang semuanya, siapa tau kamu jodohku 🤗. \n *_Caranya Klik Link biru dibawah ini untuk Video Call sama aku 👇_* \n _*Klik*_ 👉 https://www.toprevenuegate.com/e80xdg4ka?key=2578c18b07ce2bf1a34ef16ca4defb1f"
  );
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Welcome", {
    reply_markup: {
      keyboard: [
        ["Klik ini klao kamu mau Chat", "Second sample"],
        ["Keyboard"],
        ["I'm robot"],
      ],
    },
  });
});
