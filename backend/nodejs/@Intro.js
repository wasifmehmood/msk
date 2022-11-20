// Background Info:
// First JS engine was Spider Monkey which is still used by mozilla firefox

// What is NodeJS?
// A Javascript runtime

// What is V8?
// Nodejs uses V8 engine, A Javascript engine developed by google that runs javascript inside the browser.
// V8 engine => It takes the javascript code compiles it into machine code.
// V8 itself is written in C++

// NodeJs takes V8 codebase and adds certain features i.e. local file system (opening, reading, deleting) (fs)
// which are not possible in the browser for security reasons

// With Nodejs you dont just write the code thats running on the server, you also write the server yourself, whereas
// as compare to php we have other tools like apcahe and nginx which runs the server and listens the incoming requests
// then execute our php code, while nodejs does both, does the listening and the other executions.

// What is Javascript?
// 1. Weakly type language
// No explicit type assignement
// Data types can be switched dynamically
// 2. Object oriented language

// Reference types
// It only stores an address pointing at the place of memory where the Data structure is stored.

// Immutatbe Data Structure
// The data structure cannot not be changed.
// An immutable pattern
// We never add to existing values but we always replace them with the copy plus the changes.

// Copy methods
// 1. Slice
// 2. Spread Operator

// Rest Operator
const toArray = (...args) => {
    return args;
}

// Async Code with Callbacks
const fetchData = callback => {
    setTimeout(() => {
        callback('Done!!');
    }, 1000)
}

setTimeout(() => {
    console.log('Timer is done!');
    fetchData(text => {
        console.log(text);
    })
}, 2000)

// Async Code with Promises
const fetchPromiseData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500)
    });
    return promise;
}

setTimeout(() => {
    console.log('Timer is done!');
    // @ts-ignore
    fetchData().then(text => {
        console.log(text);
        return fetchData();
    }).then(text2 => {
        console.log(text2);
    });
}, 2000);