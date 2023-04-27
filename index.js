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

        isReady = false;
        // tenary operator
        isReady ? resolve('Soup is ready'): 
        reject('No soup today');
    }, 2000)
});

// excer
const promise = async() =>{
    try{
        const soup = await promise1
        console.log(soup);
    } catch (error){
        console.log(error);
    }
}

promise()

// // console.log(promise1.then(value => console.log(value)));


// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let isReady 

//         isReady = false;
//         // tenary operator
//         isReady ? resolve('Soup is ready'): 
//         reject('No soup today');
//     }, 2000)
// });

// // catch the reject
// // console.log(promise2
// //                 .then(success => console.log({success}))
// //                 // below where error happens
// //                 .catch(Err => console.log({Err}))
// // )


// // index true or false
// // const promiseTF = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         let isReady
// //         // get random true or false
// //         isReady = [true, false][Math.floor(Math.random() * 2)];
// //         // tenary operator
// //         isReady ? resolve('Soup is ready'): 
// //         reject('No soup today');
// //     }, 2000)
// // });

// // console.log(promise2
// //                 .then(success => console.log({success}))
// //                 // below where error happens
// //                 .catch(Err => console.log({Err}))
// //             )


// // console.log('fetch:', 
// // fetch('https://dog.ceo/api/breeds/image/random')
// //     // get a response
// //     .then(response => console.log("response:" ,response.json()))
// //     .then(data => console.log({data}))

// // );


// // async &Await (asynchronous programmming)
// // RULES to use Async / await
// // ** 1. You must create a function *
// //  ** 2. you must use the keyword async
// // ** 3. use the word await

// const getDOg = async () => {
//     const url = 'https://dog.ceo/api/breeds/image/random';
//     // await is the same as .then(response => response.json())
//     const response = await fetch(url);
//     const data = await response.json()
//     // console.log(data);
// }

// // getDOg()