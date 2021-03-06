// Declare and initialize the variables for exercise 1 here:

let engineIndicatorLight ="red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatus = 200;
let shuttleSpeed = 15000;
let commandOverride = true;
// BEFORE running the code, predict what will be printed to the console by the following statements:

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}
//a
if (crewStatus === true) {
  console.log("Crew Ready");
} else {
  console.log("Crew Not Ready");
}

//b
if (computerStatus === 200) {
  console.log("Please stand by. Computer is rebooting.");
} else if (computerStatus === 400) {
  console.log("Success! Computer online.");
} else {
  console.log("ALERT: Computer offline");
}

//c
if (shuttleSpeed > 17500) {
  console.log("ALERT: Escape velocity reached!");
} else if (shuttleSpeed < 8000) {
  console.log("ALERT: Cannot maintain orbit!");
} else {
  console.log("Stable speed");
}
//D
console.log("No");

//6 Final bit of fun.
if (fuelLevel > 20000 && engineIndicatorLight === !"red blinking" || commandOverride === true) {
  console.log("Cleared for launch!");
} else {
  console.log("Launch scrubbed!");
}