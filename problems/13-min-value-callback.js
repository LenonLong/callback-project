/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

*******************************************************************************/

let minValueCallback = function(arr, cb) {
    if (cb === undefined) {
        return Math.min(...arr);
       }
    
    let res = [];
    for (let ele of arr) {
        res.push(cb(ele));
    }
    return Math.min(...res)
};

console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
