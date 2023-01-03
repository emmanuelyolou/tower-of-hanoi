function openSideMenu()
{
	document.getElementById('side_menu').style.width = "250px";
	document.getElementById('hamburger_menu').style.marginLeft = "205px";
}

function closeSideMenu()
{
	document.getElementById('side_menu').style.width = "0px";
	document.getElementById('hamburger_menu').style.marginLeft = "15px";
}


(function()
{
	function clickSideMenu()
	{
		if (document.getElementById('side_menu').offsetWidth == 0)
			openSideMenu();
		else
			closeSideMenu();
	}

	document.querySelector('#hamburger_menu').addEventListener(
		'click', clickSideMenu, false);
})();


	
(function()
{
	function disableGame()
	{
		var game_buttons = document.querySelectorAll('.block input[type="button"]');

		for (var i = 0; i < game_buttons.length; i++)
			game_buttons[i].style.display = "none";
		
		document.querySelector('#hamburger_menu').style.display ="none";
		document.querySelector('#reset_button').style.display ="none";
		document.body.style.backgroundColor = "#616161";
		document.querySelector('.content').style.opacity = "0.6";
	}

	function enableGame()
	{
		var game_buttons = document.querySelectorAll('.block input[type="button"]');
		for (var i = 0; i < game_buttons.length; i++)
		{
			game_buttons[i].style.display = "block";
		}
		document.querySelector('#hamburger_menu').style.display ="block";
		document.querySelector('#reset_button').style.display ="flex";
		document.body.style.backgroundColor = "#80cbc4";
		document.querySelector('.content').style.opacity = "1";
	}

	function displayHelp()
	{
		document.querySelector('#help_menu').style.display = "block";
		closeSideMenu();
		disableGame();
	}
	document.querySelector("#help").addEventListener('click', displayHelp, false);


	function closeHelp()
	{
		document.querySelector('#help_menu').style.display = "none";
		enableGame();
	}
	document.querySelector("#help_menu .close_button").addEventListener(
		'click', closeHelp, false);	


	function displaySettings()
	{
		document.querySelector('#settings_menu').style.display = "block";
		closeSideMenu();
		disableGame();
	}
	document.querySelector('#settings').addEventListener(
		'click', displaySettings, false);


	function closeSettings()
	{
		document.querySelector('#settings_menu').style.display = "none";
		enableGame();
	}


	function confirmSettings()
	{
		var levels_n_discs = {
			Novice : 3,
			Facile : 4,
			Medium : 5,
			Difficile : 6,
			Expert : 7
		};

		if (document.querySelector('#music_checkbox').checked==true)
			{
				document.querySelector('#main_music').play()
			}	
		else
		{
			document.querySelector('#main_music').pause()
			document.querySelector('#main_music').currentTime = 0;
		}
		closeSettings();

		var curr_discs_number = document.querySelectorAll('.disc').length;

		var levels_list = document.querySelector('select');
		var level_chosen = levels_list.options[levels_list.selectedIndex].value;
		var new_discs_number = levels_n_discs[level_chosen];


		if(new_discs_number !== curr_discs_number)
		{
			insertDiscs(new_discs_number);
		}

	}
	document.querySelector('#confirm_settings').addEventListener(
		'click', confirmSettings, false);



	function displayWarning()
	{
		document.querySelector('#exit_menu').style.display = "block";
		closeSideMenu();
		disableGame();
	}
	document.querySelector('#main_menu').addEventListener(
		'click', displayWarning, false);

	function closeWarning()
	{
		document.querySelector('#exit_menu').style.display = "none";
		enableGame();
	}
	document.querySelector('#cancel_exit').addEventListener(
		'click', closeWarning, false);
})();
