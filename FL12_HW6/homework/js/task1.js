var a = prompt('a');
var b = prompt('b');
var c = prompt('c');
console.log('a=' + a + '   b=' + b + '   c=' + c);
var D = Math.pow(-b, 2) - (4 * a * c);
console.log('D=' + D)
if (D === 0) {
    var x = (-b) / (2 * a);
    console.log('x=' + x);
    console.log('x=' + Math.round(x));
} else if (D > 0) {
    var x1 = (-b + Math.sqrt(D)) / (2 * a);
    var x2 = (-b - Math.sqrt(D)) / (2 * a);
    console.log('x1=' + x1);
    console.log('x1=' + Math.round(x1));
    console.log('x2=' + x2);
    console.log('x2=' + Math.round(x2));
} else if (D < 0) {
    console.log('no solution');
}
