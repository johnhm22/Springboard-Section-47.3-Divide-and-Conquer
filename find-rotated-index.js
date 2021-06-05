function findRotatedIndex(arr, val) {
    let leftIdx =0;
    let rightIdx = arr.length-1;
    let middleIdx = Math.floor((leftIdx+rightIdx)/2);
    
    let middleVal = arr[middleIdx];
    
        if(val > arr[arr.length-1]){
            rightIdx = middleIdx
            }
        else if(val < arr[arr.length-1]){
            leftIdx = middleIdx+1
        }
while(leftIdx <= rightIdx){
        middleIdx = Math.floor((leftIdx+rightIdx)/2);
        middleVal = arr[middleIdx];
        if(middleVal < val){
            leftIdx = middleIdx +1;
        } else if (middleVal > val){
            rightIdx = middleIdx-1
        } else{
            return middleIdx;
        }
    }
    return -1
}

module.exports = findRotatedIndex


// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)


