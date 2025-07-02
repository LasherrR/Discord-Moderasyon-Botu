module.exports = {
  name: 'note',
  description: 'Kullanıcıya not ekler/gösterir',
  async execute(message, args) {
    const member = message.mentions.members.first();
    if (!member) return message.reply('Bir kullanıcı etiketle!');
    message.client.notlar = message.client.notlar || {};
    if (args[1]) {
      message.client.notlar[member.id] = args.slice(1).join(' ');
      message.reply(`📝 ${member.user.tag} için not kaydedildi!`);
    } else {
      const not = message.client.notlar[member.id];
      if (!not) return message.reply('Bu kullanıcı için not yok!');
      message.reply(`📝 ${member.user.tag} notu: ${not}`);
    }
  }
}; 