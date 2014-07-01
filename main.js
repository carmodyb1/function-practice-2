$(document).on('ready', function() {


//  *** Problem 1
// var object = {
// 	name: "Luisa",
// 	age: 25,
// }
// var getName = function() {	
// 	console.log(object.name);
// }
// getName();


//  *** Problem 2
// var javascriptLetters = ["Javascript", "is", "awesome"];
// var functionLetters = ["what", "happened", "to", "my", "function"];

// var totalLetters = function(arrayName) {
// 	var string = arrayName.join("");
// 	console.log(string.length);
// }
// totalLetters(functionLetters);


//  *** Problem 3
// var keyValue = function(key, string) {
// 		var object = {}
// 		object[key] = string;
// 	console.log(object);
// }
// keyValue("city", "Denver");


//  *** Problem 4
// var letters = ["a", "b", "c", "d", "e"];
// var names = ["jerry", "sarah", "sally"];

// var negativeIndex = function(array, negNum) {
// 	length = array.length + negNum;
// 	console.log(array[length]);
// }
// negativeIndex(letters, -2);

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
	console.log(newString);
}
removeM("memory");


// *** Problem 6

var printObject = function(objectArgument) {


	console.log()

}




































//  *** Final doc close
});