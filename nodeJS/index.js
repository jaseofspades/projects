#!/usr/bin/env node
// This line specifies the programming environment the code below should be run when executing via CLI
// Think of this as the "ENTRY FILE"


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



/**
 * File system module
 */

// The file system module does what a human being can with files in a computer, this module can do as well
// import fs from 'node:fs';
// const data = fs.readFileSync('notes.json', 'utf-8');

// // The HTTP module helps you make servers
// // Typically, most engineers use framework that stems off of this module
// import http from 'node:http';

/**
 * NPM - Node Package Manager
 */
// When using npm, you can typically run `npm install {name of package you want to install}`
// If you need a package for anything, google it with "npm {module name}" and you'll most likely find it

// Example:  You ran 'npm install exif-parser' in your terminal
// The module gets installed
// And notice in your project directory a new directory was created: `node_modules`
// All items downloaded and installed will be stored in node_modules

// Notice the inclusion of `package-lock.json` ?
// This file is similar to package.json, but it basically locks in the versions of all the things we installed
// This is useful to ensure everyone on the team are using the same versions of the same modules
// And when we deploy it to another server, we need the server to also have the same matching versions to be compatible!

// The package and package-lock.json files help indicate what modules are needed at which versions in order to use your stuff
// And it makes it easier for anyone who wants to use your stuff by running a simple npm install and get the versions and modules
// And in package.json, you'll notice the exif-parser module listed in the `dependencies` section



/**
 * Yargs module
 */
import './src/command.js';