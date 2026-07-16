const output = document.querySelector("#output");

// First part from class lesson
class Coffee {
    // variables/fields
    size;
    isDecaf;

    // constructor
    constructor(size, isDecaf) {
        this.size = size;
        this.isDecaf = isDecaf;
    }

    // functions/methods
    // add a serveIt method
    serveIt() {
        // Generate an IMG of the coffee ordered
        let cup = document.createElement("img"); // <img>

        // Set the src path for the IMG element
        cup.setAttribute("src", "images/coffee-cup.svg"); // <img src="images/coffee-cup.svg">

        // Determine caffeine status of the coffee
        if (this.isDecaf) {
            cup.setAttribute("src", "images/coffee-cup-green.svg"); // <img src="images/coffee-cup-green.svg">
        } else {
            cup.setAttribute("src", "images/coffee-cup-purple.svg"); // <img src="images/coffe-cup-purple.svg">
        }

        // Set the size of the cup SVG image based on this.size
        switch (this.size) {
            // Size the IMG in terms of its height based on above number from the switch
            case "small":
                cup.setAttribute("height", 100); // <img src="images/coffee-cup.svg" height=100>
                break;
            case "medium":
                cup.setAttribute("height", 150);
                break;
            case "large":
                cup.setAttribute("height", 200);
                break;
            default:
                cup.setAttribute("height", 150);
        }

        // Generate a description of the coffee and put it into the IMG title attribute
        // A small caffinated coffee
        cup.setAttribute(
            "title",
            `A ${this.size} ${this.isDecaf ? "decaffinated" : "caffinated"} Coffee`,
        );

        // Insert the new IMG element into the paragraph
        output.appendChild(cup);
    }
}

// LAB-2 starts here
// Define the subclass Esspresso of the Coffee class
class Espresso extends Coffee {
    shots; // Unqiue property
    constructor(size, isDecaf, shots) {
        super(size, isDecaf); // Inherited from parent class
        this.shots = shots;
    }
    esDesc() {
        return `Ordered: ${this.size} coffee with ${this.shots} shots of ${this.isDecaf} Espresso.`;
    }
}
// New instances of the Espresso object
let ktEs = new Espresso("medium", false, 3);
let hdmiEs = new Espresso("small", true, 2);

//  First instance call
ktEs.esDesc();
ktEs.serveIt();

// Second instance call
hdmiEs.esDesc();
hdmiEs.serveIt();


