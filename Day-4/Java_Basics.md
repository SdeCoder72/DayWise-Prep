# ☕ Java Basics – First Steps

## ✅ What I Covered:
- Hello World Program
- Variables & Data Types (`int`, `char`, `float`, `boolean`, etc.)
- Output: `System.out.println()`
- Arithmetic Operators (`+`, `-`, `*`, `/`, `%`)
- Relational Operators (`>`, `<`, `==`, `!=`, `>=`, `<=`)
- Type Conversion (`int` to `float`, `char` to `int`, etc.)
- Increment/Decrement (`++`, `--`)
- Taking Input using `Scanner`

## ✍️ Sample Snippet:
```java
import java.util.Scanner;
public class Basics {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        System.out.println("Square: " + num * num);
    }
}
