var a = prompt('a');
var b = prompt('b');
var c = prompt('c');
if ((a == "") || (b == "") || (c == "")) {
    alert("Input values should be ONLY numbers");
}
if ((a == 0) || (b == 0) || (c == 0)) {
    alert("A triangle must have 3 sides with a positive definite length");
}
if ((a < 0) || (b < 0) || (c < 0)) {
    alert("A triangle must have 3 sides with a positive definite length");
}
if ((a + b) < c && (a + c) < b && (b + c) < a) {
    console.log("Triangle doesn’t exist")
} else if (a == b == c) {
    console.log("Equilateral triangle")
} else if ((a == b) || (b == c) || (c == a)) {
    console.log("Isosceles triangle")
} else if (a != b != c) {
    console.log("Scalene triangle")
}
