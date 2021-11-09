/**
 * Demo for the http core module 
 * THe main server will be created in the index.js file
 * 
 */
const http = require('http');


/**
 * Create a server object
 * and chain it to a port that the server will listen on.
 * I am going to choose port 3000 on my local host
 */
http.createServer((req, res) => {
    // Send a response when req is recieved
    res.write('Hello World from node.js server');
    res.end();
}).listen(3000, () => console.log('Server running on port 3000....'));

/**
 * Run this file now in the terminal
 * You might get a firewall request access popup, at least in windows
 */

/**
 * Open a browser and type in 
 * localhost:3000
 * This should show you the Hello World from node.js server message!
 */

/**
 * Go to index.js to see how to run a simple useful webserver i.e. one that servs html css etc.
 */