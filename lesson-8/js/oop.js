const output = document.getElementById("output");

/* STEP 1a: Create a new object using a regular function */
function createCar(model, brand, color){
    let obj = {};
    obj.model = model;
    obj.brand = brand;
    obj.color = color;
    return obj;
}

/* STEP 1b: Use the console to create a new vehicle object, and then invoke the function represented using .description() */
let car1 = createCar("911 Turbo S", "Porsche", "Guardian Red");

/* STEP 2a: In order to be a bit more concise, JavaScript allows us to use constructor functions - 
rewrite the above function, without returning anything. Capitalize the name of the function. */
function Car(brand, model, color){
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.desc = function(){
        return `A(n) ${this.brand} ${this.model} painted in ${this.color}.`;
    }
}

/* STEP 2b: Use the console to create a couple of different people, using the 'new' keyword, 
and again invoking the .greeting() method for each person */
let car2 = new Car("Aston Martin", "Valhalla", "Hyper Red");
output.textContent = car2.desc();

/* STEP 3a: Build the complete constructor for the object Person (comment out the above function first).
 Include name (first and last), age, gender, interests, bio (function), and greeting (function). */

/* STEP 3b: Instantiate a new Person based on the above constructor */

/* STEP 3c: Attempt to access the various properties of person1 using the console. */
// person2['age']
// person2.interests[1]
// person2.bio()

/* STEP 4a: Alternatively, you can use the Object() constructor to create an object. eg. car*/
let car3 = new Object();

/* STEP 4b: Once 'car' is created, add various properties and methods… */
car3.brand = "Toyota";
car3.model = "GR Celica";
car3.color = "Kaminari";

/* STEP 4c: Change some of the properties of 'car' in the console, then invoke the car.fun() function */

/* STEP 5a: Yet another approach is to use the create() method. 
Let's see how the above car object can be used to create another object */
let car4 = Object.create(car3);

/* STEP 5b: Output to the paragraph anotherCar.brand - you will see that it has retained the properties of the original object. */

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS