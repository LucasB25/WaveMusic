const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'soft',
  category: 'Filters',
  description: 'Set Soft Filter',
  args: false,
  usage: '',
  userPrams: [],
  botPrams: ['EMBED_LINKS'],
  owner: false,
  player: true,
  inVoiceChannel: true,
  sameVoiceChannel: true,
  execute: async (message, args, client, prefix) => {
<<<<<<< HEAD
    const player = client.manager.players.get(message.guild.id);
=======
    const player = message.client.manager.players.get(message.guild.id);
>>>>>>> 605861bc95edd98cc606a5edc12ec49253982074

    if (!player.current) {
      let thing = new MessageEmbed().setColor('RED').setDescription('There is no music playing.');
      return message.reply({ embeds: [thing] });
    }
<<<<<<< HEAD

    const emojiequalizer = client.emoji.filter;
    await player.player.setFilters({
      op: 'filters',
      guildId: message.guild.id,
      equalizer: [
        { band: 0, gain: 0 },
        { band: 1, gain: 0 },
        { band: 2, gain: 0 },
        { band: 3, gain: 0 },
        { band: 4, gain: 0 },
        { band: 5, gain: 0 },
        { band: 6, gain: 0 },
        { band: 7, gain: 0 },
        { band: 8, gain: -0.25 },
        { band: 9, gain: -0.25 },
        { band: 10, gain: -0.25 },
        { band: 11, gain: -0.25 },
        { band: 12, gain: -0.25 },
        { band: 13, gain: -0.25 },
        { band: 14, gain: -0.25 },
      ],
    });
=======
    const emojiequalizer = message.client.emoji.filter;
>>>>>>> 605861bc95edd98cc606a5edc12ec49253982074

    await player.player.setFilters({});
    let thing = new MessageEmbed()
      .setColor(client.embedColor)
<<<<<<< HEAD
      .setDescription(`${emojiequalizer} Soft Mode Is Enabled`);
    return message.reply({ embeds: [thing] });
  },
};
=======
      .setDescription(`${emojiequalizer} Soft Mode Is Enabled.`);
    return message.reply({ embeds: [thing] });
  },
};
>>>>>>> 605861bc95edd98cc606a5edc12ec49253982074
