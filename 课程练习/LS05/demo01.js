
console.log(3===3);
console.log(3==="3");
console.log(3=="3");
console.log(3==new String(3));
console.log(3===new String(3));


var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"===obj1);
console.log(obj1 == obj2);
console.log(obj1 === obj2);
console.log(obj1 == new String("xyz"));


var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"!=obj1);
console.log(obj1 !== obj2);
console.log(obj1 != obj2);
console.log(obj1 != new String("xyz"));

//注意 是引用类型转换到基本类型了？还是基本类型转换到引用类型了？
console.log(2 == 2);
console.log(new Number(2) == new Number(2));
console.log(2 == new Number(2));





