const { EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: 'kanalduzenle',
    description: 'Kanal ayarlarını düzenler',
    async execute(message, args) {
        if (!message.member.permissions.has(PermissionFlagsBits.ManageChannels)) return message.reply('Bu komutu kullanmak için `Kanalları Yönet` yetkisine sahip olmalısın.');
        const channel = message.mentions.channels.first() || message.channel;
        const setting = args[1];
        const value = args.slice(2).join(' ');
        if (!setting) return message.reply('Kullanım: `!kanalduzenle @kanal isim/konu/yavasmod <değer>`');
        try {
            switch (setting.toLowerCase()) {
                case 'isim':
                    await channel.setName(value);
                    message.reply(`✅ Kanal ismi **${value}** olarak değiştirildi!`);
                    break;
                case 'konu':
                    await channel.setTopic(value);
                    message.reply(`✅ Kanal konusu güncellendi!`);
                    break;
                case 'yavasmod':
                    const seconds = parseInt(value);
                    if (isNaN(seconds) || seconds < 0 || seconds > 21600) return message.reply('0-21600 saniye arasında bir değer belirt!');
                    await channel.setRateLimitPerUser(seconds);
                    message.reply(`✅ Yavaş mod ${seconds} saniye olarak ayarlandı!`);
                    break;
                default:
                    message.reply('❌ Geçersiz ayar!');
            }
        } catch (error) {
            message.reply('❌ Kanal düzenlenirken hata oluştu!');
        }
    }
}; 