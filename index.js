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
// const person = require('./person'); // since this is a file and not a 3rd party installed module

/* ES6 syntax
    Note that this will not work since Node has not yet implemented this syntax.
    You will need to install what is called Babel, to compile this syntax in node
*/
// import person from './person';   // This method of module import is called CommonJS

// console.log(person);
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

/**
 * Back to this file after dicussing all the important core modules in NODE
 * Demo for web server
 * Later on we will learn Express.js which is the backend framework which will make life easier
 * However, we first have to understand the traditional way to appreciate why Express makes life easier.
 */

/**
 * Get some core modules in
 */

const http = require("http");
const path = require("path");
const fs = require("fs");
const { create } = require("domain");

/**
 * Create a new server object -- alternative way to not chain methods
 */
// const server = http.createServer((req, res) => {

//     //console.log(req.url); // check in terminal. browser wont show
//     if (req.url === '/') {
//         // Add http status and content type
//         // res.writeHead(200, { 'Content-Type': 'text/html'}); // you can check this in browser dev tool network tab
//         // res.end('<h1> Hello World </h1>'); // so that we dont have to close in a new line of code

//         /**
//          * Pushing a html and css file with front end javascript
//          * First create a folder here called public
//          * inside of this paste all the file you want to serve
//          */
//         fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
//             if (err) throw err;
//             res.writeHead(200, { 'Content-Type': 'text/html'});
//             res.end(content);

//         })

//     }else if (req.url === '/about') {
//         fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
//             if (err) { throw err; }
//             res.writeHead(200, { 'Content-Type': 'text/html'});
//             res.end(content);
//         });

//     }
//     /**
//      * If you have REST API you will serve JSON instead of html
//      * This is the traditional way below
//      * But most devs and I mean all will use Express to develop restful apis
//      */
//     else if (req.url === '/api/users') {
//         // At this point you will be querying the Database and getting the data back and publish it
//         // In the absence of a DB for now, we will hardcode the value
//         const users = [
//             {name: 'mary jane', age:39},
//             {name: 'peter parker', age: 40}
//         ];

//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify(users));
//     }
// });

/**
 * A better and dynamic way to serve
 * Comment out the previous create server
 *
 */
const server = http.createServer((req, res) => {
  // create a dynamic file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // create dynamic Content-Type using extension of the files to be served
  let extName = path.extname(filePath);

  // Initial Content-Type
  let contentType = "text/html";

  // check ext and set content type
  switch (extName) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // Load the files
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // page not found
        // Load an error page say 404 html
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        // some sort of server error like 500
        res.writeHead(500);
        res.end(`Server Error ${err.code}`);
      }
    } else {
      // No error success loading
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

/**
 * Note Imp - Instead of running in terminal node index.js to start the server
 * // Use -- nodemon index.js [However you cannot use this in terminal since we didn't install globally]
 * // This way you don't have to manually restart the server everytime your update your backend
 * So go to package.json and locate the scripts part and add the scripts as shown in the package.json file
 *
 * To run ascript, in terminal type -- npm run scriptName
 * So for us we want to use -- npm run dev
 * Now if you change anything in the backend, you dont have to restart your server as nodemon is monitoring it
 *  */

// Let host decide the port or use 3000
const PORT = process.env.PORT || 3000;

// Start the server and give the prompt
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
