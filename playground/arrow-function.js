/* Arrow functions do not bind the 'this' keyword
...so if you're using 'this' in your function
it will not work when you use an arror function.
*/

// arrow function - STATEMENT syntax
// var square = (x) => {
// 	// code
// 	var result = x*x;
// 	return result;
// };

// arrow function - EXPRESSION syntax (1 argument)
var square = x => x * x;

// // arrow function - EXPRESSION syntax (0 or 2+ arguments)
// var square = () => {};
// var square = (x,y) => {};
// var square = (x,y,z) => {};

console.log(square(9));

var user = {
	name: 'Jeremiah',
	sayHi: () => {
		// console.log(`Hi`);
		console.log(arguments);
		console.log(`Hi. I'm ${this.name}`); // Hi, I'm undefined (bc 'this' keyword does not get bound)
		// console.log(`Hi. I'm ${user.name}`); // Hi, I'm Jeremiah
	},
	/* alt syntax in es6 great when defining 'object literals'
	 es6 provides new way to make methods on objects
	 no need for function keyword
	 object literal === "comma-separated list of name-value pairs wrapped in curly braces"
	 i.e. 
		var myObject = {
		    sProp: 'some string value',
		    numProp: 2,
		    bProp: false
		};
	ES6 provides new way to make methods on objects
	 you provide the method name 'sayHiAlt' then you go right
	 to the parantheses skipping the : colon
	*/
	sayHiAlt () {
		console.log(arguments);
		/* 'arguments' !== an actual array
		...more like an object with array-like properties
		the 'arguments' object will format all arguments
		into name:value pairs in an object
		i.e.
			user.sayHiAlt(1, 2, 3);
		prints
			[Arguments] { '0': 1, '1': 2, '2': 3 }
		*/
		console.log(`Hi. I'm ${this.name}`); // Hi, I'm undefined
	}
};

// user.sayHi();

/* will return the special 'arguments' keyword + 'this' binding */ 
user.sayHiAlt(1, 2, 3);

/* will return GLOBAL arguments variable i.e. require, module, etc */
// user.sayHi(1, 2, 3);



/* USE CASE review:
When you try to create methods on an object and use arrow functions
switch

...from this syntax:

	var foo = {
		sayHi: () => {
			console.log(arguments);
			console.log(`Hi. I'm ${this.name}`);
		}
	}

...to  this syntax:

	var foo = {
		sayHi () {
			console.log(arguments);
			console.log(`Hi. I'm ${this.name}`);
		}
	}

*/


