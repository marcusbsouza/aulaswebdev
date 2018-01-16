//isEven
function isEven(num) {
    return num % 2 === 0;
}

//Factorial
function factorial(num) {
	var fat = 1;
	if (num == 0) {
		return 1;
	}
    while (num > 0) {
        fat = fat * num;
		num = num - 1;
    }
    return fat;
}

//kebabToSnake
function kebabToSnake(kebab) {
	var snake;
	snake = kebab.replace(/-/g, "_");
	return snake;
} 