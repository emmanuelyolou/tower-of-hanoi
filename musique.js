//Events binding: sounds
document.querySelectorAll('.level-btn').forEach(btn => 
	btn.addEventListener('click', () => buttonClickSound()));

document.querySelectorAll('.level-btn').forEach(btn => 
	btn.addEventListener('mouseover', () => levelHoverSound()));

document.querySelector('#reset_button').addEventListener('click', () => resetSound());


//sidebar and menu btns
document.querySelector('.menu-btn').addEventListener('click', () => sideMenuSound());

document.querySelectorAll('.sidebar-link:not(#main_menu)').forEach(btn => 
	btn.addEventListener('click', () => windowSound()));

document.querySelector('#main_menu').addEventListener('click', () => warningSound());

document.querySelectorAll('.sidebar-link').forEach(btn => 
	btn.addEventListener('mouseover', () => linkHoverSound()));


//Game btns

document.querySelectorAll('.move-disc-btn').forEach(btn => 
	btn.addEventListener('click', () => tapButtonSound()));


document.querySelectorAll('.close_button').forEach(btn => 
	btn.addEventListener('click', () => buttonClickSound()));

document.querySelectorAll('.close_button, select').forEach(btn => 
	btn.addEventListener('click', () => windowSound()));
	
// //Checkbox
document.querySelectorAll("input[type=checkbox]").forEach(checkbox => {
	checkbox.addEventListener('click', () => checkboxSound()); 
}); 
	



function isSfxEnabled () { 
	if (document.querySelector('#sfx_checkbox').checked)
		return true;
	else
		return false;
}

function moveSound () { 
	if (isSfxEnabled())
	{
		document.querySelector('#move_sfx').currentTime = 0.2;
		document.querySelector('#move_sfx').play();
	}
}
document.querySelector("#move_sfx").volume = 0.9;


function errorSound () { 
	if (isSfxEnabled())
	{
		document.querySelector('#error_sfx').currentTime = 0.05;
		document.querySelector('#error_sfx').play();
	}
}
document.querySelector('#error_sfx').volume = 0.6;

function winSound () { 
	if (isSfxEnabled())
	{
		document.querySelector('#win_music').currentTime = 0;
		document.querySelector('#win_music').play();
	}
}
document.querySelector('#win_music').volume = 0.5;


function alertSound () { 
	if (isSfxEnabled())
	{
		document.querySelector('#alert_sfx').currentTime = 0;
		document.querySelector('#alert_sfx').play();
	}
}


function windowSound () {

	if (isSfxEnabled())
	{
		document.querySelector('#window_sfx').currentTime = 0.55;
		document.querySelector('#window_sfx').play();
	}
}
document.querySelector('#window_sfx').volume = 0.7;


function buttonClickSound () {
	if (isSfxEnabled())
	{
		document.querySelector('#click_button_sfx').currentTime = 0.25;
		document.querySelector('#click_button_sfx').play();
	}
}
document.querySelector('#click_button_sfx').volume = 0.3;


function warningSound () { 
	if (isSfxEnabled())
	{
		document.querySelector('#warning_sfx').currentTime = 0.17;
		document.querySelector('#warning_sfx').play();
	}
}
document.querySelector('#warning_sfx').volume = 0.65;

function sideMenuSound () { 
	if (isSfxEnabled())
	{
		document.querySelector('#menu_sfx').currentTime = 0.3;
		document.querySelector('#menu_sfx').play();
	}
}
document.querySelector('#menu_sfx').volume = 0.9;


function linkHoverSound () { 
	if (isSfxEnabled())
	{
		document.querySelector('#link_sfx').currentTime = 0.17;
		document.querySelector('#link_sfx').play();
	}
}

function resetSound () { 
	if (isSfxEnabled())
	{
		document.querySelector('#reset_sfx').currentTime = 0.35;
		document.querySelector('#reset_sfx').play();
	}
}
document.querySelector('#reset_sfx').volume = 0.6;

function levelHoverSound () { 
	if (isSfxEnabled())
	{
		document.querySelector('#level_sfx').currentTime = 0.3;
		document.querySelector('#level_sfx').play();
	}
}
document.querySelector('#level_sfx').volume = 0.9;

function tapButtonSound () { 
	var move_sound = document.querySelector('#move_sfx');

	//Ne s'execute que si le son du mouvement ne s'exexute pas
	if (isSfxEnabled())
	{
		document.querySelector('#tap_sfx').currentTime = 0;
		document.querySelector('#tap_sfx').play();
	}
}
document.querySelector("#tap_sfx").volume = 0.45;

function checkboxSound () { 
	if (isSfxEnabled())
	{
		document.querySelector('#checkbox_sfx').currentTime = 0.3;
		document.querySelector('#checkbox_sfx').play();
	}
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
