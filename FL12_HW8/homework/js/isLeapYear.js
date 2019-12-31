function isLeapYear(arg) {
    let date, year; date = new Date(arg)
    year = date.getFullYear();
    if (year % 4 === 0 && year % 100 !== 0) {
        return year + ' is a leap year';
    } else {
        return year + ' is not a leap year';
    }
}
console.log(isLeapYear('2023-01-01 00:00:00'));