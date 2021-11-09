/**
 * This file consist of example to working of the events core module
 * It will imported to ./tutorials/events_demo.js
 * 
 */
const EventEmitter = require('events');
const uuid = require('uuid'); // creates a universally unique identifier (a 128-bit label for info in computer systems)

/**
 * Check out what a uuid looks like
 */
// console.log(uuid.v4());

class Logger extends EventEmitter {
    log(msg){
        // call the event when the method log() is called 
        this.emit('message', {id: uuid.v4(), msg})
    }
}

module.exports = Logger;

/**
 * Now goto the event_demo.js file and import this
 */