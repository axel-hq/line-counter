# Counting code lines

_Inspired by the Counting Code Lines Kata on CodeKata.com._

## Objective
The main objective of this exercise is to write a program, in the language of your choice, that counts the number of code lines in a JavaScript program. You will have 90 minutes of time to complete this task, and you are expected to have working code at the end of the task. You will be judged on how thoughtful your solution is, with a few key characteristics:
* Did you critically think about the correctness of your solution, given your understanding of how JavaScript works? Make sure to make your assumptions explicit.
* The definition given below of what qualifies as a code line is vague. Did you decide on the specifics of what qualifies as a code line, and does your solution handle the corresponding edgecases correctly?
* Is your code readable? Is it easy to prove that your code is bug-free, even without tests? How much time would it take a new developer to read your code and understand how it works?

## Context and definitions
In Javascript, there are single-line comments which look like
```js
// I am a single-line comment!
```
, and multiline comments, which look like:
```js
/*
This is a multiline comment.
This is a second line in the same comment.
*/
```

There can be multiple multiline comments on a single line, and multiline comments do not nest. A multline comment terminates at the first instance of the `*/` characters.

Now you might ask: What are the exact conditions on what qualifies as a code line? Well, I'm not going to give you an exact answer, as you'll have to define that for yourself. However, I can give some useful examples and heuristics that I believe are good to employ.
* If every line in a source file contains code and there are no comments, the number of code lines is equal to the number of lines.
* If a line contains only whitespace or a single-line comment, it doesn't count as a code line.
* If a single-line comment is at the end of an existing code line, that doesn't invalidate that line as a code line.
* If set of lines exclusively form a multiline comments, those lines do not count as code lines.

## Provided resources
If you choose to complete this project in python, provided for you is
* a blank `count_lines.py` file to put your code in
* a `tests/*.js` folder containing example JavaScript code files and my assessment of how many lines they contain
* an executable `test.py` file which tests the code

You are free to choose your own language or use the python tools provided, and you are free to write your own tests or use the tests provided, regardless of the language you choose. The only requirement is that your code should be finished by the end of the 90 minutes.

And with that, good luck!
