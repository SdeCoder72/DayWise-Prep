# 🔁 Java Loops Practice – Day 7

## ✅ Loops Covered:
- `for`, `while`, `do-while`
- Entry vs Exit control flow
- Loop dry runs + edge cases

## 🧮 Problems Solved:
- Print even/odd numbers within a range
- Count digits of a number
- Sum of digits
- Factorial calculation
- Prime check with early break
- Number patterns using nested loops

## 💡 Loop Tip:
- Prefer `while` for variable-length input
- Use `break`/`continue` smartly inside nested loops

## 📌 Sample:
```java
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("* ");
    }
    System.out.println();
}
