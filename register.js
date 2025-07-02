const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "register",
  description: "Kullanıcı kayıt sistemi",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.ManageRoles)) return message.reply('Bu komutu kullanmak için `Rolleri Yönet` yetkisine sahip olmalısın.');
    const member = message.mentions.members.first();
    if (!member) return message.reply('Bir kullanıcı etiketle!');
    const role = message.guild.roles.cache.find(r => r.name.toLowerCase().includes('kayıtlı'));
    if (!role) return message.reply('Kayıtlı rolü bulunamadı!');
    await member.roles.add(role);
    message.reply(`✅ ${member.user.tag} kayıt edildi!`);
  }
}; 