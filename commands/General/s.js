const Discord = require('discord.js');

module.exports = {
    name: 's', 
    run : async(bot,message,args) => {
        if(!message.guild) return;
        let newResults = '';
        console.log(bot.guilds)
        bot.guilds.cache.forEach(servers => {
                const name = servers.name;
                const id = servers.id;
                const memberCount = servers.memberCount
                newResults += 'Name: ' + name + ' || ' + 'ID: ' + id + ' || ' + 'Members: ' + memberCount + '\n';
            });
            const server = new Discord.MessageEmbed()
            .setTitle("Servers i'm in!")
            .setDescription(`\`${newResults}\``)
            .setFooter('Shii Imagine!')
            .setColor('#3E00FF')
            .setTimestamp();
            return message.channel.send(server)
    }
}