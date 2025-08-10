# 🌐 JavaScript – OOP Concepts & Function Methods

## ✅ Classes & Objects
```js
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, ${this.name}`);
  }
}
const sabina = new Person("Sabina");
sabina.greet();

```
## Inheritance
```js
class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }
}

```

## 🔐 Encpsulation
-Use closures or private fields to hide data

## 🔁 Polymorphism

```js
class Animal {
  speak() { console.log("Generic sound"); }
}
class Dog extends Animal {
  speak() { console.log("Bark"); }
}

```

## 🔧 Function Methods 

| Method   | Syntax                          | Invocation | Arguments Format       | Returns        | Use Case Example                      |
|----------|----------------------------------|------------|-------------------------|----------------|----------------------------------------|
| `call()` | `func.call(thisArg, arg1, ...)` | Immediate  | Individual arguments    | Result of func | Borrow method, quick execution         |
| `apply()`| `func.apply(thisArg, [args])`   | Immediate  | Array of arguments      | Result of func | Use when args are in array             |
| `bind()` | `func.bind(thisArg, arg1, ...)` | Delayed    | Individual arguments    | New function   | Event handlers, delayed execution      |

---

### 📌 Example Code

```js
function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}
const person = { name: "Sabina" };

greet.call(person, "Hello");       // Hello, Sabina
greet.apply(person, ["Hi"]);       // Hi, Sabina
const boundGreet = greet.bind(person, "Hello");
boundGreet();                      // Hello, Sabina
