input.onGesture(Gesture.FreeFall, function () {
    radio.sendString("BUry ME wiTH mY MoNEy")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("L")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("R")
})
basic.showIcon(IconNames.Yes)
radio.setGroup(420)
basic.forever(function () {
	
})
