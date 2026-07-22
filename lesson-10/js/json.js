/* STEP 2: Bind the HEADER and the SECTION elements above to variables */
const header = document.querySelector("header");
const section = document.querySelector("section");

// STEP 3a: Create the asynchronous function populate()
async function populate() {
    // Introducing JavaScript Object Notation (JSON): https://json.org/
    // STEP 4a: Create i-scream.json file with companyName, headOffice, established, active, topFlavors(name, calories, type, ingredients, image) */
    // STEP 4b: Store the URL of a JSON file in a variable */
    let url = "https://ktoannguyen.github.io/JS/lesson-10/js/i-scream.json";
    // STEP 5: Use the new URL to create a new request object
    let request = new Request(url);
    console.log(request);
    // STEP 6: Make a network request with the fetch() function, which returns a Response object
    const response = await fetch(request);
    console.log(response);
    // STEP 7: Capture the returned Response object and covert to a JSON object using json()
    const repsonseJson = await response.json();
    // STEP 8: Output the iScream JSON object to the console
    console.log(repsonseJson);
    // STEP 9a: Invoke the populateHeader function here, then build it below
    populateHeader(repsonseJson);
    // STEP 10a: Invoke the showTopFlavors function here, then build it below
    showTopFlavours(repsonseJson);
}
// STEP 3b: Call the populate() function
populate();
/* STEP 9b: Build out the populateHeader() function */
function populateHeader(json){
    // Create the H1 element
    let h1 = document.createElement("h1");
    let para = document.createElement("p");
    // Grab the company name from the JSON object and use it for the text node
    h1.textContent = json.companyName;
    para.textContent = `Head Office: ${json.headOffice}, est. ${json.established}, Status: ${json.active ? "Active" : "Inactive"}`;
    // Inject the complete H1 element into the DOM, inside the HEADER
    header.appendChild(h1);
    header.appendChild(para);
}

/* STEP 10b: Assemble the showTopFlavors() function */
function showTopFlavours(json){
    // STEP 10c: Bind the JSON topFlavors object to a var
    let topFlavours = json.topFlavours;
    // STEP 10d: Loop through the topFlavors object
    for (let i = 0; i < topFlavours.length; i++) {
        console.log(topFlavours[i]);   
        // STEP 10e: build HTML elements for the content: article, h2, image, p1, p2, list
        let article = document.createElement("article");
        let h2 = document.createElement("h2");
        let image = document.createElement("img");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let list = document.createElement("ul");
        // STEP 10f: Set the textContent property for each of the above elements (except the UL), based on the JSON content
        h2.textContent = topFlavours[i].name;
        image.setAttribute("src", topFlavours[i].image);
        p1.textContent = `Cal: ${topFlavours[i].calories}`;
        p2.textContent = `Type: ${topFlavours[i].type}`;

        // STEP 10g: Build a loop for the ingredients array in the JSON
        let ingredients = topFlavours[i].ingredients
        for (let j = 0; j < ingredients.length; j++) {
            let items = document.createElement("li");
            items.textContent = ingredients[j];
            list.appendChild(items);
        }

        // STEP 10i: Append each complete ARTICLE element to the SECTION element
        article.appendChild(h2);
        article.appendChild(image);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(list);
        
        section.appendChild(article);
    }
}
// STEP 11: Add a 3rd flavour of ice cream to the local JSON file, making use of the /images/strawberry-sprinkle.svg image

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

// A special thanks to https://openclipart.org/detail/285225/ice-cream-cones for the awesome ice cream cone illustrations