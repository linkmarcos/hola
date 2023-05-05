basic.showLeds(`
    # # . # #
    # # # # #
    . # # # .
    # # # # #
    # # . # #
    `)
basic.showLeds(`
    . . # . .
    . . . . .
    # . . . #
    . . . . .
    . . # . .
    `)
basic.forever(function () {
    basic.showIcon(IconNames.No)
    basic.showLeds(`
        . . . # .
        # # . # .
        . . # . .
        . # . # #
        . # . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        . # . # #
        . . # . .
        # # . # .
        . . . # .
        `)
})
