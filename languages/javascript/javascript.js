
//********** Callbacks start **********/ 

// Callbacks: Callbacks are functions that are executed asynchronously, or at a later time.

var fs = require('fs')
var myNumber = undefined

function addOne(callback) {
  fs.readFile('number.txt', function doneReading(err, fileContents) {
    // @ts-ignore
    myNumber = parseInt(fileContents)
    myNumber++
    callback()
  })
}

function logMyNumber() {
  console.log(myNumber)
}

addOne(logMyNumber);

//********** Callbacks end **********/ 

//********** Events start **********/ 

// Events: Events are a common pattern in programming, known more widely as the 'observer pattern' or '
    // pub/sub' (publish/subscribe). Whereas callbacks are a one-to-one relationship between the thing 
    // waiting for the callback and the thing calling the callback, events are the same exact pattern 
    // except with a many-to-many API.

// Events lets you subscribe to things. You can say 'when X do Y', whereas with plain callbacks it is 
    // 'do X then Y'.


//** References */
// https://github.com/maxogden/art-of-node#streams