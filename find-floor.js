
function findFloor(arr, val) {
        if(val < arr[0]){
                return -1
            }
        let leftIdx = 0;
        let rightIdx = arr.length-1;
        let middleIdx = Math.floor((leftIdx + rightIdx)/2);
        let middleVal = arr[middleIdx];
        if(middleVal > val){
            while(middleVal > val){
                rightIdx = middleIdx-1
                console.log("rightIdx: ", rightIdx);
                middleIdx = Math.floor((leftIdx + rightIdx)/2);
                console.log("middleIdx: ", middleIdx);
                middleVal=arr[middleIdx];
                console.log("middleVal: ", middleVal);
                if(val > middleVal && arr[middleIdx+1] > val){
                return middleVal
                }
            }
        }
        else {
            while(val > middleVal){
                leftIdx = middleIdx+1;
                console.log("leftIdx: ", leftIdx);
                middleIdx = Math.floor((leftIdx + rightIdx)/2);
                console.log("middleIdx: ", middleIdx);
                middleVal=arr[middleIdx];
                console.log("middleVal: ", middleVal);
                if(val > middleVal && arr[middleIdx+1] > val){
                return middleVal
                    }
                else if (middleIdx+1 == arr.length-1)
                return arr[middleIdx+1];
                    }
                }
        }

        module.exports = findFloor

/*
Write a function called findFloor which accepts a sorted array and a value x,
and returns the floor of x in the array. The floor of x in an array is the largest
element in the array which is smaller than or equal to x. If the floor does not exist, return -1.
*/
        findFloor([1,2,8,10,10,12,19], 9) // 8
        findFloor([1,2,8,10,10,12,19], 20) // 19
        findFloor([1,2,8,10,10,12,19], 0) // -1