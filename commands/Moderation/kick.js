const Discord = require('discord.js');
module.exports = {
    name: 'kick',
    description: 'kicks a user!',
    run : async(bot,message, args) => {
        if(!message.guild) return;
            const user = message.mentions.members.first() || message.guild.members.cache.get(args);
                if(!message.member.permissions.has('ADMINISTRATOR')){
                    return message.channel.send("You don't have permission to use this!");
                }
                else if(args == ''){
                    return message.channel.send('Usage: ./kick <user>');
                }
                else if(!user){
                    return message.channel.send('Could not find that user!');
                }
                else if(message.author.id == user){
                    return message.channel.send('You are not able to kick yourself!');
                }
                else if(!user.kickable){
                        return message.channel.send('I am not able to kick this user!');
                }else{
                    user.kick(args);
                    return message.channel.send(`${user} has been kicked!`);
                }
            }
}