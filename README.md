# Counting code lines

_Inspired by the Counting Code Lines Kata on CodeKata.com._

## Objective
The main objective of this exercise is to write a program, in the language of your choice, that counts the number of code lines in a JavaScript program. You will have 90 minutes of time to complete this task. You are NOT expected to have working code at the end of the task, but will rather be judged on how thoughtful your solution is, with a few key characteristics:
* Did you critically think about the correctness of your solution, given your understanding of how JavaScript works? Make sure to make your assumptions explicit.
* The definition given below of what qualifies as a code line is vague. Did you decide on the specifics of what qualifies as a code line, and does your solution handle the corresponding edgecases correctly?
* Is your code readable? Is it easy to prove that your code is bug-free, even without tests? How much time would it take a new developer to read your code and understand how it works?

You're allowed to look up whatever you want to help you with your development. The only real restrictions are:
* No looking up the solution in its entirety.
* Use of AI-based automated code generation tools is forbidden, and if you have these in your editor I would kindly ask that you turn such tools off for the duration of the exercise.

## Context and definitions
In Javascript, there are single-line comments which look like
```js
// I am a single-line comment!
```
, and block comments, which look like:
```js
/*
This is a block comment.
This is a second line in the same block comment.
*/

/* block comments can also be on the same line */
```

There can be multiple multiline comments on a single line, and multiline comments do not nest. A multline comment terminates at the first instance of the `*/` characters.

## Provided resources
You are free to choose your own language or use the starter code in either Python or JS provided, and you are free to write your own tests or use the tests provided, regardless of the language you choose. The only requirement is that your code should be finished by the end of the 90 minutes.

And with that, good luck!
