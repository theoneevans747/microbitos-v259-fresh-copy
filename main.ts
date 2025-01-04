enum RadioMessage {
    message1 = 49434,
    A = 18289,
    B = 9031,
    AB = 42556
}
input.onPinPressed(TouchPin.P0, function () {
    Clickgame += upgrade
})
input.onGesture(Gesture.EightG, function () {
	
})
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.A, function () {
    if (appunlock == 1) {
        basic.showNumber(Clickgame)
        basic.showLeds(`
            . # # # .
            # . # . .
            . # # # .
            . . # . #
            . # # # .
            `)
    }
})
radio.onReceivedMessage(RadioMessage.A, function () {
    Appselection1 += 1
    if (Appselection1 == 10) {
        Appselection1 = 9
    }
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.showString("Power Off")
    power.lowPowerEnable(LowPowerEnable.Allow)
    power.lowPowerRequest()
})
input.onButtonPressed(Button.A, function () {
    Appselection1 += 1
    if (Appselection1 == 10) {
        Appselection1 = 9
    }
})
input.onGesture(Gesture.LogoUp, function () {
    display.rotateTo(display.Direction.Normal)
})
radio.onReceivedMessage(RadioMessage.AB, function () {
    if (appunlock == 1) {
        if (Appselection1 == 0) {
            basic.showIcon(IconNames.No)
            music.play(music.createSoundExpression(WaveShape.Noise, 2476, 1, 255, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
            basic.clearScreen()
        }
        if (Appselection1 == 1) {
            basic.showLeds(`
                . . # # .
                # . # . #
                . # # # .
                # . # . #
                . . # # .
                `)
            music.play(music.builtinPlayableSoundEffect(soundExpression.spring), music.PlaybackMode.UntilDone)
            basic.showNumber(3)
            basic.showNumber(2)
            basic.showNumber(1)
            basic.clearScreen()
            radio.sendString("Connected")
        }
        if (Appselection1 == 2) {
            basic.showString("flashlight")
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
        if (Appselection1 == 3) {
            basic.showString("Money clicker")
            activateautoclick = 0
            upgrade = 1
            autoclickerupgrade = 4000
            basic.showNumber(Clickgame)
        }
        if (Appselection1 == 4) {
            basic.showLeds(`
                . . . # .
                . # . . #
                # # . . #
                . # . . #
                . . . # .
                `)
            record.setMicGain(record.AudioLevels.Low)
            record.startRecording(record.BlockingState.Blocking)
        }
        if (Appselection1 == 5) {
            basic.showString("the temp is")
            basic.showNumber(input.temperature())
            basic.showLeds(`
                . . # . .
                . # . # .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.showString("C")
            basic.clearScreen()
        }
        if (Appselection1 == 6) {
            music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
            pins.digitalWritePin(randint(0, 2), 1)
            basic.showString("output power on")
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . . . # .
                . . # . .
                `)
        }
        if (Appselection1 == 7) {
            if (musicnext == 0) {
                basic.showIcon(IconNames.EighthNote)
                music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.UntilDone)
                musicnext += 1
                music.stopAllSounds()
            }
            if (musicnext == 1) {
                music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
                musicnext += 1
                music.stopAllSounds()
            }
            if (musicnext == 2) {
                music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.UntilDone)
                musicnext += 1
                music.stopAllSounds()
            }
            if (musicnext == 3) {
                music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ode), music.PlaybackMode.UntilDone)
                musicnext += 1
                music.stopAllSounds()
            }
            if (musicnext == 4) {
                music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.UntilDone)
                musicnext += 1
                music.stopAllSounds()
            }
            if (musicnext == 5) {
                music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.UntilDone)
                musicnext = 0
                music.stopAllSounds()
            }
        }
        if (Appselection1 == 8) {
            basic.showIcon(IconNames.EighthNote)
            basic.showIcon(IconNames.No)
            music.setBuiltInSpeakerEnabled(false)
        }
        if (Appselection1 == 9) {
            basic.showIcon(IconNames.EighthNote)
            basic.showIcon(IconNames.Yes)
            music.setBuiltInSpeakerEnabled(true)
            music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
        }
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (Clickgame >= 120) {
        Clickgame += -120
        upgrade += 1200
        music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    } else {
        music.play(music.createSoundExpression(WaveShape.Noise, 2476, 1, 255, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    }
})
input.onGesture(Gesture.ScreenDown, function () {
    record.playAudio(record.BlockingState.Blocking)
})
input.onButtonPressed(Button.AB, function () {
    if (appunlock == 1) {
        if (Appselection1 == 0) {
            basic.showIcon(IconNames.No)
            music.play(music.createSoundExpression(WaveShape.Noise, 2476, 1, 255, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
            basic.clearScreen()
        }
        if (Appselection1 == 1) {
            basic.showLeds(`
                . . # # .
                # . # . #
                . # # # .
                # . # . #
                . . # # .
                `)
            music.play(music.builtinPlayableSoundEffect(soundExpression.spring), music.PlaybackMode.UntilDone)
            basic.showNumber(3)
            basic.showNumber(2)
            basic.showNumber(1)
            basic.clearScreen()
            radio.sendString("Connected")
        }
        if (Appselection1 == 2) {
            basic.showString("flashlight")
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
        if (Appselection1 == 3) {
            basic.showString("Money clicker")
            activateautoclick = 0
            upgrade = 1
            autoclickerupgrade = 4000
            basic.showNumber(Clickgame)
        }
        if (Appselection1 == 4) {
            basic.showLeds(`
                . . . # .
                . # . . #
                # # . . #
                . # . . #
                . . . # .
                `)
            record.setMicGain(record.AudioLevels.Low)
            record.startRecording(record.BlockingState.Blocking)
        }
        if (Appselection1 == 5) {
            basic.showString("the temp is")
            basic.showNumber(input.temperature())
            basic.showLeds(`
                . . # . .
                . # . # .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.showString("C")
            basic.clearScreen()
        }
        if (Appselection1 == 6) {
            music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
            pins.digitalWritePin(randint(0, 2), 1)
            basic.showString("output power on")
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . . . # .
                . . # . .
                `)
        }
        if (Appselection1 == 7) {
            if (musicnext == 0) {
                basic.showIcon(IconNames.EighthNote)
                music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.UntilDone)
                musicnext += 1
                music.stopAllSounds()
            }
            if (musicnext == 1) {
                music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
                musicnext += 1
                music.stopAllSounds()
            }
            if (musicnext == 2) {
                music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.UntilDone)
                musicnext += 1
                music.stopAllSounds()
            }
            if (musicnext == 3) {
                music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ode), music.PlaybackMode.UntilDone)
                musicnext += 1
                music.stopAllSounds()
            }
            if (musicnext == 4) {
                music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.UntilDone)
                musicnext += 1
                music.stopAllSounds()
            }
            if (musicnext == 5) {
                music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.UntilDone)
                musicnext = 0
                music.stopAllSounds()
            }
        }
        if (Appselection1 == 8) {
            basic.showIcon(IconNames.EighthNote)
            basic.showIcon(IconNames.No)
            music.setBuiltInSpeakerEnabled(false)
        }
        if (Appselection1 == 9) {
            basic.showIcon(IconNames.EighthNote)
            basic.showIcon(IconNames.Yes)
            music.setBuiltInSpeakerEnabled(true)
            music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
        }
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    Appselection1 += -1
    if (Appselection1 == -1) {
        Appselection1 = 0
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (Clickgame >= 20) {
        upgrade += 1
        Clickgame += -20
        music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    } else {
        music.play(music.createSoundExpression(WaveShape.Noise, 2476, 1, 255, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    }
})
input.onGesture(Gesture.Shake, function () {
    if (shakestart == 1) {
        if (Appselection1 == 1) {
            basic.showLeds(`
                . . # # .
                # . # . #
                . # # # .
                # . # . #
                . . # # .
                `)
        }
        if (Appselection1 == 2) {
            basic.showLeds(`
                # . # . #
                . # # # .
                # # # # #
                . # # # .
                # . # . #
                `)
        }
        if (Appselection1 == 3) {
            basic.showLeds(`
                # # # . #
                # # . . .
                . . # . #
                . . # # #
                # # # # #
                `)
        }
        if (Appselection1 == 4) {
            basic.showLeds(`
                . . . # .
                . # . . #
                # # . . #
                . # . . #
                . . . # .
                `)
        }
        if (Appselection1 == 5) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # # . # #
                . # # # .
                . . # . .
                `)
        }
        if (Appselection1 == 6) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . . . # .
                . . # . .
                `)
            basic.showLeds(`
                . # # # .
                # . . . #
                # . # . #
                # . . . #
                . # # # .
                `)
        }
        if (Appselection1 == 7) {
            basic.showIcon(IconNames.EighthNote)
            basic.showIcon(IconNames.No)
        }
        if (Appselection1 == 8) {
            basic.showIcon(IconNames.EighthNote)
            basic.showIcon(IconNames.Yes)
        }
    }
})
radio.onReceivedMessage(RadioMessage.B, function () {
    Appselection1 += -1
    if (Appselection1 == -1) {
        Appselection1 = 0
    }
})
input.onGesture(Gesture.TiltRight, function () {
	
})
input.onGesture(Gesture.LogoDown, function () {
    display.rotateTo(display.Direction.UpsideDown)
})
let autoclicker = 0
let musicnext = 0
let autoclickerupgrade = 0
let activateautoclick = 0
let Appselection1 = 0
let upgrade = 0
let Clickgame = 0
let appunlock = 0
let shakestart = 0
basic.showString("V2.59")
radio.setGroup(1)
for (let index = 0; index < randint(2, 10); index++) {
    basic.showLeds(`
        . . . . .
        . # # . .
        . # . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . . # .
        . . . . .
        . . . . .
        `)
    basic.pause(1)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . # .
        . . . # .
        . . . . .
        `)
    basic.pause(1)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . . # # .
        . . . . .
        `)
    basic.pause(1)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.pause(1)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        . # # . .
        . . . . .
        `)
    basic.pause(1)
    basic.showLeds(`
        . . . . .
        . # . . .
        . # . . .
        . # . . .
        . . . . .
        `)
    basic.pause(1)
}
basic.showIcon(IconNames.Yes)
basic.pause(1000)
basic.clearScreen()
shakestart = 1
appunlock = 1
loops.everyInterval(1, function () {
	
})
basic.forever(function () {
    if (activateautoclick == 1) {
        autoclicker += upgrade
    }
})
loops.everyInterval(autoclickerupgrade, function () {
	
})
