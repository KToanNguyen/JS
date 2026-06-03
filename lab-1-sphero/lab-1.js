let laps = 0;
async function startProgram() {
    await track(80);
	await celebrate();
}
async function track(vel) {
    await rollToDistance(0, vel,210);
    await rollToDistance(90, vel,30);
    await rollToDistance(180, vel,60);
    await rollToDistance(90, vel, 63);
    await rollToDistance(0, vel, 60);
    await rollToDistance(90, vel, 35);
    await rollToDistance(180, vel, 210);
    await rollToDistance(-90, vel, 60);
}
async function celebrate() {
    setMainLed(getRandomColor());
    await setHeading(-270)
    await setHeading(270)
    await speak("DUU DUU DU DU... MAX VERSTAPPEN... DUU DUU DU DU");
}