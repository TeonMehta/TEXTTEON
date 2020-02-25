// TYPES IN JS

/*
BINARY
 0      0       0       0       1       1       0       1
 128    64      32      16      8       4       2       1
 */

/*
STRING
NUMBER
BOOLEAN
NULL
UNDEFINED
OBJECT
 */





// STRINGS

var string = "This is a string of text";
var string2 = 'this is a string with single quotes';
var string3 = `this is a string with backticks`;
var string_newline =   `this will be on a \n new line`;
var template_literal = `this can calculate half of 100 is ${100/2} `;

var string_concatenate = "con" + "cat" + "e" + "nate";



// NUMBERS
var integer = 10;
var float = 10.0;
var notANumber = NaN;
var special_number = Infinity;


// ARITHMETIC
//  (+, -, *, /, %)

var a = 100;
var b = 10;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
//console.log(a%b);
//console.log(typeof string);



// BOOLEANS
/*
COMPARISON -            (==, !=, ===, !==, <, >, <=, >=)
LOGICAL OPERATORS -     (&& ,||)
ternary operator (?:)
*/

var boolean_true = true;
var boolean_false = false;

// COMPARISON

console.log(10 > 20);
console.log("A" < "Z");
console.log(10 === 10);

console.log(true || false);
console.log(true && false);


console.log(false ? "left" : "right");



/*
EMPTY VALUES
NULL - UNDEFINED
Basically interchangable
 */

// TYPE CONVERSION
console.log(8 * null);
// → 0
console.log("5" - 1);
// → 4
console.log("5" + 1);
// → 51
console.log("five" * 2);
// → NaN
console.log(false == 0);
// → true


