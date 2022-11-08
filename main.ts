let Lectura = 0
basic.showString("Gaby")
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    Lectura = pins.analogReadPin(AnalogPin.P0)
    led.plotBarGraph(
    Lectura,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.pause(500)
        basic.showNumber(Lectura)
    }
})
