
var i = new String("str");          // Object
var h = new Number(1);              // Object
var g = new Boolean(true);          // Object
var j = new Object({name : "Tom"}); // Object
var k = new Array([1, 2, 3, 4]);    // Object
var l = new Date();                 // Object
var m = new Error();
var n = new Function();
var o = new RegExp("\\d");

console.log(typeof Array);
console.log(typeof Function);
console.log(typeof Date);
console.log(typeof Number);
console.log(typeof String);
console.log(typeof Boolean);
console.log(typeof Math);
console.log(typeof JSON);

console.log(Object instanceof Function);
console.log(Object instanceof Object);
console.log(Boolean instanceof Function);
console.log(Boolean instanceof Object);
console.log(String instanceof Function);
console.log(String instanceof Object);
console.log(Number instanceof Function);
console.log(Number instanceof Object);
console.log(Function instanceof Function);
console.log(Function instanceof Object);
console.log(Array instanceof Function);
console.log(Array instanceof Object);
console.log(Date instanceof Function);
console.log(Date instanceof Object);
console.log(Math instanceof Function);
console.log(Math instanceof Object);
console.log(JSON instanceof Function);
console.log(JSON instanceof Object);