// Declare variables
let subText = "";
let vrbText = "";
let adjText = "";
let objText = "";
let plcText = "";

// Grab data
let cellSub = document.querySelectorAll('td.sub');
let cellVrb = document.querySelectorAll('td.vrb');
let cellAdj = document.querySelectorAll('td.adj');
let cellObj = document.querySelectorAll('td.obj');
let cellPlc = document.querySelectorAll('td.plc');


// 1. THE ROW SEQUENCE TRACKER
// We start at row index 0 (the very first data row in your table)
let rowNow = 0; 

// Text display function
function display() {
    document.getElementById('story-display').innerText = subText + " " + vrbText + " " + adjText + " " + objText + " " + plcText;
}

// Highlight function
function highlight(iRow) {
    // No highlight by default
    document.querySelectorAll('td').forEach(cell => {
        cell.classList.remove('active');
    });
    
    // Highlight the cell when selected
    cellSub[iRow].classList.add('active');
    cellVrb[iRow].classList.add('active');
    cellAdj[iRow].classList.add('active');
    cellObj[iRow].classList.add('active');
    cellPlc[iRow].classList.add('active');
}

// Surprise button
document.getElementById('surprise').addEventListener('click', () => {

    // Random number for each type of word
    let rndSub = Math.floor(Math.random() * 7);
    let rndVrb = Math.floor(Math.random() * 7);
    let rndAdj = Math.floor(Math.random() * 7);
    let rndObj = Math.floor(Math.random() * 7);
    let rndPlc = Math.floor(Math.random() * 7);

    // Clean up previously highlighted col
    cellSub.forEach(c => c.classList.remove('active'));
    cellVrb.forEach(c => c.classList.remove('active'));
    cellAdj.forEach(c => c.classList.remove('active'));
    cellObj.forEach(c => c.classList.remove('active'));
    cellPlc.forEach(c => c.classList.remove('active'));

    // Grab the randomized text
    subText = cellSub[rndSub].innerText;
    vrbText = cellVrb[rndVrb].innerText;
    adjText = cellAdj[rndAdj].innerText;
    objText = cellObj[rndObj].innerText;
    plcText = cellPlc[rndPlc].innerText;

    // Highlight the word individually
    cellSub[rndSub].classList.add('active');
    cellVrb[rndVrb].classList.add('active');
    cellAdj[rndAdj].classList.add('active');
    cellObj[rndObj].classList.add('active');
    cellPlc[rndPlc].classList.add('active');

    display();

});

// "Select your character"
document.querySelectorAll('.head-btn').forEach(button => {
    button.addEventListener('click', () => {
        
        // Go back if reaches limit
        if (rowNow >= 7) {
            rowNow = 0;
        }

        // Click button to select
        let buttonNum = button.innerText;

        // Highlight each cell in the collumn
        if (buttonNum === "1") {
            cellSub.forEach(c => c.classList.remove('active'));
            subText = cellSub[rowNow].innerText;
            cellSub[rowNow].classList.add('active');
        } 
        else if (buttonNum === "2") {
            cellVrb.forEach(c => c.classList.remove('active'));
            vrbText = cellVrb[rowNow].innerText;
            cellVrb[rowNow].classList.add('active');
        } 
        else if (buttonNum === "3") {
            cellAdj.forEach(c => c.classList.remove('active'));
            adjText = cellAdj[rowNow].innerText;
            cellAdj[rowNow].classList.add('active');
        } 
        else if (buttonNum === "4") {
            cellObj.forEach(c => c.classList.remove('active'));
            objText = cellObj[rowNow].innerText;
            cellObj[rowNow].classList.add('active');
        } 
        else if (buttonNum === "5") {
            cellPlc.forEach(c => c.classList.remove('active'));
            plcText = cellPlc[rowNow].innerText;
            cellPlc[rowNow].classList.add('active');
        }

        // Highlight
        highlight(rowNow);

        // Call the display function
        display();

        // Select like a real toy
        rowNow++;
    });
});

// Reset button
document.getElementById('reset').addEventListener('click', () => {
    
    // *Boom!* They ar now empty
    subText = "";
    vrbText = "";
    adjText = "";
    objText = "";
    plcText = "";

    // Go to first row
    rowNow = 0;

    // No more highlight
    document.querySelectorAll('td').forEach(cell => {
        cell.classList.remove('active');
    });

    // Change to the placeholder text
    document.getElementById('story-display').innerText = "Click column numbers or press Surprise to begin!";
});

