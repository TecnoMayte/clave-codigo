enum RadioMessage {
    message1 = 49434
}
// pulsar digito de la contraseña
input.onButtonPressed(Button.A, function () {
    entrada = "" + entrada + "A"
})
// al presionar A+B se introduce la contraseña y se muestra si es correcta o no, tambien se bloquea el dispositivo si se introduce la contraseña incorrecta 3 veces
input.onButtonPressed(Button.AB, function () {
    if (contraseña == entrada) {
        basic.showIcon(IconNames.Yes)
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
        basic.pause(500)
        basic.clearScreen()
    } else {
        if (contraseña != entrada) {
            contar += 1
            basic.showIcon(IconNames.No)
            basic.clearScreen()
            if (contar == 3) {
                music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
                basic.showString("BLOQUEADO")
                basic.pause(500)
                basic.clearScreen()
            }
        }
    }
    entrada = ""
})
// pulsar digito de la contraseña
input.onButtonPressed(Button.B, function () {
    entrada = "" + entrada + "B"
})
// al iniciar establacemos las variables, la contraseña y el servo
// 
let contar = 0
let entrada = ""
let contraseña = ""
contraseña = "ABBA"
entrada = ""
basic.forever(function () {
    radio.setGroup(1)
})
// si la contraseña se introduce mal 3 veces ademas de bloquearse manda una seña por radio de warning a otra microbit
// 
basic.forever(function () {
	
})
