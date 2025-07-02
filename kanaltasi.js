const { PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: 'kanaltasi',
    description: 'Kanalı başka kategoriye taşır',
    async execute(message, args) {
        if (!message.member.permissions.has(PermissionFlagsBits.ManageChannels)) return message.reply('Bu komutu kullanmak için `Kanalları Yönet` yetkisine sahip olmalısın.');
        const channel = message.mentions.channels.first() || message.channel;
        const categoryName = args[1];
        if (!categoryName) return message.reply('Taşınacak kategori adını belirt!');
        try {
            const category = message.guild.channels.cache.find(c => c.type === 4 && c.name.toLowerCase().includes(categoryName.toLowerCase()));
            if (!category) return message.reply('Belirtilen kategori bulunamadı!');
            await channel.setParent(category.id);
            message.reply(`✅ ${channel.name} kanalı ${category.name} kategorisine taşındı!`);
        } catch (error) {
            message.reply('❌ Kanal taşınırken hata oluştu!');
        }
    }
}; 