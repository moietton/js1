function runArea(a, b, c, d) {
  if (a == "circle") {
    console.log(b * b);
  } else if (a == "rect") {
    console.log(b * d);
  } else if (a == "trapezoid") {
    console.log(0.5 * (b + c) * d);
  }
}

// function getCircle(n) {
//   for (let i = 1; i < n.length; i++) {
//     result = result * result;
//   }
//   return result;
//   function sum(k) {
//     let result1 = 0;
//     for (let i = 0; i <= k; i++) {
//       result1 = result1 + i;
//     }
//     return result1;
//   }
// }
// console.log(getCircle());
