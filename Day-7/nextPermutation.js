/*
i/p = arr = [2,3,1,7,5,0]
o/p = [2, 4, 5, 0, 1, 7]

i/p = arr = [3, 2, 1]
o/p = [1,2,3]
*/

function reverse(arr, l, r) {
    while(l < r) {
        [arr[l], arr[r]] = [arr[r], arr[l]]
        l++
        r--
    }
    return arr
}

function nextPermutation(arr) {
    let n = arr.length
    let index = -1

    //break point
    for(let i = n-2; i >= 0; i--) {
        if(arr[i] < arr[i+1]) {
            index = i;
            break
        }
    }
    // base case
    if(index === -1) {
        return arr.reverse();
    }

    // Swapping

    for(let i = n-1; i > index; i--) {
        if(arr[i] > arr[index]) {
            [arr[i], arr[index]] = [arr[index], arr[i]]
            break
        }
    }

    // reverse the rest of the array (acending order)

    reverse(arr, index+1, n-1);
    return arr;

}

let arr = [2,3,1,7,5,0]
let arr2 = [3,2,1]
console.log(nextPermutation(arr));
console.log(nextPermutation(arr2));