// import fetch from "/node-fetch";

// Asychronous programming

// ** Pseudocode 
//  Your order tomato soup
// Meanwhile you conntinue your convo with a friend
// RESOLVE - You server bring your soup
// RESOLVE - No soup today **
// console.log("You start the convo with your ..");

// // const waitingForSoup = () => console.log('soup');
// setTimeout(() => console.log('Soup'), 4000); //4000ms is 4second

// console.log('Still speaking');

// LESSON 13: PROMISES ASYNCHRONOUS PROGRAMMING


// Code resolve
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let isReady

        isReady = true;
        // tenary operator
        isReady ? resolve('Soup is ready'): 
        reject('No soup today');
    }, 2000)
});

// console.log(promise1.then(value => console.log(value)));


const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let isReady 

        isReady = false;
        // tenary operator
        isReady ? resolve('Soup is ready'): 
        reject('No soup today');
    }, 2000)
});

// catch the reject
// console.log(promise2
//                 .then(success => console.log({success}))
//                 // below where error happens
//                 .catch(Err => console.log({Err}))
// )


// index true or false
const promiseTF = new Promise((resolve, reject) => {
    setTimeout(() => {
        let isReady
        // get random true or false
        isReady = [true, false][Math.floor(Math.random() * 2)];
        // tenary operator
        isReady ? resolve('Soup is ready'): 
        reject('No soup today');
    }, 2000)
});

console.log(promise2
                .then(success => console.log({success}))
                // below where error happens
                .catch(Err => console.log({Err}))
            )