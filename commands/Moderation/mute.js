const Discord = require('discord.js');

module.exports = {
    name: 'mute',

    run : async(bot,message,args) => {
        const mutedRole = message.guild.roles.cache.find(m => m.name === 'Muted');
        const mutedRoleCheck = message.member.roles.cache.some(m => m.name === 'Muted')
        if(args == '')
            return message.channel.send(`Usage: ./mute <user>`)
                if(!message.member.permissions.has('ADMINISTRATOR'))
                    return message.channel.send("You don't have permission to use this!")
                    if(!mutedRole)
                        return message.channel.send('Could not find a **Muted** role!');
                            const user = message.mentions.members.first()
                            if(message.author.id == user)
                                return message.channel.send('You are not able to Mute yourself!')
                                    user.roles.add(mutedRole);
                                    if(mutedRoleCheck == true)
                                        return message.channel.send(`${user} is already muted!`)
                                            message.channel.send(`Successfully Muted ${user}`)
                                                setTimeout(() => {
                                                    user.roles.remove(mutedRole); //This removes the role
                                                }, 300000);
        //find a way to find users roles.
    }
}