#!/usr/bin/env node
var ev3dev = require('ev3dev-lang');

console.log('fading LEDs from green to red...');

while(true) {
    for (var pct = 0; pct < 100; pct += 1) {
        var brightnessVal = (pct / 100);
        var invertedBrightnessVal = 1 - brightnessVal;

        ev3dev.Ev3Leds.left.setColor([brightnessVal, invertedBrightnessVal]);
        ev3dev.Ev3Leds.right.setColor([invertedBrightnessVal, brightnessVal]);

        if (pct % 10 == 0)
            console.log(pct + '%');

        {   //Hack to sleep for time
            //    SHOULD NOT BE USED IN PRODUCTION CODE
            var start = new Date().getTime();
            while (new Date().getTime() < start + 100) {
                ;
            }
        }
    }
}

console.log('done');

ev3dev.Ev3Leds.left.allOff();
ev3dev.Ev3Leds.right.allOff();