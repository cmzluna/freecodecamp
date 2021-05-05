// https://www.coursera.org/learn/algorithmic-toolbox
//cameron0907
// https://www.coursera.org/learn/algorithms-divide-conquer?action=enroll&aid=true

// https://medium.com/competitive/changing-money-cdd9331f1d1c
// https://stackoverflow.com/questions/48914689/change-cash-function-optimization-javascript


// Video de freecodecamp
//https://youtu.be/32kJ23O9Wbk

// SOLUCION: ////   https://stackoverflow.com/questions/38831446/calculating-exact-change-with-javascript

//pregunta:
// https://forum.freecodecamp.org/t/cash-register-problems-with-my-code-help/413617/7


/* float problems with numbers:
 https://www.thewebflash.com/solution-for-floating-point-problems-in-javascript/

0.1 + 0.2 = 0.30000000000000004   >???
 */ 


//https://stackoverflow.com/questions/57546841/i-created-a-cash-register-function-for-freecodecamp-but-for-some-reason-the-la

function checkCashRegister(price, cash, cid) {
  var change = cash-price;

//  let change = 45.1;
  
  let currencies = [
    ["PENNY", .01],
    ["NICKEL", .05],
    ["DIME", .1],
    ["QUARTER", .25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ]; 
let currencies = [
  ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 10], ["TWENTY", 0], ["ONE HUNDRED", 100]]
  ;
  
  function findCash(change, coins = []) {
    if (change === 0) {
      // base case -> change = 0
      return coins;
    } else {
      // recursive call
      let highestUnit = currencies.reduce((highestNum, cur, index) => {
        if (Number(((change % cur[1]).toFixed(2)) < change) && cid[index][1]>=0) {
         // let remainder = change - cid[index][1];

         while( Number(((change % cid[index][1]).toFixed(2)) < change) ) {
           change -= cid[index][1];
           // descontar cid
         }
                  
           
          highestNum = [cur[0], parseInt(change / cur[1])*cur[1], index]; // overwrites previous values the last resulting the biggest one 
        }
        return highestNum;
      }, []);

      coins.push(highestUnit); // guardar numero de monedas de .25 requeridas. 
      // console.log(coins);

      // verificar si en CID hay ese monto


      remainAmt = change % highestUnit[1];
      change = Number(remainAmt.toFixed(2));  //used toFixed(2) to solve float problems, but it returns a string so converted back to Number ;-) !
      return findCash(change, coins);
    }
  }

 
}
/* 


else if (change === 0) {  // && cid igual al cambio 
      return ({ status: "CLOSED", change: [coins] });
    }



function makeChange(origAmt, coins) {
  var remainAmt = 0;

  // buscar mayor cambio posible en array de divisas.  ( 0.7%divisa = 0 )
  // devolver tipo de divisa (Quarter)

  if (origAmt % .25 < origAmt && (hay quarters en caja )) {
    coins[3] = parseInt(origAmt / .25); // guardar numero de monedas de .25 requeridas. 
    // fijarse si la cantidad de Quarter en caja es suficiente.
    remainAmt = origAmt % .25;
    origAmt = remainAmt;
  }
  if (origAmt % .1 < origAmt) {
    coins[2] = parseInt(origAmt / .1);
    remainAmt = origAmt % .1;
    origAmt = remainAmt;
  }
  if (origAmt % .05 < origAmt) {
    coins[1] = parseInt(origAmt / .05);
    remainAmt = origAmt % .05;
    origAmt = remainAmt;
  }
  coins[0] = parseInt(origAmt / .01);

*/
 
 




// t  e s t  s 
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), { status: "OPEN", change: [["QUARTER", 0.5]] })

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), { status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]] })

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), { status: "INSUFFICIENT_FUNDS", change: [] })

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), { status: "INSUFFICIENT_FUNDS", change: [] })

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), { status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]] })

