module.exports = {
  name: 'watchlist',
  description: 'İzlenen kullanıcıları listeler',
  async execute(message) {
    message.client.watchlist = message.client.watchlist || [];
    if (!message.client.watchlist.length) return message.reply('İzlenen kullanıcı yok!');
    const list = message.client.watchlist.map(id => `<@${id}>`).join(', ');
    message.reply(`�� **İzlenen Kullanıcılar:**\n${list}`);
  }
}; 