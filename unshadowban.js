const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "unshadowban",
  description: "Shadowban kaldırır",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.BanMembers)) {
      return message.reply('Bu komutu kullanmak için `Üyeleri Yasakla` yetkisine sahip olmalısın.');
    }
    const userId = args[0];
    if (!userId) return message.reply('Kullanıcı ID belirt!');
    try {
      await message.guild.bans.remove(userId);
      message.reply(`✅ Kullanıcının shadowban'ı kaldırıldı!`);
    } catch (error) {
      message.reply('❌ Shadowban kaldırılırken hata oluştu!');
    }
  }
}; 