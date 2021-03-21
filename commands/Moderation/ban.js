const Discord = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'bans a user',

    run : async(bot, message, args) =>{
        if(!message.guild) return;
            const user = message.members.mentions.first() || message.guild.members.cache.get(args);
                if(!message.member.permission.has('ADMINISTRATOR')){
                    return message.channel.send("You do not have permissions!");
                }
                else if(args == ''){
                    return message.channel.send('Usage: ./ban <user>');
                }
                else if(!user){
                    return message.channel.send('Could not find user!');
                }
                else if(message.author.id == user){
                    return message.channel.send('You cannot ban yourself!');
                }
                else if(!user.kickable){
                    return message.channel.send("I can't ban this user!");
                }else{
                    user.ban(args)
                    return message.channel.send(`${user} has been banned!`);
                }
    }
}