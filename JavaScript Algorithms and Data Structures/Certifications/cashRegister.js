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

function checkCashRegister(price, cash, cid) {
  var change;
  
  //give smallest number of coins that will equal change






  // if cash-in-drawer is less than the change due, or if you cannot return the exact change.
  return { status: "INSUFFICIENT_FUNDS", change: [] }


  
  Return {status: "CLOSED", change: [...]} 
  // with cash-in-drawer as the value for the key change
 //  if it is equal to the change due.


  // function should always return an object with a status key and a change key.
  return change;

}

change due : 0.5

// buscar mayor cambio posible en array de divisas.  ( 0.5%divisa = 0 )
// devolver tipo de divisa (Quarter)

// fijarse si la cantidad de Quarter es suficiente.

  // si es menor, 
    // restar 0.5 - (Quarter disponible)
    // volver a buscar mayor cambio posible en array de divisas.
      // si resta es 0 -> exito
      // si resta distinto de 0 y 


// si encontrado
  

  // si es mayor a 0
    // repetir operacion -> buscar mayor cambio posible
  // si es igual a 0
    // devolver cambio



checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

3.26, 100

change due 96.74

// se puede dar de diferentes maneras 

function makeChange(origAmt, coins) {
  var remainAmt = 0;


// buscar mayor cambio posible en array de divisas.  ( 0.7%divisa = 0 )
// devolver tipo de divisa (Quarter)

  if (origAmt % .25 < origAmt) {
    coins[3] = parseInt(origAmt / .25); // numero de monedas de .25 requeridas. 
    // fijarse si la cantidad de Quarter en caja es suficiente.
      if(hay quarters en caja ) {
        remainAmt = origAmt % .25;
        origAmt = remainAmt;
      }
      
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
}





console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), {status: "OPEN", change: [["QUARTER", 0.5]]})

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]})

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), {status: "INSUFFICIENT_FUNDS", change: []})

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), {status: "INSUFFICIENT_FUNDS", change: []})

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]})