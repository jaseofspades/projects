
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