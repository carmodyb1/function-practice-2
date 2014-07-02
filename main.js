$(document).on('ready', function() {


//  *** Problem 1
var object = {
	name: "Luisa",
	age: 25,
}
var getName = function() {	
	return(object.name);
}
console.log(getName());


//  *** Problem 2
var javascriptLetters = ["Javascript", "is", "awesome"];
var functionLetters = ["what", "happened", "to", "my", "function"];

var totalLetters = function(arrayName) {
	var string = arrayName.join("");
	return(string.length);
}
console.log(totalLetters(functionLetters));


//  *** Problem 3
var keyValue = function(key, string) {
		var object = {}
		object[key] = string;
	return(object);
}
console.log(keyValue("city", "Denver"));


//  *** Problem 4
var letters = ["a", "b", "c", "d", "e"];
var names = ["jerry", "sarah", "sally"];

var negativeIndex = function(array, negNum) {
	length = array.length + negNum;
	return(array[length]);
}
console.log(negativeIndex(letters, -2));

//  *** Other way to get element returns
// var element = array.slice(length, length+1); 
// console.log(element);


//  *** Problem 5
var removeM = function(string) {
	var array = string.split("");
	//   Declare empty array
	var newArray = [];
	// Push items into new empty array
	for (var i = 0; i < array.length; i++) {
		if(array[i] !== "m") {
			newArray.push(array[i]);
		}
	}
	var newString = newArray.join("");
	return(newString);
}
console.log(removeM("memory"));


// *** Problem 6 *** for in loop with objects
var object1 = {
	a: 10,
	b: 20,
	c: 30,
}
var object2 = {
	firstName: "pork",
	lastName: "chops",
}
var printObject = function(object) {
		for (var i in object) {
		console.log(i, object[i]);
	}
}
printObject(object1);


//  *** Problem #7
var vowels = function(string) {
	var targetArray = [];
	for (var i = 0; i < string.length; i++) {
		// console.log(i, string[i]);
		if (string[i] === "a" || string[i] === "e" || string[i] ==="i" ||
		 string[i] ==="o" || string[i] === "u") {
		targetArray.push(string[i]);		
		}
	}
	return(targetArray);
}
console.log(vowels("alabama"));


 // *** Problem #8
var array = ["a", "a", "b", "b", "c", "c"];
var array2 = ["a", "a", "b"]
var twins = function(arrayName) {
	for (var i = 0; i < array.length; i+=2) {
		if (arrayName[i] !== arrayName[i + 1]) {
			return false;
		}
	}
	return true;
}
console.log(twins(array2));


//  *** Problem #9
var arrayTrue = [false, false, true, false];
var arrayFalse = [false, false, false];
var arrayEmpty = [];

var or = function(booleanArray) {
	for (var i = 0; i < booleanArray.length; i++) {
		if (booleanArray[i] === "") {
			return false;	
		}
		else if (booleanArray[i] === true) {
			return true;
		}
	}	
	return false;
}
console.log(or(arrayTrue));


// *** Problem #10 
var unique1 = ["a", "b", "a", "c", "d", "d"];
var unique2 = ["todd", "avery", "maria", "avery"];

var unique = function(arrayOfStrings) {
	var targetArray = [];
	for (var i = 0; i < arrayOfStrings.length; i++) {
		if (targetArray.indexOf(arrayOfStrings[i]) === -1) {
			targetArray.push(arrayOfStrings[i]);
		}	
	}
	return targetArray;
}
console.log(unique(unique2));














//  *** Final doc close
});










