//https://www.regular-expressions.info/tutorialcnt.html
// https://flaviocopes.com/javascript-regular-expressions/#regular-expressions-choices
// http://www.rexegg.com/regex-quantifiers.html

// telephone regex 
//https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript


// One of the most popular plugins for phone number formatting and parsing is the 'Libphonenumber' library released by Google. It was initially created to be used in Android operating systems. 


function telephoneCheck(str) {
    let hasTenDigits = false;
    let hasElevenDigits = false;
    let startsWithOne = false;
    let hasPermittedCharsOnly = false;
    let hasCorrectParentheses = false;
    
    // Write regular expressions here so that the Booleans contain the correct values
    hasTenDigits = /\d{10}/.test(str);
    hasElevenDigits = /\d{11}/.test(str);
    hasPermittedCharsOnly = /[\d]*/.test(str);
    hasCorrectParentheses = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(str);
    startsWithOne = /^1/.test(str);


    //  [\s\(]  puede matchea solo uno!!!


    //Use the Booleans to return true or false, without needing to string together one complex regular expression
    if (!hasTenDigits && !hasElevenDigits) {
      return false;
    } else if (!hasPermittedCharsOnly || !hasCorrectParentheses) {
      return false;
    } else if (hasElevenDigits && !startsWithOne) {
      return false;
    } else {
      return true;
    }
    return /[12]*\s?\(?\d{3}\)?[\s-]*\d{3}[\s-]*\d{4}/.test(str);
}


console.log(telephoneCheck("1 555-555-5555"), true )
console.log(telephoneCheck("1 (555) 555-5555"), true )
console.log(telephoneCheck("5555555555"), true )
console.log(telephoneCheck("555-555-5555"), true )
console.log(telephoneCheck("(555)555-5555"), true )
console.log(telephoneCheck("1(555)555-5555"), true )
console.log(telephoneCheck("1 555 555 5555") , true )
console.log(telephoneCheck("1 456 789 4444"), true )

// wrong parentheses
console.log(telephoneCheck("(6054756961)"), false )
console.log(telephoneCheck("1 555)555-5555") , false )

// (hasElevenDigits && !startsWithOne)
console.log(telephoneCheck("2 (757) 622-7382"), false )
console.log(telephoneCheck("0 (757) 622-7382") , false )
console.log(telephoneCheck("2 757 622-7382"), false)
console.log(telephoneCheck("2(757)6227382") , false)
console.log(telephoneCheck("2(757)622-7382") , false)
console.log(telephoneCheck("27576227382") , false)
console.log(telephoneCheck("(275)76227382") , false)

// no 10 ni 11
console.log(telephoneCheck("55555555"), false )
console.log(telephoneCheck("555-5555"), false )
console.log(telephoneCheck("5555555"), false )

console.log(telephoneCheck("123**&!!asdf#") , false )
/*
(\s)?\d{3}


" 555"
" (555"
"-555"
"(555"
 
\(?(\d{3})\)?

/^\(?(\d{3})\)?/.test(" 555");


*/