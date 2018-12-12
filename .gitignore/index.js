
const Discord = require('discord.js');
const clientDiscord = new Discord.Client();

var prefix = "!";
var role = "";
var ran = 0;
var author = "";

var on = true;
var LogicOnPlay = 0;
var Quiz = 0;

var playto = "boire une tasse de modafinil";

var Rlevel = 0;

clientDiscord.on('ready', ()=> {
	
	clientDiscord.user.setPresence({ game: { name: playto, type: 0}});

    console.log("BOT ready");
});

clientDiscord.login(process.env.TOKEN);

	clientDiscord.on('message', message => {

	author = message.author.tag;

		if(author == "Grande reine des poulettes" || author == "LeCafé#7125" || author == "Nougat forever ❤#8720" || author == "Cassossier#1469"){
			Rlevel = 1;
		}else{Rlevel = 0;}
		
		if(on == true){

			if(message.content === prefix + "run Kuiz" && message.channel.name == "bot-quiz"){

				LogicOnPlay = 1;

				message.channel.send("Programme **Kuiz** lancé !");

				random();

				if(ran <= 25){
					Quiz = 1;
					message.channel.send("Question 01 : **Quand a été crée Saunique** (ecrivez dans le chat **!A**, **!B** ou **!C**)"
					+ "```A : 1994```" + "```B : 1991```" + "```C : wallah c kom marieau```");

				}
				if(ran > 25 && ran <= 50){
					Quiz = 2;
					message.channel.send("Question 02 : **quel est le nom de l'état de la matiere entre fluid et gaz ?** (ecrivez dans le chat **!A**, **!B** ou **!C**)"
					+ "```A : Fluid Super critique```" + "```B : Fluide super condensé```" + "```C : Plasma```");

				}
				if(ran > 50 && ran <= 75){
					Quiz = 3;
					message.channel.send("Question 03 : **Quel est le nom du genre cinématographique visant à montrer un groupe de jeune personne se faisant tué par un individu masqué ?** (ecrivez dans le chat **!A**, **!B** ou **!C**)"
					+ "```A : Le Slasher```" + "```B : Le Giallo```" + "```C : Le Film d'Horreur```");

				}
				if(ran > 75 && ran <= 100){
					Quiz = 4;
					message.channel.send("Question 04 : **la réponse de l'équation x²=2** (ecrivez dans le chat **!A**, **!B** ou **!C**)"
					+ "```A : 42```" + "```B : √2 ou -√2```" + "```C : impossible```");

				}
			}
				if(message.content === prefix + ("run Kuiz 1")){
					LogicOnPlay = 1;
					message.channel.send("Programme **Kuiz** lancé !");
					Quiz = 1;
					message.channel.send("Question 01 : **Quand a été crée Saunique** (ecrivez dans le chat **!A**, **!B** ou **!C**)"
					+ "```A : 1994```" + "```B : 1991```" + "```C : wallah c kom marieau```");

				}
				if(message.content === prefix + ("run Kuiz 2")){
					LogicOnPlay = 1;
					message.channel.send("Programme **Kuiz** lancé !");
					Quiz = 2;
					message.channel.send("Question 02 : **quel est le nom de l'état de la matiere entre fluid et gaz ?** (ecrivez dans le chat **!A**, **!B** ou **!C**)"
					+ "```A : Fluid Super critique```" + "```B : Fluide super condensé```" + "```C : Plasma```");

				}
				if(message.content === prefix + ("run Kuiz 3")){
					LogicOnPlay = 1;
					message.channel.send("Programme **Kuiz** lancé !");
					Quiz = 3;
					message.channel.send("Question 03 : **Quel est le nom du genre cinématographique visant à montrer un groupe de jeune personne se faisant tué par un individu masqué ?** (ecrivez dans le chat **!A**, **!B** ou **!C**)"
					+ "```A : Le Slasher```" + "```B : Le Giallo```" + "```C : Le Film d'Horreur```");

				}
				if(message.content === prefix + ("run Kuiz 4")){
					LogicOnPlay = 1;
					message.channel.send("Programme **Kuiz** lancé !");
					Quiz = 4;
					message.channel.send("Question 04 : **la réponse de l'équation x²=2** (ecrivez dans le chat **!A**, **!B** ou **!C**)"
					+ "```A : 42```" + "```B : √2 ou -√2```" + "```C : impossible```");

				}
			
				if(message.content === prefix + ("run Kuiz 5")){
					LogicOnPlay = 1;
					message.channel.send("Programme **Kuiz** lancé !");
					Quiz = 5;
					message.channel.send("Question 01 : **Quel est l'age de l'univers** (ecrivez dans le chat **!A**, **!B** ou **!C**)"
					+ "```A : 35 ans```" + "```B : 13.5Mrds d'année```" + "```C : 10Mrds d'année```");

				}
				if(message.content === prefix + ("run Kuiz 6")){
					LogicOnPlay = 1;
					message.channel.send("Programme **Kuiz** lancé !");
					Quiz = 6;
					message.channel.send("Question 02 : **Qui est julien lepers** (ecrivez dans le chat **!A**, **!B** ou **!C**)"
					+ "```A : 42```" + "```B : 42```" + "```C : 42```");

				}
				if(message.content === prefix + ("run Kuiz 7")){
					LogicOnPlay = 1;
					message.channel.send("Programme **Kuiz** lancé !");
					Quiz = 7;
					message.channel.send("Question 03 : **quel est le café composé d'eau caude et d'espresso** (ecrivez dans le chat **!A**, **!B** ou **!C**)"
					+ "```A : le Latte```" + "```B : l'Americano```" + "```C : le Moka```");

				}
				if(message.content === prefix + ("run Kuiz 8")){
					LogicOnPlay = 1;
					message.channel.send("Programme **Kuiz** lancé !");
					Quiz = 8;
					message.channel.send("Question 04 : **quel est la réponce D ?** (ecrivez dans le chat **!A**, **!B** ou **!C**)"
					+ "```A : A```" + "```B : B```" + "```C : B```");

				}

			if(LogicOnPlay == 1){

				if(message.content === prefix + "B" && Quiz == 1){
					message.channel.send("**ET UI UI UI UI, C'EST LA BONNE REPONSE !!** *pour pouvoir rejouer, écrit **!run Kuiz** dans ce channel !*");
					LogicOnPlay = 0;
					Quiz = 0;
					
				}
				if(message.content === prefix + "A" && Quiz == 2){

					message.channel.send("**KIWI WI WI WIIII, C'EST LA REPONSE BONNE !! (on aime les blagues ici)** *pour pouvoir rejouer, écrit **!run Kuiz** dans ce channel !*");
					LogicOnPlay = 0;
					Quiz = 0;
					
				}
				if(message.content === prefix + "B" && Quiz == 3){
					message.channel.send("**oé ta gagné laul t tro faurr** *pour pouvoir rejouer, écrit **!run Kuiz** dans ce channel !*");
					LogicOnPlay = 0;
					Quiz = 0;
					
				}
				if(message.content === prefix + "B" && Quiz == 4){
					message.channel.send("**oui, c'est vrai, rien n'est faux ! https://www.youtube.com/watch?v=OwcORv0iOWY ** *pour pouvoir rejouer, écrit **!run Kuiz** dans ce channel !*");
					LogicOnPlay = 0;
					Quiz = 0;
					
				}
				
				if(message.content === prefix + "B" && Quiz == 5){
					message.channel.send("**ET UI UI UI UI, C'EST LA BONNE REPONSE !!** *pour pouvoir rejouer, écrit **!run Kuiz** dans ce channel !*");
					LogicOnPlay = 0;
					Quiz = 0;
					
				}
				if(message.content === prefix + "A" && Quiz == 6){

					message.channel.send("**KIWI WI WI WIIII, C'EST LA REPONSE BONNE !! (on aime les blagues ici)** *pour pouvoir rejouer, écrit **!run Kuiz** dans ce channel !*");
					LogicOnPlay = 0;
					Quiz = 0;
					
				}
				if(message.content === prefix + "B" && Quiz == 7){
					message.channel.send("**oé ta gagné laul t tro faurr** *pour pouvoir rejouer, écrit **!run Kuiz** dans ce channel !*");
					LogicOnPlay = 0;
					Quiz = 0;
					
				}
				if(message.content === prefix + "D" && Quiz == 8){
					message.channel.send("**oui, c'est vrai, rien n'est faux ! https://www.youtube.com/watch?v=OwcORv0iOWY ** *pour pouvoir rejouer, écrit **!run Kuiz** dans ce channel !*");
					LogicOnPlay = 0;
					Quiz = 0;
					
				}

				if(Quiz == 1){
					if(message.content === prefix + "A" || message.content === prefix + "C"){
						message.channel.send("**nop, Game Over, lol** *pour pouvoir rejouer, écrit **!run Kuiz** dans ce channel !*");
						LogicOnPlay = 0;
					}
				}

				if(Quiz == 2){
					if(message.content === prefix + "B" || message.content === prefix + "C"){
						message.channel.send("**VRAIMENT PAS DE BOL, C'EST FAUX** *pour pouvoir rejouer, écrit **!run Kuiz** dans ce channel !*");
						LogicOnPlay = 0;
					}
				}

				if(Quiz == 3){
					if(message.content === prefix + "C" || message.content === prefix + "A") {
						message.channel.send("**c'est l'inverse de la bonne reponse aya** *pour pouvoir rejouer, écrit **!run Kuiz** dans ce channel !*");
						LogicOnPlay = 0;
					}
				}

				if(Quiz == 4){
					if(message.content === prefix + "A" || message.content === prefix + "C"){
						message.channel.send("**Nup (pourtan CT izi)** *pour pouvoir rejouer, écrit **!run Kuiz** dans ce channel !*");
						LogicOnPlay = 0;
					}
				}
				
				if(Quiz == 5){
					if(message.content === prefix + "A" || message.content === prefix + "C"){
						message.channel.send("**nop, Game Over, lol** *pour pouvoir rejouer, écrit **!run Kuiz** dans ce channel !*");
						LogicOnPlay = 0;
					}
				}

				if(Quiz == 6){
					if(message.content === prefix + "B" || message.content === prefix + "C"){
						message.channel.send("**VRAIMENT PAS DE BOL, C'EST FAUX** *pour pouvoir rejouer, écrit **!run Kuiz** dans ce channel !*");
						LogicOnPlay = 0;
					}
				}

				if(Quiz == 7){
					if(message.content === prefix + "C" || message.content === prefix + "A") {
						message.channel.send("**c'est l'inverse de la bonne reponse aya** *pour pouvoir rejouer, écrit **!run Kuiz** dans ce channel !*");
						LogicOnPlay = 0;
					}
				}

				if(Quiz == 8){
					if(message.content === prefix + "A" || message.content === prefix + "C" || message.content === prefix + "B"){
						message.channel.send("**Nup (pourtan CT izi)** *pour pouvoir rejouer, écrit **!run Kuiz** dans ce channel !*");
						LogicOnPlay = 0;
					}
				}

				if(Quiz == 2){
					if(message.content === prefix + "B" || message.content === prefix + "C"){
						message.channel.send("**VRAIMENT PAS DE BOL, C'EST FAUX** *pour pouvoir rejouer, écrit **!run Kuiz** dans ce channel !*");
						LogicOnPlay = 0;
					}
				}

				if(Quiz == 3){
					if(message.content === prefix + "C" || message.content === prefix + "A") {
						message.channel.send("**c'est l'inverse de la bonne reponse aya** *pour pouvoir rejouer, écrit **!run Kuiz** dans ce channel !*");
						LogicOnPlay = 0;
					}
				}

				if(Quiz == 4){
					if(message.content === prefix + "A" || message.content === prefix + "C"){
						message.channel.send("**Nup (pourtan CT izi)** *pour pouvoir rejouer, écrit **!run Kuiz** dans ce channel !*");
						LogicOnPlay = 0;
					}
					
			}
		}

			/*if(message.content === prefix + "run P+" && message.channel.name == "bot-quiz"){
				LogicOnPlay ++;
				message.channel.send("Programme **P"+ LogicOnPlay + "** lancé !");
			}*/

			if(message.content === prefix + "help"){
				message.author.send("DANS LE SALON bot-quiz : **!run Kuiz** ou **!run Kuiz + numero de la queston**"
									+"DANS LE SALON commandes-bots : **!noraj**, **!ban**, **!dice**, **!ploufplouf**, **!echo**");
			}

			if(message.content === prefix + "nsfw"){
				
				message.channel.send("c'est pas gentil d'être mechant avec les brigands");
			}
			
			if(message.content === prefix + "ban"){
				
				message.channel.send("application d'un calmez-vous sur " + author);
			}
			
			if(message.content === prefix + "scp-173"){
				
				message.channel.reply("http://fondationscp.wikidot.com/scp-173");
			}
			
			if(message.content === prefix + "scp-682"){
				
				message.channel.reply("http://fondationscp.wikidot.com/scp-682");
			}
			
			if(message.content === prefix + "closedcase"){
				
				message.channel.send("**=======================AFFAIRE CLASSÉE=======================**");
			}
			
			if(message.content === prefix + "pax"){
				
				message.channel.send("**LA PAIX BANDE DE SOUS-HOMME**");
			}
			
			if(message.content === prefix + "ta-geule-navril-putain-bordel"){
				
				message.channel.send("oké ParDon JeU SuIs DeZolé");
			}
			
			if(message.content === prefix + "noraj"){
				message.channel.send("*sois gentil pas méchant c'est pas gentil d'être méchant c’est mieux d’être gentil*");
			}

			/*if (message.content.includes('pd') || message.content.includes('PD') || message.content.includes('Pd') || message.content.includes('pD')) {
				message.delete();
				message.author.send("*pd*");
				console.log("pd spotted");
			  }*/

			if (message.content.includes("@everyone @everyone")) {
				message.delete();
				message.author.send("*c'est pas drole mec...*")
				console.log("everyone spotted");
			}

			if (message.content.includes("bonjour") || message.content.includes('salut') && message.content.includes('t-manager') && message.author.tag != "t-manager#0637") {
				message.channel.send("*Bonjour à vous !*")
				console.log("bonjour spotted");
			}

			if(message.content === prefix + "ploufplouf" && message.channel.name == "bots"){
				random();
				message.channel.send("*une boule en or c'est toi qui sort au bout de trois, 1 2 3 !*");
				message.channel.send("*mais comme le roi ne le veut pas ce sera toi !*");
				if(ran <= 20){message.channel.send("*c'est **Navril** le meilleur modo !*")}
				if(ran > 20 && ran <= 40){message.channel.send("*c'est **Anzu Miu** la meilleure modo !*")}
				if(ran > 40 && ran <= 60){message.channel.send("*c'est **Le Trikiteur** le meilleur modo !*")}
				if(ran > 60 && ran <= 80){message.channel.send("*c'est **CoffeeSalty** le meilleur modo !*")}
				if(ran > 80){message.channel.send("*c'est **LeP’titFantom** le meilleur modo ! lol*")}
			}

			if(message.content === prefix + "dice" && message.channel.name == "bots"){
				random();
				message.channel.send("**vous pratiquez le lancer de dé !** le resultat est **" + ran + "** / 100");
				if(ran == 1){message.channel.send("*noraj d'avoir fais 1 ^^*");}
				if(ran == 100){message.channel.send("*bien ouej*");}
				if(ran == 54){message.channel.send("*t'es un genie mon gars tu merite un role en plus*");
				console.log("UN GENIE");
			}
				
			}
		}

		if(message.content === prefix + "off" && message.author.tag == "navril#1518"){
			clientDiscord.user.setPresence({ game: { name: 'BOT OFF', type: 0}});
			on = false;
			message.channel.send("**BOT OFF**");
		}

		if(message.content === prefix + "on" && message.author.tag == "navril#1518"){
			clientDiscord.user.setPresence({ game: { name: playto, type: 0}});
			on = true;
			message.channel.send("**BOT ON**");
		}

		if(message.content === prefix + "off" && message.author.tag == "Le Trikiteur#1605"){
			clientDiscord.user.setPresence({ game: { name: 'BOT OFF', type: 0}});
			on = false;
			message.channel.send("**BOT OFF**");
		}

		if(message.content === prefix + "on" && message.author.tag == "Le Trikiteur#1605"){
			clientDiscord.user.setPresence({ game: { name: playto, type: 0}});
			on = true;
			message.channel.send("**BOT ON**");
		}

		if(message.content === prefix + "off" && Rlevel == 1){
			clientDiscord.user.setPresence({ game: { name: 'BOT OFF', type: 0}});
			on = false;
			message.channel.send("**BOT OFF**");
		}

		if(message.content === prefix + "on" && Rlevel == 1){
			clientDiscord.user.setPresence({ game: { name: playto, type: 0}});
			on = true;
			message.channel.send("**BOT ON**");
		}
  });

  clientDiscord.on('guildMemberAdd', member => {

});

function random(min, max){
	min = Math.ceil(1);
	max = Math.floor(100);
	ran = Math.floor(Math.random() * (max - min + 1) + min);
	console.log("dice try !");
}
