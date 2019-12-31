function makeNumber(inp_str) {
  let numbers = '';
    for (let i = 0; i < inp_str.length; i++) {
        if (!isNaN(inp_str[i])){
 numbers = numbers + inp_str[i]; 
}
  }
  return numbers;
}
console.log(makeNumber('aass33f4f5g5j6k6j4j3h'));