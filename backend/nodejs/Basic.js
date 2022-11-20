// Core Node Modules
// http, https, fs, path, os

// 1. What is the Event Loop?
// 2. Is node single- or multi-threaded? (When?)
// 3. Why is Node.js said to scale well?

// Event Loop

// Function calls goes to the Call Stack,
// If there is an asynchronous call it goes to the => Web API (Timer) 
// and empties the stack which after the time is complete transfer the
// call to the => Task Queue/Callback Queue after which EVENT LOOP is performed,
// which check whether the stack is empty an there is anything in the 
// Task Queue, if yes it takes the first thing on the queue and 
// pushes on to the stack which effectively runs it.

// SETTIMEOUT VS SETIMMEDIATE

// The main advantage to using setImmediate() over setTimeout() is setImmediate() 
// will always be executed before any timers if scheduled within an I/O cycle, 
// independently of how many timers are present.

// SETIMMEDIATE VS PROCESS.NEXTTICK

// Use setImmediate if you want to queue the function behind whatever I/O event callbacks 
// that are already in the event queue. Use process.nextTick to effectively queue the 
// function at the head of the event queue so that it executes immediately after the 
// current function completes.
// So in a case where you're trying to break up a long running, CPU-bound job using  
// recursion, you would now want to use setImmediate rather than process.nextTick to 
// queue the next iteration as otherwise any I/O event callbacks wouldn't get the  
// chance to run between iterations.

// The Call Stack is the javascript runtime.
// setTimeout is a webApi and doesn't live inside javascript runtime
// Event loop is also the outside of javascript runtime and webapi

// Event loop:
    // it just asks the call stack of javascript runtime if its free, if its free then
    // event loop looks at the callback queue and say do u have anything to be processed
    // and then it pulls those things to the call stack one by one so that the runtime
    // can execute them