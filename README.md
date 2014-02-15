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
* ```timer.alarmSounding``` will be true if the counter reaches the desired number of seconds that you passed into the constructor function, in our case: 7 seconds.  Otherwise it will be false.
* ```timer.isRunning```
