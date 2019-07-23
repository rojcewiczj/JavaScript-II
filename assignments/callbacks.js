// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
  
}
console.log(getLength (items, function(length) {
  return length;
}))

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr.slice(3,4))
}

console.log(last(items, function(lastItem){
  return lastItem;
}));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y)
}
console.log(sumNums(2 ,4, function(sum){
  return sum;
}))

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y) 
}
console.log(multiplyNums(4,8, function(product){
  return product;
}))

 
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let foundItem = list.filter(function(element){
    if(element === item) {
       console.log(true)
    } 
    else {
      console.log(false)
    }
  });
  return cb(foundItem);
}
    

console.log(contains('Gum', items, function(containsItem){
  return containsItem;
}))

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let newArray = array.filter(function(item ,position){
    return array.indexOf(item) == position;
  })
    return cb(newArray);
  
}
console.log(removeDuplicates(items, function(noDuplicates){
  return noDuplicates;
}))

