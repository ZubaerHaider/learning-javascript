// JavaScript version: ES1-ES5; ES6-ESnext

// 16GB - 16*8=128GBit

// Memory:
// Read - read
// Write - write, edit/update, delete
// Boundary - Module

// Data Type and Data Structure

// Stack
// Queue
// List
// Array
// Tree: parent-child
// Node: no parent-child

// Loss Coupling; High Cohesion;

// Assignment statement
// conditional statement
// loop

// Principle: persistence ignorance.
// Data centric. [ignorance]
// Behavior/functionality centric. [purity]
// C programming language
// Multi-paradigm(OOP + Functional programming): C++, Java, C#, python, JavaScript

// O-Object

// coined the term: Alan Kay (biologist), Smalltalk (pure oop)

// Class: big function, small function(pure)

// Command/request(language)(modeling)(language paradigm) -> ordering(forcefully), requesting, don't know how to do it.

// What is model: a structure or a way of solution of a problem.

// Paradigm is a model.

// Language paradigm:
// - Declarative [ordering(forcefully)]
//   - Object-oriented (don't know how to do it.)
// - Imperative  [requesting]
//   - Functional (don't know how to do it.)

// JavaScript (after 2015 , ES6) is published as multi-paradigm language.

// Tasks: apple counting.
// 1. filtering good and bad.
// 2. filtering colors.
// 3. filtering sizes.

// you should develop logical behave -> strength or capability or capacity of doing a some tasks.

// programming: behavior(computer program) + task(human request) = functionality(programming logic).

// functional programming (small function): one function represents one single behavior.
// objection oriented programming(class: big function): one function represents one single task, inside this one function will represent more small functions.

// Modularization
//import sumFun from "./11_08_24.js";

// Task: addition two numbers.

function Sum(a, b) { // functional programming  
  return a + b; // addition
}

let result = Sum(5, 4); // = 9

console.log(result);
