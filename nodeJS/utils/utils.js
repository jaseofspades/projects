
// When exporting functions or files with supplemental items, you need to explicitly make it exportable.
// When importing these exported items to a different file, you need to specify what you're importing in
// i.e. import {count} from './utils.js';
// export const count = num => num;

// When using export default, it means you can import that item under any name you want without {}'s
// i.e. import whatever, {count} from './utils.js';
// export default {name: 'cookies'};

/**
 * Basically, if an item is 'export default' it's automatically included when importing this utils file.
 * If an item is 'export' only, you need to specify what you're importing among exportable functions/items
 * within {}'s in the import line
 */


/**
 * Require vs import
 * - in particular, exporting
 */
// These are effectively the same
// export const count = num => num;

// // Common JS, but getting phased out
// exports.count = num => num;
// module.exports = {
//     count
// }

/**
 * Scenario: After moving utility related files to their own `utils` directory,
 * how do we access these elsewhere? 
 */
export const count = num => num;
export const somethingElse = () => {}