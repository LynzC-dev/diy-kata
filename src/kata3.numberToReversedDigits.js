const { joinNames } = require(".");

const numberToReversedDigits = number => {
//    return (number.toString().split('').reverse());
    const numbers = (number.toString().split('').reverse());
    return numbers.map(str => +str);
};

module.exports = numberToReversedDigits;
