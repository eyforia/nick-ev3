var ev3dev = require('ev3dev-lang');


var moveMotor = function () {
    //this is where we define what we can do
    var motor = new ev3dev.Motor(ev3dev.OUTPUT_A);

    checkIfEverythingIsOk = function () {
        if (!motor.connected) {
            console.error("No motor was found on port A. Please connect a tacho motor to port A and try again.");
            process.exit(1);
        }
    };

    rotateMotor = function (angle) {
        console.log("rotate motor :" + angle);
        motor.runForDistance(angle, 100, motor.stopActionValues.brake);
    };

    wait = function () {
        while(motor.isRunning){
            console.log('motor is is still running..')
        }
    };

    //now this is where stuff is happening
    checkIfEverythingIsOk();
    rotateMotor(30);
    wait();
    rotateMotor(-30);

};

module.exports = moveMotor;