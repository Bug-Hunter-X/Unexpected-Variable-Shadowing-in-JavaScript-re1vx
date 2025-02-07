# Unexpected Variable Shadowing in JavaScript

This example demonstrates how the `let` keyword in JavaScript creates block scope, and how this can lead to unexpected variable shadowing.

The `bug.js` file contains a function where a variable declared with `let` inside a block shadows a variable with the same name declared outside the block. The inner variable is only accessible within the block.

The `bugSolution.js` file demonstrates how to avoid this issue, by either using different variable names or by declaring the variable only once within a larger scope.

## How to reproduce the bug:
1. Clone this repository.
2. Run `node bug.js` in your terminal.