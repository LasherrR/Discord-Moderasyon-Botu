module.exports = {
  name: "etkinlikkatilim",
  description: "Etkinlik katılım takibi",
  async execute(message, args, client) {
    if (!message.member.permissions.has('ManageEvents')) return message.reply('Bu komutu kullanmak için `Etkinlikleri Yönet` yetkisine sahip olmalısın.');
    client.settings = client.settings || {};
    const subcmd = args[0];
    if (subcmd === 'log') {
      const kanal = message.mentions.channels.first();
      if (!kanal) return message.reply('Bir kanal etiketle!');
      client.settings.etkinlikKatilimLog = kanal.id;
      message.channel.send(`Etkinlik katılım log kanalı <#${kanal.id}> olarak ayarlandı.`);
    } else {
      message.reply('Kullanım: !etkinlikkatilim log #kanal');
    }
  }
}; 