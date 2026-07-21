# 1. Difference between `forEach` and `for...of`

### `forEach()`
- Array method.
- Iterates through every element.
- Cannot use `break` or `continue`.
- Not suitable with `await`.

### `for...of`
- JavaScript loop.
- Works with any iterable.
- Supports `break`, `continue`, and `await`.

**When to use:**
- Use **`forEach()`** for simple operations on every array element.
- Use **`for...of`** when you need more control or asynchronous operations.

---

# 2. Hoisting and Temporal Dead Zone (TDZ)

### Hoisting
- JavaScript moves declarations to the top of their scope before execution.
- `var` is hoisted and initialized with `undefined`.
- `let` and `const` are hoisted but not initialized.

### Temporal Dead Zone (TDZ)
- The time between entering a scope and declaring a `let` or `const` variable.
- Accessing the variable during this period throws a `ReferenceError`.

**Example:**
```javascript
console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError
let b = 5;
```

---

# 3. Difference between `==` and `===`

### `==` (Loose Equality)
- Compares values after type coercion.

```javascript
5 == "5" // true
```

### `===` (Strict Equality)
- Compares both value and data type.

```javascript
5 === "5" // false
```

**Recommendation:** Prefer `===` to avoid unexpected results.

---

# 4. `try...catch` and Async Operations

- `try` contains code that may throw an error.
- `catch` handles the error without stopping the program.
- In async code, it catches rejected Promises when using `await`.

```javascript
try {
    // code
} catch (error) {
    console.log(error);
}
```

---

# 5. Type Conversion vs. Type Coercion

### Type Conversion (Explicit)
- The programmer manually converts a value.

```javascript
Number("10") // 10
String(123)  // "123"
```

### Type Coercion (Implicit)
- JavaScript automatically converts a value.

```javascript
"5" + 2 // "52"
"5" - 2 // 3
```

**Difference:**
- **Type Conversion:** Manual.
- **Type Coercion:** Automatic.