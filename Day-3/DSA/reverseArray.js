/*
Input: arr = [1, 4, 3, 2, 6, 5] 
Output: [5, 6, 2, 3, 4, 1]

Input: arr = [4, 5, 1, 2] 
Output: [2, 1, 5, 4]
*/

console.log("Approach -1 : Using Two Pointers - O(n) Time and O(1) Space");

function reverseArray(arr) {
    let left = 0
    let right = arr.length - 1

    while(left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
    return arr
}

let arr1 = [1, 4, 3, 2, 6, 5] 
let arr2 = [4, 5, 1, 2] 
console.log(reverseArray(arr1));
console.log(reverseArray(arr2));




console.log("Approach - 2 By Swapping Elements - O(n) Time and O(1) Space");

function reverseArray2(arr) {

    let n = arr.length

    for(let i = 0; i<n/2; i++) {
        [arr[i], arr[n-i-1]] = [arr[n-i-1], arr[i]]
    }
    return arr
    
}

console.log(reverseArray2(arr1));
console.log(reverseArray2(arr2));



console.log("Approach - 3 :  Using Recursion - O(n) Time and O(n) Space");

function reverseArrayRec(arr, l, r) {
    if(l >= r) {
        return 
    }

    [arr[l], arr[r]] = [arr[r], arr[l]]
    reverseArrayRec(arr, l+1, r-1)

}

function reverseArray3(arr) {
    let n = arr.length
    reverseArrayRec(arr, 0, n-1)

    return arr
}

console.log(reverseArray3(arr1));
console.log(reverseArray3(arr2));


console.log("Approach - 4 : Using Inbuilt Methods - O(n) Time and O(1) Space");

function reverseArray4(arr) {

    arr.reverse()
    return arr
}

console.log(reverseArray4(arr1));
console.log(reverseArray4(arr2));