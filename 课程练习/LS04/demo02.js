
// 严格模式使用方式
"use strict"//全局使用

function foo() {
    "use strict"//函数内部使用
}


function  sloppyFunc() {
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);


//下边的实例，若使用严格模式则报错
function  sloppyFunc() {
    //'use strict'
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);