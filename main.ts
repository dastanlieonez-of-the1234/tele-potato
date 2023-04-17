input.onButtonPressed(Button.AB, function () {
    potato = randint(1, 25)
})
input.onGesture(Gesture.Shake, function () {
    i_got_potato = randint(1, 4)
    if (i_got_potato == 1) {
        radio.sendValue("p1", potato)
        potato = -1
    }
    if (i_got_potato == 2) {
        radio.sendValue("p2", potato)
        potato = -1
    }
    if (i_got_potato == 3) {
        radio.sendValue("p3", potato)
        potato = -1
    }
    if (i_got_potato == 4) {
        radio.sendValue("p4", potato)
        potato = -1
    }
})
radio.onReceivedValue(function (name, value) {
    if ("p2" == name) {
        potato = value
    }
})
let i_got_potato = 0
let potato = 0
radio.setGroup(128)
potato = -1
basic.forever(function () {
    if (potato == 0) {
        basic.showIcon(IconNames.Skull)
    }
    if (potato < 0) {
        basic.clearScreen()
    }
    if (potato > 0) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        potato += -1
    }
})
basic.forever(function () {
    music.playMelody("G E B A F G A C5 ", 365)
    music.playMelody("F D A G E F G B ", 365)
})
