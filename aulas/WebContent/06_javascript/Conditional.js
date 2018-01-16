var age = prompt("Idade?");
if (age < 0) {
	console.log("IDADE NEGATIVA ERRO")
} else if (age == 21) {
	console.log("Parabéns pelos 21 anos!")
} else if (age % 2 == 1) {
	console.log("Sua idade é ímpar")
} else if (age % Math.sqrt(age) === 0) {
	console.log("Sua idade é um quadrado perfeito")
}
	