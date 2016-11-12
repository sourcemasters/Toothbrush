var running = false;
var min;
var sec;
var interval;
function start() {

	if (!running) {
		min=2;
		sec=0;
		running = true;
		interval = setInterval(function() {
			if (sec < 10) {
				document.getElementById("timer").innerHTML = min + " : 0" + sec;
			}
			
			else {
				document.getElementById("timer").innerHTML = min + " : " + sec;
			
			
			}
			if(min==0 && sec==0)
			{
				running=false;
				clearInterval(interval);
			}
			sec--;
			if (sec == -1) {
				sec = 59
				min--;
			}
		}, 1000);
	}

}

function reset() {
	
	min = 0;
	sec = 0;
	clearInterval(interval);
	running = false;
	
}
