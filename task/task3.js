//Task1 - Find the smallest integer in the array

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min (...args);
  }
}

//Task2 - Geometry Basics: Circle Circumference in 2D

function circleCircumference(circle) {
  let radius = circle.radius
  let circumference = 2 * Math.PI * radius;
  return circumference;
}

//Task3 - Training JS #12: loop statement --for..in and for..of

function giveMeFive(obj) {
  let array = []; 
  for (let key in obj) {
    if (key.length === 5) {
      array.push(key);
    }
    if (obj[key].toString().length === 5) {
        array.push(obj[key]);
    }
  }
  return array;
}

//Task4 - Understanding closures - the basics

function buildFun(n){

    var res = []

    for (var i = 0; i< n; i++){
        res.push(function(){
            console.log(i)
        })
    }
    return res
}

//Task5 - Fun with ES6 Classes #2 - Animals and Inheritance

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }

  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}