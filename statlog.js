const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "statlog",
  description: "Stat log kanalını ayarlar",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` olmalısın.');
    const kanal = message.mentions.channels.first();
    if (!kanal) return message.reply('Bir kanal etiketle!');
    message.client.statLog = message.client.statLog || {};
    message.client.statLog[message.guild.id] = kanal.id;
    message.reply(`📊 Stat log kanalı <#${kanal.id}> olarak ayarlandı!`);
  }
}; 