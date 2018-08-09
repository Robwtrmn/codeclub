// Add your code below...

const myName = "Rob"
const myLastName = "Wtrmn" 
const myFullName = myName + " " + myLastName

const number1 = 10
const number2 = 5
const sumNumbers = number1 + number2 

function Game(threshold) {

	const myRandomNumber = Math.random()
	if (myRandomNumber > threshold) {
		alert("You won, " + myName)
		alert("You really won!")
	} else {
		alert("You lost, " + myName)
		alert("Loser!")
	}

}

function resizeButton() {
	const newradius = Math.random() * 20;
	$('.button').css('border-radius', newradius + 'px');
}

function slideimage() {
	$('.myProfile').slideUp();
	$('.myProfile').slideDown();
}