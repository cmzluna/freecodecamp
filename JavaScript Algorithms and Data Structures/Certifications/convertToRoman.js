
function convertToRoman(num, outRoman = "") {
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

    if(num === 0) {
         // base case -> num = 0
        return outRoman;
    } else {
        // recursive call
        let highNum =  Object.keys(romans).reduce((highestNum, cur) => {
            if (num % cur < num) {
                highestNum = cur; // overwrites previous values the last resulting the biggest one
            }
            return highestNum;
        }, 0);
        console.log(highNum);

        outRoman=outRoman.concat(romans[highNum]);
        console.log(outRoman);

        num -= highNum;
        console.log(num);
        return convertToRoman(num, outRoman);
    }
} 


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
