// import fetch from "node-fetch";

// // const { default: fetch } = require("node-fetch");

// // Asychronous programming

// // ** Pseudocode 
// //  Your order tomato soup
// // Meanwhile you conntinue your convo with a friend
// // RESOLVE - You server bring your soup
// // RESOLVE - No soup today **
// // console.log("You start the convo with your ..");

// // // const waitingForSoup = () => console.log('soup');
// // setTimeout(() => console.log('Soup'), 4000); //4000ms is 4second

// // console.log('Still speaking');

// // LESSON 13: PROMISES ASYNCHRONOUS PROGRAMMING


// // Code resolve
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let isReady

        isReady = [true, false][Math.floor(Math.random() * 2)];
        // tenary operator
        isReady ? resolve('Soup is ready'): 
        reject('No soup today');
    }, 2000)
});

// RESOLVED -> if waiter brings you a soup
// then you tip the waiter
// and pay for the soup

// REJECT -> LEAVE A BAD review 
// No tip
const promise = async() =>{
    // variables in objects
    const data = {rating: 0, tip: 0 , pay: 0, review: 0}
   
    try{
        const soup = await promise1
        console.log(soup);
        data.rating = 5 + 'Stars'
        data.tip = .2
        data.review = 5
        data.pay = 1000

        return data
    } catch (error){
        console.log(error);
        data.rating = 0 + 'stars'
        data.tip = 0
        data.pay = 0
        data.review = 1

        return data
    }
}

// extract the value from it.
// there 2 ways to extract :
// ** 1 EITHER you AWAIT which have to wrapper into ASYNC
console.log(await promise());
// ** 2 OR you use .then(value => console.log(value))
console.log(promise().then(value => console.log(value)));

