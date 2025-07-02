const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "clearwarnings",
  description: "Kullanıcının tüm uyarılarını temizler",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.KickMembers)) return message.reply('Bu komutu kullanmak için `Üyeleri At` yetkisine sahip olmalısın.');
    const member = message.mentions.members.first();
    if (!member) return message.reply('Bir kullanıcı etiketle!');
    message.client.uyarilar = message.client.uyarilar || {};
    message.client.uyarilar[member.id] = [];
    message.reply(`🧹 ${member.user.tag} kullanıcısının tüm uyarıları temizlendi!`);
  }
}; 