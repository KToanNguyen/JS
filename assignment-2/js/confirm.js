document.addEventListener("DOMContentLoaded", () => {
    // Extract from browser URL (Code learnt from Gemini)
    let url = new URLSearchParams(window.location.search);
    
    // Get values by using "name" attribute
    let crust = url.get("crust");
    let size = url.get("size");
    let cheese = url.get("cheese")
    let meat = url.get("meat");
    let vegan = url.get("vegan");
    let quantity = url.get("quantity"); 

    // Display the values in html
    document.getElementById("sumSize").textContent = size || "Not selected";
    document.getElementById("sumCrust").textContent = crust || "Not selected";
    document.getElementById("sumCheese").textContent = cheese || "Not selected";
    document.getElementById("sumMeat").textContent = meat || "None";
    document.getElementById("sumVeg").textContent = vegan || "None";
    document.getElementById("sumQty").textContent = quantity || "1";
});