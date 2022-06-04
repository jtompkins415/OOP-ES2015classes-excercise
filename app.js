const add =  (x,y) => x+y;
const mult = (x,y) => x*y;
const square = (x) => x*x;
const power = (x,y) => x**y;

//Using a function as a property in multiple ways:

//Function as a property using an empty object, assigining predefined variables to the object and creating properties from said variables

// const myMath = {}
// myMath.add = add;
// myMath.mult = mult;

//Function as a property using the predifined variable in the object

// const myMath = {add, mult, square, power};

//Function as a property by defining the property key and writing the function in the value

// const myMath = {
//     add: function(x,y){
//         return x + y;
//     },
//     mult: (x,y) => {
//         return x * y;
//     }
// };

//Function as a property by simply writing the function with property name followed by function definition
const myMath = {
    add(x,y){
        return x+y;
    },
    square(x){
        return x*x;
    }
};

//Mixing Data & Functionality

function getHypotenuse(a,b) {
    return Math.sqrt(a ** 2 + b ** 2);
};
function getArea(a,b){
    return a * b/ 2;
};

//Have to constantly keep track of scattered values and pass them in as values everytime

// const side1 = 4;
// const side2 = 3;
// const side3 = getHypotenuse(side1, side2);

// const area = getArea(side1,side2);

//Instead we can create an object, that will have a & b as properties and methods as properties as well

//The function doesnt have any arguments to pass, instead we look them up with 'this'

// const rightTriangle = {
//     a:9,
//     b:12,
//     getArea: function(){
//         return this.a * this.b/ 2;
//     },
//     getHypotenuse: function() {
//         return Math.sqrt
//     }
// };

//The problem with this shorthand is there's no room for creating new objects with different variables

//Constructor Functions and New

//No room for creating new object or triangle with different a or b values

// const rightTriangle = {
//     a:9,
//     b:12,
//     getArea: function(){
//         return this.a * this.b/ 2;
//     },
//     getHypotenuse: function() {
//         return Math.sqrt
//     }
// };

//Instead we can use a constructor function to create a changeable object

//The constructor function will have a captial letter on the first word and then continue with camel casing

// function Triangle(a,b) {
//     this.a = a;
//     this.b = b;
// };

//Above is not an object, it is a function, to return an object we call it with the 'new' keyword and save it to a variable

// const t1 = new Triangle(5,7);


//Prototypes

// Array.prototype.push = function(val){
//     console.log(`So you want to add ${val}??`);
//     console.log("Sorry don't feel like it!")
// }


//Define a new method in the protoype of an object by defining it in JS

// Triangle.prototype.getArea = function(){
//     return this.a * this.b/ 2;
// };

// Triangle.prototype.getHypotenuse = function(){
//     return Math.sqrt(this.a ** 2 + this.b ** 2);
// };

//Classes

class Triangle{
    constructor(a,b,c){
        console.log('INSIDE TRIANGLE CONSTRUCTOR')
        for (let side of [a,b,c]){
        if(!Number.isFinite(side) || side <= 0){
            throw new Error('Sides must be positive numbers!');
          }
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    greet(){
        console.log('Hello from Triangle')
    }
    display(){
        return (`Triangle with sides of ${this.a}, ${this.b}, and ${this.c}`)
    }
    getArea(){
        const {a,b,c} = this;
        const s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }
    isBig(){
        return this.getArea() > 50;
    }
}

// const firstTri = new Triangle()
// firstTri.a = 3;
// firstTri.b = 4;


//Inheritance & Super


//"extends" keyword allows a new class to inherit the functionality of a previous class

//"super" also allows a class to call whatever constructor code was written in the super class, i.e the  class that is being extended
class RightTriangle extends Triangle{
    constructor(a,b,c){
        if((a * a) + (b*b) !== c*c){
            throw new Error ('Invalid C Side for Right Traingle!')
        }
        console.log('INSIDE RIGHT TRIANGLE CONSTRUCTOR')
        super(a,b,c);
        this.hypot = c;
        
    }
    display(){
        return "Right " + super.display()
        
    }
}