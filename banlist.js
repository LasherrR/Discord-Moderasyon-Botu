const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "banlist",
  description: "Yasaklı kullanıcıları listeler",
  async execute(message) {
    if (!message.member.permissions.has(PermissionFlagsBits.BanMembers)) return message.reply('Bu komutu kullanmak için `Üyeleri Yasakla` yetkisine sahip olmalısın.');
    const bans = await message.guild.bans.fetch();
    if (!bans.size) return message.reply('Sunucuda yasaklı kullanıcı yok!');
    const list = bans.map(ban => ban.user.tag).join(', ');
    message.reply(`⛔ **Yasaklı Kullanıcılar:**\n${list}`);
  }
}; 