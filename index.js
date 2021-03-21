/**
 * @author WhosGotFrost
 * @desc Moderation Bot For Discord V12
 */
const Discord = require('discord.js');
const bot = new Discord.Client();
const c = require('./config.json');
const fs = require('fs');
//The Start of the Command Handler.
bot.commands = new Discord.Collection();
    const commandFolders = fs.readdirSync('./commands');
        for(const folder of commandFolders){
            const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
                for(const file of commandFiles){
                    const command = require(`./commands/${folder}/${file}`);
                        bot.commands.set(command.name, command);
            };
};
//END of command handler
bot.on('ready', () => {
    console.log('You have Successully Connected To: ' + bot.user.tag);
});
bot.on('message', message => {
    if(!message.content.startsWith(c.prefix) || message.author.bot) return;
        const args = message.content.slice(c.prefix.length).trim().split(/ +/);
            const cmd = args.shift().toLowerCase();
                if(!bot.commands.has(cmd)) return;
                    bot.commands.get(cmd).run(bot,message,args);
});
bot.on('guildMemberAdd',  member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === 'welcome');
        if (!channel) return;
            return channel.send(`Welcome, ${member}!`);
});
bot.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === 'leave');    
        if(!channel) return;
                return channel.send(`${member}, has left the server!`);
});

bot.on('message', message =>{
    let discordLink = message.content;
        const discordLinkCheck = discordLink.includes('.gg');
            if(message.member.permissions.has('ADMINISTRATOR')) // If user has Admin Perms then they are allowed to send Discord Links
                return;
                    else if(discordLinkCheck) // Checks if User has Admin roles other wise it does not allow a member to send a link!
                        message.delete();
                            return message.channel.send('Hey, No Discord Links!');
});
bot.login(c.token);
