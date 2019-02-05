var a = prompt("Please enter your value for a");
var b = prompt("Please enter your value for b");
var c = prompt("Please enter your value for c");

if ( isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
  alert("incorrect input data");
} else {
  let d = Math.pow(b,2) - 4 * (a * c);
    if (d > 0) {
      let x1 = (-b + Math.sqrt(d)) / 2 * a;
      let x2 = (-b - Math.sqrt(d)) / 2 * a;
      alert("x1=" + x1 + " and x2=" + x2);
    } else if (d === 0) {
        let x = - b / (2 * a);
        alert("x=" + x);
    } else {
      alert("No solution");
    }
  }