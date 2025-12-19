// // to declare a variable from type Number;
// // 1-literal way
// //2- constructor way
// var a = 10.1235;
// var b = new Number(20.22); // object
// a.toFixed(2); /*"10.12"*/ //create a wrraper object from type Number then access to toFixed method:
// // """"delete wrraper object after use the method""""
// console.log(a); //"10.1235"  //function toFixed() return string ;
// var a = new Number(10);
// var b = new Number(10);
//console.log(a.valueOf == b.valueOf ? "true" : "false"); // valueOf compare the value of the objects not the adresses
//a = b; // the adress of b will the same adress of a if any change with a or b each of them have the same value
// because the compare the address not the value
//var x =10;
//x.sayeHell()=function(){alert("say hello");}();// create a wrraper from type Number after we call the method
//  then delete the wrapper   if call agian nothing will change
// var a = new Number(100);
// a.sayeHell = function () {
//   alert("say hello");
// }; // this will change and function SayHello added in the object number
// toFixed function if x=1000.2322 and x.toFixed(2) 1000.23
//toPrecision function to increase if x=121.2 x.toPrecision(10) x=121.2000000;
// isIntegar return boolean is num  ture else false  رقم صحيح
//number.isIntegar(number)=> boolean
//Number in js is quardioline 1e15;
//toString  change number to String
//toLocalString("ar-EG") change number to string with local format
//parseInt("100px",10) return 100
//parseFloat("12.22em") return 12.22
//isNaN(value) return true if value is NaN else false
//isFinite(value) return true if value is finite else false
