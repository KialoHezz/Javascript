//  ** while looop **

// While loop used when you not sure how many times to loop
//  for loop - used when your are sure how many times you nedd to looop 
let num = 0
while (num < 5){
    console.log("looping", num);
    num += 1
}


// addEventListener  
const playDiv = document.getElementById("play");

playDiv.addEventListener('click', function(){
    // console.log("play");
})

playDiv.onclick = () => {
    // console.log("Yo");
}


let displayDiv = document.getElementById("display");
document.addEventListener('keydown', function(e){
    if (e.key == "q") {
        console.log("you pressed Q");
        displayDiv.innerText = "You pressed Q"
    } else{
        console.log("Not Q");
        displayDiv.innerText = "Pressed another key; NOT q"
    }

})

/

