const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "massmove",
  description: "Tüm kullanıcıları bir ses kanalına taşır",
  async execute(message, args, client) {
    if (!message.member.permissions.has(PermissionFlagsBits.MoveMembers)) {
      return message.reply('Bu komutu kullanmak için `Üyeleri Taşı` yetkisine sahip olmalısın.');
    }
    const targetChannel = message.mentions.channels.first();
    if (!targetChannel || targetChannel.type !== 2) {
      return message.reply('Bir ses kanalı etiketle!');
    }
    const fromChannel = message.member.voice.channel;
    if (!fromChannel) return message.reply('Önce bir ses kanalına katılmalısın!');
    let count = 0;
    for (const [id, member] of fromChannel.members) {
      await member.voice.setChannel(targetChannel);
      count++;
    }
    message.reply(`�� ${count} kullanıcı ${targetChannel.name} kanalına taşındı!`);
    if (client.settings?.massmoveLog) {
      const logChannel = message.guild.channels.cache.get(client.settings.massmoveLog);
      if (logChannel) logChannel.send(`${count} kullanıcı ${targetChannel.name} kanalına taşındı (Massmove).`);
    }
  }
}; 