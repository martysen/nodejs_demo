/**
 * Tutorial on node Events using EventEmitter class
 * https://nodejs.org/dist/latest-v16.x/docs/api/events.html
 */
const EventEmitter = require('events');

// Create the event emitter class
// class MyEmitter extends EventEmitter{ }


/** 
 * Initialize an object of the class
 * */ 
// const myEmitter = new MyEmitter();

/**
 * Set up an event listener with the object 
 *  */ 
// myEmitter.on('event', () => console.log(`Event Fired`));


/**
 * Initialize the event
 *  */ 
// myEmitter.emit('event'); // will fire off the event body which the callback function 


/**
 * Example of events using the use case example of a logger application 
 * In the root folder create the file -- logger.js
 * Create a Logger class that extends the EventEmitter class and add an event method 
 * Import the logger.js here
 */
const Logger = require('../logger');

/**
 * Instantiate an object of Logger
 */
const logger = new Logger();

/**
 * call the .on() method using this object of Logger
 */
logger.on('message', (data) => console.log(`Called Listener:`, data));

/**
 * Call the log method in the class to activate the event and associated listener
 */
logger.log('This is a logging Hello World'); // evertime you run this you get a new uuid
logger.log('Another msg....');
logger.log('Whats going on....');
