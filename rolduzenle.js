const { EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: 'rolduzenle',
    description: 'Rol ayarlarını düzenler',
    async execute(message, args) {
        if (!message.member.permissions.has(PermissionFlagsBits.ManageRoles)) {
            return message.reply('❌ Bu komutu kullanmak için **Rolleri Yönet** yetkisine sahip olmalısın!');
        }

        const role = message.mentions.roles.first();
        const setting = args[1];
        const value = args.slice(2).join(' ');

        if (!role) {
            return message.reply('❌ Düzenlenecek rolü etiketlemelisin!');
        }

        if (!setting) {
            const embed = new EmbedBuilder()
                .setTitle('🔧 Rol Düzenleme')
                .setDescription('Rol ayarlarını düzenlemek için:')
                .addFields(
                    { name: '📝 İsim', value: '`!rolduzenle @rol isim <yeni_isim>`' },
                    { name: '🎨 Renk', value: '`!rolduzenle @rol renk <hex_kodu>`' },
                    { name: '📄 Açıklama', value: '`!rolduzenle @rol aciklama <açıklama>`' },
                    { name: '🔒 Gizlilik', value: '`!rolduzenle @rol gizli <açık/kapalı>`' },
                    { name: '🎭 Görünürlük', value: '`!rolduzenle @rol gorunur <açık/kapalı>`' }
                )
                .setColor('#00ff00');
            return message.reply({ embeds: [embed] });
        }

        try {
            switch (setting.toLowerCase()) {
                case 'isim':
                    await role.setName(value);
                    message.reply(`✅ Rol ismi **${value}** olarak değiştirildi!`);
                    break;
                case 'renk':
                    const color = value.startsWith('#') ? value : `#${value}`;
                    await role.setColor(color);
                    message.reply(`✅ Rol rengi güncellendi!`);
                    break;
                case 'aciklama':
                    await role.setDescription(value);
                    message.reply(`✅ Rol açıklaması güncellendi!`);
                    break;
                case 'gizli':
                    const isHoist = value.toLowerCase() === 'açık';
                    await role.setHoist(isHoist);
                    message.reply(`✅ Rol gizliliği ${isHoist ? 'açıldı' : 'kapatıldı'}!`);
                    break;
                case 'gorunur':
                    const isMentionable = value.toLowerCase() === 'açık';
                    await role.setMentionable(isMentionable);
                    message.reply(`✅ Rol görünürlüğü ${isMentionable ? 'açıldı' : 'kapatıldı'}!`);
                    break;
                default:
                    message.reply('❌ Geçersiz ayar! `!rolduzenle @rol` yazarak mevcut seçenekleri gör!');
            }
        } catch (error) {
            message.reply('❌ Rol düzenlenirken bir hata oluştu!');
        }
    }
}; 