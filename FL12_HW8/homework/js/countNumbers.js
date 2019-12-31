function countNumbers(inp_str) {
    let numbers = ''; let a = 0; let b = 0; let c = 0; let d = 0; let e = 0;
    let f = 0; let g = 0; let h = 0; let j = 0; let k = 0;
    for (let i = 0; i < inp_str.length; i++) {
        if (!isNaN(inp_str[i])) {
            numbers = numbers + inp_str[i];
        }
    }
    let i;
    for ( i = 0; i < numbers.length; i++) {
            switch (numbers[i]) {
                case '0': a++; break;
                case '1': b++; break;
                case '2': c++; break;
                case '3': d++; break;
                case '4': e++; break;
                case '5': f++; break;
                case '6': g++; break;
                case '7': h++; break;
                case '8': j++; break;
                case '9': k++; break;
                default: break;
            } 
    }
  return [a,b,c,d,e,f,g,h,j,k] 
}
console.log(countNumbers('000122gfgs333dfg456dgfs6dfh788gj9'));