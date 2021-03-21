const Discord = require('discord.js');
const p = require('../../package.json');
const os = require('os');
module.exports = {
    name: 'botinfo',
    run : async(bot, message, args) => {
        if(message.guild) return;
            const info = new Discord.MessageEmbed()
            .setTitle('Information about the Mod Bot!')
                .addField('Creator:', 'WhosGotFrost', true)
                    .addField('Coded in:', 'Node JS', true)
                        .addField('Bot Version', p.version, true)
                            .addField('Platform:', os.platform, true)
                                .addField('Model', os.cpus()[0].model, true)
                                    .setColor('#3E00FF');
                                        return message.channel.send(info);
    }
}