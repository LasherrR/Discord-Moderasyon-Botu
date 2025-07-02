const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "shadowban",
  description: "Kullanıcıyı gizlice yasaklar",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.BanMembers)) return message.reply('Bu komutu kullanmak için `Üyeleri Yasakla` yetkisine sahip olmalısın.');
    const member = message.mentions.members.first();
    if (!member) return message.reply('Bir kullanıcı etiketle!');
    if (!member.bannable) return message.reply('Bu kullanıcıyı yasaklayamıyorum!');
    try {
      await member.ban({ reason: 'Shadowban' });
      message.reply(`👤 ${member.user.tag} kullanıcısı gizlice yasaklandı!`);
    } catch (error) {
      message.reply('❌ Shadowban uygulanırken hata oluştu!');
    }
  }
}; 