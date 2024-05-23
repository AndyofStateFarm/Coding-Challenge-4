// U08282838

// Created car class with a constructor for make(brand) and speed(km/h)
class car{
    constructor(make, speed)
    {
        this.make = make;
        this.speed = speed;
    }

    // Increase car's speed by 10 km/h
    accelerate()
    {
        this.speed += 10;
        console.log(`${this.make} accelerated 10 km/h. Speed is now ${this.speed} km/h`);
    }

    // Derease car's speed by 5 km/h
    brake(){
        this.speed -= 5;
        console.log(`${this.make} braked to slow down 5 km/h. Speed is now ${this.speed} km/h`);
    }
}

// Created EV class that extends off of the car class
class EV extends car{
    constructor(make, speed, charge)
    {
        super(make, speed)
        this.charge = charge
    }
}