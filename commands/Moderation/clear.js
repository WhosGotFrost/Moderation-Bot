const Discord = require('discord.js');

module.exports = {
    name: 'clear',
    run : async(bot, message, args) => {
        if(message.guild) return;
            const amount = args.join(' ');
            if(!message.member.permissions.has('MANAGE_MESSAGES'))
                return message.channel.send("Sorry, You don't have permission to use this command!")
                    if(!amount)
                        return message.channel.send('Usage: ./clear <amount>');
                            if(amount > 100)
                                return message.channel.send('You are not able to clear more than 100 messages!');
                                    if(amount < 1)
                                        return message.channel.send('You need to delete atleast 1 message!')
                                            await message.channel.messages.fetch({limit : amount}).then(messages => {
                                                message.channel.bulkDelete(messages);
                                                    message.channel.send(`Successfully Deleted ${amount} messages!`).then(message => message.delete({timeout: 5000}));
                                    });
    }

}