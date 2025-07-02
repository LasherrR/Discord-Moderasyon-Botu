const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "leave-test",
  description: "Leave mesajını test eder",
  async execute(message, args, client) {
    if (!message.member.permissions.has('Administrator')) return message.reply('Bu komutu kullanmak için `Yönetici` olmalısın.');
    
    if (!client.farewellChannel) {
      return message.reply('❌ Leave kanalı ayarlanmamış! `!leave-log #kanal` kullanın.');
    }

    const farewellChannel = message.guild.channels.cache.get(client.farewellChannel);
    if (!farewellChannel) {
      return message.reply('❌ Leave kanalı bulunamadı! Tekrar ayarlayın.');
    }

    const farewellEmbed = new EmbedBuilder()
      .setColor('#ff0000')
      .setAuthor({
        name: 'Neva Development Bot',
        iconURL: client.user.displayAvatarURL({ dynamic: true })
      })
      .setTitle('👋 Görüşürüz!')
      .setDescription(`${message.member.user.tag} sunucumuzdan ayrıldı.`)
      .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }))
      .addFields(
        { name: '👤 Kullanıcı', value: message.member.user.tag, inline: true },
        { name: '🆔 ID', value: message.member.user.id, inline: true },
        { name: '📅 Ayrılış Tarihi', value: `<t:${Math.floor(Date.now() / 1000)}:F>`, inline: true }
      )
      .setFooter({
        text: `${message.guild.name}`,
        iconURL: message.guild.iconURL({ dynamic: true })
      })
      .setTimestamp();

    try {
      await farewellChannel.send({ embeds: [farewellEmbed] });
      message.reply('✅ Leave mesajı başarıyla gönderildi!');
    } catch (error) {
      message.reply('❌ Leave mesajı gönderilemedi: ' + error.message);
    }
  }
}; 