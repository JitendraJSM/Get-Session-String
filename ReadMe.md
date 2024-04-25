## 🔥 Telegram Session String Generator 🔥

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)](https://forthebadge.com)

## Description:

This project was created to generate session string for telegram-cli. This session string can be used to interact with telegram-cli to perform various actions such as send message, fetch updates, etc. This project uses NodeJS and dotenv to manage environment variables.

## How to use?

1. Clone this repository.
2. Install dependencies by running `npm install`.
3. Create a `.env` file in root directory of this project and add the following variables:
   - `API_ID`: Telegram API ID.
   - `API_HASH`: Telegram API Hash.
4. Set `API_ID` and `API_HASH` variables in `.env` file.
5. Run the project using `npm start` or `node index.js`.
6. Wait for the session string to be generated.
7. A log file named `log.txt` will be generated.
8. Copy the session string from `log.txt` and use it in your project.
9. To run the project continuously, use `nodemon` by running `npm start`.

Note: If you are using VS Code, you can install the `dotenv` extension to automatically load `.env` file in your editor.
