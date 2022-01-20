const isOdd = require('is-odd');
 
try {
    console.log(isOdd('f1')); //=> true
}
catch (e) {
    // console.log(e);
    console.log("There was an error, please recheck your request and try again later.");
}