//包装对象
var a = 123;
var b = new Number(a);

console.log( a==b );
console.log( a===b );


//临时包装对象
var str = "abcde";
console.log(str.length);//临时包装成了String对象
str.length = 1;
console.log(str.length,str);//临时包装对象并不影响原始值