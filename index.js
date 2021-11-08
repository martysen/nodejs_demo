// Test command 
// console.log('Hello from NODE.js'); // run from terminal using the command - node index.js  OR node index

/**
 * Note you are NOT going to write the bulk of your code here. 
 * You codes which will pieces of various functionalities referred to as modules will be coded in different files, and 
 * you will include them in this file
 */

/**
 * Example Exercise -- Create a person module called person.js and include in index.js
 * 
 */
// OLD SYNTAX
const person = require('./person'); // since this is a file and not a 3rd party installed module

/* ES6 syntax
    Note that this will not work since Node has not yet implemented this syntax.
    You will need to install what is called Babel, to compile this syntax in node
*/
// import person from './person';   // This method of module import is called CommonJS

console.log(person);
//console.log(person.name);

/**
 * Mini self exercise -2: Create a student module with a student class using which you can add new student record 
 * Include the module in the index.js file and instantiate a new object of the class
 */


/**
 * When you include a module, it is wrapped in what is called the module wrapper function. 
 * The function looks like below: 
 * // The Module Wrapper Function
 * (function (exports, require, module, __filename, __dirname) {
 *      //.....
 * })
 * 
 */