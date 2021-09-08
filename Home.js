console.log("hey hey");
//alert('yoo');
//alert("enter a number:");

//Increment of number
/*var a = 10;
var b = 5;
c = a % b;
console.log(c);*/

//function implementation:
/*function testFun(yourName) {
  var result = "hello there" + " " + yourName;
  console.log(result);
}
var Name = prompt("what is your name?");
testFun(Name);

//addtion of numbers by using function
function setNumber(num1, num2) {
  var result = num1 + num2;
  console.log(result);
}
setNumber(10, 10);*/

//Write a JavaScript program that accept two integers and display the larger
var num1, num2;
num1 = window.prompt("the first number is:");
num2 = window.prompt("the second number is:");
if (parseInt(num1, 10) > parseInt(num2, 10)) {
  console.log(
    "the large number from " + num1 + " and " + num2 + " is :" + num1 + "."
  );

  //here parseInt() function is used, it actually specifice the users to take value and its radix(base)
  //do the function is looks like parseInt(value,radix)
} else if (parseInt(num2, 10) > parseInt(num1, 10)) {
  console.log(
    "the large number from " + num1 + " and " + num2 + " is : " + num2 + "."
  );
}
