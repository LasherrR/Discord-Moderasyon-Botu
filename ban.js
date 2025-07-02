const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "ban",
  description: "Kullanıcıyı sunucudan yasaklar",
  async execute(message, args, client) {
    if (!message.member.permissions.has(PermissionFlagsBits.BanMembers)) return message.reply('Bu komutu kullanmak için `Üyeleri Yasakla` yetkisine sahip olmalısın.');
    client.settings = client.settings || {};
    const subcmd = args[0];
    if (subcmd === 'log') {
      const kanal = message.mentions.channels.first();
      if (!kanal) return message.reply('Bir kanal etiketle!');
      client.settings.banLog = kanal.id;
      message.channel.send(`Ban log kanalı <#${kanal.id}> olarak ayarlandı.`);
    } else {
      const member = message.mentions.members.first();
      if (!member) return message.reply('Bir kullanıcı etiketle!');
      const reason = args.slice(1).join(' ') || 'Sebep belirtilmedi';
      if (!member.bannable) return message.reply('Bu kullanıcıyı yasaklayamıyorum!');
      await member.ban({ reason });
      message.reply(`⛔ ${member.user.tag} sunucudan yasaklandı! Sebep: ${reason}`);
      if (client.settings?.banLog) {
        const logChannel = message.guild.channels.cache.get(client.settings.banLog);
        if (logChannel) logChannel.send(`${member.user.tag} banlandı. Sebep: ${reason}`);
      }
    }
  }
}; 