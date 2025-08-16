# 🌐 JavaScript – Fetch API, Strict Mode & Error Handling

## ✅ Fetch API

- Used to make HTTP requests (GET, POST, etc.)
- Returns a Promise

### 🔹 What is it?
Fetch API is used to make HTTP requests. It returns a Promise and is cleaner than older `XMLHttpRequest`.

### 🔹 Example:
```js
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
