# 🔁 DSA – Reversing an Array

## ✅ Problem Statement
Reverse an array such that first becomes last, second becomes second-last…

Input: `[1, 4, 3, 2, 6, 5]`  
Output: `[5, 6, 2, 3, 4, 1]`

---

## 🔹 Methods Comparison

| Method              | Time     | Space | Notes |
|---------------------|----------|-------|-------|
| Temporary Array     | O(n)     | O(n)  | Simple but not space-efficient |
| Two Pointers        | O(n)     | O(1)  | Efficient and intuitive |
| Swap by Index       | O(n)     | O(1)  | Iterates through first half only |
| Recursion           | O(n)     | O(n)  | Elegant but memory-hungry |
| Inbuilt Reverse     | O(n)     | O(1)  | Fastest using language features

---

## 💻 JavaScript – Two Pointer Approach
```js
function reverseArray(arr) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}
