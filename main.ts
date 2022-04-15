input.onButtonPressed(Button.A, function () {
    servos.P1.setAngle(180)
})
input.onButtonPressed(Button.AB, function () {
    servos.P1.setPulse(1500)
})
input.onButtonPressed(Button.B, function () {
    servos.P1.setAngle(0)
})
pins.digitalWritePin(DigitalPin.P1, 0)
loops.everyInterval(1000, function () {
    servos.P1.run(50)
})
