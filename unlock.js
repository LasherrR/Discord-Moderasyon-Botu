const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "unlock",
  description: "Kanalın kilidini açar",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.ManageChannels)) return message.reply('Bu komutu kullanmak için `Kanalları Yönet` yetkisine sahip olmalısın.');
    await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, { SendMessages: null });
    message.reply('🔓 Kanal kilidi açıldı!');
  }
}; 