/**
 * import the fs core module
 */
const { throws } = require('assert');
const fs = require('fs');

/**
 * Import path as well
 */
const path = require('path');


/**
 * To create a folder on the system
 * These operations are asynchronous (takes a callback function) but it also has the option to do it synchronously
 */
/**
 * Create a folder called test in the current sub-directory of tutorials
 * Few things to note in the syntax
 * Note 1 - 
 *      fs.mkdir(pathnameWithFolderName, options, Callback Function) -- See slides for explanation of Callback Function
 * Note 2 - 
 *      We are not using any option here. Hence it is empty 
 * Note 3 - 
 *      Our callback function is an error catching function. It is written using arrow function syntax.
 *      You are write it in the traditional format that is fine
 * Note 4 - 
 *      Interpreting arrow functions: [variable to catch output if any =] (parameters) => {function body}
 * 
 */
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//     if (err) {
//         throw err; // If you run this twice you will get an error 
//     }else{
//         console.log(`Folder Successfully created`); // Run this the first time you will get this log 
//     }

// });


/**
 * Creating Files 
 * One way -- using the method .open()
 * Second way -- create file and write to it --- .writeFile()
 * Note - In comparison to options being the 2nd parameter, Here the 2nd parameter is the content you want to write
 * Note - This will overwrite contents if you run multiple times
 */
// fs.writeFile(path.join(__dirname, '/test','hello.txt'), 'Hello World in text file created and written using fs module', (err) => {
//     if (err) throw err; 
//     console.log(`File created and written`);
// });


/**
 * Append to existing files using .appendFile()
 * You can either run this separately, OR
 * You can include this as a callback to writeFile
 * Below shows the 2nd approach 
 */
// fs.writeFile(path.join(__dirname, '/test','helloAppend.txt'), 'New Hello World generated using writeFile \n', (err) =>{
//     if (err) throw err;
//     else{
//         console.log(`File has been created and written to.... Now appended next content`);
//         fs.appendFile(path.join(__dirname, '/test','helloAppend.txt'), 'Content appended using appendFile', (err) => {
//             if (err) throw err;
//             console.log('File has been appended');

//         });
//     }
// });


/**
 * Reading from an existing file using .readFile()
 * parameters are -- pathname, fileEnconding, callback function
 */

fs.readFile(path.join(__dirname, '/test', 'helloAppend.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    else{
        console.log(data); // you can consume the data anyway you want 
    }
});


/**
 * Rename a file using .rename()
 * parameters - old path with filename, new path with new filename, callback 
 */
fs.rename(path.join(__dirname, '/test','hello.txt'), path.join(__dirname, '/test','helloRenamed.txt'), (err) => {
    if (err) throw err; 
    console.log(`-- -- -- -- -- -- `);
    console.log(`|                |`);
    console.log(`|  File Renamed  |`);
    console.log(`|                |`);
    console.log(`-- -- -- -- -- -- `);
});


