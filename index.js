// // OOP[OBJECT ORIENTED PROGRAMMINNG]
// // class
// // methods
// // 
// // properties
 
// // this
// class Car {
//     constructor(name, color, speed){
//         this.name = name
//         this.color = color
//         this.speed = speed
//     }

//     drive(){
//         console.log("Just drove 2 mile");
//     }

//     brake(){
//         console.log("Just hit the brake");
//     }
// }

// const porsche = new Car('Porsche','yellow', 250)
// // console.log(porsche.name);
// // console.log(porsche.color);
// // console.log(porsche.speed);

// // instantiate
// // const nums = [1, 2, 3, 4, 5]
// // nums.forEach(_ => porsche.drive())


// // add method into array datatype

// Array.prototype.myPush = function(item){
//     this[this.length] = item
//     return this
// }


// const fruits = ["Banana", "Apple", "Mango"]


// console.log(fruits.myPush("nnana"));



class Bank {
    constructor(balanced){
        this.balanced = balanced
    }
    withdraw(amount) {
        if (this.balanced- amount <= 0){
            console.log('Cannot');
            return
        }
        this.balanced -= amount
        console.log('Withdrawal', `Ksh ${amount}`);
        console.log({balance: this.balanced});
    }
    deposit(amount){
        this.balanced += amount
        console.log('deposit', `Ksh ${amount}`);
        console.log({balance: this.balanced});

    }
}


const hezronChecking = new Bank(100)



// hezronChecking.deposit(200)
hezronChecking.withdraw(200)

// get the div by Id
 
const depositBtn = document.getElementById("deposit");
const withdrawBtn = document.getElementById("withdraw");
const balanceDiv = document.getElementById("balance");
const amountInput = document.getElementById("amount");

depositBtn.onclick = () => {
    const amount = Number(amountInput.value)
    // console.log(amount);
    hezronChecking.deposit(amount)

    balanceDiv.innerText = `Balance: ${hezronChecking.balanced}`

}

withdrawBtn.onclick = () => {
    const amount = Number(amountInput.value)
    hezronChecking.withdraw(amount)

    balanceDiv.innerText = `Balance: ${hezronChecking.balanced}`

}