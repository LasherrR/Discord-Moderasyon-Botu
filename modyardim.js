const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "modyardim",
  description: "Moderasyon komutlarını listeler",
  async execute(message) {
    const embed = new EmbedBuilder()
      .setColor('#ff6b6b')
      .setAuthor({
        name: 'Neva Development Bot',
        iconURL: message.client.user.displayAvatarURL({ dynamic: true })
      })
      .setTitle('🛡️ Moderasyon Komutları')
      .setDescription('Aşağıda moderasyon komutları listelenmiştir.')
      .setTimestamp()
      .setFooter({
        text: `${message.author.tag} tarafından istendi`,
        iconURL: message.author.displayAvatarURL({ dynamic: true })
      });

    embed.addFields(
      { name: '🛡️ Temel', value: '`!ban` `!kick` `!mute` `!jail` `!warn`', inline: true },
      { name: '🔄 Geri Alma', value: '`!unban` `!unmute` `!unjail` `!clearwarnings`', inline: true },
      { name: '🔧 Yönetim', value: '`!temizle` `!purge` `!lock` `!unlock` `!nuke`', inline: true },
      { name: '📊 Analiz', value: '`!modstat` `!cezapuan` `!history` `!warnings`', inline: true },
      { name: '🛡️ Gelişmiş', value: '`!shadowban` `!banwave` `!massunjail`', inline: true },
      { name: '🛡️ Koruma', value: '`!antispam` `!antilink` `!antibot` `!antiraid`', inline: true }
    );
    
    embed.addFields({
      name: '📖 Detaylı Bilgi',
      value: '**Tüm komutlar:** `!yardim`\n**Prefix:** `!`',
      inline: false
    });

    message.reply({ embeds: [embed] });
  }
}; 