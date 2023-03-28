basic.forever(function () {
    if (true) {
        led.plotBarGraph(
        input.magneticForce(Dimension.Strength),
        2000
        )
        basic.pause(100)
    }
})
