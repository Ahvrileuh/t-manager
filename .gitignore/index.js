const Discord = require('discord.js');
const clientDiscord = new Discord.Client();

var prefix = "!";
var playto = "";

var admins = ["464098201591349248", "515976128662339594", "624335277749698611", "323115884254199808", "287540207031418881"]
var pseudos = ["Coma", "Levure", "Xuluf", "Navril", "Potassium"]
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var bobux = [0, 0, 0, 0]

var nword = ""
var endtime = 0

clientDiscord.on('ready', () => {
	
	clientDiscord.user.setPresence({ game: { name: playto, type: 0}});

	console.log("Bot Ready");
});

clientDiscord.login(process.env.TOKEN);
	
clientDiscord.on('message', message => {

    x = 0
    admit = 10

    p = random(x, 1, 100)

    if(p <= admit && isAdmin(message.author.id)){
        bobux[trackAdmin(message.author.id)] += 10;
    }

    if(nword != "" && CountDown(endtime) > 0 && message.content.includes(nword)){

        var days = Math.floor(CountDown(endtime) / (1000 * 60 * 60 * 24));
        var hours = Math.floor((CountDown(endtime) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((CountDown(endtime) % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((CountDown(endtime) % (1000 * 60)) / 1000);

        message.reply("Ce mot est interdit ! Temps restant de bannisement : **" + days + "** jours **" + hours + "** heures **" + minutes + "** minutes **" + seconds + "** secondes")
        message.delete()
    }

    if(message.content === prefix + "add"){
        if(isAdmin(message.author.id)){
            role = message.guild.roles.find('name', 'Développeur');
            message.member.addRole(role);
            message.channel.send("role ajouté à " + message.author);
        }
    }

    else if(message.content.startsWith(prefix + "get bobux") && message.author.id == "323115884254199808"){

            b = findNumbers(message.content, 10)
            if(b > 0){
            buf = getBobux(message.author.id, b)
            message.channel.send(b + " Bobux ont été ajoutés à votre compte ! Vous avez **" + buf + "** Bobux")
            }else{message.channel.send("--'")}
    }

    else if(message.content.startsWith(prefix + "bobux")){

        for (let i = 0; i < admins.length; i++) {
            if(message.author.id == admins[i]){
                message.reply("Vous avez **" + bobux[i] + "** Bobux")
            }
            
        }
    }

    else if(message.content.startsWith(prefix + "send bobux")){
        var bobx = findNumbers(message.content, 11);

        if(bobx > 0){
            var receiver = "";
            console.log(bobx)
	    

            for (let i = 0; i < admins.length; i++) {
                if(message.isMentioned(admins[i])){
                    receiver = admins[i];
                    console.log(receiver)
                    break;
                }
            }
	if(receiver != message.author.id){
            var v = trade(receiver, message.author.id, bobx)
            message.channel.send("Transfert d'argent effectué ! Transfert de : **" + bobx + "** Bobux à " + receiver)
	}else{message.channel.send("--'")}
        }else{message.channel.send("--'")}
    }

    else if(message.content === prefix + "rank"){
        message.channel.send(top())
    }

    else if(message.content.startsWith(prefix + "ban")){
        if(isAdmin(message.author.id) && bobux[trackAdmin(message.author.id)] >= 100){

            bobux[trackAdmin(message.author.id)] -= 100

            for (let i = 0; i < admins.length; i++) {
                if(message.isMentioned(admins[i])){
                    isBanned = admins[i];
                    break;
                }
            }
            message.guild.ban(message.mentions.users.first())
            message.guild.unban(message.mentions.users.first())
        }else{message.reply("Vous n'avez pas assez de bobux pour faire cette commande !")}
    }

    else if(message.content.startsWith(prefix + "pseudo")){
        if(isAdmin(message.author.id) && bobux[trackAdmin(message.author.id)] >= 100){

            bobux[trackAdmin(message.author.id)] -= 100

            for (let i = 0; i < admins.length; i++) {
                if(message.isMentioned(admins[i])){
                    isBanned = admins[i];
                    break;
                }
            }
            message.guild.members.get(message.mentions.users.first().id).setNickname("名前を変更");
        }else{message.reply("Vous n'avez pas assez de bobux pour faire cette commande !")}
    }

    else if(message.content.startsWith(prefix + "deletemyname")){
        if(isAdmin(message.author.id) && bobux[trackAdmin(message.author.id)] >= 50){

            bobux[trackAdmin(message.author.id)] -= 50

            for (let i = 0; i < admins.length; i++) {
                if(message.isMentioned(admins[i])){
                    isBanned = admins[i];
                    break;
                }
            }
            message.guild.members.get(message.author.id).setNickname(message.author.username)
        }else{message.reply("Vous n'avez pas assez de bobux pour faire cette commande !")}
    }

    else if(message.content.startsWith(prefix + "hack")){
        if(isAdmin(message.author.id) && bobux[trackAdmin(message.author.id)] >= 5000){

            bobux[trackAdmin(message.author.id)] -= 5000

            for (let i = 0; i < admins.length; i++) {
                if(message.isMentioned(admins[i])){
                    isBanned = admins[i];
                    break;
                }
            }
            message.guild.setName("HACKED")
            message.guild.setVerificationLevel(4)
            clientDiscord.channels.get('666410927746187264').send("@everyone https://tenor.com/view/khacker-on-pay-load-gif-15982849");

            for (let i = 0; i < 20; i++) {
                clientDiscord.channels.get('647803806481907735').send("@everyone BOT HACKED");
            }
        }else{message.reply("Vous n'avez pas assez de bobux pour faire cette commande !")}
    }

    else if(message.content.startsWith(prefix + "avoid")){
        if(isAdmin(message.author.id) && bobux[trackAdmin(message.author.id)] >= 300 && CountDown(endtime) <= 0){
            b = message.content
            console.log(b.length)
            if(b.length > 11){
                bobux[trackAdmin(message.author.id)] -= 300
                for (let i = 0; i < b.length; i++) {
                    if(i < 7){
                        b = b.slice(1);
                        console.log(i, b)
                    }
                }
                nword = b
                console.log(nword)
                endtime = Date.now();
                endtime += 86400000

            }else{message.reply("Votre mot est trop court ! (Minimum : 5 caractères)")}

        }else{message.reply("Vous n'avez pas assez de bobux pour faire cette commande ou quelqu'un a déjà bloquer un mot aujourd'hui !")}
    }
});

function random(x, min, max){
	min = Math.ceil(min);
	max = Math.floor(max);
    x = Math.floor(Math.random() * (max - min + 1) + min);
    return x
}

function isAdmin(user){
    for (let i = 0; i < admins.length; i++) {
        if(user == admins[i]){
            return true;
        }
        
    }
    return false;
}

function top(){

    var ans = ""

    for (let i = 0; i < admins.length; i++) {
        ans = ans + pseudos[i] + " : **" + bobux[i] + "** b \n"
        
    }
    return ans
}

function trade(toWhom, formWhom, bobx){
    for (let i = 0; i < admins.length; i++) {
        if(formWhom == admins[i]){

            var idTranslator = i
            var tot = 0

            for (let j = 0; j < admins.length; j++) {
                if(toWhom == admins[j]){
                    if(bobux[idTranslator] >= bobx){
                        bobux[idTranslator] -= bobx
                        bobux[j] += bobx
                        tot = bobux[j] + bobx
                    }
                }
            }
        }
    }
    return tot;
}

function getBobux(user, bobx){
    for (let i = 0; i < admins.length; i++) {
    	if(user == admins[i]){
            bobux[i] += bobx;
	    return bobux[i]
        }
        
    }
}

function findNumbers(request, place){
    const msg = request;
    var msg2 = "";
    for (let i = 0; i < msg.length; i++) {
                
        if(i > place && i <= (place + 3)){
            msg2 = msg2 + msg[i];
        }
    }
    if(isNaN(msg2)){msg2 = "0"}
    console.log(msg2)
    return parseInt(msg2, 10);
}

function trackAdmin(user){
    for (let i = 0; i < admins.length; i++) {
        if(user == admins[i]){
            return i;
        }
        
    }
}

function CountDown(end){
    var now = Date.now();
    var delta = end - now

    return delta
    
}
