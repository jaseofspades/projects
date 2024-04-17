/**
 * Scenario: After moving utility related files to their own `utils` directory,
 * how do we access these elsewhere? 
 */

// One way is to export them from here to be imported elsewhere:
export {other} from './other';
export {count, somethingElse} from './utils';

// Then, when you need to access these exported modules elsewhere, you won't have to import
// every individual module to that file; you can simply import the `utils` directory (see ./index.js)