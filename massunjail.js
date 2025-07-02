const { PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: 'massunjail',
    description: 'Tüm jail rolleri topluca kaldırılır',
    async execute(message, args) {
        if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` olmalısın.');
        const jailRole = message.guild.roles.cache.find(r => r.name.toLowerCase().includes('jail'));
        if (!jailRole) return message.reply('Jail rolü bulunamadı!');
        let count = 0;
        for (const member of message.guild.members.cache.values()) {
            if (member.roles.cache.has(jailRole.id)) {
                await member.roles.remove(jailRole);
                count++;
            }
        }
        message.reply(`🔓 ${count} kullanıcının jaili kaldırıldı!`);
    }
}; 