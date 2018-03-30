//类型检测 typeof 一般用于值类型检测
console.log(typeof 123);
console.log(typeof true);
console.log(typeof "abc");
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof {name:"Mike",age:20});
console.log(typeof function foo(){});

//instanceof  （左侧操作数为对象，右侧操作数为原型链中的一个类型时，返回为true）
var a = {name:"Mike",age:20};
console.log(a instanceof Object);

var b = [12,34,{},""];
console.log(b instanceof Array);
var Person = function(){

};
var p1 = new Person();
console.log(p1 instanceof Person);