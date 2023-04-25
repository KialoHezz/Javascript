// dfn fetch
// import fetch from "node-fetch";
// API [Application programming interface]
//**  and it lets you app communicate with other services to fetch data

// 
// URL  => https://dog.ceo/api/breeds/image/random

// querySelect
const dogImageDiv = document.getElementById("dogImage");

const dogButton = document.getElementById("dogButton");

// get access
// .then -> Promises
// asynchronous programming

const getNewDog = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
      console.log(json);
  
      dogImageDiv.innerHTML = `<img src='${json.message}' />`
    })

}

  dogButton.onclick = () => getNewDog();