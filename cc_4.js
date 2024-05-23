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
        super(make, speed);
        this.charge = charge;
    }

    // Charge battery to set value
    chargeBattery(chargeTo)
    {
        this.charge = chargeTo;
        console.log(`${this.make}'s battery was charged to ${this.charge}%.`);
    }

    // New accelerate method for EV class
    accelerate()
    {
        if (this.charge >= 1) 
        {
            this.speed += 20;
            this.charge -= 1;
            console.log(`${this.make} accelerated 20 km/h to ${this.speed} km/h, with a charge of ${this.charge}%.`);
        } 
        else 
        {
            console.log(`Battery at ${this.charge}%. Not enough charge to accelerate.`);
        }
    }
}

// Test Car
let Tesla = new EV(`Tesla`, 120, 23)
console.log(`${Tesla.make} is going ${Tesla.speed} km/h with ${Tesla.charge}% battery.`);
Tesla.accelerate();
Tesla.brake();
Tesla.chargeBattery(1)
Tesla.accelerate();
Tesla.accelerate();
Tesla.brake();
Tesla.chargeBattery(25)