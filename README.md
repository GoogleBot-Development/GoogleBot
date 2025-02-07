<div align="center">
<h1>GoogleBot</h1>
</a>
GoogleBot is a multipurpose Discord bot that offers a wide range of fun commands to use on Discord, ranging from a simple economy system to meme generators and Morse code translators.
<br />

</p>
</div>
The aim of this project was to introduce myself to JavaScript and Discord.js in a CI/CD project format, which I continuted to keep up with for 2-3 years.

## Tech Stack
### Back-end:
- [Discord.js](https://discord.js.org/) - Used to build the entire bot, from all its commands to implementing sharding, which split the bot's process across multiple servers
- [MongoDB](https://www.mongodb.com/) - Used to store data for the economy system.

## Local Development
### 1. Clone the project
1. Clone the repository into your system and install the dependencies.
```bash
$ git clone https://github.com/GoogleBot-Development/GoogleBot.git
$ cd GoogleBot
$ npm install # Or yarn install
```

### 3. Configuration file setup
Each token in the `config.json` file is pretty self-explanatory. Fill them in according to your needs.

### 4. Start the bot process
1. Turn the bot on.
```bash
$ npm run dev
```

## License
This project is licensed under the [MIT License](https://opensource.org/license/mit) - see the [License](https://github.com/GoogleBot-Development/GoogleBot/blob/master/LICENSE) file for more details
