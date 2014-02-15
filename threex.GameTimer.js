THREEx.GameTimer = function(secondsUntilAlarm) {

	this.alarmTime = secondsUntilAlarm || 10;

	this.counter = 0;

	this.isRunning = false;

	this.isFinished = false;

	this.alarmSounding = false;

};

THREEx.GameTimer.prototype.run = function(threejsClockDelta) {

	if (this.isFinished === false) {
		this.counter += threejsClockDelta;
		this.isRunning = true;
	}

	if (this.counter >= this.alarmTime) {
		this.isFinished = true;
		this.alarmSounding = true;
		this.stop();
	}
};

THREEx.GameTimer.prototype.stop = function() {

	this.isRunning = false;
};

THREEx.GameTimer.prototype.reset = function() {

	this.counter = 0;
	this.isFinished = false;
	this.alarmSounding = false;
};
