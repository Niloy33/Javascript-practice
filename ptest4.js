var a = window.prompt("First num: ");
var b = window.prompt("Second num: ");
var c = window.prompt("Third num: ");
var d = window.prompt("Fourth num: ");
var e = window.prompt("Fifth num: ");

if (a > b && a > c && a > d && a > e) {
  console.log("the largest num: ", a);
} else if (b > a && b > c && b > d && b > e) {
  console.log("the largest num: ", b);
} else if (c > b && c > a && c > d && c > e) {
  console.log("the largest num: ", c);
} else if (d > b && d > c && d > a && d > e) {
  console.log("the largest num: ", d);
} else if (e > b && e > c && e > d && e > a) {
  console.log("the largest num: ", e);
}
