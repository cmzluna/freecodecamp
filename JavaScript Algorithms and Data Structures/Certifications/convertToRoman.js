/*
Roman Numeral Converter

Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.

Util para crear los numeros romanos:
https://www.rapidtables.com/convert/number/how-number-to-roman-numerals.html
*/

function convertToRoman(num) {
    let i = 10;
    let arr = [];

    while (num > i / 10) {
        arr.unshift(num % i - num % (i / 10));
        i *= 10;
    }
    
    return arr.reduce((acum,cur) => {
        return acum.concat(findRoman(cur));
    }, '');    
}

function findRoman(num) {
    let romans = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    }

    let outNumber = ''

    //romans[keys(romans).
    let highNum =  keys(romans).reduce((highestNum, cur) => {
        if (num % cur === 0) {
            highestNum = cur; // overwrites previous values the last resulting the biggest one
        }
        return highestNum;
    }, 0);
    
    console.log(highNum);

    while (num - highNum >= 0) {
        outNumber.concat(romans[highNum]);
        num = num - highNum;
        console.log(outNumber)
    }
    return outNumber;
}

// ERROR:
// convertToRoman(3433) --> "MMMCDCDCDCDXXXIII"







// The simple answer is to divide the number by 1000 whatever is the quotient that is the number of 1000's in the amount. 
// Then divide the remainder with the 100's the quotient will be the number of 100's. And then again divide the remainder with 10, the quotient will be the number of 10's

function breakNumber(num) {
    const placeValue = (num, res = [], factor = 1) => {
        if (num) {
            const val = (num % 10) * factor;
            res.unshift(val);
            return placeValue(Math.floor(num / 10), res, factor * 10);
        };
        return res;
    };
}

//otra forma:
function breakNumber(num) {
    let i = 10;
    while (num > i / 10) {
        console.log(num % i - num % (i / 10));
        i *= 10;
    }
}
breakNumber(43928)

// pistas:
//  https://stackoverflow.com/questions/20015462/find-out-how-many-thousands-and-hundreds-and-tens-are-there-in-a-amount

console.log(convertToRoman(2), 'II') 
console.log(convertToRoman(3), 'III') 
console.log(convertToRoman(4), 'IV') 
console.log(convertToRoman(5), 'V') 
console.log(convertToRoman(9), 'IX') 
console.log(convertToRoman(12), 'XII') 
console.log(convertToRoman(16), 'XVI') 
console.log(convertToRoman(29), 'XXIX') 
console.log(convertToRoman(44), 'XLIV') 
console.log(convertToRoman(45), 'XLV') 
console.log(convertToRoman(68), 'LXVIII') 
console.log(convertToRoman(83), 'LXXXIII') 
console.log(convertToRoman(97), 'XCVII')
console.log(convertToRoman(99), 'XVIX') 
console.log(convertToRoman(400), 'CD')
console.log(convertToRoman(500), 'D')
console.log(convertToRoman(501), 'DI')
console.log(convertToRoman(649), 'DCXLIX')
console.log(convertToRoman(798), 'DCCXCVIII')
console.log(convertToRoman(891), 'DCCCXCI') 
console.log(convertToRoman(1000), 'M') 
console.log(convertToRoman(1004), 'MIV') 
console.log(convertToRoman(1006), 'MVI') 
console.log(convertToRoman(1023), 'MXXIII') 
console.log(convertToRoman(2014), 'MMXIV') 
console.log(convertToRoman(3999), 'MMMCMXCIX') 
