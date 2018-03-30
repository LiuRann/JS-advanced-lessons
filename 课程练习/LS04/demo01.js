// 存在二义性的语句 补充一
var max = function (x,y) {
    return x>y?x:y;
};
var x = {
    foo:max(2,3)
}




var max = function (x,y) {
    return x>y?x:y;
};
{
    console.log(123);
    console.log(456);
    foo:max(2,3)
}