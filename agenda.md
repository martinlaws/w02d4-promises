W2D4 with KV
=====

## 0. Review on Callbacks

What? 

```js
a()
b()
```

- Function that's passed into another function as a variable/arg
- The callback fn is called back when a specific action has been done

Why? 

- JS does not like to be "blocked" by a()
- Concurrency Models (JS has a specific one. Event based. Event Loop)

## 1. Expectation Setting [5m]

Promises!! =/

## 2. Review Callback Hell [2m]

Let's look at the Profile Generator assignment.

Nested callbacks happen in JS 
Because one relies on the other. 

## 3. Promise-based Solution (Preview) [10m]

- Callbacks are still used with Promises, just not the crazy stairecase/waterfall hell.

- As a preview of things to come, let's look at the solution for it.
- Note the separate npm module

## 4. Wait, what are Promises? [15m]

- Analogy

## 5. Practice Problem with FS (Callbacks first) [20m] 

Problem: 
Read the data files ** in order **, creating one final string as a result

## 6. Now with Promises [20m]

## 7. Stretch: Create Promises [20m]

## 8. Stretch: Promise.all and Promise.race (introduction) [5m]