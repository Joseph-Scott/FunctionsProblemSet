// isEven() - Write a function isEven() which takes a single numeric
// argument and returns true if the numbers is even, and false otherwise


function isEven(num) {
	if (num % 2 === 0){
		return true;
	}
	else {
		return false;
	} 
}

//refactor above function

function isEven(num) {
	return num % 2 === 0;
}


// factorial() - Write a function factorial() which takes a single numeric argument and returns the factorial of that number


function factorial(num) {
	//define a result variable
	var result = 1;
	//calculate factorial and store value in result
	for(var i = 2; i <= num; i++) {
		result *= i;
	}
	//return the result variable
}

// factorial(4) 4 x 3 x 2 x 1


// kebabToSnake() - Write a function kebabToSnake() which takes a single kebab-cased string argument and returns the snake_cased version.


function kebabToSnake(str) {
	var myString = str.replace(/-/g, "_");
	return myString;
}