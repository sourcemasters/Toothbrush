var running = false;
var min = 0;
var sec = 0;

function start() {

	if (!running) {
		running = true;
		var interval = setInterval(function() {
			sec++;
			if (sec < 10) {
				document.getElementById("timer").innerHTML = min + " : 0" + sec;
			} else if (sec > 60) {
				sec = 0
				min++;
			} else {
				document.getElementById("timer").innerHTML = min + " : " + sec;
			}

		}, 1000);
	}

}

function reset() {
	running = false;
	min = 0;
	sec = 0;
	clearInterval(interval);

}