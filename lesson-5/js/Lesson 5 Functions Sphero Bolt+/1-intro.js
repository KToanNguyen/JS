// STEP 1: Build the main entry point for the program
async function startProgram() {
    // STEP 2: Call a method to control the main LED lights
    setMainLed(getRandomColor());
    // STEP 3: Invoke another method to write to the screen
    await scrollMatrixText("Zamn!", getRandomColor(), 20, true);
    // STEP 3: Call another method to move the robot
    await roll(0, 23, 2.5);
    // STEP 4: Exit the program
    exitProgram();
}
// STEP 5: Aim your robot, then run the program