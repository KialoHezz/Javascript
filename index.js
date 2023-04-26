// import fetch from "/node-fetch";

// Asychronous programming

//  ** Pseudocode
//  Your order tomato soup
// Meanwhile you conntinue your convo with a friend
// RESOLVE - You server bring your soup
// RESOLVE - No soup today

const waitingForSoup = () => console.log('soup');
setTimeout(() => console.log('Soup'), 4000); //4000ms is 4second
