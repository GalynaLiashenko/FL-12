//let a = [1, 2, 3, 4];
//1
function convert(a) {
    let i;
    for (i = 0; i < a.length; i++) {
        if (typeof a[i] === 'number') {
            a[i] = a[i] + '';
        } else if (typeof a[i] === 'string') {
            a[i] = + 'a[i]';
        }
    }
    return a[i];
}
//console.log(convert(a));
//2
function executeforEach(a, callback) {
   for ( let i = 0; i < a.length; i++) {
       callback();
    }  
}
function taskSecond() {
    let i;
    a[i] = a[i] * 2;
    return a;
}
//executeforEach(a, taskSecond);
//console.log(a);
//3
let a=[1,2,'3']
function map() {
    let i;
    if (typeof a[i] === 'string') {
        a[i] = a[i]/1;
            }
    a[i] = a[i] + 3; 
    return a;
}
//executeforEach(a, map);
//console.log(a);
//4
let n = [2, 5, 8, 10];
let newArr = []
function filterArray() {
    let i;
    if (n[i] % 2 ===0) {
newArr[i] = n[i];
    }
return newArr;
}
executeforEach(n, filterArray);
//console.log(newArr);
//5
let b = 'abc';
function flipOver(b) {
        let index = b.length - 1;
    let reversedText = '';
        while (index >= 0) {
            const currentChar = b[index];
reversedText = `${reversedText}${currentChar}`;
 index = index - 1; 
        }
        return reversedText;
    }
//console.log(flipOver(b));
//6
function makeListFromRange(m, n) {
    let min = m;
    let numbers = '';
   let maxIndex = n - 1;
    for (let i = 0; i < maxIndex; i++) {
        numbers = `${numbers}${min}`;
        min++;
        i = i++; 
    }
    return numbers;  
}
//makeListFromRange(3, 14);
//8
let numbers = [1, 3, 31, 30, 65];
let result = [];
function substitute(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 30) {
            result[i] = '*';
        } else {
            result[i] = numbers[i];
        }
    }
    return result;
}
//substitute(numbers);
//console.log(result);
//9
const date = new Date(2019, 0, 2);
function getPastDay(date, daysAgo) {
    let hoursPerDay = 24;
    let minutsPerHous = 60;
    let secondsPerMinute = 60;
    let milisecondsPerMinute = 1000;
    let milisecondsPerDay = hoursPerDay * minutsPerHous * secondsPerMinute * milisecondsPerMinute;
    const pastDay = new Date(date.valueOf() - daysAgo * milisecondsPerDay);
    return pastDay.getDate();
}
//console.log(getPastDay(date, 4))
//10
function formatDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hours = date.getHours();
    let minuts = date.getMinutes();
    return `${year}/${month}/${day} ${hours}:${minuts}`;
}
//console.log(formatDate(new Date('6/15/2018 09:15:04')));