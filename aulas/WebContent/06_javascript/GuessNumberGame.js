var secretNumber = 5;

var guessNumber = Number(prompt("Adivinhe o número entre 0 e 10"));

if (guessNumber === secretNumber) {
	alert("Parabéns você adivinhou!")
} else if (guessNumber < secretNumber) {
	alert("Muito baixo")
} else {
	alert("Muito alto")
}