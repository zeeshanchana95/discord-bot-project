const  { Client, GatewayIntentBits }  = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("messageCreate", message => {
    if(message.author.bot) return;
    if(message.content.startsWith("create")) {
        const url = message.content.split("create")[1];
        return message.reply("content generating short id for"+ url);
    }
    message.reply({content: "Hi from Bot"})
})

client.on("interactionCreate", internaction => {
    console.log(internaction);
    internaction.reply("Pong");
})

client.login("MTE0OTUzMDgyMTg3OTkzNTAxNg.G3sFHR.gL4r8hPW3xw3b2Wd5CZy-dQGUr0HCJMReSEqOM");
