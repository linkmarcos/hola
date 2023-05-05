let _1 = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    _1 = randint(1, 6)
    if (_1 == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (_1 == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . . . . .
            . . . . .
            `)
    } else if (_1 == 3) {
        basic.showLeds(`
            . . . # #
            . . . # #
            . . # . .
            # # . . .
            # # . . .
            `)
    } else if (_1 == 4) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # # . # #
            # # . # #
            `)
    } else if (_1 == 5) {
        basic.showLeds(`
            # # . # #
            # . . . #
            . . # . .
            # . . . #
            # # . # #
            `)
    } else {
        basic.showLeds(`
            # # . # #
            . . . . .
            # # . # #
            . . . . .
            # # . # #
            `)
    }
})
