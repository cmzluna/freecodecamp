// A side effect of the sort method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then run the sort method.

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {

    return arr.concat([]).sort((a, b) => a - b)

}
nonMutatingSort(globalArray);