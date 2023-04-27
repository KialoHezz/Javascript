// OOP[OBJECT ORIENTED PROGRAMMINNG]
// class
// methods
// 
// properties
 
// this
class Car {
    constructor(name, color, speed){
        this.name = name
        this.color = color
        this.speed = speed
    }

    drive(){
        console.log("Just drove 2 mile");
    }

    brake(){
        console.log("Just hit the brake");
    }
}

const porsche = new Car('Porsche','yellow', 250)
// console.log(porsche.name);
// console.log(porsche.color);
// console.log(porsche.speed);

// instantiate
// const nums = [1, 2, 3, 4, 5]
// nums.forEach(_ => porsche.drive())


// add method into array datatype

Array.prototype.myPush = function(item){
    this[this.length] = item
    return this
}


const fruits = ["Banana", "Apple", "Mango"]


console.log(fruits.myPush("nnana"));