// dfn fetch
import fetch from "node-fetch";
// API [Application programming interface]
//**  and it lets you app communicate with other services to fetch data

// 
// URL  => https://dog.ceo/api/breeds/image/random

// get access

fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(json => console.log(json))