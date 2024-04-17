#!/usr/bin/env node
// This line specifies the programming environment the code below should be run when executing via CLI


// const note = process.argv[2];
// const newNote = {
//     content: note,
//     id: Date.now(),
// };

// console.log(newNote);

/**
 * Module
 * 
 * Nothing outside of the () surrounding the function can be accessed
 * - Protects specific code from global scope
 * - Can interact with other parts of code to perform specific tasks
 */
// (function () {
//     console.log("IIFE");
// })()

/**
 * When importing modules from elsewhere, notice the following:
 * - When importing a module YOU made, you need to include the path to that module
 * - When importing a module native to Node, you don't need to include the path to that module
 */
// import {count} from './utils.js';
// import whatever from './utils.js';

// [OPTIONAL] You can also specify a module's origin if you're trying not to use 3rd party modules with the same name
// import fs from 'node:fs';
// import fs from 'fs';


/**
 * Require vs import
 * 
 * See utils.js for how modules are exported
 */

// These are effectively the same
// import {count} from './utils.js';

// Common JS, but getting phased out
// const {count} = require('.utils.js');

/**
 * NOTES:
 * 
 * When creating and organizing your Node Modules, try to keep them associated based on how they work or what they accomplish.
 * - e.g. different files that perform utility-like behaviors, put them into utils
 * 
 * Modules are cheap to make, so don't hesitate to create as many modules as you want or need.
 */

/**
 * Scenario: After moving utility related files to their own `utils` directory,
 * how do we access those elsewhere? 
 * - We could just import every individual module we have in the `utils` directory to this root index file...
 * - or we could do it a different way (see utils/index.js)
 */

// We can have the `utils/index.js` file export everything we need from the `utils` directory,
// and then we import everything from the `utils` directory this way:
// import * as thing from './utils';

// // Because we're importing a whole directory, Node knows to go to the `utils` directory and look for an index.js file
// thing.other;
// thing.count();
// thing.somethingElse();

// // Ultimately, the `import` syntax is best practice