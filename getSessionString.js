require("dotenv").config();
const fs = require("fs");
const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const input = require("input"); // npm i input

const apiId = process.env.API_ID * 1; // Replace with your actual API ID
const apiHash = process.env.API_HASH; // Replace with your actual API hash
const stringSession = new StringSession(""); // Fill this later with the value from session.save()

const appendText = (text) => {
  fs.appendFile(`${__dirname}/log.txt`, `${text}\n`, () => {});
};

appendText("Starting session generation...");

const getSessionString = async () => {
  console.log("Loading interactive example...");
  const client = new TelegramClient(stringSession, apiId, apiHash, {
    connectionRetries: 5,
  });
  await client.start({
    phoneNumber: async () => await input.text("Please enter your number: "),
    password: async () => await input.text("Please enter your password: "),
    phoneCode: async () =>
      await input.text("Please enter the code you received: "),
    onError: (err) => console.log(err),
  });

  const sessionString = client.session.save();

  appendText(`--------------\n${sessionString}\n--------------`);

  console.log("You should now be connected & Your Session String is as 👇👇");
  console.log(sessionString);

  await client.sendMessage("me", {
    message: "Hello! Your Session String Generated.",
  });
  await client.disconnect();
  return;
};

getSessionString();
