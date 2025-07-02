const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "welcome-test",
  description: "Welcome mesajını test eder",
  async execute(message, args, client) {
    if (!message.member.permissions.has('Administrator')) return message.reply('Bu komutu kullanmak için `Yönetici` olmalısın.');
    
    if (!client.welcomeChannel) {
      return message.reply('❌ Welcome kanalı ayarlanmamış! `!welcome-set #kanal` kullanın.');
    }

    const welcomeChannel = message.guild.channels.cache.get(client.welcomeChannel);
    if (!welcomeChannel) {
      return message.reply('❌ Welcome kanalı bulunamadı! Tekrar ayarlayın.');
    }

    const welcomeEmbed = new EmbedBuilder()
      .setColor('#00ff00')
      .setAuthor({
        name: 'Neva Development Bot',
        iconURL: client.user.displayAvatarURL({ dynamic: true })
      })
      .setTitle('🎉 Hoş Geldin!')
      .setDescription(`${message.member} sunucumuza katıldı!`)
      .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }))
      .addFields(
        { name: '👤 Kullanıcı', value: message.member.user.tag, inline: true },
        { name: '🆔 ID', value: message.member.user.id, inline: true },
        { name: '📅 Katılım Tarihi', value: `<t:${Math.floor(Date.now() / 1000)}:F>`, inline: true }
      )
      .setFooter({
        text: `${message.guild.name}`,
        iconURL: message.guild.iconURL({ dynamic: true })
      })
      .setTimestamp();

    try {
      await welcomeChannel.send({ embeds: [welcomeEmbed] });
      message.reply('✅ Welcome mesajı başarıyla gönderildi!');
    } catch (error) {
      message.reply('❌ Welcome mesajı gönderilemedi: ' + error.message);
    }
  }
}; 