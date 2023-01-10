
document.querySelectorAll('.level-btn').forEach(btn => 
	btn.addEventListener('click', () => buttonClickSound()));
	
window.isSfxEnabled = function()
{
	if (document.querySelector('#sfx_checkbox').checked)
		return true;
	else
		return false;
}

window.moveSound = function()
{
	if (isSfxEnabled())
	{
		document.querySelector('#move_sfx').currentTime = 0.2;
		document.querySelector('#move_sfx').play();
	}
}
document.querySelector("#move_sfx").volume = 0.9;


window.errorSound = function()
{
	if (isSfxEnabled())
	{
		document.querySelector('#error_sfx').currentTime = 0.05;
		document.querySelector('#error_sfx').play();
	}
}
document.querySelector('#error_sfx').volume = 0.6;

window.winSound = function()
{
	if (isSfxEnabled())
	{
		document.querySelector('#win_music').currentTime = 0;
		document.querySelector('#win_music').play();
	}
}
document.querySelector('#win_music').volume = 0.5;


window.alertSound = function()
{
	if (isSfxEnabled())
	{
		document.querySelector('#alert_sfx').currentTime = 0;
		document.querySelector('#alert_sfx').play();
	}
}


window.windowSound = function(){

	if (isSfxEnabled())
	{
		document.querySelector('#window_sfx').currentTime = 0.55;
		document.querySelector('#window_sfx').play();
	}
}
document.querySelector('#window_sfx').volume = 0.7;


window.buttonClickSound = function()
{
	if (isSfxEnabled())
	{
		document.querySelector('#click_button_sfx').currentTime = 0.25;
		document.querySelector('#click_button_sfx').play();
	}
}
document.querySelector('#click_button_sfx').volume = 0.3;


window.warningSound = function()
{
	if (isSfxEnabled())
	{
		document.querySelector('#warning_sfx').currentTime = 0.17;
		document.querySelector('#warning_sfx').play();
	}
}
document.querySelector('#warning_sfx').volume = 0.65;

window.sideMenuSound = function()
{
	if (isSfxEnabled())
	{
		document.querySelector('#menu_sfx').currentTime = 0.3;
		document.querySelector('#menu_sfx').play();
	}
}
document.querySelector('#menu_sfx').volume = 0.9;


window.linkHoverSound = function()
{
	if (isSfxEnabled())
	{
		document.querySelector('#link_sfx').currentTime = 0.17;
		document.querySelector('#link_sfx').play();
	}
}

window.resetSound = function()
{
	if (isSfxEnabled())
	{
		document.querySelector('#reset_sfx').currentTime = 0.35;
		document.querySelector('#reset_sfx').play();
	}
}
document.querySelector('#reset_sfx').volume = 0.6;

window.levelHoverSound = function()
{
	if (isSfxEnabled())
	{
		document.querySelector('#level_sfx').currentTime = 0.3;
		document.querySelector('#level_sfx').play();
	}
}
document.querySelector('#level_sfx').volume = 0.9;

window.tapButtonSound = function()
{
	var move_sound = document.querySelector('#move_sfx');

	//Ne s'execute que si le son du mouvement ne s'exexute pas
	if (isSfxEnabled())
	{
		document.querySelector('#tap_sfx').currentTime = 0;
		document.querySelector('#tap_sfx').play();
	}
}
document.querySelector("#tap_sfx").volume = 0.45;

window.checkboxSound = function()
{
	if (isSfxEnabled())
	{
		document.querySelector('#checkbox_sfx').currentTime = 0.3;
		document.querySelector('#checkbox_sfx').play();
	}
}

//On veut que la case "sfx" entraine un son quoi qu'il arrive
//Reecriture de la fonction sans la condition "isSfxEnabled"
document.querySelector("#sfx_checkbox").onclick = function()
{
	document.querySelector('#checkbox_sfx').currentTime = 0.3;
	document.querySelector('#checkbox_sfx').play();
}





function handleBgMusicActivation () {
	
	if (document.querySelector('#music_checkbox').checked==true)
	{
		document.querySelector('#main_music').play()
	}	
	else
	{
		document.querySelector('#main_music').pause()
		document.querySelector('#main_music').currentTime = 0;
	}
}

// Handle page visibility change:
// - If the page is hidden, pause the video
// - If the page is shown, play the video
document.addEventListener("visibilitychange", () => {
	if (document.hidden) {
		document.querySelector('#main_music').pause()
	  } else {
		handleBgMusicActivation();
	  }
});
