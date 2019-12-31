function getMin(inp_str) {
    let i;
    for (i = 0; i < inp_str.length; i++) {
        if (inp_str[i] < inp_str[0]) {
            inp_str[0] = inp_str[i];
        }
    }
    return inp_str[0];
}
let inp_str = [1,2,3,4];
console.log(getMin(inp_str));



