function countZeroes(arr) {
    let count = 0;
  for(let i=arr.length-1; i>=0; i--){
    if(arr[i] != 0){
        return count
    } else {
        count++;
    }
  } return count;
}

module.exports = countZeroes


// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0