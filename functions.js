// isEven() - Write a function isEven() which takes a single numeric
// argument and returns true if the numbers is even, and false otherwise


function isEven(num) {
	if (num % 2 == 0){
		return true;
	}
	else if (num % 2 != 0){
		return false;
	} 
}


// factorial() - Write a function factorial() which takes a single numeric argument and returns the factorial of that number


function factorial(num) {

}


// kebabToSnake() - Write a function kebabToSnake() which takes a single kebab-cased string argument and returns the snake_cased version.


function kebabToSnake(str) {
	var myString = str.replace(/-/g, "_");
	return myString;
}