const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "deleterole",
  description: "Rolü siler",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.ManageRoles)) return message.reply('Bu komutu kullanmak için `Rolleri Yönet` yetkisine sahip olmalısın.');
    const role = message.mentions.roles.first();
    if (!role) return message.reply('Silinecek rolü etiketle!');
    await role.delete();
    message.reply(`✅ ${role.name} rolü silindi!`);
  }
}; 