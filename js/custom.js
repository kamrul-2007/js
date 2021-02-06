

//get element from html
var openCountDown = document.getElementById("open");

// get element chenge css;
openCountDown.addEventListener('click', function () {
	openCountDown.style.display = "none";
});

// get element from html;
var year = document.getElementById("year");
var Days = document.getElementById("Days");
var Hours = document.getElementById("Hours");
var Minutes = document.getElementById("Minutes");
var Seconds = document.getElementById("Seconds");

// get current year and next year;
var currentYear = new Date().getFullYear();
var nextYear = new Date(`december 12 ${currentYear} 00:00:00`);


//create a fucntion to manipulate date;
function countDownTimer() {
	var currentTime = new Date();
	var diff = nextYear - currentTime;
	var d = Math.floor(diff / 1000 / 60 / 60 / 24);
	var h = Math.floor(diff / 1000 / 60 / 60) % 24;
	var m = Math.floor(diff / 1000 / 60) % 60;
	var s = Math.floor(diff / 1000) % 60;

	// print in html;
	second.innerHTML = s < 10 ? '0' + s : s;
	minute.innerHTML = m < 10 ? '0' + m : m;
	hours.innerHTML = h < 10 ? '0' + h : h;
	days.innerHTML = d < 10 ? '0' + d : d;
}


//js timing function bom;
setInterval(countDownTimer, 1000);


//to print next year in year;
year.innerHTML = nextYear.getFullYear();