'use strict';

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

var responseMessage

// Bot ready
client.once('ready', () => {
    console.log(`Bot ready`);

});

// Bot on message
client.on('message', message => {    
    // Converting message to lower case
    var msgLowerCase = message.content.toLowerCase();
    
    //  I love you thing
    const iLoveYou = msgLowerCase.includes("i") && msgLowerCase.includes("love") || msgLowerCase.includes("luv") && msgLowerCase.includes("you") || msgLowerCase.includes("u");
    
    if(iLoveYou && msgLowerCase.includes("botNameHere")) {
        if(message.author.bot) return;
        console.log(`Message "${message.content}" sent by ${message.author.tag} in server "${message.guild}" on #${message.channel.name}`);
        responseMessage = `I love you too, ${message.author}.`
        message.channel.send(responseMessage);
        console.log(`Responded to message with "${responseMessage}"`);

    }

    if(iLoveYou && message.channel.type === 'dm') {
        if(message.author.bot) return;
        console.log(`Direct message received`);
        responseMessage = `I love you too`;
        message.channel.send(responseMessage);
        console.log(`Responded to direct message`);
    }

    // Morning
    const morning = msgLowerCase.includes("gm") || msgLowerCase.includes("morning");

    if(morning && message.channel.type === 'dm') {
        if(message.author.bot) return;
        console.log(`Direct message received`);
        responseMessage = `Good morning`;
        message.channel.send(responseMessage);
        console.log(`Responded to direct message`);
    }

    // Night
    const night = msgLowerCase.includes("gn") || msgLowerCase.includes("night");

    if(night && message.channel.type === 'dm') {
        if(message.author.bot) return;
        console.log(`Direct message received`);
        responseMessage = `Good night`;
        message.channel.send(responseMessage);
        console.log(`Responded to direct message`);
    }

});

// Login token, do not leak to anyone and keep is on the lowest line all the time
client.login('tokenHere');