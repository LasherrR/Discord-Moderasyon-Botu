const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "davetlimiti",
  description: "Davet limitini ayarlar",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` olmalısın.');
    const limit = parseInt(args[0]);
    if (isNaN(limit) || limit < 1) return message.reply('Geçerli bir limit belirt!');
    message.client.davetLimiti = message.client.davetLimiti || {};
    message.client.davetLimiti[message.guild.id] = limit;
    message.reply(`📨 Davet limiti ${limit} olarak ayarlandı!`);
  }
}; 