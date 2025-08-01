const twoSum = (numArr, target) => {
    for (let i = 0; i < numArr.length; i++) {
        for (let e = 1; e < numArr.length; e++) {
            if (numArr[i] + numArr[e] === target) {
                console.log([i, e]);
                return;
            }
        }
    }
}

twoSum([2, 7, 11, 15], 9);
twoSum([3, 2, 4], 6);
twoSum([3, 3], 6);