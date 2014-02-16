threex.gametimer
================

A simple threex helper for adding timers to your Three.js games


How to Use It
-------------
First, this timer works with the THREE.Clock() object, so you need to set that up like so:

```javascript
var clock = new THREE.Clock();
```

Next, create a new game timer.  Put inside the parentheses the number of seconds until the timer's alarm sounds.  For example, for a 7-second alarm, do the following:

```javascript
var timer = new THREEx.GameTimer(7);
```

Next, inside the animation loop of your game, call the ``` .getDelta() ``` method on your clock object as you normally do, and save the result inside a variable.  We'll name ours frameTime:

```javascript
var frameTime = clock.getDelta();
```

Now also from inside the animation loop of your game, call the ``` .run(threejsClockDelta) ``` method on your timer.  Inside the parentheses goes the delta time variable that you obtained previously by calling the ``` .getDelta() ``` method on your THREE.Clock() object.  So, using our previous lines of code above, this would look like: 

```javascript
timer.run(frameTime);
```

Congratulations, you now have a running stop-clock for your game!  But wait, how can I monitor the seconds going by, and what happens when the alarm goes off?

All timer objects have the following members that you can check for in your game loop:
* ```timer.alarmSounding``` will be true if the counter reaches the desired number of seconds that you passed into the constructor function (in our case: 7 seconds).  Otherwise it will be false.
* ```timer.isRunning``` will be true if the timer is actively counting the seconds going by - false if not.
* ```timer.counter``` This is a number that starts at 0 and counts seconds until desired alarm time is reached.
* ```timer.alarmTime``` This is the desired number of seconds until the alarm sounds.  In our earlier example, a query to this variable would return 7 (because a (7) was passed into the timer's constructor).  


The 3 other methods you can call are ```timer.stop()```  ```timer.reset()```  and ```timer.setAlarm(seconds)```
* ```timer.stop()``` stops this timer.  It will wait until you call ```timer.run(frameTime)``` again inside the animation loop, and then the timer will start up from where it left off.
* ```timer.reset()``` will reset this timer to 0.  You then must call ```timer.run(frameTime)``` inside the animation loop to get it going again.  It will still count up to the same target as before.
* ```timer.setAlarm(seconds)``` Call this method if you would like to change the timer's alarm time. Put the desired number of seconds inside the parentheses.  You can even call this while the timer is running, just as long as it hasn't reached its old target.

Usage Example
-------------
The nice thing about having timers as individual objects is that you can have multiple timers running at the same time.  And since they all run in sync with the THREE.Clock() master clock, there is very little computation and overhead each animation frame.  Plus, you can reuse timers by calling ```timer.reset()``` and ```timer.setAlarm(seconds)``` 

Here's a usage example:

```javascript
var clock = new THREE.Clock();
var timer1 = new THREEx.GameTimer(7);
var timer2 = new THREEx.GameTimer(3);

function animate(){
  var frameTime = clock.getDelta();
  timer1.run(frameTime);
  timer2.run(frameTime);
  
  if(timer1.alarmSounding){
    //do something
  }
  if(timer2.alarmSounding){
    //do something
  }
  
  if(gameOver){
    timer1.reset();
    timer2.stop();
    
    timer1.setAlarm(5);
  }
}

animate();
```

You can use and reuse any number of timers inside your game loop.  Enjoy! 
