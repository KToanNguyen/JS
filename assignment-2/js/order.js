const choices = document.querySelectorAll("select");

async function populate() {
    try {
        // Store the URL of JSON
        let url = new URL("https://ktoannguyen.github.io/JS/assignment-2/js/pizza.json");
        
        // Request the URL
        let req = new Request(url);
        
        // Fetch + parse the JSON
        let res = await fetch(req);
        let resJson = await res.json();
        
        // Pass the JSON to the support function
        optionsAdder(resJson);
    } catch (error) {
        // Log the actual error object caught by the try/catch
        console.error(`Error loading data: ${error}`);
    }
}

// Call the main function
populate();

function optionsAdder(pizzaData) {
    choices.forEach((select) => {
        // Use the "id" to match the item with the JSON
        let id = select.id;
        let option = pizzaData[id];

        // Create placeholders
        const placeholder = document.createElement("option");
        placeholder.value = "";
        placeholder.textContent = `↼ Select ${id} ⇁`;
        placeholder.disabled = true; // Prevents re-selecting it once another option is picked
        placeholder.selected = true; // Makes it the default active choice
        
        // Add the placeholders first
        select.appendChild(placeholder);

        // Safety check
        if (option && Array.isArray(option)) {
            option.forEach((item) => {
                // Create <option> element
                let optionElement = document.createElement("option");
                optionElement.value = item.id || item.name;
                optionElement.textContent = item.name || item.type;
                select.appendChild(optionElement);
            });
        }
    });
}