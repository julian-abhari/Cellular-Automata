var cellularAutomata;

function setup() {
	createCanvas(900, 800);
	frameRate(24);
	background(155);
	// Repetition
	//var ruleset = [0, 0, 0, 1, 1, 1, 1, 0];
	// Complex System
	var ruleset = [0, 1, 0, 1, 1, 0, 1, 0];
	// Fractal Pattern
	//var ruleset = [0, 1, 0, 1, 1, 0, 1, 0];
	cellularAutomata = new CellularAutomata(ruleset);
}

function draw() {
	cellularAutomata.display();
	if (cellularAutomata.generation < (height / cellularAutomata.cellWidth)) {
    cellularAutomata.generate();
  }
}
