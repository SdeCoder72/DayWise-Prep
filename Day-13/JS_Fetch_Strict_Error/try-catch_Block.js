// try {
//   let result = riskyOperation();
// } catch (error) {
//   console.error("Caught error:", error.message);
// }
// 

function riskyDivision(a, b) {
  try {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
  } catch (err) {
    console.error("Error caught:", err.message);
  }
}
riskyDivision(10, 0);


// common errors:
// ReferenceError
// TypeError
// SyntaxError