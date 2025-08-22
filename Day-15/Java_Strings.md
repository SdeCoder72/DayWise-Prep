# Java Strings

## 🔹 String Basics
- Immutable objects
- Created using literals or `new` keyword

## 🔹 Common Methods
| Method         | Description                        |
|----------------|------------------------------------|
| `length()`     | Returns string length              |
| `charAt(i)`    | Returns character at index `i`     |
| `substring()`  | Extracts part of the string        |
| `indexOf()`    | Finds index of a character/string  |
| `equals()`     | Compares string values             |
| `compareTo()`  | Lexicographical comparison         |

## 🔹 StringBuilder vs StringBuffer
- `StringBuilder`: Faster, not thread-safe
- `StringBuffer`: Slower, thread-safe

## 🔹 Code Demo
```java
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");
System.out.println(sb); // Output: Hello World
