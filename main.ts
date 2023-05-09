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
        basic.pause(500)
        basic.clearScreen()
        entrada = ""
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(500)
        basic.clearScreen()
        entrada = ""
    }
})
// pulsar digito de la contraseña
input.onButtonPressed(Button.B, function () {
    entrada = "" + entrada + "B"
})
// recive señal de warning
// 
radio.onReceivedMessage(RadioMessage.message1, function () {
    basic.showString("WARNING")
})
// al iniciar establacemos las variables, la contraseña y el servo
// 
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
    let contar = 0
    if (contar == 3) {
        radio.sendMessage(RadioMessage.message1)
    }
})
