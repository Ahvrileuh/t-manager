const Discord = require('discord.js');
const clientDiscord = new Discord.Client();

var prefix = "!";
var playto = "";
var ran = 0;

var admins = ["464098201591349248", "515976128662339594", "624335277749698611", "323115884254199808"]

clientDiscord.on('ready', () => {
	
	clientDiscord.user.setPresence({ game: { name: playto, type: 0}});

	console.log("Bot Ready");
});

clientDiscord.login(process.env.TOKEN);
	
clientDiscord.on('message', message => {

    if(message.content === prefix + "add"){
        if(isAdmin(message.author.id)){
            role = message.guild.roles.find('name', 'Développeur');
            message.member.addRole(role);
            message.channel.send("role ajouté à " + message.author);
        }
    }

    if(message.content === prefix + "getAdmins"){
        console.log(isAdmin(message.author.id));
    }
});

function isAdmin(user){
    for (let i = 0; i < admins.length; i++) {
        if(user == admins[i]){
            return true;
        }
        
    }
    return false;
}
