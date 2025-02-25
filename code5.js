// swaping variable by three methods

// 1 - swap with extra variable 

var a= 10;
var b= 20;
var c = a 
a=b
b=c
// console.log(c)
// console.log(a)
// console.log(b)

// swap without using extra variable 
var a= 10;
var b= 20;

a = a+b
// console.log(a)
b = a-b
// console.log(b)
a = a-b
// console.log(a)

// swap using array method (array destructuring)

var a = 10;
var b= 20;
[a,b] = [b,a]
// console.log(a)
// console.log(b)