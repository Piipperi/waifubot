# WaifuBot
Code template for a simple Discord bot that can respond to simple messages

# How to use this
Copy the needed code from main.js to your own bots code. If you're very new to Discord bots and discord.js, I'd highly recommend watching some tutorials on how to set up your own bot (I used this tutorial: https://youtu.be/j_sD9udZnCk) and probably checking some basic Javascript tutorials too, if you've never done coding before. I will try my best to explain how some of the code works later in this document, but if you encounter issues, just file an issue report and I will try to do my best to fix the issue (unless the code has been changed a lot from the original)

# FAQ

Q: Is this code free to use?
A: Yes it is.

Q: Who made this?
A: I, Piipperi did by copying random code all over the internet

Q: What if I encounter an issue?
A: If it's a fatal crash, I'd highly suggest seeing if you can fix it yourself by looking at the console and checking what's causing the error. If it's not a user fault, you should file an issue report about it. For other issues, you can also file issue report about them, but if they're not something I can really test from my end, I may not be able to help much.

# How the code works
I'm not really a pro in Javascript (actually, I'm pretty much a total noob) but I'll try to explain some of the code anyways.

The first bit of my own code is `var responseMessage`, this is just declaring a variable called responseMessage which is used later on in the code with console logging and more importantly, responding to those messages.

`console.log()` as you probably know already, this just logs stuff you want to. If something related to messages, variables, etc. isn't working, `console.log()` is a great way to check that stuff by just printing out (for example) a variable when needed `console.log(thisIsAVariable);`.

I should probably mention at this point that when you're trying to use variables inside a string for example, you need to make sure you're using *backtick* (also known as *left quote*) instead of normal quotes.

Second variable we're declaring is `msgLowerCase`, which is just an all lowercase version of the received message. When the bot receives a message, it converts the message to lowercase with the `message.content.toLowerCase`. This is almost an essential thing to have as pretty much all commands in discord.js and Javascript are case specific. If you made the bot respond to a good morning message by not using this variable (aka just by using `if(message.content === good morning)`), the bot wouldn't respond to something like Good morning with an uppercase G. This is because, as said earlier, Javascript is case specific when it comes to stuff like this, but the `.toLowerCase` thankfully is an easy way to override that.

Next up, is the constant of `iLoveYou`, which is just a shortcut that basically checks for "i love you" message by using `.include`. What include allows us to do is check for stuff in a string, and by combining multiple includes with && and || we can make it check for phrases with no matter what style they've been sent in. Currently, the code has been set up to look for messages with 'i', 'love' or 'luv' and 'you' or 'u', basically meaning if you send "I luv you" to your bot, it responds to that with (by default) "I love you too". You can change the includes or add more, just remember that && means basically "and", and || means basically "or".

Oh, and if you're wondering what's the difference between var (variable) and const (constant), var is a value you can change throught out the code, and const is more like a template of a sort that cannot be changed. (tbh im not even sure myself how they work which is why there may be random vars and consts in the code)

The first `if` after the iLoveYou const is something that is ment to work in servers by making sure the message includes the bot's name (or whatever you want to have your bot to be called). Just replace the botNameHere with whatever you want. If your intent is not to have this to work on a server, you can just remove the block, or you can write `//` in front of all the lines of this block, so these are ignored (if you didn't know, anything written after a `//` on a line is ignored, which is good for commenting stuff). 

Next `if` is also for receiving and sending those iLoveYou messages, but this block also checks if the message has been sent in a channel type called 'dm', and as you may have guessed it, if it's not a dm it'll ignore the message. This is the next important thing after the msgLowerCase variable, as without this the bot would respond to iLoveYou messages sent anywhere.

The next two sections of the code are pretty much the same thing, which are the "Morning" and "Night" sections. I will only talk about how the morning section works, because the night is pretty much just a copy-paste of the morning with just changes in what messages it will respond to and what it will respond to those messages with.

First, constant of `morning`, checks if the message received includes either "morning" or "gm" (gm is a short of good morning, if you didn't know).

Then, `if(morning && message.channel.type === 'dm')`, checks first if it passes those string checks, and then checks is the message sent via direct messages. And if both of these are true, it'll send the "Good morning" message.

You can (and should) experiment with the responses and includes. Also, if you're wondering why there are all those `console.log`s, they're for debugging and good if you're making the bot available for many people. By default, I've made that the dms are "private" and wont be logged with details on what's being sent.
