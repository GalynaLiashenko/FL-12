function addOne(x) {
 return x + 1;
}
function pipe() {
  let a = arguments[0];
  let i;
  for ( i = 1; i < arguments.length; i++) {
    a = arguments[i](a);
  }
  return a;
}
console.log(pipe(1, addOne));
