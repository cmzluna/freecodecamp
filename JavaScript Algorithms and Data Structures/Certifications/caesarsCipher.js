function rot13(str) {

    const alphabet1 = 'ABCDEFGHIJKLM'.split('');
    const alphabet2 = 'NOPQRSTUVWXYZ'.split('');

    return str.replace(/\w/g, replace)   

    function replace(match) {
        return match.split('').map(letter => {  // (replace returns a string)
            let decriptedArr = [];

            alphabet1.includes(letter) ? decriptedArr.push(alphabet2[alphabet1.indexOf(letter)]) : decriptedArr.push(alphabet1[alphabet2.indexOf(letter)])

            return decriptedArr;
        });
    }
}

console.log(rot13("SERR PBQR PNZC"), 'FREE CODE CAMP');
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."), 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');
// with non-alphabetic characters: 
console.log(rot13("SERR CVMMN!"), 'FREE PIZZA!');
console.log(rot13("SERR YBIR?"), 'FREE LOVE?');