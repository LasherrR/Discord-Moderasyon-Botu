const { PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: 'kanalkopyala',
    description: 'Kanalı kopyalar',
    async execute(message, args) {
        if (!message.member.permissions.has(PermissionFlagsBits.ManageChannels)) return message.reply('Bu komutu kullanmak için `Kanalları Yönet` yetkisine sahip olmalısın.');
        const channel = message.mentions.channels.first() || message.channel;
        const newName = args[1] || `${channel.name}-kopya`;
        try {
            const newChannel = await channel.clone({ name: newName });
            message.reply(`✅ ${channel.name} kanalı ${newChannel.name} olarak kopyalandı!`);
        } catch (error) {
            message.reply('❌ Kanal kopyalanırken hata oluştu!');
        }
    }
}; 