const Discord = require('discord.js')
const miltos = new Discord.Client({partials:['MESSAGE','USER','REACTION']})
const prefix = '!'
const { MessageEmbed } = require('discord.js')
const { tictactoe } = require('reconlx');
const config = require('./config.json')
const disbut  = require('discord-buttons');
const {MessageButton, MessageActionRow, MessageMenuOption, MessageMenu} = require('discord-buttons')
disbut(miltos)

miltos.on('ready', function(){
    console.log(`${miltos.user.tag}einai up`)
})

miltos.on('message',async message => {
    if(message.content.includes ('?ping')){
        message.channel.send('Miltos')
    }
    if (message.content.includes ("!setup")){
        const channel = message.mentions.channels.first()
        const r = await channel.send(new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(" **Πατα ✅  για να επαληθευτειτε**"))
        await r.react('✅')



        message.delete()
    }
    if(message.content === "!verify"){
      const embed = new Discord.MessageEmbed()
      .setDescription("Πατα :white_check_mark: για να επαληθευτειτε")
      .setColor('BLACK')
        const button = new MessageButton()
        .setLabel("✅")
        .setStyle("green")
        .setID("btn1")
      
        message.channel.send(embed, button)
        }
    if (message.content.includes ("!addrole")){
        let role= message.mentions.roles.first();
        let member = message.mentions.members.first();
       member.roles.add(role);

    }
    if (message.content.includes ("!removerole")){
        let role= message.mentions.roles.first();
        let member = message.mentions.members.first();
       member.roles.remove(role);

    }
    if ( message.content.includes("!tri")){
        return await snakeGame.newGame(message);
    }
    if (message.content.includes ("!rps")){
        let embed = new Discord.MessageEmbed()
        .setTitle("RPS GAME")
        .setDescription("Αντέδρασε για να παίξεις!")
        .setTimestamp()
    const msg =    await message.channel.send(embed)
        await msg.react("🗻")
        await msg.react("✂")
        await msg.react("📰")

        const filter = (reaction, user) => {
            return ['🗻', '✂', '📰'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['🗻', '✂', '📰']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max:1, time: 60000, error: ["time"]}).then(
            async(collected) => {
                const reaction = collected.first()
                let result = new Discord.MessageEmbed()
                .setTitle("RESULT")
                .addField("Η επιλογή σου", `${reaction.emoji.name}`)
                .addField("Η επιλογή του bot", `${me}`)
            await msg.edit(result)
                if ((me === "🗻" && reaction.emoji.name === "✂") ||
                (me === "📰" && reaction.emoji.name === "🗻") ||
                (me === "✂" && reaction.emoji.name === "📰")) {
                    message.reply("Έχασες!");
            } else if (me === reaction.emoji.name) {
                return message.reply("Ισοπαλία");
            } else {
                return message.reply("Νίκησες");
            }
        })
        .catch(collected => {
                message.reply('Η διαδικασία σταμάτησε αφού δεν αντέδρασες γρήγορα!');
            })
    }
})

miltos.on('messageReactionAdd', async (reaction, user)=> {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;

const reactionrole = '903687260136951899'

       if(reaction.message.id === reactionrole && reaction.emoji.name === '✅') { // Your Emoji Name
            await reaction.message.guild.members.cache.get(user.id).roles.add('903312548764467220') // Role You Want To Add When SomeOne Reacts
        }
})

miltos.on('message', async message => {
  if(message.author.bot) return;
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if(command == "ticket-setup") {

      let channel = message.mentions.channels.first();
      if(!channel) return;

      let sent = await channel.send(new Discord.MessageEmbed()
          .setColor('BLACK')
          .setThumbnail('')
.setDescription("**Για την άμεση εξυπηρέτησή σας μπορείτε να ανοίξετε ένα ticket** \n  📞Support \n 💸Donate \n ⛔Ban Appeal\n ❓Other ")
          .setFooter("Κάνε reaction σε ένα από τα παρακάτω emojis το οποίο παρουσιάζει το θέμα του ticket.")
      )
      sent.react('📞');
      sent.react('💸');
      sent.react('⛔');
      sent.react('❓');
  }
  
  function _0x5822(){const _0x59c3dd=['Διάλεξε\x20το\x20θέμα\x20του\x20ticket','channels','setLabel','259496NEbJNI','donate','setDescription','setValue','mentions','setEmoji','Support','setup','setColor','addOption','60820CkyUHN','Bug','1029864bBQuPk','send','Ban\x20Appeal','first','MessageEmbed','47652QLmAKI','705033dUpofG','support','67131rwtjZX','**\x0a📞\x20Support\x0a🚫\x20Ban\x20Appeal\x0a💵\x20Donate\x0a🐛\x20Bug\x0a🔍Staff\x20Report\x20**','32xbYhyk','110OFHpHd','channel','78laFZNx','setPlaceholder','Staff\x20Report','Επέλεξε\x20μία\x20από\x20τις\x20παρακάτω\x20επιλογές\x20το\x20οποίο\x20παρουσιάζει\x20το\x20θέμα\x20του\x20ticket.','Βάλε\x20ενα\x20κανάλι','9jTGMQS','828090IKsjra','setID','bug'];_0x5822=function(){return _0x59c3dd;};return _0x5822();}const _0x14f254=_0x4221;function _0x4221(_0xf8ed34,_0xbd2605){const _0x582247=_0x5822();return _0x4221=function(_0x4221c6,_0x57ad78){_0x4221c6=_0x4221c6-0xcc;let _0x51cb4d=_0x582247[_0x4221c6];return _0x51cb4d;},_0x4221(_0xf8ed34,_0xbd2605);}(function(_0x4cb96c,_0x41b986){const _0x397bee=_0x4221,_0x2d001f=_0x4cb96c();while(!![]){try{const _0x3127f5=parseInt(_0x397bee(0xee))/0x1+parseInt(_0x397bee(0xda))/0x2+-parseInt(_0x397bee(0xce))/0x3*(parseInt(_0x397bee(0xe4))/0x4)+parseInt(_0x397bee(0xcc))/0x5*(parseInt(_0x397bee(0xeb))/0x6)+parseInt(_0x397bee(0xec))/0x7*(parseInt(_0x397bee(0xf0))/0x8)+-parseInt(_0x397bee(0xd3))/0x9*(-parseInt(_0x397bee(0xd4))/0xa)+parseInt(_0x397bee(0xe6))/0xb;if(_0x3127f5===_0x41b986)break;else _0x2d001f['push'](_0x2d001f['shift']());}catch(_0xc7d192){_0x2d001f['push'](_0x2d001f['shift']());}}}(_0x5822,0x87a3e));if(command===_0x14f254(0xe1)){let channel=message[_0x14f254(0xde)][_0x14f254(0xd8)][_0x14f254(0xe9)]();if(!channel)return message[_0x14f254(0xcd)]['send'](_0x14f254(0xd2));const embed=new Discord[(_0x14f254(0xea))]()[_0x14f254(0xdc)](_0x14f254(0xef))['setFooter'](_0x14f254(0xd1))[_0x14f254(0xe2)]('BLACK');let option1=new MessageMenuOption()[_0x14f254(0xd9)](_0x14f254(0xe0))[_0x14f254(0xdf)]('📞')[_0x14f254(0xdd)](_0x14f254(0xed)),option2=new MessageMenuOption()[_0x14f254(0xd9)](_0x14f254(0xe8))[_0x14f254(0xdf)]('🚫')[_0x14f254(0xdd)]('ban'),option3=new MessageMenuOption()[_0x14f254(0xd9)]('Donate')[_0x14f254(0xdf)]('💵')[_0x14f254(0xdd)](_0x14f254(0xdb)),option4=new MessageMenuOption()[_0x14f254(0xd9)](_0x14f254(0xe5))['setEmoji']('🐛')[_0x14f254(0xdd)](_0x14f254(0xd6)),option5=new MessageMenuOption()[_0x14f254(0xd9)](_0x14f254(0xd0))[_0x14f254(0xdf)]('🔍')[_0x14f254(0xdd)]('report'),test=new MessageMenu()[_0x14f254(0xd5)]('ez')[_0x14f254(0xcf)](_0x14f254(0xd7))[_0x14f254(0xe3)](option1)['addOption'](option2)[_0x14f254(0xe3)](option3)[_0x14f254(0xe3)](option4)[_0x14f254(0xe3)](option5);const ez=new MessageActionRow()['addComponents'](test);channel[_0x14f254(0xe7)](embed,ez);}
  //!setup + to kanali 
  const _0xb98d13=_0x5c0a;function _0xf9b9(){const _0x4e3e9f=['channel','MessageEmbed','28762677jXIGjz','setID','6924208ZnZqOe','**Πατόντας\x20στο\x20menu\x20γινεστε\x20verify**','3909534gjcwRr','setDescription','setColor','first','168PNUEEl','addOption','Visitor','Γίνε\x20Verify','setValue','42xFNNft','visit','setEmoji','channels','6625004DXlKqp','1954ZEekKm','1567392aPRZAU','vsetup','addComponents','7389430QNekWl','mentions'];_0xf9b9=function(){return _0x4e3e9f;};return _0xf9b9();}(function(_0x5796e9,_0x595251){const _0x50ba62=_0x5c0a,_0x3649dd=_0x5796e9();while(!![]){try{const _0x4e766f=parseInt(_0x50ba62(0x1ee))/0x1*(parseInt(_0x50ba62(0x1f8))/0x2)+parseInt(_0x50ba62(0x1ea))/0x3+parseInt(_0x50ba62(0x1f7))/0x4+-parseInt(_0x50ba62(0x1fc))/0x5+-parseInt(_0x50ba62(0x1f9))/0x6*(-parseInt(_0x50ba62(0x1f3))/0x7)+parseInt(_0x50ba62(0x1e8))/0x8+-parseInt(_0x50ba62(0x1e6))/0x9;if(_0x4e766f===_0x595251)break;else _0x3649dd['push'](_0x3649dd['shift']());}catch(_0x27c5b2){_0x3649dd['push'](_0x3649dd['shift']());}}}(_0xf9b9,0xd7838));function _0x5c0a(_0x43e2ec,_0x3992c4){const _0xf9b973=_0xf9b9();return _0x5c0a=function(_0x5c0ad8,_0x2f372e){_0x5c0ad8=_0x5c0ad8-0x1e4;let _0x25104e=_0xf9b973[_0x5c0ad8];return _0x25104e;},_0x5c0a(_0x43e2ec,_0x3992c4);}if(command===_0xb98d13(0x1fa)){let channel=message[_0xb98d13(0x1fd)][_0xb98d13(0x1f6)][_0xb98d13(0x1ed)]();if(!channel)return message[_0xb98d13(0x1e4)]['send']('Βάλε\x20ενα\x20κανάλι');const embed=new Discord[(_0xb98d13(0x1e5))]()[_0xb98d13(0x1eb)](_0xb98d13(0x1e9))[_0xb98d13(0x1ec)]('BLACK');let option1=new MessageMenuOption()['setLabel'](_0xb98d13(0x1f0))[_0xb98d13(0x1f5)]('🧍')[_0xb98d13(0x1f2)](_0xb98d13(0x1f4)),test=new MessageMenu()[_0xb98d13(0x1e7)]('ez')['setPlaceholder'](_0xb98d13(0x1f1))[_0xb98d13(0x1ef)](option1);const ez=new MessageActionRow()[_0xb98d13(0x1fb)](test);channel['send'](embed,ez);}
const _0x1173e0=_0x2bdb;function _0x2bdb(_0x476def,_0x5745a9){const _0x40e448=_0x40e4();return _0x2bdb=function(_0x2bdbef,_0x2854b5){_0x2bdbef=_0x2bdbef-0x135;let _0x3df64a=_0x40e448[_0x2bdbef];return _0x3df64a;},_0x2bdb(_0x476def,_0x5745a9);}(function(_0x189689,_0x2ff102){const _0x5c1969=_0x2bdb,_0x40d4a5=_0x189689();while(!![]){try{const _0x2d0b3c=-parseInt(_0x5c1969(0x147))/0x1+-parseInt(_0x5c1969(0x153))/0x2+-parseInt(_0x5c1969(0x135))/0x3*(parseInt(_0x5c1969(0x154))/0x4)+parseInt(_0x5c1969(0x150))/0x5*(parseInt(_0x5c1969(0x141))/0x6)+parseInt(_0x5c1969(0x144))/0x7+parseInt(_0x5c1969(0x14a))/0x8*(parseInt(_0x5c1969(0x14f))/0x9)+-parseInt(_0x5c1969(0x143))/0xa;if(_0x2d0b3c===_0x2ff102)break;else _0x40d4a5['push'](_0x40d4a5['shift']());}catch(_0x4f00db){_0x40d4a5['push'](_0x40d4a5['shift']());}}}(_0x40e4,0x59bed));function _0x40e4(){const _0x154da6=['setPlaceholder','198wJgrSx','305IRETwt','Επέλεξε\x20μία\x20από\x20τις\x20παρακάτω\x20επιλογές\x20το\x20οποίο\x20παρουσιάζει\x20το\x20θέμα\x20του\x20application','setValue','277514AWQdoB','15676uGsZIi','**\x0a💼\x20Staff\x0a🚓\x20Police\x0a🚑\x20Ambulance**','165CttjRL','first','Police','send','Βάλε\x20ενα\x20κανάλι','setLabel','channels','Διάλεξε\x20το\x20θέμα\x20του\x20ticket','addOption','police','Staff','setDescription','71382VCdhJx','mentions','3385790qCbHpt','1024030TiULpt','setEmoji','ambulance','205527wkfpsB','setFooter','MessageEmbed','143272EhNNQx','setID','staff','channel'];_0x40e4=function(){return _0x154da6;};return _0x40e4();}if(command==='apsetup'){let channel=message[_0x1173e0(0x142)][_0x1173e0(0x13b)][_0x1173e0(0x136)]();if(!channel)return message[_0x1173e0(0x14d)][_0x1173e0(0x138)](_0x1173e0(0x139));const embed=new Discord[(_0x1173e0(0x149))]()[_0x1173e0(0x140)](_0x1173e0(0x155))[_0x1173e0(0x148)](_0x1173e0(0x151))['setColor']('BLACK');let option1=new MessageMenuOption()[_0x1173e0(0x13a)](_0x1173e0(0x13f))[_0x1173e0(0x145)]('💼')[_0x1173e0(0x152)](_0x1173e0(0x14c)),option2=new MessageMenuOption()['setLabel'](_0x1173e0(0x137))[_0x1173e0(0x145)]('🚓')[_0x1173e0(0x152)](_0x1173e0(0x13e)),option3=new MessageMenuOption()[_0x1173e0(0x13a)]('Ambulance')[_0x1173e0(0x145)]('🚑')[_0x1173e0(0x152)](_0x1173e0(0x146)),test=new MessageMenu()[_0x1173e0(0x14b)]('ez')[_0x1173e0(0x14e)](_0x1173e0(0x13c))[_0x1173e0(0x13d)](option1)['addOption'](option2)[_0x1173e0(0x13d)](option3);const ez=new MessageActionRow()['addComponents'](test);channel['send'](embed,ez);}
});  





miltos.on('messageReactionAdd', async (reaction, user)=> {
  if(reaction.message.partial) await reaction.message.fetch();
  if(reaction.partial) await reaction.fetch();
  if(user.bot) return;
  if(!reaction.message.guild) return;

    if(reaction.message.channel.id === "903315015124271105") { //to id pp einai to embed
    const staffid= reaction.message.guild.roles.cache.get("910920499457040457") // to id tou staff team
  if(reaction.emoji.name === "📞") {
          reaction.users.remove(user);
        

          reaction.message.guild.channels.create(`📞ticket-support-${user.username}`, {
              type: "text",
              topic: " ",
               permissionOverwrites: [
              {
                  id: user.id,
                  allow: ["SEND_MESSAGES", "VIEW_CHANNEL", "READ_MESSAGE_HISTORY"]
              },
              {
                  id: reaction.message.guild.roles.everyone,
                  deny: ["VIEW_CHANNEL"]
              },
              {  
                id: staffid,
                allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
              }
    ],
    })
    .then(ch => {
    ch.send(`<@${user.id}> `,new Discord.MessageEmbed().setDescription('**Παρακαλω περιμενετε το staff team θα σας εξυπηρετησει συντομα!!Αν θελετε να κλεισετε καντε react με 🔒**').setColor('#9933FF')).then(msg => msg.react('🔒'))
    })
  }
  if(reaction.emoji.name === "💸") {
  reaction.users.remove(user);
  
  
  reaction.message.guild.channels.create(`💸ticket-donate- ${user.username}`, {
    type: "text",
    topic: "",
     permissionOverwrites: [
    {
        id: user.id,
        allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
    },
    {
        id: reaction.message.guild.roles.everyone,
        deny: ["VIEW_CHANNEL"]
    },
    {  
      id:  staffid,
    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
    }
  ],
  })
  .then(ch => {
    ch.send(`<@${user.id}> ` ,new Discord.MessageEmbed().setDescription ('**Παρακαλω περιμενετε το staff team θα σας εξυπηρετησει συντομα!!Αν θελετε να κλεισετε καντε react με 🔒**').setColor('#9933FF')).then(msg => msg.react('🔒'))
  })
  }
  if(reaction.emoji.name === "⛔") {
    reaction.users.remove(user);
    
    
    reaction.message.guild.channels.create(`⛔ticket-ban-appeal-${user.username}`, {
      type: "text",
      topic: " ",
       permissionOverwrites: [
      {
          id: user.id,
          allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
      },
      {
          id: reaction.message.guild.roles.everyone,
          deny: ["VIEW_CHANNEL"]
      },
      {  
        id:  staffid,
      allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
      }
    ],
    })
    .then(ch => {
      ch.send(`<@${user.id}>`,new Discord.MessageEmbed().setDescription('**Παρακαλω περιμενετε το staff team θα σας εξυπηρετησει συντομα!!Αν θελετε να κλεισετε καντε react με 🔒**').setColor('#9933FF')).then(msg => msg.react('🔒'))
    })
  }
  if(reaction.emoji.name === "❓") {
      reaction.users.remove(user);
      
      
      reaction.message.guild.channels.create(`❓ticket-other-${user.username}`, {
        type: "text",
        topic: " ",
         permissionOverwrites: [
        {
            id: user.id,
            allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
        },
        {
            id: reaction.message.guild.roles.everyone,
            deny: ["VIEW_CHANNEL"]
        },
        {  
          id:  staffid,
            allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
        }
      ],
      })
      .then(ch => {
        ch.send(`<@${user.id}> `,new Discord.MessageEmbed().setDescription('**Παρακαλω περιμενετε το staff team θα σας εξυπηρετησει συντομα!!Αν θελετε να κλεισετε καντε react με 🔒**').setColor('#9933FF')).then(msg => msg.react('🔒'))
      })
  }
}
if(reaction.emoji.name === '🔒') {
  if(!reaction.message.channel.name.includes('ticket-')) return;
  
  reaction.message.channel.delete()
  }
})
miltos.on("message", message => {
  if(message.author.bot) return;

  if(message.channel.id === config.twitter) { // twitter 
      if(!message.attachments.first()){
          let embed = new Discord.MessageEmbed()
          .setDescription("**" + message.content + "**")
          .setFooter("Twitter", "https://cdn.discordapp.com/attachments/744699659414667275/744924735598624888/apple-touch-icon-192x192.png")
          .setTimestamp()
          .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
          .setColor(3447003)
          message.channel.send(embed)
          message.delete()
      }
      else if(!message.content){
          let embed2 = new Discord.MessageEmbed()
          .setFooter("Twitter", "https://cdn.discordapp.com/attachments/744699659414667275/744924735598624888/apple-touch-icon-192x192.png")
          .setTimestamp()
          .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
          .setColor(3447003)
          .setImage(message.attachments.first().proxyURL)
          message.channel.send(embed2)
          message.delete()
      }
      else if(message.content, message.attachments.first()){
          let embed3 = new Discord.MessageEmbed()
          .setFooter("Twitter", "https://cdn.discordapp.com/attachments/744699659414667275/744924735598624888/apple-touch-icon-192x192.png")
          .setTimestamp()
          .setDescription("**" + message.content + "**")
          .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
          .setColor(3447003)
          .setImage(message.attachments.first().proxyURL)
          message.channel.send(embed3)
          message.delete()
      }
  }
 if(message.channel.id === config.instagram) { // instagram
      if(!message.attachments.first()){
          let embed = new Discord.MessageEmbed()
          .setDescription("**" + message.content + "**")
          .setFooter("Instagram", "https://media.discordapp.net/attachments/541685166364557340/733841462537486427/instagram.png")
          .setTimestamp()
          .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
          .setColor("#4e0097")
          message.channel.send(embed)
          message.delete()
      }
      else if(!message.content){
          let embed2 = new Discord.MessageEmbed()
          .setFooter("Instagram", "https://media.discordapp.net/attachments/541685166364557340/733841462537486427/instagram.png")
          .setTimestamp()
          .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
          .setColor("#4e0097")
          .setImage(message.attachments.first().proxyURL)
          message.channel.send(embed2)
          message.delete()
      }
      else if(message.content, message.attachments.first()){
          let embed3 = new Discord.MessageEmbed()
          .setFooter("Instagram", "https://media.discordapp.net/attachments/541685166364557340/733841462537486427/instagram.png")
          .setTimestamp()
          .setDescription("**" + message.content + "**")
          .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
          .setColor("#4e0097")
          .setImage(message.attachments.first().proxyURL)
          message.channel.send(embed3)
          message.delete()
      }
  } if(message.channel.id === config.newspaper) { // newspaper
      if(!message.attachments.first()){
          let embed = new Discord.MessageEmbed()
          .setDescription("**" + message.content + "**")
          .setFooter(`Posted by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setAuthor("Newspaper", "https://i.imgur.com/OUs7w0z.png")
          .setColor("#663300")
          message.channel.send(embed)
          message.delete()
      }
      else if(!message.content){
          let embed2 = new Discord.MessageEmbed()
          .setFooter(`Posted by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setAuthor("Newspaper", "https://i.imgur.com/OUs7w0z.png")
          .setColor("#663300")
          .setImage(message.attachments.first().proxyURL)
          message.channel.send(embed2)
          message.delete()
      }
      else if(message.content, message.attachments.first()){
          let embed3 = new Discord.MessageEmbed()
          .setDescription("**" + message.content + "**")
          .setFooter(`Posted by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setAuthor("Newspaper", "https://i.imgur.com/OUs7w0z.png")
          .setColor("#663300")
          .setImage(message.attachments.first().proxyURL)
          message.channel.send(embed3)
          message.delete()
      }
  } if(message.channel.id === config.darkchat) { // darkchat
      message.channel.send(message.content, message.attachments.first())
      message.delete({ timeout: 1500 }) //DONT CHANGE TIME POSSIBLE BUGS
  } if(message.channel.id === config.darkchat){ 
      let channel = message.guild.channels.cache.get(config.darkchatlogs)
      if(!message.attachments.first()){ 
        let embed = new Discord.MessageEmbed()
        .setTitle("Dark Chat Logs")
        .addField("Έγραψε ο :", `${message.author.tag}`)
      .addField("Μήνυμα:", `${message.content}`)
      .setColor("BLACK")
      .setTimestamp()

      channel.send(embed)
      }
      if(!message.content){
          let channel2 = message.guild.channels.cache.get(config.darkchatlogs)
        let embed2 = new Discord.MessageEmbed()
        .setTitle("Dark Chat Logs")
        .addField("Έγραψε ο :", `${message.author.tag}`)
      .addField("Μήνυμα:", `Δεν έγραψε τίποτα, απλά έστειλε εικόνα.`)
      .setImage(message.attachments.first().proxyURL)
      .setColor("BLACK")
      .setTimestamp()
        channel2.send(embed2)
      }
      else if(message.content, message.attachments.first()){
          let channel3 = message.guild.channels.cache.get(config.darkchatlogs)
        let embed3 = new Discord.MessageEmbed()
        .setTitle("Dark Chat Logs")
        .addField("Έγραψε ο :", `${message.author.tag}`)
        .addField("Μήνυμα:", `${message.content}`)
      .setImage(message.attachments.first().proxyURL)
      .setColor("BLACK")
      .setTimestamp()
      .setFooter("Dark Chat System")
        channel3.send(embed3)
      }
   
  }
  if(message.channel.id === "903316427715514430"){
    message.react('👍')
   message.react('👎')
  }
})
miltos.on('clickButton', async (button) => {
  if(button.id === "btn1"){
    await button.reply.defer()
    await button.message.guild.members.cache.get(button.clicker.user.id).roles.add('903312548764467220')
  }

})


const _0x428b0a=_0x2f5e;function _0x2f5e(_0x13574c,_0x252261){const _0x5659c7=_0x5659();return _0x2f5e=function(_0x2f5ee7,_0x5c7c4f){_0x2f5ee7=_0x2f5ee7-0xb5;let _0x309868=_0x5659c7[_0x2f5ee7];return _0x309868;},_0x2f5e(_0x13574c,_0x252261);}(function(_0x37eead,_0x1769f6){const _0x3b802a=_0x2f5e,_0x2da1c8=_0x37eead();while(!![]){try{const _0x1dd54a=-parseInt(_0x3b802a(0xd5))/0x1+-parseInt(_0x3b802a(0xfa))/0x2+-parseInt(_0x3b802a(0xca))/0x3+-parseInt(_0x3b802a(0xd4))/0x4+parseInt(_0x3b802a(0xc2))/0x5*(parseInt(_0x3b802a(0xb6))/0x6)+parseInt(_0x3b802a(0xcd))/0x7*(-parseInt(_0x3b802a(0xf4))/0x8)+-parseInt(_0x3b802a(0xf5))/0x9*(-parseInt(_0x3b802a(0xec))/0xa);if(_0x1dd54a===_0x1769f6)break;else _0x2da1c8['push'](_0x2da1c8['shift']());}catch(_0xa8c6b1){_0x2da1c8['push'](_0x2da1c8['shift']());}}}(_0x5659,0x510f7),miltos['on'](_0x428b0a(0xed),async _0x296083=>{const _0x269c17=_0x428b0a;if(_0x296083[_0x269c17(0xf6)][0x0]===_0x269c17(0xc7)){_0x296083[_0x269c17(0xdf)][_0x269c17(0xcb)](_0x269c17(0xf7),!![])[_0x269c17(0xeb)](_0x4e2288=>{});const _0x2a38db=_0x296083[_0x269c17(0xf8)][_0x269c17(0xc5)]['channels'][_0x269c17(0xcc)][_0x269c17(0xf1)](_0xc528e4=>_0xc528e4[_0x269c17(0xc4)]===_0x269c17(0xc3)+_0x296083[_0x269c17(0xd7)][_0x269c17(0xef)][_0x269c17(0xb9)][_0x269c17(0xf0)]()['replace'](/ +/g,'-')[_0x269c17(0xdb)](/!/g,''));if(_0x2a38db)return _0x296083[_0x269c17(0xd7)][_0x269c17(0xef)][_0x269c17(0xcb)]('Δεν\x20μπορείς\x20να\x20ανοίξεις\x20άλλο\x20📞support\x20ticket\x20');_0x296083[_0x269c17(0xc5)]['channels'][_0x269c17(0xcc)][_0x269c17(0xc1)](config[_0x269c17(0xc6)])[_0x269c17(0xcb)](new MessageEmbed()['addField'](_0x269c17(0xe4),'<@'+_0x296083[_0x269c17(0xd7)][_0x269c17(0xef)]['id']+'>')['addField'](_0x269c17(0xbc),'📞support')['setTitle'](_0x269c17(0xe0))[_0x269c17(0xe5)]('RANDOM')),await _0x296083[_0x269c17(0xc5)][_0x269c17(0xbb)]['create']('📞support-'+_0x296083['clicker']['user']['username'],{'parent':_0x296083[_0x269c17(0xf8)]['channel'][_0x269c17(0xd8)],'permissionOverwrites':[{'id':_0x296083[_0x269c17(0xc5)]['id'],'deny':[_0x269c17(0xcf),'SEND_MESSAGES']},{'id':config['staff'],'allow':[_0x269c17(0xe9),_0x269c17(0xcf)]},{'id':_0x296083[_0x269c17(0xd7)]['id'],'allow':[_0x269c17(0xcf),'SEND_MESSAGES']}]})[_0x269c17(0xb7)](async _0x1f177f=>{const _0xef041b=_0x269c17,_0x4c80bd=new MessageEmbed()['setColor'](_0xef041b(0xbe))['setDescription'](_0xef041b(0xd1)),_0x4d4a77=new MessageButton()['setStyle']('blurple')['setLabel']('🔒')[_0xef041b(0xf9)]('close');await _0x1f177f[_0xef041b(0xcb)]('<@'+_0x296083['clicker'][_0xef041b(0xef)]['id']+'>',{'embed':_0x4c80bd,'component':new MessageActionRow()[_0xef041b(0xd0)](_0x4d4a77)});});}if(_0x296083[_0x269c17(0xf6)][0x0]===_0x269c17(0xee)){_0x296083[_0x269c17(0xdf)]['send']('Άνοιξες\x20ενα\x20🚫ban-appeal\x20ticket!',!![])[_0x269c17(0xeb)](_0x459e12=>{});const _0x58e0c0=_0x296083[_0x269c17(0xf8)][_0x269c17(0xc5)]['channels']['cache']['find'](_0x144de2=>_0x144de2[_0x269c17(0xc4)]===_0x269c17(0xdd)+_0x296083[_0x269c17(0xd7)][_0x269c17(0xef)][_0x269c17(0xb9)][_0x269c17(0xf0)]()[_0x269c17(0xdb)](/ +/g,'-')['replace'](/!/g,''));if(_0x58e0c0)return _0x296083['clicker'][_0x269c17(0xef)][_0x269c17(0xcb)](_0x269c17(0xda));let _0x2713c5=_0x296083[_0x269c17(0xc5)][_0x269c17(0xbb)][_0x269c17(0xcc)][_0x269c17(0xc1)](config[_0x269c17(0xc6)])[_0x269c17(0xcb)](new MessageEmbed()[_0x269c17(0xba)](_0x269c17(0xe4),'<@'+_0x296083[_0x269c17(0xd7)][_0x269c17(0xef)]['id']+'>')[_0x269c17(0xba)](_0x269c17(0xbc),'🚫ban-appeal')[_0x269c17(0xf2)]('Open\x20Ticket')[_0x269c17(0xe5)](_0x269c17(0xbe)));const _0x46ec8a=await _0x296083[_0x269c17(0xc5)]['channels'][_0x269c17(0xe7)](_0x269c17(0xdd)+_0x296083[_0x269c17(0xd7)]['user'][_0x269c17(0xb9)],{'parent':_0x296083['message'][_0x269c17(0xc9)]['parentID'],'permissionOverwrites':[{'id':_0x296083['guild']['id'],'deny':[_0x269c17(0xcf),_0x269c17(0xe9)]},{'id':config[_0x269c17(0xd6)],'allow':[_0x269c17(0xe9),_0x269c17(0xcf)]},{'id':_0x296083['clicker'][_0x269c17(0xef)]['id'],'allow':[_0x269c17(0xcf),_0x269c17(0xe9)]}]})[_0x269c17(0xb7)](async _0x432c65=>{const _0x488956=_0x269c17,_0x51e731=new MessageEmbed()[_0x488956(0xe5)]('RANDOM')['setDescription']('**Παρακαλω\x20περιμενετε\x20το\x20staff\x20team\x20θα\x20σας\x20εξυπηρετησει\x20συντομα!!Αν\x20θελετε\x20να\x20κλεισετε\x20καντε\x20react\x20με\x20🔒**'),_0x373f36=new MessageButton()[_0x488956(0xce)](_0x488956(0xe6))[_0x488956(0xbd)]('🔒')[_0x488956(0xf9)](_0x488956(0xdc));await _0x432c65[_0x488956(0xcb)]('<@'+_0x296083[_0x488956(0xd7)][_0x488956(0xef)]['id']+'>',{'embed':_0x51e731,'component':new MessageActionRow()[_0x488956(0xd0)](_0x373f36)});});}if(_0x296083['values'][0x0]==='donate'){_0x296083[_0x269c17(0xdf)]['send'](_0x269c17(0xe1),!![])[_0x269c17(0xeb)](_0x4496a3=>{});const _0x5f40ad=_0x296083[_0x269c17(0xf8)][_0x269c17(0xc5)][_0x269c17(0xbb)][_0x269c17(0xcc)]['find'](_0x4445d8=>_0x4445d8[_0x269c17(0xc4)]===_0x269c17(0xc8)+_0x296083['clicker']['user'][_0x269c17(0xb9)]['toLowerCase']()[_0x269c17(0xdb)](/ +/g,'-')[_0x269c17(0xdb)](/!/g,''));if(_0x5f40ad)return _0x296083[_0x269c17(0xd7)]['user'][_0x269c17(0xcb)](_0x269c17(0xe8));let _0xb7e24a=_0x296083['guild'][_0x269c17(0xbb)][_0x269c17(0xcc)][_0x269c17(0xc1)](config['ticket'])['send'](new MessageEmbed()[_0x269c17(0xba)](_0x269c17(0xe4),'<@'+_0x296083[_0x269c17(0xd7)]['user']['id']+'>')[_0x269c17(0xba)](_0x269c17(0xbc),_0x269c17(0xc0))[_0x269c17(0xf2)]('Open\x20Ticket')[_0x269c17(0xe5)](_0x269c17(0xbe)));const _0x3469fd=await _0x296083[_0x269c17(0xc5)][_0x269c17(0xbb)][_0x269c17(0xe7)](_0x269c17(0xc8)+_0x296083[_0x269c17(0xd7)][_0x269c17(0xef)][_0x269c17(0xb9)],{'parent':_0x296083[_0x269c17(0xf8)]['channel'][_0x269c17(0xd8)],'permissionOverwrites':[{'id':_0x296083[_0x269c17(0xc5)]['id'],'deny':[_0x269c17(0xcf),'SEND_MESSAGES']},{'id':config[_0x269c17(0xe2)],'allow':[_0x269c17(0xe9),_0x269c17(0xcf)]},{'id':_0x296083[_0x269c17(0xd7)][_0x269c17(0xef)]['id'],'allow':[_0x269c17(0xcf),_0x269c17(0xe9)]}]})[_0x269c17(0xb7)](async _0xfc91b4=>{const _0x15e47a=_0x269c17,_0x3ddf60=new MessageEmbed()[_0x15e47a(0xe5)]('RANDOM')['setDescription'](_0x15e47a(0xd1)),_0x2e6fa1=new MessageButton()[_0x15e47a(0xce)](_0x15e47a(0xe6))[_0x15e47a(0xbd)]('🔒')[_0x15e47a(0xf9)]('close2');await _0xfc91b4[_0x15e47a(0xcb)]('<@'+_0x296083[_0x15e47a(0xd7)][_0x15e47a(0xef)]['id']+'>',{'embed':_0x3ddf60,'component':new MessageActionRow()['addComponent'](_0x2e6fa1)});});}if(_0x296083[_0x269c17(0xf6)][0x0]===_0x269c17(0xea)){_0x296083['reply'][_0x269c17(0xcb)](_0x269c17(0xd3),!![])[_0x269c17(0xeb)](_0x33e3d6=>{});const _0x12a030=_0x296083[_0x269c17(0xf8)]['guild']['channels']['cache'][_0x269c17(0xf1)](_0x566672=>_0x566672[_0x269c17(0xc4)]===_0x269c17(0xb8)+_0x296083[_0x269c17(0xd7)][_0x269c17(0xef)]['username'][_0x269c17(0xf0)]()['replace'](/ +/g,'-')[_0x269c17(0xdb)](/!/g,''));if(_0x12a030)return _0x296083['clicker'][_0x269c17(0xef)]['send'](_0x269c17(0xe3));let _0x3aa52=_0x296083['guild']['channels']['cache'][_0x269c17(0xc1)](config['ticket'])[_0x269c17(0xcb)](new MessageEmbed()[_0x269c17(0xba)](_0x269c17(0xe4),'<@'+_0x296083[_0x269c17(0xd7)][_0x269c17(0xef)]['id']+'>')[_0x269c17(0xba)]('Panel',_0x269c17(0xde))[_0x269c17(0xf2)](_0x269c17(0xe0))[_0x269c17(0xe5)](_0x269c17(0xbe)));const _0x1a9789=await _0x296083['guild'][_0x269c17(0xbb)][_0x269c17(0xe7)]('🐛bug-'+_0x296083[_0x269c17(0xd7)][_0x269c17(0xef)][_0x269c17(0xb9)],{'parent':_0x296083[_0x269c17(0xf8)][_0x269c17(0xc9)][_0x269c17(0xd8)],'permissionOverwrites':[{'id':_0x296083[_0x269c17(0xc5)]['id'],'deny':[_0x269c17(0xcf),_0x269c17(0xe9)]},{'id':config[_0x269c17(0xd6)],'allow':['SEND_MESSAGES',_0x269c17(0xcf)]},{'id':_0x296083['clicker'][_0x269c17(0xef)]['id'],'allow':[_0x269c17(0xcf),_0x269c17(0xe9)]}]})[_0x269c17(0xb7)](async _0x32e9c9=>{const _0x52ab4a=_0x269c17,_0x203abb=new MessageEmbed()['setColor']('RANDOM')['setDescription'](_0x52ab4a(0xd1)),_0xd90e34=new MessageButton()[_0x52ab4a(0xce)](_0x52ab4a(0xe6))[_0x52ab4a(0xbd)]('🔒')['setID'](_0x52ab4a(0xb5));await _0x32e9c9[_0x52ab4a(0xcb)]('<@'+_0x296083['clicker'][_0x52ab4a(0xef)]['id']+'>',{'embed':_0x203abb,'component':new MessageActionRow()[_0x52ab4a(0xd0)](_0xd90e34)});});}if(_0x296083[_0x269c17(0xf6)][0x0]==='report'){_0x296083[_0x269c17(0xdf)][_0x269c17(0xcb)](_0x269c17(0xd9),!![])[_0x269c17(0xeb)](_0x3d1717=>{});const _0x51fab0=_0x296083[_0x269c17(0xf8)][_0x269c17(0xc5)][_0x269c17(0xbb)][_0x269c17(0xcc)][_0x269c17(0xf1)](_0x3de89b=>_0x3de89b[_0x269c17(0xc4)]===_0x269c17(0xf3)+_0x296083[_0x269c17(0xd7)]['user'][_0x269c17(0xb9)][_0x269c17(0xf0)]()[_0x269c17(0xdb)](/ +/g,'-')[_0x269c17(0xdb)](/!/g,''));if(_0x51fab0)return _0x296083[_0x269c17(0xd7)][_0x269c17(0xef)]['send']('Δεν\x20μπορείς\x20να\x20ανοίξεις\x20άλλο\x20🔍staff-report\x20');let _0x4eff2d=_0x296083[_0x269c17(0xc5)][_0x269c17(0xbb)][_0x269c17(0xcc)][_0x269c17(0xc1)](config['ticket'])[_0x269c17(0xcb)](new MessageEmbed()[_0x269c17(0xba)](_0x269c17(0xe4),'<@'+_0x296083[_0x269c17(0xd7)][_0x269c17(0xef)]['id']+'>')[_0x269c17(0xba)](_0x269c17(0xbc),'🔍staff-report')[_0x269c17(0xf2)]('Open\x20Ticket')['setColor'](_0x269c17(0xbe)));const _0x452597=await _0x296083[_0x269c17(0xc5)][_0x269c17(0xbb)]['create'](_0x269c17(0xf3)+_0x296083[_0x269c17(0xd7)]['user']['username'],{'parent':_0x296083[_0x269c17(0xf8)][_0x269c17(0xc9)]['parentID'],'permissionOverwrites':[{'id':_0x296083[_0x269c17(0xc5)]['id'],'deny':[_0x269c17(0xcf),_0x269c17(0xe9)]},{'id':_0x296083['clicker']['user']['id'],'allow':['VIEW_CHANNEL',_0x269c17(0xe9)]}]})[_0x269c17(0xb7)](async _0x36da47=>{const _0x43b76a=_0x269c17,_0x23fbff=new MessageEmbed()[_0x43b76a(0xe5)]('RANDOM')[_0x43b76a(0xd2)](_0x43b76a(0xd1)),_0x5e332c=new MessageButton()[_0x43b76a(0xce)](_0x43b76a(0xe6))[_0x43b76a(0xbd)]('🔒')['setID'](_0x43b76a(0xbf));await _0x36da47[_0x43b76a(0xcb)]('<@'+_0x296083[_0x43b76a(0xd7)]['user']['id']+'>',{'embed':_0x23fbff,'component':new MessageActionRow()[_0x43b76a(0xd0)](_0x5e332c)});});}}));function _0x5659(){const _0x3e1bc7=['guild','ticket','support','💵donate-','channel','568761MaiAnv','send','cache','49ojBdQu','setStyle','VIEW_CHANNEL','addComponent','**Παρακαλω\x20περιμενετε\x20το\x20staff\x20team\x20θα\x20σας\x20εξυπηρετησει\x20συντομα!!Αν\x20θελετε\x20να\x20κλεισετε\x20καντε\x20react\x20με\x20🔒**','setDescription','Άνοιξες\x20ενα\x20🐛bug\x20ticket!','1601912GnresR','583491YfcGdN','staff','clicker','parentID','Άνοιξες\x20ενα\x20🔍staff\x20report\x20ticket!','Δεν\x20μπορείς\x20να\x20ανοίξεις\x20άλλο\x20🚫ban-appeal\x20ticket\x20','replace','close1','🚫ban-appeal-','🐛bug','reply','Open\x20Ticket','Άνοιξες\x20ενα\x20💵donate\x20ticket!','manager','Δεν\x20μπορείς\x20να\x20ανοίξεις\x20άλλο\x20🐛bug\x20ticket\x20','Ticket\x20By','setColor','blurple','create','Δεν\x20μπορείς\x20να\x20ανοίξεις\x20άλλο\x20💵donate\x20ticket\x20','SEND_MESSAGES','bug','catch','10OSbkIA','clickMenu','ban','user','toLowerCase','find','setTitle','🔍staff-report-','232256UefWUm','12348909WnTHal','values','Άνοιξες\x20ενα\x20⚡support\x20ticket!','message','setID','264462QbqGew','close3','6bYVaTg','then','🐛bug-','username','addField','channels','Panel','setLabel','RANDOM','close4','💵donate','get','2344665gBFHCi','📞support-','name'];_0x5659=function(){return _0x3e1bc7;};return _0x5659();}

const _0x2f73cb=_0x542b;function _0x2c3b(){const _0x5cb266=['⚡support','setTitle','delete','channel','RED','Closed\x20By','🔍staff-report','clicker','15402907JwbsdW','35gkmfdb','10jCYGYP','657fvbatl','close2','Panel','2413609pargyU','close4','🚫ban\x20appeal','2858WQJEvw','setColor','68000QfFAyU','get','116CzlSDU','close3','message','💵donate','314382lDfguJ','clickButton','ticket','cache','12AhPiLf','🐛bug','user','Close\x20Ticket','send','close1','addField','channels','catch','guild','199nfJKik','32360DoBDrB','56331bxlDpL'];_0x2c3b=function(){return _0x5cb266;};return _0x2c3b();}function _0x542b(_0x5889e0,_0xfdd51a){const _0x2c3b89=_0x2c3b();return _0x542b=function(_0x542bc0,_0x5893ce){_0x542bc0=_0x542bc0-0xb2;let _0x1d782a=_0x2c3b89[_0x542bc0];return _0x1d782a;},_0x542b(_0x5889e0,_0xfdd51a);}(function(_0x1328e5,_0x457270){const _0x38d052=_0x542b,_0x589197=_0x1328e5();while(!![]){try{const _0x632ba0=-parseInt(_0x38d052(0xc3))/0x1*(parseInt(_0x38d052(0xd7))/0x2)+-parseInt(_0x38d052(0xc5))/0x3*(parseInt(_0x38d052(0xdb))/0x4)+-parseInt(_0x38d052(0xd9))/0x5+parseInt(_0x38d052(0xb5))/0x6*(-parseInt(_0x38d052(0xcf))/0x7)+parseInt(_0x38d052(0xc4))/0x8*(parseInt(_0x38d052(0xd1))/0x9)+-parseInt(_0x38d052(0xd0))/0xa*(-parseInt(_0x38d052(0xd4))/0xb)+-parseInt(_0x38d052(0xb9))/0xc*(-parseInt(_0x38d052(0xce))/0xd);if(_0x632ba0===_0x457270)break;else _0x589197['push'](_0x589197['shift']());}catch(_0x7c2c99){_0x589197['push'](_0x589197['shift']());}}}(_0x2c3b,0x9146e),miltos['on'](_0x2f73cb(0xb6),async _0xa75043=>{const _0x2c4837=_0x2f73cb;if(_0xa75043['id']==='close'){let _0x1fdf7d=_0xa75043[_0x2c4837(0xc2)][_0x2c4837(0xc0)][_0x2c4837(0xb8)][_0x2c4837(0xda)](config[_0x2c4837(0xb7)])[_0x2c4837(0xbd)](new MessageEmbed()[_0x2c4837(0xc7)]('Close\x20Ticket')[_0x2c4837(0xbf)](_0x2c4837(0xcb),'<@'+_0xa75043[_0x2c4837(0xcd)][_0x2c4837(0xbb)]['id']+'>')['addField']('Panel',_0x2c4837(0xc6))['setColor'](_0x2c4837(0xca)));_0xa75043[_0x2c4837(0xb3)][_0x2c4837(0xc9)][_0x2c4837(0xc8)]({'timeout':0x1388})[_0x2c4837(0xc1)](()=>{});}if(_0xa75043['id']===_0x2c4837(0xbe)){let _0x3eebe8=_0xa75043['guild']['channels'][_0x2c4837(0xb8)]['get'](config['ticket'])[_0x2c4837(0xbd)](new MessageEmbed()['setTitle'](_0x2c4837(0xbc))[_0x2c4837(0xbf)](_0x2c4837(0xcb),'<@'+_0xa75043[_0x2c4837(0xcd)][_0x2c4837(0xbb)]['id']+'>')['addField'](_0x2c4837(0xd3),_0x2c4837(0xd6))[_0x2c4837(0xd8)](_0x2c4837(0xca)));_0xa75043[_0x2c4837(0xb3)][_0x2c4837(0xc9)][_0x2c4837(0xc8)]({'timeout':0x1388})[_0x2c4837(0xc1)](()=>{});}if(_0xa75043['id']===_0x2c4837(0xd2)){let _0x4fd327=_0xa75043[_0x2c4837(0xc2)]['channels'][_0x2c4837(0xb8)][_0x2c4837(0xda)](config[_0x2c4837(0xb7)])[_0x2c4837(0xbd)](new MessageEmbed()[_0x2c4837(0xc7)](_0x2c4837(0xbc))[_0x2c4837(0xbf)](_0x2c4837(0xcb),'<@'+_0xa75043[_0x2c4837(0xcd)]['user']['id']+'>')[_0x2c4837(0xbf)]('Panel',_0x2c4837(0xb4))['setColor'](_0x2c4837(0xca)));_0xa75043[_0x2c4837(0xb3)][_0x2c4837(0xc9)][_0x2c4837(0xc8)]({'timeout':0x1388})['catch'](()=>{});}if(_0xa75043['id']===_0x2c4837(0xb2)){let _0x281aa3=_0xa75043['guild'][_0x2c4837(0xc0)][_0x2c4837(0xb8)]['get'](config[_0x2c4837(0xb7)])[_0x2c4837(0xbd)](new MessageEmbed()[_0x2c4837(0xc7)](_0x2c4837(0xbc))[_0x2c4837(0xbf)]('Closed\x20By','<@'+_0xa75043['clicker'][_0x2c4837(0xbb)]['id']+'>')['addField'](_0x2c4837(0xd3),_0x2c4837(0xba))['setColor'](_0x2c4837(0xca)));_0xa75043['message'][_0x2c4837(0xc9)][_0x2c4837(0xc8)]({'timeout':0x1388})['catch'](()=>{});}if(_0xa75043['id']===_0x2c4837(0xd5)){let _0x59c16d=_0xa75043[_0x2c4837(0xc2)][_0x2c4837(0xc0)]['cache']['get'](config['ticket'])['send'](new MessageEmbed()['setTitle'](_0x2c4837(0xbc))[_0x2c4837(0xbf)](_0x2c4837(0xcb),'<@'+_0xa75043[_0x2c4837(0xcd)]['user']['id']+'>')[_0x2c4837(0xbf)](_0x2c4837(0xd3),_0x2c4837(0xcc))['setColor'](_0x2c4837(0xca)));_0xa75043[_0x2c4837(0xb3)][_0x2c4837(0xc9)][_0x2c4837(0xc8)]({'timeout':0x1388})[_0x2c4837(0xc1)](()=>{});}}));

function _0x3d66(_0x7c7d3c,_0x30a171){var _0x8fc66c=_0x8fc6();return _0x3d66=function(_0x3d66fb,_0x3f8cd5){_0x3d66fb=_0x3d66fb-0x115;var _0x2fd071=_0x8fc66c[_0x3d66fb];return _0x2fd071;},_0x3d66(_0x7c7d3c,_0x30a171);}var _0x8fe275=_0x3d66;(function(_0x39ad85,_0x27453b){var _0x50d3af=_0x3d66,_0x49ad68=_0x39ad85();while(!![]){try{var _0xb4a851=-parseInt(_0x50d3af(0x127))/0x1+-parseInt(_0x50d3af(0x11c))/0x2+parseInt(_0x50d3af(0x126))/0x3*(parseInt(_0x50d3af(0x117))/0x4)+-parseInt(_0x50d3af(0x120))/0x5+-parseInt(_0x50d3af(0x11d))/0x6*(-parseInt(_0x50d3af(0x119))/0x7)+-parseInt(_0x50d3af(0x122))/0x8+parseInt(_0x50d3af(0x118))/0x9;if(_0xb4a851===_0x27453b)break;else _0x49ad68['push'](_0x49ad68['shift']());}catch(_0x53ea8b){_0x49ad68['push'](_0x49ad68['shift']());}}}(_0x8fc6,0x50031),miltos['on'](_0x8fe275(0x124),async _0x2f3f32=>{var _0xbd043b=_0x8fe275;_0x2f3f32['values'][0x0]==='visit'&&(_0x2f3f32['reply'][_0xbd043b(0x11e)](_0xbd043b(0x11b),!![])[_0xbd043b(0x123)](_0x4acbf8=>{}),await _0x2f3f32['message'][_0xbd043b(0x121)][_0xbd043b(0x11a)][_0xbd043b(0x115)][_0xbd043b(0x116)](_0x2f3f32['clicker']['user']['id'])['roles'][_0xbd043b(0x125)](config[_0xbd043b(0x11f)]));}));function _0x8fc6(){var _0xe5cee7=['send','welcome','1835585JmVKxP','guild','4990616OAtjVi','catch','clickMenu','add','30zaOEip','176795vYwsLH','cache','get','214532dWfyrr','4799448jOTyyy','35980TFlIvD','members','Ο\x20λογαριασμός\x20σου\x20έχει\x20επαληθευτεί','237948wHQLcB','636Jryhyn'];_0x8fc6=function(){return _0xe5cee7;};return _0x8fc6();}

miltos.on('clickMenu', async (menu) => {
  if(menu.values[0]==='staff'){
    const Questions = {
      Question1 : "Test",
      Question2 : "Test2",
      Question3 : "Test3",
      Question4 : "Test4",
      Question5 : "Test5",
      Question6 : "Test6",
      Question7 : "Test7",
      Question8 : "Test8",
      Question9 : "Test9"
    }
        function _0x35a5(){const _0x4288c9=['first','174wMYVxQ','Question7','Answer:\x20','2XZKOST','Question5','Question6','clicker','180632CEJHQe','Question8','setDescription','channel','10532Zouryi','1436388TqBpfH','author','MessageEmbed','105IjaVOY','117HmrLKy','setTitle','Application\x20Start!','cancel','Η\x20αίτηση\x20έγινε\x20απο\x20τον\x20<@','channels','89688rtRHws','45871tTSRvv','Ok,\x20I\x20have\x20cancelled\x20this\x20process','awaitMessages','Question1','message','34405LLGMyz','content','send','get','setTimestamp','Question9','client','user','staff','then','1344040UYzaJM','Question3','addField','appl','toLowerCase','catch','11eLErfV'];_0x35a5=function(){return _0x4288c9;};return _0x35a5();}function _0x5022(_0x18cdff,_0xa31aa2){const _0x35a56d=_0x35a5();return _0x5022=function(_0x5022fd,_0x145262){_0x5022fd=_0x5022fd-0x10c;let _0xe02db1=_0x35a56d[_0x5022fd];return _0xe02db1;},_0x5022(_0x18cdff,_0xa31aa2);}const _0x3f6950=_0x5022;(function(_0x5a98ac,_0x382373){const _0x3e9fea=_0x5022,_0x16f580=_0x5a98ac();while(!![]){try{const _0x3fb2ec=parseInt(_0x3e9fea(0x11a))/0x1*(parseInt(_0x3e9fea(0x116))/0x2)+parseInt(_0x3e9fea(0x122))/0x3*(-parseInt(_0x3e9fea(0x11e))/0x4)+parseInt(_0x3e9fea(0x12f))/0x5+-parseInt(_0x3e9fea(0x113))/0x6*(-parseInt(_0x3e9fea(0x12a))/0x7)+parseInt(_0x3e9fea(0x129))/0x8*(-parseInt(_0x3e9fea(0x123))/0x9)+-parseInt(_0x3e9fea(0x139))/0xa+parseInt(_0x3e9fea(0x111))/0xb*(parseInt(_0x3e9fea(0x11f))/0xc);if(_0x3fb2ec===_0x382373)break;else _0x16f580['push'](_0x16f580['shift']());}catch(_0xe851ce){_0x16f580['push'](_0x16f580['shift']());}}}(_0x35a5,0x1e813));if(!menu[_0x3f6950(0x119)][_0x3f6950(0x136)])return;menu[_0x3f6950(0x119)][_0x3f6950(0x136)]['send'](_0x3f6950(0x125));let embed=new MessageEmbed()['setDescription'](Questions['Question1']);menu[_0x3f6950(0x119)][_0x3f6950(0x136)]['send'](embed)[_0x3f6950(0x138)](_0xf95def=>{const _0x20906f=_0x3f6950,_0x2354f9=_0x1f1e59=>_0x1f1e59[_0x20906f(0x120)]['id']===menu[_0x20906f(0x119)]['user']['id'];_0xf95def[_0x20906f(0x11d)][_0x20906f(0x12c)](_0x2354f9,{'time':0x5*0xea60,'max':0x1})['then'](_0x558057=>{const _0x5d266c=_0x20906f;let _0x247a16=_0x558057[_0x5d266c(0x112)]()[_0x5d266c(0x130)];if(_0x247a16[_0x5d266c(0x10f)]()===_0x5d266c(0x126))return menu[_0x5d266c(0x119)]['user'][_0x5d266c(0x131)](_0x5d266c(0x12b));const _0xf0a0c6=new Discord[(_0x5d266c(0x121))]()[_0x5d266c(0x11c)](Questions['Question2']);menu[_0x5d266c(0x119)]['user']['send'](_0xf0a0c6)['then'](_0xaf4ab7=>{const _0xc5df43=_0x5d266c,_0x11536a=_0x15ca7b=>_0x15ca7b[_0xc5df43(0x120)]['id']===menu[_0xc5df43(0x119)]['user']['id'];_0xaf4ab7['channel'][_0xc5df43(0x12c)](_0x11536a,{'time':0x5*0xea60,'max':0x1})[_0xc5df43(0x138)](_0x5ebd52=>{const _0x3fbc69=_0xc5df43;let _0x4656ed=_0x5ebd52['first']()[_0x3fbc69(0x130)];if(_0x4656ed['toLowerCase']()===_0x3fbc69(0x126))return menu['clicker'][_0x3fbc69(0x136)][_0x3fbc69(0x131)](_0x3fbc69(0x12b));const _0x2ac942=new Discord[(_0x3fbc69(0x121))]()[_0x3fbc69(0x11c)](Questions[_0x3fbc69(0x10c)]);menu[_0x3fbc69(0x119)][_0x3fbc69(0x136)][_0x3fbc69(0x131)](_0x2ac942)[_0x3fbc69(0x138)](_0x44d66c=>{const _0x356084=_0x3fbc69,_0x22e707=_0x3ee9e9=>_0x3ee9e9['author']['id']===menu['clicker'][_0x356084(0x136)]['id'];_0x44d66c[_0x356084(0x11d)][_0x356084(0x12c)](_0x22e707,{'time':0x5*0xea60,'max':0x1})[_0x356084(0x138)](_0x380054=>{const _0x325594=_0x356084;let _0x5cdd65=_0x380054[_0x325594(0x112)]()[_0x325594(0x130)];if(_0x5cdd65[_0x325594(0x10f)]()==='cancel')return menu['clicker'][_0x325594(0x136)][_0x325594(0x131)]('Ok,\x20I\x20have\x20cancelled\x20this\x20process');const _0x490d30=new Discord[(_0x325594(0x121))]()[_0x325594(0x11c)](Questions['Question4']);menu[_0x325594(0x119)]['user']['send'](_0x490d30)[_0x325594(0x138)](_0x1c696f=>{const _0x46773e=_0x325594,_0x46ec17=_0x5e27f8=>_0x5e27f8[_0x46773e(0x120)]['id']===menu['clicker']['user']['id'];_0x1c696f[_0x46773e(0x11d)][_0x46773e(0x12c)](_0x46ec17,{'time':0x5*0xea60,'max':0x1})[_0x46773e(0x138)](_0x1b58e3=>{const _0x42b43c=_0x46773e;let _0x34d6e2=_0x1b58e3['first']()[_0x42b43c(0x130)];if(_0x34d6e2[_0x42b43c(0x10f)]()===_0x42b43c(0x126))return menu[_0x42b43c(0x119)][_0x42b43c(0x136)][_0x42b43c(0x131)]('Ok,\x20I\x20have\x20cancelled\x20this\x20process');const _0x51ffc3=new Discord['MessageEmbed']()[_0x42b43c(0x11c)](Questions[_0x42b43c(0x117)]);menu[_0x42b43c(0x119)][_0x42b43c(0x136)][_0x42b43c(0x131)](_0x51ffc3)[_0x42b43c(0x138)](_0x5ec48f=>{const _0x269c16=_0x42b43c,_0xb280c2=_0x15d394=>_0x15d394[_0x269c16(0x120)]['id']===menu[_0x269c16(0x119)][_0x269c16(0x136)]['id'];_0x5ec48f['channel'][_0x269c16(0x12c)](_0xb280c2,{'time':0x5*0xea60,'max':0x1})['then'](_0x81adf8=>{const _0x5d4b83=_0x269c16;let _0x663cb5=_0x81adf8['first']()[_0x5d4b83(0x130)];if(_0x663cb5[_0x5d4b83(0x10f)]()===_0x5d4b83(0x126))return menu[_0x5d4b83(0x119)][_0x5d4b83(0x136)]['send'](_0x5d4b83(0x12b));const _0x2df4e2=new Discord[(_0x5d4b83(0x121))]()['setDescription'](Questions['Question6']);menu[_0x5d4b83(0x119)][_0x5d4b83(0x136)][_0x5d4b83(0x131)](_0x2df4e2)[_0x5d4b83(0x138)](_0x3c492b=>{const _0x6e4054=_0x5d4b83,_0x33e40c=_0x52a6e1=>_0x52a6e1[_0x6e4054(0x120)]['id']===menu[_0x6e4054(0x119)][_0x6e4054(0x136)]['id'];_0x3c492b[_0x6e4054(0x11d)][_0x6e4054(0x12c)](_0x33e40c,{'time':0x5*0xea60,'max':0x1})[_0x6e4054(0x138)](_0x3aa122=>{const _0x916ad=_0x6e4054;let _0x327f94=_0x3aa122['first']()[_0x916ad(0x130)];if(_0x327f94['toLowerCase']()===_0x916ad(0x126))return menu[_0x916ad(0x119)]['user'][_0x916ad(0x131)](_0x916ad(0x12b));const _0x42271a=new Discord['MessageEmbed']()[_0x916ad(0x11c)](Questions['Question7']);menu[_0x916ad(0x119)][_0x916ad(0x136)][_0x916ad(0x131)](_0x42271a)[_0x916ad(0x138)](_0x15e30a=>{const _0x5ba8d0=_0x916ad,_0x4413d4=_0x48c04c=>_0x48c04c[_0x5ba8d0(0x120)]['id']===menu[_0x5ba8d0(0x119)][_0x5ba8d0(0x136)]['id'];_0x15e30a['channel'][_0x5ba8d0(0x12c)](_0x4413d4,{'time':0x5*0xea60,'max':0x1})[_0x5ba8d0(0x138)](_0x316769=>{const _0x527085=_0x5ba8d0;let _0x26c37a=_0x316769[_0x527085(0x112)]()['content'];if(_0x26c37a[_0x527085(0x10f)]()===_0x527085(0x126))return menu[_0x527085(0x119)][_0x527085(0x136)][_0x527085(0x131)](_0x527085(0x12b));const _0x31c843=new Discord[(_0x527085(0x121))]()['setDescription'](Questions[_0x527085(0x11b)]);menu['clicker'][_0x527085(0x136)]['send'](_0x31c843)[_0x527085(0x138)](_0x1a2607=>{const _0x2d51db=_0x527085,_0x20cdcb=_0x5e12a0=>_0x5e12a0['author']['id']===menu[_0x2d51db(0x119)][_0x2d51db(0x136)]['id'];_0x1a2607[_0x2d51db(0x11d)][_0x2d51db(0x12c)](_0x20cdcb,{'time':0x5*0xea60,'max':0x1})[_0x2d51db(0x138)](_0x547540=>{const _0x582d77=_0x2d51db;let _0x523e6c=_0x547540['first']()[_0x582d77(0x130)];if(_0x523e6c[_0x582d77(0x10f)]()===_0x582d77(0x126))return menu[_0x582d77(0x119)]['user'][_0x582d77(0x131)]('Ok,\x20I\x20have\x20cancelled\x20this\x20process');const _0x3df11d=new Discord[(_0x582d77(0x121))]()[_0x582d77(0x11c)](Questions[_0x582d77(0x134)]);menu[_0x582d77(0x119)]['user'][_0x582d77(0x131)](_0x3df11d)[_0x582d77(0x138)](_0x1f06e8=>{const _0x2e3f0a=_0x582d77,_0xd4076e=_0x8a6d09=>_0x8a6d09[_0x2e3f0a(0x120)]['id']===menu['clicker']['user']['id'];_0x1f06e8[_0x2e3f0a(0x11d)]['awaitMessages'](_0xd4076e,{'time':0x5*0xea60,'max':0x1})[_0x2e3f0a(0x138)](_0x338bfb=>{const _0x146876=_0x2e3f0a;let _0x4c8c51=_0x338bfb[_0x146876(0x112)]()['content'];menu[_0x146876(0x119)][_0x146876(0x136)][_0x146876(0x131)]('Η\x20αίτηση\x20τελείωσε')[_0x146876(0x138)](_0xfd1acf=>{const _0x526f8e=_0x146876;menu[_0x526f8e(0x12e)][_0x526f8e(0x135)][_0x526f8e(0x128)]['cache'][_0x526f8e(0x132)](config[_0x526f8e(0x10e)][_0x526f8e(0x137)])['send'](new Discord['MessageEmbed']()[_0x526f8e(0x124)]('Νέα\x20αίτηση')['setDescription'](_0x526f8e(0x127)+menu[_0x526f8e(0x119)][_0x526f8e(0x136)]['id']+'>.')['addField'](Questions[_0x526f8e(0x12d)],_0x526f8e(0x115)+_0x247a16)[_0x526f8e(0x10d)](Questions['Question2'],_0x526f8e(0x115)+_0x4656ed)[_0x526f8e(0x10d)](Questions['Question3'],'Answer:\x20'+_0x5cdd65)[_0x526f8e(0x10d)](Questions['Question4'],_0x526f8e(0x115)+_0x34d6e2)[_0x526f8e(0x10d)](Questions[_0x526f8e(0x117)],_0x526f8e(0x115)+_0x663cb5)['addField'](Questions[_0x526f8e(0x118)],_0x526f8e(0x115)+_0x327f94)[_0x526f8e(0x10d)](Questions[_0x526f8e(0x114)],_0x526f8e(0x115)+_0x26c37a)['addField'](Questions[_0x526f8e(0x11b)],_0x526f8e(0x115)+_0x523e6c)[_0x526f8e(0x10d)](Questions[_0x526f8e(0x134)],_0x526f8e(0x115)+_0x523e6c)[_0x526f8e(0x133)]());});});});});});});});});});});});});});});});});});})[_0x20906f(0x110)](()=>{});});
  }
  if(menu.values[0]==='police'){
    const Questions = {
      Question1 : "Test",
      Question2 : "Test2",
      Question3 : "Test3",
      Question4 : "Test4",
      Question5 : "Test5",
      Question6 : "Test6",
      Question7 : "Test7",
      Question8 : "Test8",
      Question9 : "Test9"
    }
const _0x3321c5=_0x3797;(function(_0x3a5b99,_0x2f4045){const _0x48aed5=_0x3797,_0x3d2656=_0x3a5b99();while(!![]){try{const _0x36cd0c=-parseInt(_0x48aed5(0x1df))/0x1*(parseInt(_0x48aed5(0x1f8))/0x2)+parseInt(_0x48aed5(0x1e0))/0x3+parseInt(_0x48aed5(0x1fc))/0x4+-parseInt(_0x48aed5(0x1e5))/0x5*(-parseInt(_0x48aed5(0x202))/0x6)+-parseInt(_0x48aed5(0x1e7))/0x7+parseInt(_0x48aed5(0x1e9))/0x8+-parseInt(_0x48aed5(0x200))/0x9;if(_0x36cd0c===_0x2f4045)break;else _0x3d2656['push'](_0x3d2656['shift']());}catch(_0x50ad61){_0x3d2656['push'](_0x3d2656['shift']());}}}(_0x860e,0x6ccff));function _0x3797(_0x382012,_0x4d6cd0){const _0x860e7b=_0x860e();return _0x3797=function(_0x3797c2,_0x41b90a){_0x3797c2=_0x3797c2-0x1d8;let _0x5a12e4=_0x860e7b[_0x3797c2];return _0x5a12e4;},_0x3797(_0x382012,_0x4d6cd0);}if(!menu[_0x3321c5(0x1fb)]['user'])return;menu[_0x3321c5(0x1fb)]['user'][_0x3321c5(0x1ec)](_0x3321c5(0x1ed));let embed=new MessageEmbed()['setDescription'](Questions[_0x3321c5(0x1f1)]);function _0x860e(){const _0x324e55=['285BXZSwI','Ok,\x20I\x20have\x20cancelled\x20this\x20process','5749296hmrvmJ','Η\x20αίτηση\x20έγινε\x20απο\x20τον\x20<@','5360504VAYqNG','then','cancel','send','Application\x20Start!','user','catch','setTitle','Question1','cache','setTimestamp','Question5','first','Νέα\x20αίτηση','client','11974CDKnKq','addField','police','clicker','3363984YvGxoh','awaitMessages','Η\x20αίτηση\x20τελείωσε','Question8','11008476zsmVwM','Question3','49950HlJyrW','toLowerCase','Answer:\x20','channel','message','author','Question9','setDescription','Question7','content','Question4','2CqNFEd','1549731fUafxZ','MessageEmbed','Question6','channels','appl'];_0x860e=function(){return _0x324e55;};return _0x860e();}menu[_0x3321c5(0x1fb)]['user'][_0x3321c5(0x1ec)](embed)[_0x3321c5(0x1ea)](_0x53c28b=>{const _0x537471=_0x3321c5,_0x106b6e=_0x31c52e=>_0x31c52e['author']['id']===menu[_0x537471(0x1fb)][_0x537471(0x1ee)]['id'];_0x53c28b['channel']['awaitMessages'](_0x106b6e,{'time':0x5*0xea60,'max':0x1})[_0x537471(0x1ea)](_0x599842=>{const _0x20b0c4=_0x537471;let _0x4e5447=_0x599842[_0x20b0c4(0x1f5)]()[_0x20b0c4(0x1dd)];if(_0x4e5447['toLowerCase']()===_0x20b0c4(0x1eb))return menu[_0x20b0c4(0x1fb)][_0x20b0c4(0x1ee)][_0x20b0c4(0x1ec)](_0x20b0c4(0x1e6));const _0x2214cc=new Discord['MessageEmbed']()[_0x20b0c4(0x1db)](Questions['Question2']);menu['clicker'][_0x20b0c4(0x1ee)][_0x20b0c4(0x1ec)](_0x2214cc)[_0x20b0c4(0x1ea)](_0x228325=>{const _0x540c80=_0x20b0c4,_0x2c6181=_0x2744ff=>_0x2744ff[_0x540c80(0x1d9)]['id']===menu[_0x540c80(0x1fb)]['user']['id'];_0x228325[_0x540c80(0x205)][_0x540c80(0x1fd)](_0x2c6181,{'time':0x5*0xea60,'max':0x1})['then'](_0x27c052=>{const _0x28315d=_0x540c80;let _0x30aa5f=_0x27c052['first']()[_0x28315d(0x1dd)];if(_0x30aa5f[_0x28315d(0x203)]()==='cancel')return menu['clicker']['user'][_0x28315d(0x1ec)](_0x28315d(0x1e6));const _0x548d5e=new Discord[(_0x28315d(0x1e1))]()[_0x28315d(0x1db)](Questions[_0x28315d(0x201)]);menu[_0x28315d(0x1fb)]['user'][_0x28315d(0x1ec)](_0x548d5e)['then'](_0x13be37=>{const _0x38fcf0=_0x28315d,_0x958771=_0x2755d8=>_0x2755d8[_0x38fcf0(0x1d9)]['id']===menu['clicker'][_0x38fcf0(0x1ee)]['id'];_0x13be37[_0x38fcf0(0x205)][_0x38fcf0(0x1fd)](_0x958771,{'time':0x5*0xea60,'max':0x1})[_0x38fcf0(0x1ea)](_0xdf30c8=>{const _0x11640d=_0x38fcf0;let _0x47c2eb=_0xdf30c8[_0x11640d(0x1f5)]()[_0x11640d(0x1dd)];if(_0x47c2eb['toLowerCase']()===_0x11640d(0x1eb))return menu[_0x11640d(0x1fb)][_0x11640d(0x1ee)]['send']('Ok,\x20I\x20have\x20cancelled\x20this\x20process');const _0x574733=new Discord[(_0x11640d(0x1e1))]()[_0x11640d(0x1db)](Questions[_0x11640d(0x1de)]);menu['clicker'][_0x11640d(0x1ee)][_0x11640d(0x1ec)](_0x574733)[_0x11640d(0x1ea)](_0xf0bf37=>{const _0x3f3830=_0x11640d,_0x162512=_0x128aae=>_0x128aae[_0x3f3830(0x1d9)]['id']===menu['clicker'][_0x3f3830(0x1ee)]['id'];_0xf0bf37[_0x3f3830(0x205)][_0x3f3830(0x1fd)](_0x162512,{'time':0x5*0xea60,'max':0x1})['then'](_0x1faba1=>{const _0x159550=_0x3f3830;let _0x1b38bf=_0x1faba1[_0x159550(0x1f5)]()[_0x159550(0x1dd)];if(_0x1b38bf[_0x159550(0x203)]()==='cancel')return menu[_0x159550(0x1fb)][_0x159550(0x1ee)][_0x159550(0x1ec)](_0x159550(0x1e6));const _0x568385=new Discord[(_0x159550(0x1e1))]()[_0x159550(0x1db)](Questions[_0x159550(0x1f4)]);menu[_0x159550(0x1fb)]['user'][_0x159550(0x1ec)](_0x568385)['then'](_0x1b1cfe=>{const _0x1c2c9a=_0x159550,_0x4d92fc=_0x4a76e2=>_0x4a76e2[_0x1c2c9a(0x1d9)]['id']===menu['clicker'][_0x1c2c9a(0x1ee)]['id'];_0x1b1cfe['channel'][_0x1c2c9a(0x1fd)](_0x4d92fc,{'time':0x5*0xea60,'max':0x1})[_0x1c2c9a(0x1ea)](_0x30a8f7=>{const _0x5665c8=_0x1c2c9a;let _0x5ce35c=_0x30a8f7[_0x5665c8(0x1f5)]()[_0x5665c8(0x1dd)];if(_0x5ce35c[_0x5665c8(0x203)]()===_0x5665c8(0x1eb))return menu[_0x5665c8(0x1fb)][_0x5665c8(0x1ee)][_0x5665c8(0x1ec)](_0x5665c8(0x1e6));const _0xe6f9ec=new Discord[(_0x5665c8(0x1e1))]()[_0x5665c8(0x1db)](Questions[_0x5665c8(0x1e2)]);menu[_0x5665c8(0x1fb)]['user'][_0x5665c8(0x1ec)](_0xe6f9ec)[_0x5665c8(0x1ea)](_0x380b52=>{const _0x2dd2b1=_0x5665c8,_0x10eac9=_0x425d7f=>_0x425d7f[_0x2dd2b1(0x1d9)]['id']===menu[_0x2dd2b1(0x1fb)]['user']['id'];_0x380b52[_0x2dd2b1(0x205)][_0x2dd2b1(0x1fd)](_0x10eac9,{'time':0x5*0xea60,'max':0x1})[_0x2dd2b1(0x1ea)](_0xa0fd45=>{const _0x28477d=_0x2dd2b1;let _0x364b3f=_0xa0fd45['first']()[_0x28477d(0x1dd)];if(_0x364b3f[_0x28477d(0x203)]()===_0x28477d(0x1eb))return menu[_0x28477d(0x1fb)][_0x28477d(0x1ee)][_0x28477d(0x1ec)](_0x28477d(0x1e6));const _0x2e0dae=new Discord[(_0x28477d(0x1e1))]()['setDescription'](Questions[_0x28477d(0x1dc)]);menu['clicker'][_0x28477d(0x1ee)][_0x28477d(0x1ec)](_0x2e0dae)[_0x28477d(0x1ea)](_0x19e336=>{const _0x178ddf=_0x28477d,_0x2c1a91=_0x35a331=>_0x35a331[_0x178ddf(0x1d9)]['id']===menu[_0x178ddf(0x1fb)][_0x178ddf(0x1ee)]['id'];_0x19e336['channel']['awaitMessages'](_0x2c1a91,{'time':0x5*0xea60,'max':0x1})['then'](_0x146c6c=>{const _0x3fa5f7=_0x178ddf;let _0x5e9103=_0x146c6c[_0x3fa5f7(0x1f5)]()[_0x3fa5f7(0x1dd)];if(_0x5e9103[_0x3fa5f7(0x203)]()==='cancel')return menu[_0x3fa5f7(0x1fb)][_0x3fa5f7(0x1ee)][_0x3fa5f7(0x1ec)](_0x3fa5f7(0x1e6));const _0xdc9afb=new Discord[(_0x3fa5f7(0x1e1))]()[_0x3fa5f7(0x1db)](Questions['Question8']);menu[_0x3fa5f7(0x1fb)]['user'][_0x3fa5f7(0x1ec)](_0xdc9afb)[_0x3fa5f7(0x1ea)](_0x5b0ea0=>{const _0x5added=_0x3fa5f7,_0x50e8c7=_0x24dc70=>_0x24dc70[_0x5added(0x1d9)]['id']===menu[_0x5added(0x1fb)][_0x5added(0x1ee)]['id'];_0x5b0ea0[_0x5added(0x205)][_0x5added(0x1fd)](_0x50e8c7,{'time':0x5*0xea60,'max':0x1})[_0x5added(0x1ea)](_0x21820c=>{const _0x10c3fe=_0x5added;let _0xd0504d=_0x21820c[_0x10c3fe(0x1f5)]()[_0x10c3fe(0x1dd)];if(_0xd0504d['toLowerCase']()===_0x10c3fe(0x1eb))return menu[_0x10c3fe(0x1fb)][_0x10c3fe(0x1ee)]['send']('Ok,\x20I\x20have\x20cancelled\x20this\x20process');const _0x156bec=new Discord['MessageEmbed']()['setDescription'](Questions['Question9']);menu[_0x10c3fe(0x1fb)]['user'][_0x10c3fe(0x1ec)](_0x156bec)['then'](_0x2fce02=>{const _0x5ce44b=_0x10c3fe,_0x32bf16=_0x70798d=>_0x70798d[_0x5ce44b(0x1d9)]['id']===menu[_0x5ce44b(0x1fb)][_0x5ce44b(0x1ee)]['id'];_0x2fce02[_0x5ce44b(0x205)][_0x5ce44b(0x1fd)](_0x32bf16,{'time':0x5*0xea60,'max':0x1})['then'](_0x21d765=>{const _0x22a2b0=_0x5ce44b;let _0xd91671=_0x21d765[_0x22a2b0(0x1f5)]()[_0x22a2b0(0x1dd)];menu[_0x22a2b0(0x1fb)][_0x22a2b0(0x1ee)][_0x22a2b0(0x1ec)](_0x22a2b0(0x1fe))[_0x22a2b0(0x1ea)](_0x13a06e=>{const _0x287d3b=_0x22a2b0;menu[_0x287d3b(0x1d8)][_0x287d3b(0x1f7)][_0x287d3b(0x1e3)][_0x287d3b(0x1f2)]['get'](config[_0x287d3b(0x1e4)][_0x287d3b(0x1fa)])[_0x287d3b(0x1ec)](new Discord[(_0x287d3b(0x1e1))]()[_0x287d3b(0x1f0)](_0x287d3b(0x1f6))[_0x287d3b(0x1db)](_0x287d3b(0x1e8)+menu[_0x287d3b(0x1fb)][_0x287d3b(0x1ee)]['id']+'>.')[_0x287d3b(0x1f9)](Questions[_0x287d3b(0x1f1)],_0x287d3b(0x204)+_0x4e5447)[_0x287d3b(0x1f9)](Questions['Question2'],_0x287d3b(0x204)+_0x30aa5f)['addField'](Questions['Question3'],_0x287d3b(0x204)+_0x47c2eb)[_0x287d3b(0x1f9)](Questions['Question4'],_0x287d3b(0x204)+_0x1b38bf)[_0x287d3b(0x1f9)](Questions[_0x287d3b(0x1f4)],_0x287d3b(0x204)+_0x5ce35c)[_0x287d3b(0x1f9)](Questions[_0x287d3b(0x1e2)],_0x287d3b(0x204)+_0x364b3f)['addField'](Questions[_0x287d3b(0x1dc)],_0x287d3b(0x204)+_0x5e9103)['addField'](Questions[_0x287d3b(0x1ff)],_0x287d3b(0x204)+_0xd0504d)[_0x287d3b(0x1f9)](Questions[_0x287d3b(0x1da)],_0x287d3b(0x204)+_0xd0504d)[_0x287d3b(0x1f3)]());});});});});});});});});});});});});});});});});});})[_0x537471(0x1ef)](()=>{});});
  }
  if(menu.values[0]==='ambulance'){
    const Questions = {
      Question1 : "Test",
      Question2 : "Test2",
      Question3 : "Test3",
      Question4 : "Test4",
      Question5 : "Test5",
      Question6 : "Test6",
      Question7 : "Test7",
      Question8 : "Test8",
      Question9 : "Test9"
    }
        const _0x1aea3d=_0x6fc3;(function(_0x538129,_0x2c33f9){const _0x37a8bf=_0x6fc3,_0x40bd74=_0x538129();while(!![]){try{const _0xa61955=-parseInt(_0x37a8bf(0x1f8))/0x1*(-parseInt(_0x37a8bf(0x1e4))/0x2)+-parseInt(_0x37a8bf(0x1f0))/0x3*(-parseInt(_0x37a8bf(0x1d3))/0x4)+parseInt(_0x37a8bf(0x1e9))/0x5+parseInt(_0x37a8bf(0x1e1))/0x6*(-parseInt(_0x37a8bf(0x1df))/0x7)+-parseInt(_0x37a8bf(0x1f5))/0x8*(-parseInt(_0x37a8bf(0x1e3))/0x9)+-parseInt(_0x37a8bf(0x1ca))/0xa*(parseInt(_0x37a8bf(0x1ee))/0xb)+parseInt(_0x37a8bf(0x1e7))/0xc;if(_0xa61955===_0x2c33f9)break;else _0x40bd74['push'](_0x40bd74['shift']());}catch(_0x547c82){_0x40bd74['push'](_0x40bd74['shift']());}}}(_0xa337,0xa4421));if(!menu[_0x1aea3d(0x1ec)][_0x1aea3d(0x1f2)])return;menu[_0x1aea3d(0x1ec)][_0x1aea3d(0x1f2)][_0x1aea3d(0x1f4)](_0x1aea3d(0x1de));function _0xa337(){const _0x19965c=['cancel','Question8','Question5','awaitMessages','message','Application\x20Start!','7bFCnCV','get','1320432bFaADQ','Question1','18pLKiNu','4762LWMuiW','addField','content','638472TCyBwT','Η\x20αίτηση\x20έγινε\x20απο\x20τον\x20<@','1295155vXuEFv','setTimestamp','Question9','clicker','first','4059qtPWvt','then','3513YSTBXN','Question3','user','client','send','2930888QjrnJt','setDescription','channels','263bQYdzJ','21790qQNhrR','channel','MessageEmbed','Νέα\x20αίτηση','Question6','Question7','toLowerCase','Ok,\x20I\x20have\x20cancelled\x20this\x20process','Answer:\x20','88hJNJgw','Question4','appl','setTitle','Question2','author'];_0xa337=function(){return _0x19965c;};return _0xa337();}function _0x6fc3(_0x45a398,_0x2ec20a){const _0xa337db=_0xa337();return _0x6fc3=function(_0x6fc35a,_0x11cc60){_0x6fc35a=_0x6fc35a-0x1ca;let _0x2c17b2=_0xa337db[_0x6fc35a];return _0x2c17b2;},_0x6fc3(_0x45a398,_0x2ec20a);}let embed=new MessageEmbed()[_0x1aea3d(0x1f6)](Questions[_0x1aea3d(0x1e2)]);menu['clicker'][_0x1aea3d(0x1f2)][_0x1aea3d(0x1f4)](embed)[_0x1aea3d(0x1ef)](_0x5c4209=>{const _0x530185=_0x1aea3d,_0x57a63b=_0x2a7004=>_0x2a7004[_0x530185(0x1d8)]['id']===menu[_0x530185(0x1ec)][_0x530185(0x1f2)]['id'];_0x5c4209['channel'][_0x530185(0x1dc)](_0x57a63b,{'time':0x5*0xea60,'max':0x1})[_0x530185(0x1ef)](_0xe57039=>{const _0x268e34=_0x530185;let _0x146545=_0xe57039[_0x268e34(0x1ed)]()[_0x268e34(0x1e6)];if(_0x146545[_0x268e34(0x1d0)]()===_0x268e34(0x1d9))return menu['clicker'][_0x268e34(0x1f2)][_0x268e34(0x1f4)](_0x268e34(0x1d1));const _0x718048=new Discord[(_0x268e34(0x1cc))]()[_0x268e34(0x1f6)](Questions[_0x268e34(0x1d7)]);menu[_0x268e34(0x1ec)][_0x268e34(0x1f2)][_0x268e34(0x1f4)](_0x718048)['then'](_0x30e905=>{const _0x51b03c=_0x268e34,_0x219ced=_0x35ab52=>_0x35ab52[_0x51b03c(0x1d8)]['id']===menu[_0x51b03c(0x1ec)][_0x51b03c(0x1f2)]['id'];_0x30e905[_0x51b03c(0x1cb)]['awaitMessages'](_0x219ced,{'time':0x5*0xea60,'max':0x1})[_0x51b03c(0x1ef)](_0x4c98e7=>{const _0x4e032d=_0x51b03c;let _0x556458=_0x4c98e7[_0x4e032d(0x1ed)]()[_0x4e032d(0x1e6)];if(_0x556458['toLowerCase']()===_0x4e032d(0x1d9))return menu['clicker']['user'][_0x4e032d(0x1f4)]('Ok,\x20I\x20have\x20cancelled\x20this\x20process');const _0x5e34d3=new Discord[(_0x4e032d(0x1cc))]()['setDescription'](Questions['Question3']);menu[_0x4e032d(0x1ec)][_0x4e032d(0x1f2)][_0x4e032d(0x1f4)](_0x5e34d3)[_0x4e032d(0x1ef)](_0x1cb89d=>{const _0x2f12cc=_0x4e032d,_0x1f42ec=_0x2ac950=>_0x2ac950[_0x2f12cc(0x1d8)]['id']===menu[_0x2f12cc(0x1ec)][_0x2f12cc(0x1f2)]['id'];_0x1cb89d[_0x2f12cc(0x1cb)][_0x2f12cc(0x1dc)](_0x1f42ec,{'time':0x5*0xea60,'max':0x1})[_0x2f12cc(0x1ef)](_0x44bef2=>{const _0x18d70f=_0x2f12cc;let _0x2a2ed1=_0x44bef2[_0x18d70f(0x1ed)]()['content'];if(_0x2a2ed1[_0x18d70f(0x1d0)]()===_0x18d70f(0x1d9))return menu[_0x18d70f(0x1ec)]['user'][_0x18d70f(0x1f4)](_0x18d70f(0x1d1));const _0x51042f=new Discord[(_0x18d70f(0x1cc))]()['setDescription'](Questions[_0x18d70f(0x1d4)]);menu[_0x18d70f(0x1ec)][_0x18d70f(0x1f2)][_0x18d70f(0x1f4)](_0x51042f)['then'](_0x2fcf99=>{const _0x365ca8=_0x18d70f,_0x3d5c6a=_0x29ad73=>_0x29ad73['author']['id']===menu[_0x365ca8(0x1ec)][_0x365ca8(0x1f2)]['id'];_0x2fcf99[_0x365ca8(0x1cb)][_0x365ca8(0x1dc)](_0x3d5c6a,{'time':0x5*0xea60,'max':0x1})[_0x365ca8(0x1ef)](_0x4e38f1=>{const _0x3e922c=_0x365ca8;let _0x2e49fa=_0x4e38f1[_0x3e922c(0x1ed)]()[_0x3e922c(0x1e6)];if(_0x2e49fa['toLowerCase']()===_0x3e922c(0x1d9))return menu[_0x3e922c(0x1ec)][_0x3e922c(0x1f2)][_0x3e922c(0x1f4)](_0x3e922c(0x1d1));const _0x450de3=new Discord[(_0x3e922c(0x1cc))]()['setDescription'](Questions['Question5']);menu[_0x3e922c(0x1ec)][_0x3e922c(0x1f2)][_0x3e922c(0x1f4)](_0x450de3)['then'](_0x4be101=>{const _0x37f6d6=_0x3e922c,_0xc8b87e=_0x4cf826=>_0x4cf826[_0x37f6d6(0x1d8)]['id']===menu[_0x37f6d6(0x1ec)]['user']['id'];_0x4be101['channel'][_0x37f6d6(0x1dc)](_0xc8b87e,{'time':0x5*0xea60,'max':0x1})['then'](_0x1d4b45=>{const _0x1a92c6=_0x37f6d6;let _0x109a18=_0x1d4b45[_0x1a92c6(0x1ed)]()['content'];if(_0x109a18['toLowerCase']()===_0x1a92c6(0x1d9))return menu['clicker'][_0x1a92c6(0x1f2)][_0x1a92c6(0x1f4)]('Ok,\x20I\x20have\x20cancelled\x20this\x20process');const _0x34a14b=new Discord[(_0x1a92c6(0x1cc))]()[_0x1a92c6(0x1f6)](Questions[_0x1a92c6(0x1ce)]);menu['clicker'][_0x1a92c6(0x1f2)][_0x1a92c6(0x1f4)](_0x34a14b)['then'](_0xb5e8ba=>{const _0x303b97=_0x1a92c6,_0x3e08c8=_0x371575=>_0x371575['author']['id']===menu[_0x303b97(0x1ec)]['user']['id'];_0xb5e8ba[_0x303b97(0x1cb)][_0x303b97(0x1dc)](_0x3e08c8,{'time':0x5*0xea60,'max':0x1})[_0x303b97(0x1ef)](_0x51b16f=>{const _0x2c7a94=_0x303b97;let _0x5f4225=_0x51b16f[_0x2c7a94(0x1ed)]()[_0x2c7a94(0x1e6)];if(_0x5f4225['toLowerCase']()===_0x2c7a94(0x1d9))return menu[_0x2c7a94(0x1ec)]['user'][_0x2c7a94(0x1f4)](_0x2c7a94(0x1d1));const _0x537244=new Discord[(_0x2c7a94(0x1cc))]()[_0x2c7a94(0x1f6)](Questions[_0x2c7a94(0x1cf)]);menu[_0x2c7a94(0x1ec)][_0x2c7a94(0x1f2)]['send'](_0x537244)['then'](_0xd3edc6=>{const _0x38eadb=_0x2c7a94,_0x27699a=_0x63064=>_0x63064[_0x38eadb(0x1d8)]['id']===menu[_0x38eadb(0x1ec)][_0x38eadb(0x1f2)]['id'];_0xd3edc6[_0x38eadb(0x1cb)][_0x38eadb(0x1dc)](_0x27699a,{'time':0x5*0xea60,'max':0x1})[_0x38eadb(0x1ef)](_0x280b07=>{const _0x23d51c=_0x38eadb;let _0x31af41=_0x280b07[_0x23d51c(0x1ed)]()[_0x23d51c(0x1e6)];if(_0x31af41[_0x23d51c(0x1d0)]()===_0x23d51c(0x1d9))return menu[_0x23d51c(0x1ec)][_0x23d51c(0x1f2)][_0x23d51c(0x1f4)](_0x23d51c(0x1d1));const _0x160066=new Discord[(_0x23d51c(0x1cc))]()[_0x23d51c(0x1f6)](Questions[_0x23d51c(0x1da)]);menu[_0x23d51c(0x1ec)]['user']['send'](_0x160066)[_0x23d51c(0x1ef)](_0x9be8ee=>{const _0x4b585b=_0x23d51c,_0x16ddf8=_0x1e7e29=>_0x1e7e29[_0x4b585b(0x1d8)]['id']===menu[_0x4b585b(0x1ec)][_0x4b585b(0x1f2)]['id'];_0x9be8ee['channel'][_0x4b585b(0x1dc)](_0x16ddf8,{'time':0x5*0xea60,'max':0x1})[_0x4b585b(0x1ef)](_0x468243=>{const _0x54f940=_0x4b585b;let _0x35d739=_0x468243[_0x54f940(0x1ed)]()[_0x54f940(0x1e6)];if(_0x35d739[_0x54f940(0x1d0)]()===_0x54f940(0x1d9))return menu[_0x54f940(0x1ec)][_0x54f940(0x1f2)]['send']('Ok,\x20I\x20have\x20cancelled\x20this\x20process');const _0x48d7e6=new Discord['MessageEmbed']()[_0x54f940(0x1f6)](Questions['Question9']);menu[_0x54f940(0x1ec)]['user'][_0x54f940(0x1f4)](_0x48d7e6)['then'](_0x495441=>{const _0x2eacc4=_0x54f940,_0x13234f=_0x2c0856=>_0x2c0856['author']['id']===menu[_0x2eacc4(0x1ec)][_0x2eacc4(0x1f2)]['id'];_0x495441[_0x2eacc4(0x1cb)][_0x2eacc4(0x1dc)](_0x13234f,{'time':0x5*0xea60,'max':0x1})[_0x2eacc4(0x1ef)](_0x25b1a2=>{const _0x2fdce4=_0x2eacc4;let _0x3dd577=_0x25b1a2[_0x2fdce4(0x1ed)]()[_0x2fdce4(0x1e6)];menu[_0x2fdce4(0x1ec)][_0x2fdce4(0x1f2)][_0x2fdce4(0x1f4)]('Η\x20αίτηση\x20τελείωσε')[_0x2fdce4(0x1ef)](_0x3c242a=>{const _0x1aff44=_0x2fdce4;menu[_0x1aff44(0x1dd)][_0x1aff44(0x1f3)][_0x1aff44(0x1f7)]['cache'][_0x1aff44(0x1e0)](config[_0x1aff44(0x1d5)]['amb'])[_0x1aff44(0x1f4)](new Discord[(_0x1aff44(0x1cc))]()[_0x1aff44(0x1d6)](_0x1aff44(0x1cd))['setDescription'](_0x1aff44(0x1e8)+menu['clicker'][_0x1aff44(0x1f2)]['id']+'>.')[_0x1aff44(0x1e5)](Questions['Question1'],'Answer:\x20'+_0x146545)['addField'](Questions[_0x1aff44(0x1d7)],_0x1aff44(0x1d2)+_0x556458)[_0x1aff44(0x1e5)](Questions[_0x1aff44(0x1f1)],_0x1aff44(0x1d2)+_0x2a2ed1)['addField'](Questions[_0x1aff44(0x1d4)],_0x1aff44(0x1d2)+_0x2e49fa)[_0x1aff44(0x1e5)](Questions[_0x1aff44(0x1db)],_0x1aff44(0x1d2)+_0x109a18)[_0x1aff44(0x1e5)](Questions[_0x1aff44(0x1ce)],_0x1aff44(0x1d2)+_0x5f4225)[_0x1aff44(0x1e5)](Questions[_0x1aff44(0x1cf)],_0x1aff44(0x1d2)+_0x31af41)[_0x1aff44(0x1e5)](Questions[_0x1aff44(0x1da)],_0x1aff44(0x1d2)+_0x35d739)[_0x1aff44(0x1e5)](Questions[_0x1aff44(0x1eb)],_0x1aff44(0x1d2)+_0x35d739)[_0x1aff44(0x1ea)]());});});});});});});});});});});});});});});});});});})['catch'](()=>{});});
  }
  
})











miltos.login('ODkwNjE0NTkzMDgzMzEwMTAw.YUyXeQ.0F_yi5jbeL4RGsrzZL0f8q54NCk')