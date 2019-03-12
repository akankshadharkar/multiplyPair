const numArr = [7, 1, 0, -4, 5, 2, 5,5,5,5,5];

const pairSum = (arr, target) => {
    let checkArr = {},
        results = [];
    for (let i = 0; i < arr.length; i++) {
        if (checkArr[arr[i]] !== undefined) {
            results.push([checkArr[arr[i]], arr[i]])
        } else {
            checkArr[target / arr[i]] = arr[i];
        }
    }
    //console.log(checkArr);
    return results;
}

//attributes -> array and target number
console.log(pairSum(numArr, 7));