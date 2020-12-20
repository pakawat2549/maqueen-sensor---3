basic.forever(function () {
    basic.showString("" + (input.compassHeading()))
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P13) == 0 && pins.digitalReadPin(DigitalPin.P14) == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1 && pins.digitalReadPin(DigitalPin.P14) == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 20)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0 && pins.digitalReadPin(DigitalPin.P14) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 20)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 200)
    }
    if (maqueen.Ultrasonic(PingUnit.Inches) < 6) {
        while (maqueen.Ultrasonic(PingUnit.Inches) < 5) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            basic.pause(600)
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
            basic.pause(200)
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            basic.pause(700)
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
            basic.pause(600)
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            basic.pause(700)
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
            basic.pause(200)
            maqueen.motorStop(maqueen.Motors.All)
            break;
        }
    }
})
