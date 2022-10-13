

//VARIABLES

var games = 0, moves = 0; //le nombre de parties jouees et de mouvements effectues dans la partie

var image = document.querySelector('.image');
var content = document.querySelector('.content');
var window_info = document.querySelector('#window_info');
var home_menu = document.querySelector("#home_menu");
var end_game = document.querySelector("#end_game");


//Reinitialise toutes les donnees de jeu
function eraseDatas()
{
	var discs = document.querySelectorAll('.disc');
	moves = 0;
	var parent;
	discs_number = 0;

	if (discs.length > 0)
	{
		for (var i = 0; i < discs.length; i++)
		{
			parent = discs[i].parentNode;
			if (parent.hasChildNodes())
			{
				parent.removeChild(discs[i]);
			}
		}
	}
}


/*Masque la fenetre de navigation et lance le jeu avec les 
parametres d'affichage de base*/

function displayGame()
{
	if (games === 0)
	{
		image.style.display = "none";
		document.querySelector('#main_music').play();
		document.querySelector('#main_music').volume = 0.6;
		document.querySelector('#music_checkbox').checked = true;
		document.querySelector('#sfx_checkbox').checked = true;
	}
	else if (games > 0)
	{
		document.body.style.backgroundColor = "#80cbc4";
		content.style.opacity = "1";

		var buttons = document.querySelectorAll('.block input[type="button"]');
		for (var i=0; i < buttons.length; i++)
		{
			buttons[i].style.display = "inline";
		}
	}

	home_menu.style.display = "none";
	end_game.style.display = "none";
	window_info.style.display = "none";
	content.style.display = "block";
	document.getElementById('reset_button').style.display = "inline-block";
	document.getElementById('hamburger_menu').style.display = "inline";
}


//Met a jour le niveau selectionne dans le select
function selectLevel(index)
{
	//mise a jour du select:
	document.querySelector('select').options[index].selected = "selected";
}

//Insert les disques sur la premiere tour selon niveau choisi

function insertDiscs(number)
{
	/*On supprime tous les eventuels disques existants
	avant d'en inserer de nouveaux*/
	eraseDatas();

	var left_discs = document.getElementById('left_discs');
	var disc, discs_color, discs_width;
	discs_number = number;
	/*En fonction du nombre de disques, on choisit les largeurs*/

	switch(number)	
	{	
		//En global pour que la fonction isFinished puisse y accéder
		
		case 3:
			discs_width = ['365px', '255px', '150px'];
			discs_color = ['green' ,'yellow', 'red'];
			break;

		case 4:
			discs_width = ['365px', '300px', '210px', '135px'];
			discs_color = ['green' ,'yellow', 'red', 'purple'];
			break;

		case 5:
			discs_width = ['365px', '295px', '210px', '145px', '90px'];
			discs_color = ['green' ,'yellow', 'red', 'purple', 'darkblue'];
			break;

		case 6:
			discs_color = ["green" ,"yellow", "orange", "red", '#ec407a', "purple"];
			discs_width = ['365px', '325px', '265px', '205px', '145px', '95px'];
			break;

		case 7:
			discs_color = ["green" ,"yellow", "orange", "red", '#ec407a', "purple", "darkblue"];
			discs_width = ['365px', '325px', '275px', '220px', '160px', '115px', '70px'];
			break;
	}


	//Création des disques et affectation des largeurs/couleurs
	for (var i =  0; i < number; i++)
	{
		disc = document.createElement('div');
		disc.className = "disc";
		disc.id = discs_color[i];
		disc.style.width = discs_width[i];
		disc.style.backgroundColor = discs_color[i];
		left_discs.appendChild(disc);
	}
	displayGame();
	games++;
}

var level_1 = document.getElementById('level_1');
var level_2 = document.getElementById('level_2');
var level_3 = document.getElementById('level_3');
var level_4 = document.getElementById('level_4');
var level_5 = document.getElementById('level_5');

level_1.addEventListener('click', function(){
	insertDiscs(3);
	selectLevel(0)
}, false);

level_2.addEventListener('click', function(){
	insertDiscs(4);
	selectLevel(1);
}, false);

level_3.addEventListener('click', function(){
	insertDiscs(5);
	selectLevel(2);
}, false);

level_4.addEventListener('click', function(){
	insertDiscs(6);
	selectLevel(3);
}, false);

level_5.addEventListener('click', function(){
	insertDiscs(7);
	selectLevel(4);
}, false);


function move(discsId)
{
	var left_discs = document.getElementById('left_discs');
	var right_discs = document.getElementById('right_discs');
	var middle_discs = document.getElementById('middle_discs');

	var chosen_discs = document.getElementById(discsId);

	
	if (chosen_discs.className.endsWith('0'))
	{
		unSelect(chosen_discs);
		moveSound();
	}
	else if (left_discs.className.endsWith('0'))
	{
		if (isMovable(left_discs.lastChild, chosen_discs))
		{
			chosen_discs.appendChild(left_discs.lastChild);
			moveSound();
			moves++;
		}
		else
		{
			errorSound();
		}
		
		setTimeout(function(){
			unSelect(left_discs); 
			chosen_discs.lastChild.style.top = '0px';
		}, 1);
	}

	else if (middle_discs.className.endsWith('0'))
	{
		if (isMovable(middle_discs.lastChild, chosen_discs))
		{
			chosen_discs.appendChild(middle_discs.lastChild);
			moveSound();
			moves++;
		}
		else
		{
			errorSound();
		}

		setTimeout(function(){
			unSelect(middle_discs); 
			chosen_discs.lastChild.style.top = '0px';
		}, 1);
	}

	else if (right_discs.className.endsWith('0'))
	{
		if (isMovable(right_discs.lastChild, chosen_discs))
		{
			chosen_discs.appendChild(right_discs.lastChild);
			moveSound();
			moves++;
		}
		else
		{
			errorSound();
		}
		
		setTimeout(function(){
			unSelect(right_discs); 
			chosen_discs.lastChild.style.top = '0px';
		}, 1);
		
	}
	else
	{
		if (chosen_discs.hasChildNodes())
		{
			select(chosen_discs); 
			moveSound();
		}
		
	}

	if (isGameFinished())
	{
		setTimeout(function(){
			winSound();
		}, 500);

		var message_1, message_2, optimal_moves = 2**discs_number - 1;

		//Nombre optimal de mouvements pour gagner
		if (moves === optimal_moves)
		{
			message_1 = "Vous avez gagné en " + moves + " coups. " +
					 "Il s'agit du nombre optimal de déplacements. Félicitations."
		}
		else
		{
			message_1 = "Vous avez gagné en " + moves + " coups. " +
						"Le nombre optimal était de " + optimal_moves;
		}
		message_2 = "Choisissez un niveau pour rejouer."

		end_game.children[1].textContent = message_1
		end_game.children[2].textContent = message_2;

		end_game.style.display = "block";
		
		var game_buttons = document.querySelectorAll('.block input[type="button"]');
		for (var i=0; i < game_buttons.length; i++)
		{
			game_buttons[i].style.display = "none";
		}
		document.querySelector('#reset_button').style.display = "none";
		document.querySelector('#hamburger_menu').style.display = "none";

		//Pour un affichage moins brusque
		setTimeout(function(){
			window_info.style.display = "block";
			content.style.opacity = "0.6"
			document.body.style.backgroundColor = "#616161";
			window_info.style.boxShadow = "0 0 15px #212121";

			
		}, 500);

		//Les boutons pour changer de niveau
		var lvl_buttons = document.querySelector('#lvl_buttons');
		var main_menu_btn = end_game.lastElementChild;
		end_game.insertBefore(lvl_buttons, main_menu_btn);

		games++;	
	}
}

var button1 = document.getElementById('left_button');
var button2 = document.getElementById('middle_button');
var button3 = document.getElementById('right_button');

button1.addEventListener('click', function(){
	move('left_discs');
}, false);

button2.addEventListener('click', function(){
	move('middle_discs');
}, false);

button3.addEventListener('click', function(){
	move('right_discs');
}, false);




function isSelected(discId)
{
	/*Permet de savoir si un disque a ete selectionnee sur un tour parmi
	les ensembles de disques disponibles (disques gauches, disques du milieu).*/

	var tower = document.getElementById(discId);
	var class_name = tower.className;

	if (class_name.indexOf('0') != -1) //Lorsqu'un disque est selectionne
		return true;				   //On modifie la classe de l'ensemble
	else 							   // auquel il appartient en ajoutant un '0'
		return false;				   // a la fin du nom
}


function isMovable(disc, destination)
{
	if ( 
		!destination.hasChildNodes() || 
		disc.offsetWidth < destination.lastChild.offsetWidth
		)
	{
		return true;
	}
	else
	{
		return false;
	}
}


function select(discs) 
{
	/*Le disque remonte jusqu'en haut de la tour*/

	discs.className += '0';
	var block = document.querySelector('.block');
	discs.lastChild.style.top = '-' + (discs.lastChild.offsetTop - 20) + 'px';
}


function unSelect(discs)
{
	/*Supprime le 0 a la fin du nom de class */
	var tab;
	class_name = discs.className;
	tab = class_name.split('');
	
	if (tab[tab.length-1] == '0')
	{
		tab.pop();
	}
	discs.className = tab.join('');
	
	if (discs.hasChildNodes())
	{	
		discs.lastChild.style.top = "0px";
	}
		
}


function isGameFinished()
{
	var right_discs = document.getElementById('right_discs');

	if (right_discs.childNodes.length == discs_number)
		return true;
	else
		return false;
}


function resetGame()
{
	var discs_number = document.querySelectorAll('.disc').length;

	insertDiscs(discs_number);
}

function animateresetButton()
{
	document.querySelector("#reset_button").className += " " +
	"spinning_button";

}


document.querySelector('#reset_button').addEventListener(
	'click', resetGame, false);

document.querySelector('#reset_button').addEventListener(
	'click', animateresetButton, false);

document.querySelector('#reset_button').addEventListener('animationend',
	function(){
		document.querySelector('#reset_button').className = "fas fa-undo fa-2x";
	}, false)







