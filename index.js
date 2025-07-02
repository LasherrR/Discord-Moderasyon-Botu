const { Client, GatewayIntentBits, Collection, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const config = require('./config.json');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions
  ],
  rest: {
    timeout: 30000,
    retries: 3
  },
  ws: {
    properties: {
      browser: 'Discord iOS'
    }
  }
});

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log(`Bot aktif: ${client.user.tag}`);
  console.log(`${client.guilds.cache.size} sunucuda aktif`);
});

// Welcome Event
client.on('guildMemberAdd', async member => {
  if (client.welcomeChannel) {
    const welcomeChannel = member.guild.channels.cache.get(client.welcomeChannel);
    if (welcomeChannel) {
      const welcomeEmbed = new EmbedBuilder()
        .setColor('#00ff00')
        .setAuthor({
          name: 'Neva Development Bot',
          iconURL: client.user.displayAvatarURL({ dynamic: true })
        })
        .setTitle('🎉 Hoş Geldin!')
        .setDescription(`${member} sunucumuza katıldı!`)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .addFields(
          { name: '👤 Kullanıcı', value: member.user.tag, inline: true },
          { name: '🆔 ID', value: member.user.id, inline: true },
          { name: '📅 Katılım Tarihi', value: `<t:${Math.floor(Date.now() / 1000)}:F>`, inline: true }
        )
        .setFooter({
          text: `${member.guild.name}`,
          iconURL: member.guild.iconURL({ dynamic: true })
        })
        .setTimestamp();

      welcomeChannel.send({ embeds: [welcomeEmbed] });
    }
  }
});

// Farewell Event
client.on('guildMemberRemove', async member => {
  if (client.farewellChannel) {
    const farewellChannel = member.guild.channels.cache.get(client.farewellChannel);
    if (farewellChannel) {
      const farewellEmbed = new EmbedBuilder()
        .setColor('#ff0000')
        .setAuthor({
          name: 'Neva Development Bot',
          iconURL: client.user.displayAvatarURL({ dynamic: true })
        })
        .setTitle('👋 Görüşürüz!')
        .setDescription(`${member.user.tag} sunucumuzdan ayrıldı.`)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .addFields(
          { name: '👤 Kullanıcı', value: member.user.tag, inline: true },
          { name: '🆔 ID', value: member.user.id, inline: true },
          { name: '📅 Ayrılış Tarihi', value: `<t:${Math.floor(Date.now() / 1000)}:F>`, inline: true }
        )
        .setFooter({
          text: `${member.guild.name}`,
          iconURL: member.guild.iconURL({ dynamic: true })
        })
        .setTimestamp();

      farewellChannel.send({ embeds: [farewellEmbed] });
    }
  }
});

client.on('messageCreate', async message => {
  if (message.author.bot || !message.guild) return;
  if (!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command = client.commands.get(commandName);
  if (!command) return;

  try {
    await command.execute(message, args, client);
  } catch (error) {
    console.error(error);
    message.reply('Komut çalıştırılırken bir hata oluştu.');
  }
});

client.login(config.token).catch(error => {
  console.error('Bot giriş hatası:', error);
}); 