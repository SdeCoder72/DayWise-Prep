# 🔄 Array Rotation by D – Clockwise

## ✅ Problem Statement
Rotate array to the right (clockwise) by `d` positions.

Input: `[1, 2, 3, 4, 5, 6]`, `d = 2`  
Output: `[5, 6, 1, 2, 3, 4]`

---

## 🧠 Reversal Algorithm (O(n) Time, O(1) Space)

### Steps:
1. Reverse last `d` elements
2. Reverse first `n - d` elements
3. Reverse entire array

### 💻 Code (JS)
```js
function reverseArray(arr, l, r) {
    while(l < r) {
        [arr[l], arr[r]] = [arr[r], arr[l]]
        l++
        r--
    }
    return arr
}

function reverseArray3(arr,d) {
    let n = arr.length
    d %= n
    reverseArray(arr, 0, d-1)
    reverseArray(arr, d, n-1)
    return arr.reverse()
    
}

