const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "lock",
  description: "Kanalı kilitler, mesaj gönderilemez",
  async execute(message) {
    if (!message.member.permissions.has(PermissionFlagsBits.ManageChannels)) return message.reply('Bu komutu kullanmak için `Kanalları Yönet` yetkisine sahip olmalısın.');
    const channel = message.channel;
    await channel.permissionOverwrites.edit(message.guild.roles.everyone, { SendMessages: false });
    message.reply('🔒 Kanal kilitlendi, artık mesaj gönderilemez!');
  }
}; 