//Part One

class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    };
    honk(){
        return 'Beep.';
    };
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    };
};

//Part Two

class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
    };
    toString(){
        return super.toString();
    };
    honk(){
        return super.honk();
    };
    numWheels(){
        return 4;
    };
};

//Part Three

class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
    };
    toString(){
        return super.toString();
    };
    honk(){
        return super.honk();
    };
    numWheels(){
        return 2
    };
    revEngine(){
        return 'VROOM!!!';
    };
};

//Part Four

class Garage{
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
        }
    add(vehicle){
        if (!(vehicle instanceof Vehicle)){
            return 'Only Vehicles allowed in here!'
        } else if (this.vehicles.length >= this.capacity){
           return "Sorry, we're full."
        }
        this.vehicles.push(vehicle);
        return 'Vehicle added!' 
 }
}