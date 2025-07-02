const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "yardım",
  description: "Tüm komutları listeler",
  async execute(message) {
    const embed = new EmbedBuilder()
      .setColor('#4A90E2')
      .setAuthor({
        name: 'Neva Development Bot',
        iconURL: message.client.user.displayAvatarURL({ dynamic: true })
      })
      .setTitle('📚 Komut Kategorileri')
      .setDescription('Aşağıdaki kategorilerde **80+ komut** bulunmaktadır.')
      .setTimestamp()
      .setFooter({
        text: `${message.author.tag} tarafından istendi`,
        iconURL: message.author.displayAvatarURL({ dynamic: true })
      });

    embed.addFields(
      { name: '🛡️ Temel Moderasyon', value: '`!ban` `!kick` `!mute` `!jail` `!warn` `!timeout`', inline: true },
      { name: '🔄 Geri Alma', value: '`!unban` `!unmute` `!unjail` `!clearwarnings` `!unshadowban`', inline: true },
      { name: '🛡️ Gelişmiş', value: '`!shadowban` `!banwave` `!massunjail` `!massmove`', inline: true },
      { name: '🔧 Yönetim', value: '`!temizle` `!purge` `!purgeuser` `!lock` `!unlock` `!nuke`', inline: true },
      { name: '🛡️ Koruma Sistemleri', value: '`!antispam` `!antilink` `!antibot` `!antiraid` `!antitoken`', inline: true },
      { name: '🛡️ Ek Koruma', value: '`!antimention` `!antighostping` `!antialt` `!capslock-engel`', inline: true },
      { name: '📊 İstatistik & Analiz', value: '`!modstat` `!aktiflik` `!haftalikrapor` `!modleaderboard`', inline: true },
      { name: '📊 Güvenlik Analizi', value: '`!guvenlikanaliz` `!risk-analiz` `!davranisanaliz` `!trustscore`', inline: true },
      { name: '⚙️ Ayarlar & Sistemler', value: '`!modlog` `!otorol` `!dogrulama` `!ticket` `!welcome-set`', inline: true },
      { name: '🔍 Bilgi & Detaylar', value: '`!kullanici-bilgi` `!serverinfo` `!ping` `!whois` `!uptime`', inline: true },
      { name: '🎯 Rol & Kanal Yönetimi', value: '`!addrole` `!removerole` `!createrole` `!deleterole` `!rolkoruma`', inline: true },
      { name: '📝 Log & Takip Sistemleri', value: '`!joinlogs` `!leavelogs` `!auditlog` `!statlog` `!otorol-log`', inline: true },
      { name: '🎉 Welcome/Leave', value: '`!welcome-log` `!leave-log` `!welcome-test` `!leave-test`', inline: true },
      { name: '🛡️ Sistem & Kanal Koruması', value: '`!sistem-koruma` `!kanalkoruma` `!akillifiltre` `!isimfiltresi`', inline: true },
      { name: '🔧 Kanal Yönetimi', value: '`!kanalduzenle` `!kanalkopyala` `!kanaltasi` `!kanalkarantina`', inline: true },
      { name: '📋 Listeler & Raporlar', value: '`!banlist` `!jailist` `!mutelist` `!warnings` `!watchlist`', inline: true },
      { name: '🎮 Özel & Otomatik Sistemler', value: '`!ticket` `!report` `!suggest` `!note` `!track`', inline: true },
      { name: '🔄 Otomatik Sistemler', value: '`!otoclean` `!oto-kurtar` `!autobanword` `!autobaninivite`', inline: true },
      { name: '📱 Mesaj & Davet Sistemleri', value: '`!snipe` `!editsnipe` `!duyuru` `!mesajrapor`', inline: true },
      { name: '🎯 Davet & Puan Takibi', value: '`!davet-takip` `!davetlimiti` `!etkinlikkatilim`', inline: true },
      { name: '📊 Puan & Aktiflik Sistemleri', value: '`!cezapuan` `!puantransfer` `!voiceaktiflik` `!topaktiflik`', inline: true },
      { name: '🛡️ Mod & Filtre Sistemleri', value: '`!acilmod` `!yavasmod` `!slowmode` `!reklam-engel` `!link-engel`', inline: true },
      { name: '📋 Geçmiş & Detaylı Bilgi', value: '`!history` `!audit` `!dashboard` `!register`', inline: true },
      { name: '🔍 Detaylı Bilgi & Yardım', value: '`!avatar` `!roleinfo` `!channelinfo` `!say` `!sunucu-bilgi` `!yardım` `!modyardim`', inline: true }
    );
    
    embed.addFields({
      name: '📖 Detaylı Bilgi',
      value: '**Moderasyon komutları:** `!modyardim`\n**Welcome test:** `!welcome-test`\n**Leave test:** `!leave-test`\n**Prefix:** `!`\n**Toplam:** 80+ komut',
      inline: false
    });

    message.reply({ embeds: [embed] });
  }
}; 