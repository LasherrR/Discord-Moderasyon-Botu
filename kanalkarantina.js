const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "kanalkarantina",
  description: "Kanalı karantinaya alır",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) {
      return message.reply('Bu komutu kullanmak için `Yönetici` olmalısın.');
    }
    const channel = message.mentions.channels.first() || message.channel;
    try {
      await channel.permissionOverwrites.edit(message.guild.roles.everyone, { ViewChannel: false });
      message.reply(`🔒 ${channel.name} kanalı karantinaya alındı!`);
    } catch (error) {
      message.reply('❌ Kanal karantinaya alınırken hata oluştu!');
    }
  }
}; 