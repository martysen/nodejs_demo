/**
 * The os module: grabbing info about working environment, operating system...
 * 
 */
const os = require('os');
const path = require('path');
const fs = require('fs');


/**
 * return your OS platform
 */
console.log(os.platform());

/**
 * return CPU architecture
 */
console.log(os.arch());

/**
 * return CPU core info
 */
console.log(os.cpus()); // return obj for every core


/**
 * return information on memory -- free memory and total memory
 */
console.log(os.freemem());
console.log(os.totalmem());

/**
 * Return the home directory 
 */
console.log(os.homedir());


/**
 * Return uptime -- amount of time your computer been running
 */
console.log(os.uptime()); // output in seconds