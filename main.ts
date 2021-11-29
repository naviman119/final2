let mode = 0
let tilt = 0
let roll = 0
let pitch = 0
input.onButtonPressed(Button.A, function () {
    mode = 0
    basic.showNumber(mode)
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    mode += 1
    if (mode == 2) {
        mode = 0
    }
    basic.showNumber(mode)
    basic.pause(500)
})
basic.forever(function () {
    if (mode == 0) {
        tilt = input.rotation(Rotation.Pitch)
        led.plotBarGraph(
        tilt,
        180
        )
    } else {
        if (mode == 1) {
            basic.clearScreen()
            roll = input.rotation(Rotation.Roll)
            pitch = input.rotation(Rotation.Pitch)
            led.plot(Math.map(roll, -90, 90, 0, 5), Math.map(pitch, -90, 90, 0, 5))
        } else {
        	
        }
    }
})
