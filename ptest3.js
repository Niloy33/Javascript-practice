var x = window.prompt("First Number: ");
var y = window.prompt("Second Number: ");
var z = window.prompt("Thrid Number: ");

if (x > y && x > z) {
  if (y > z) {
    console.log(x + ", " + y + ", " + z + ",  ");
  } else {
    console.log(x + ", " + z + ", " + y + ",  ");
  }
} else if (y > x && y > z) {
  if (x > z) {
    console.log(y + ", " + x + ", " + z + ",  ");
  } else {
    console.log(y + ", " + z + ", " + x + ",  ");
  }
} else if (z > x && z > y) {
  if (x > y) {
    alert(z + ", " + x + ", " + y + ",  ");
  } else {
    alert(z + ", " + y + ", " + x + ",  ");
  }
}
