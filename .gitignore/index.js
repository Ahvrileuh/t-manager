const Discord = require('discord.js');
const clientDiscord = new Discord.Client();

var prefix = "!";
var role = "";
var ran = 0;
var author = "";

var on = true;
var LogicOnPlay = 0;
var Quiz = 0;

clientDiscord.on('ready', ()=> {
	
	clientDiscord.user.setPresence({ game: { name: 'Faurtnaït', type: 0}});

    console.log("BOT ready");
});

clientDiscord.login('');


	clientDiscord.on('message', message => {

		author = message.author.tag;
		
		if(on == true){

			if(message.content === prefix + "run Kuiz" && message.channel.name == "bot-quiz"){

				LogicOnPlay = 1;

				message.channel.send("Programme **Kuiz** lancé !");

				random();

				if(ran <= 25){
					Quiz = 1;
					message.channel.send("Question 01 : **Quand a été crée Mario** (ecrivez dans le chat **!A**, **!B** ou **!C**)"
					+ "```A : 1984```" + "```B : 1983```" + "```C : 1515 marignan```");

				}
				if(ran > 25 && ran <= 50){
					Quiz = 2;
					message.channel.send("Question 02 : **quelle est le nom du Major du bataillon d'exploration dans *L'attaque des titans* ?** (ecrivez dans le chat **!A**, **!B** ou **!C**)"
					+ "```A : Erwin Smith```" + "```B : Hansi Zoe```" + "```C : 42```");

				}
				if(ran > 50 && ran <= 75){
					Quiz = 3;
					message.channel.send("Question 03 : **Dans le film *Alien* de Ridley Scott, quel est le nom de l'héroïne ? ** (ecrivez dans le chat **!A**, **!B** ou **!C**)"
					+ "```A : Amanda Ripley```" + "```B : Rebecca Jorden```" + "```C : Ellen Ripley ```");

				}
				if(ran > 75 && ran <= 100){
					Quiz = 4;
					message.channel.send("Question 04 : **Combien de *WhatTheCut* Antoine Daniel a-t-il sorti ?** (ecrivez dans le chat **!A**, **!B** ou **!C**)"
					+ "```A : 35```" + "```B : 37```" + "```C : 40```");

				}
			}
				if(message.content === prefix + ("run Kuiz 1")){
					LogicOnPlay = 1;
					message.channel.send("Programme **Kuiz** lancé !");
					Quiz = 1;
					message.channel.send("Question 01 : **Quand a été crée Mario** (ecrivez dans le chat **!A**, **!B** ou **!C**)"
					+ "```A : 1984```" + "```B : 1983```" + "```C : 1515 marignan```");

				}
				if(message.content === prefix + ("run Kuiz 2")){
					LogicOnPlay = 1;
					message.channel.send("Programme **Kuiz** lancé !");
					Quiz = 2;
					message.channel.send("Question 02 : **quelle est le nom du Major du bataillon d'exploration dans *L'attaque des titans* ?** (ecrivez dans le chat **!A**, **!B** ou **!C**)"
					+ "```A : Erwin Smith```" + "```B : Hansi Zoe```" + "```C : 42```");

				}
				if(message.content === prefix + ("run Kuiz 3")){
					LogicOnPlay = 1;
					message.channel.send("Programme **Kuiz** lancé !");
					Quiz = 3;
					message.channel.send("Question 03 : **Dans le film *Alien* de Ridley Scott, quel est le nom de l'héroïne ? ** (ecrivez dans le chat **!A**, **!B** ou **!C**)"
					+ "```A : Amanda Ripley```" + "```B : Rebecca Jorden```" + "```C : Ellen Ripley ```");

				}
				if(message.content === prefix + ("run Kuiz 4")){
					LogicOnPlay = 1;
					message.channel.send("Programme **Kuiz** lancé !");
					Quiz = 4;
					message.channel.send("Question 04 : **Combien de *WhatTheCut* Antoine Daniel a-t-il sorti ?** (ecrivez dans le chat **!A**, **!B** ou **!C**)"
					+ "```A : 35```" + "```B : 37```" + "```C : 40```");

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
				if(message.content === prefix + "C" && Quiz == 3){
					message.channel.send("**oé ta gagné laul t tro faurr** *pour pouvoir rejouer, écrit **!run Kuiz** dans ce channel !*");
					LogicOnPlay = 0;
					Quiz = 0;
					
				}
				if(message.content === prefix + "B" && Quiz == 4){
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
					if(message.content === prefix + "B" || message.content === prefix + "A"){
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

  			if(message.content === prefix + "echo"){
				message.channel.send("echo");
			}

			if(message.content === prefix + "ban"){
				
				message.channel.send("application d'un calmez-vous sur " + author);
			}

			if(message.content === prefix + "noraj"){
				message.channel.send("*sois gentil pas méchant c'est pas gentil d'être méchant c’est mieux d’être gentil*");
			}

			if(message.content === prefix + "dice" && message.channel.name == "commandes-bots"){
				random();
				message.channel.send("**vous pratiquez le lancer de dé !** le resultat est **" + ran + "** / 100");
				if(ran == 1){message.channel.send("*noraj d'avoir fais 1 ^^*");}
				if(ran == 100){message.channel.send("*bien ouej*");}
				if(ran == 54){message.channel.send("*t'es un genie mon gars tu merite un role en plus*");
				console.log("UN GENIE");
			}
				
			}
		}

		if(message.content === prefix + "off" && message.author.tag == "Navril#8268"){
			clientDiscord.user.setPresence({ game: { name: 'BOT OFF', type: 0}});
			on = false;
			message.channel.send("**BOT OFF**");
		}

		if(message.content === prefix + "on" && message.author.tag == "Navril#8268"){
			clientDiscord.user.setPresence({ game: { name: 'Faurtnaït', type: 0}});
			on = true;
			message.channel.send("**BOT ON**");
		}

		if(message.content === prefix + "off" && message.author.tag == "Le Trikiteur#1605"){
			clientDiscord.user.setPresence({ game: { name: 'BOT OFF', type: 0}});
			on = false;
			message.channel.send("**BOT OFF**");
		}

		if(message.content === prefix + "on" && message.author.tag == "Le Trikiteur#1605"){
			clientDiscord.user.setPresence({ game: { name: 'Faurtnaït', type: 0}});
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
