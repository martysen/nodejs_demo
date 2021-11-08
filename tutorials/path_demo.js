/**
 * Demos some important functionality of the Path module in nodejs
 * For full documentation see https://nodejs.org/dist/latest-v16.x/docs/api/path.html
 * 
 */

/**
 * Import the Path module
 */

const path = require('path'); // you do not have npm install any core modules


/**
 * Some important methods in the path module 
 */

/**
 * Basename - gets the base file name
 */

console.log(__filename); // returns the entire file name 
console.log(path.basename(__filename)); // returns only the basename i.e. the actual filename w/o the dir 


/**
 * Grabbing the dir name using the path module
 */
console.log(path.dirname(__filename)); // returns on the directory of the file

/**
 * Grabbing the file extension
 * 
 */
console.log(path.extname(__filename)); // returns the extension of the file


/**
 * Create and store different parts of the path as an object using the .parse()
 */
console.log(path.parse(__filename)); // returns an object with properties root, dir, base, ext, name

/**
 * You can individually any property of the path object as you see fit
 */
console.log(path.parse(__filename).base);


/**
 * Concatenate different paths  -- using .join()
 * Example - say you want to merge with the current directory name, some .html file in a folder called html
 */
console.log(path.join(__dirname, 'html', 'hello.html')); // helpful to generat paths independent of operating system and their delimiters. WIN using \ and Mac and Linux use /




