var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
function conformToTwoDigits(time) {
	if(time < 10) {
		time = "0" + time;
	}
	return time;
}

// prints to console day of the week and time HH:MM:SS in format {0-11} AM/PM : {0-59} : {0-59}
function current_time(){
	var now = new Date();
	console.log("Today is: " + days[now.getDay()]);
	var dayPeriod = "AM";
	if(now.getHours() >= 12 && now.getHours() < 24){
		dayPeriod = "PM";
	}
	var hours = conformToTwoDigits(now.getHours() % 12);
	var minutes = conformToTwoDigits(now.getMinutes());
	var seconds = conformToTwoDigits(now.getSeconds());

	console.log("Current time is: " + hours + " " + dayPeriod + " : " + minutes + " : " + seconds);
}

current_time();
