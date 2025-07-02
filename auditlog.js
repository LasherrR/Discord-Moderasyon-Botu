const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "auditlog",
  description: "Audit log kanalı",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` olmalısın.');
    const kanal = message.mentions.channels.first();
    if (!kanal) return message.reply('Bir kanal etiketle!');
    message.client.auditLog = message.client.auditLog || {};
    message.client.auditLog[message.guild.id] = kanal.id;
    message.reply(`📋 Audit log kanalı <#${kanal.id}> olarak ayarlandı!`);
  }
};

// index.js dosyasına eklenmeli:
// Olaylar yakalanıp bu kanala gönderilmeli. 