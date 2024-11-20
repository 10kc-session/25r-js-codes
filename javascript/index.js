/**
 *  how to insert js into html
 *  variables
 *         keywords , identifiers
 *  var / let / const / automatic
 *  datatypes    
 *      primitive and non primitive
 *      1. Number , String , Boolean , undefined , Null , Symbol
 *      2. Object , Arrays , Function , Classs , set and Map , RegExp
 * 
 *  OOPS
 *  ----
 *  Object Oriented Programming Structure 
 *  1. Reusability  2. Modularity  3. Security
 *  
 *  Features of OOPS
 * ------------------
 *  1. Class
 *  2. Object
 *  3. Encapsulation
 *  4. Inheritance
 *  5. Polymorphism
 *  6. Abstraction
 * 
 *      Class defines creation of Object and Class is the collection of
 *      properties and methods 
 *      properties and methods can be static or non static 
 *          Syn : 
 *                  class ClassName{
 *                      
 *                  }
 *      Object 
 *      ------
 *          Object Defines state and behaviour of a class
 *          Object holds only non static properties and methods
 *             to create object
 *              Syn : 
 *                      variable referenceVariable = new ClassName();
 */
// class Mobile {
//     powerButton;
//     camera;
//     volumeButton;

//     constructor(powerButton, camera, volumeButton) {
//         this.powerButton = powerButton;
//         this.camera = camera;
//         this.volumeButton = volumeButton;
//     }
// }
// var apple = new Mobile("Metal", "48mp", "Metal");
// var realme = new Mobile("plastic", "200mp", "plastic");
// var oppo = new Mobile("Plastic", "108Mp", "Plastic");
// console.log(apple);
// console.log(realme);
// console.log(oppo);

/**
 * Create a class Car , which is having properties of 
 *  engine , power , enginecc , color , brand and 
 *  initilize the data using constructor 
 *  and create the object 
 */
class Car {
    engine;
    power;
    enginecc;
    colour;
    brand;
    constructor(engine, power, enginecc, colour, brand) {
        this.engine = engine;
        this.power = power;
        this.enginecc = enginecc;
        this.colour = colour;
        this.brand = brand;
    }
    /**
     * Non static Methods , 
     *        The Methods which are called with 
     *        object reference are knows as non static methods/ 
     * 
     *        non static methods are invoked using object reference
     */
    start(key) {
        console.log(key, this.brand, "Engine Started");
    }
    accelaration(speed) {
        console.log(speed, "Thokkali");
    }
    brake() {
        console.log("Appiled Brakes");
    }
    stop() {
        console.log("Engine Stopped", this.brand);
    }
}
// thar -> objectReference
var thar = new Car("Petrol", "350bhp", "2000cc", "red", "Mahindra");
thar.start("Key is available");
thar.accelaration("100 speed");
thar.brake();
thar.stop();




// console.log("---------------------------------------------")

// // audi -> Object Reference
// var audi = new Car("Diesel", "650hp", "2000cc", "Pink", "Audi");
// audi.start();
// audi.accelaration();
// audi.brake();
// audi.accelaration();
// audi.stop();

// // nano -> Object Reference
// var nano = new Car("Diesel", "200bhp", "1000cc", "Pink", "Tata");
