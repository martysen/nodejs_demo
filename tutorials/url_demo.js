/**
 * The url module 
 */
const url = require('url');

/**
 * instantiate a new URL object 
 */
const myURL = new URL('https://www.oakland.edu/secs/about-the-secs/');
const bestBuy = new URL('https://www.bestbuy.com/site/lenovo-chromebook-3-11-chromebook-amd-a6-4gb-memory-32gb-emmc-flash-memory-onyx-black/6419029.p?skuId=6419029');

/**
 * Return the serialized URL
 */
console.log(myURL.href); // returns the entire string

/**
 * If ever necessary you can convert the url to a string 
 */
console.log(myURL.toString());

/**
 * return the root domain
 */
console.log(myURL.host);

/**
 * return hostname
 */
console.log(myURL.hostname); // this will not grab the port number if specified in the url

/**
 * Return the pathname
 */
console.log(myURL.pathname);

/**
 * The serialized query -- any query parameters 
 */
console.log(bestBuy.search); // anything after the ? in the url

/**
 * Create an object using the URL search parameters
 */
console.log(bestBuy.searchParams); // returns obj

/**
 * Adding parameters to url
 */
myURL.searchParams.append('abc','123');
console.log(myURL.searchParams);

/**
 * Looping through url parameters
 */
myURL.searchParams.forEach((value,name) => {
    console.log(`${name}:${value}`);
});