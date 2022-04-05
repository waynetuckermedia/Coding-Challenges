// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// P: Is it always ging to be intergers? Are we going to be given any special characters? An empty arr ever?

//R: Return a new arr with each value doubled
function doubled(arr){
    return arr.map(elem=> elem*2)
}//
// If we are given [2,3,4], should return [4,6,8]

// If we are given [4,5,6], should return [8,10,12]
// If we are given [2,22], should return [4,44]
//P:
//Make a function that takes in an array
//map through the array and multiply each element by 2
// also return

console.log(doubled([2, 4, 6]))