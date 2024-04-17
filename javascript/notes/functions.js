
/**
 * Function expressions
 */

// Anonymous function expression
// const clickHandler = function() {
//     console.log('calling clickHandler');
// }

// clickHandler();

// Named function expression
/**
 * This one is more descriptive because it identifies what is being
 * run within the function expression
 */
// const keyHandler = function keyHandler() {
//     console.log('calling keyHandler');
// }

// keyHandler();

// Example:
// // We could infer that the anonymous function is returning a `person`'s id value
// let ids = people.map(person => person.id);

// // But the named function makes it clear that we're getting the id of the `person`
// let ids = people.map(function getId(person) {
//     return person.id;
// })

// Another example: Chaining promises with named functions
// getPerson()
// .then(person => getData(person.id))
// .then(renderData);

// // The named function expression makes it clear we're getting the data from `person`
// // before rendering the data
// getPerson()
// .then(function getDataFrom(person) {
//     return getData(person.id);
// })
// .then(renderData);


/**
 * IIFE - Immediately Invoked Function Expression
 */
// var teacher = "Jason";

// // IIFE's keeps everything within its boundaries without affecting
// // other more global variables and scopes
// (function anotherTeacher() {
//     var teacher = "Suzy";
//     console.log(teacher); // "Suzy"
// })();

// console.log(teacher); "Jason"


/**
 * Block scopes
 */
// // Instead of using IIFE's, we can also leverage block scoping by using `let`
// var teacher = "Jason";

// {
//     let teacher = "Suzy";
//     console.log(teacher); // "Suzy"
// }

// console.log(teacher); // "Jason"

// // `let` keyword lets a variable exist temporarily within a block scope but
// // not beyond it
// function repeat(fn, n) {
//     var result;

//     for (let i = 0; i < n; i++) {
//         result = fn(result, i);
//     }

//     return result;
// }

// // It's good practice to keep things as narrowly scoped as you can


/**
 * Closure
 */
// Closure is when a function remembers variables outside of its scope, even if 
// you pass that function elsewhere

// Example:
// function ask(question) {
//     setTimeout(function waitASec() {
//         console.log(question);
//     }, 1000);
// }

// ask("What is closure?");

// What's going on here?
// The setTimeout() function is waiting for 1000 ms with the waitASec() function stored in memory
// The waitASec() function references the `question` variable, so while it's active and
// referencing the `question`, it stays alive until it executes

// Another example:
// function ask(question) {
//     return function holdYourQuestion() {
//         console.log(question);
//     };
// }

// var myQuestion = ask("What is closure?");

// myQuestion();

// What's going on here?
// We're calling the ask() function and storing it into `myQuestion`
// And as a result `myQuestion` is assigned the function expression holdYourQuestion()
// It's because of closure that `question` is still reference-able at the time of
// calling myQuestion()


/**
 * `this` keyword
 */
// A function's `this` references the execution context for that call
// It's determined entirely by HOW THE FUNCTION WAS CALLED!
// Functions aware of `this` have different contexts each time they're called

// var workshop = {
//     teacher: "Kyle",
//     ask(question) {
//         console.log(this.teacher, question);
//     }
// };

// workshop.ask("What is implicit binding?");

// At the place where the function is called, there's a workshop object
// that `this` is bound to
// At the time of calling the ask() function, it will pull the name "Kyle"

// function ask(question) {
//     console.log(this.teacher, question);
// }

// function otherClass() {
//     var myContext = {
//         teacher: "Suzy"
//     };

//     ask.call(myContext, "Why?"); // "Suzy Why?"
// }

// otherClass();

// When we use this.teacher, it uses myContext as the bound object
// And when we call this.teacher inside ask(), it knows to use myContext
// This is using a dynamic context for `this`


/**
 * Prototypes
 */

// We can define a function called Workshop that is aware of `this`
// and this function becomes a constructor for instances of its class type Workshop
// function Workshop(teacher) {
//     this.teacher = teacher;
// }

// To add functions to the Workshop class constructor, we add them through the prototype
// of the Workshop class

// Prototype is an object where any instances are going to be linked to
// Workshop.prototype.ask = function(question) {
//     console.log(this.teacher, question);
// }

// `new` keyword will invoke the Workshop function, and the object made will be
// linked to Workshop.prototype
// And since the prototype has access to the ask() function, we can call it 
// using the instance of a Workshop
// var deepJS = new Workshop("Kyle");
// deepJS.ask("Is 'prototype' a class?");