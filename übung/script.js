class Car{

    constructor(speed , doorCount){
        this.speed = speed;
        this.doorCount = doorCount;
    }

    dive(currentSpeed){
        console.log("this car drives with" + currentSpeed);
    }
}

let myCar = newCar(180, 5);
myCar.drive(100); 