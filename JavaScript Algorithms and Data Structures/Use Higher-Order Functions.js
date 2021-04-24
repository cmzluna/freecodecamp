const squareList = arr => {
    // Only change code below this line

    arr = arr.filter(el => {
        return el> 0 && Number.isInteger(el)
    }).map(el => el*el);   

    return arr;
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);