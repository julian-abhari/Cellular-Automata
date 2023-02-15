class CellularAutomata {

  constructor(ruleset) {
    this.ruleset = ruleset;
    this.cellWidth = 5;
    this.cells = [];
    for (var i = 0; i < (width / this.cellWidth); i += 1) {
      this.cells.push(0);
    }
    this.cells[this.cells.length / 2] = 1;
    this.generation = 0;
  }

  generate() {
    var nextGeneration = Array(this.cells.length);
    for (var i = 1; i < this.cells.length - 1; i += 1) {
      var left = this.cells[i - 1];
      var current = this.cells[i];
      var right = this.cells[i + 1];
      nextGeneration[i] = this.rules(left, current, right);
    }
    this.cells = nextGeneration;
    this.generation += 1;
  }

  rules(a, b, c) {
    if (a == 1 && b == 1 && c == 1) {
      return this.ruleset[0];
    }
    if (a == 1 && b == 1 && c == 0) {
      return this.ruleset[1];
    }
    if (a == 1 && b == 0 && c == 1) {
      return this.ruleset[2];
    }
    if (a == 1 && b == 0 && c == 0) {
      return this.ruleset[3];
    }
    if (a == 0 && b == 1 && c == 1) {
      return this.ruleset[4];
    }
    if (a == 0 && b == 1 && c == 0) {
      return this.ruleset[5];
    }
    if (a == 0 && b == 0 && c == 1) {
      return this.ruleset[6];
    }
    if (a == 0 && b == 0 && c == 0) {
      return this.ruleset[7];
    }
    return 0;
  }

  display() {
    for (var i = 0; i < this.cells.length; i += 1) {
      if (this.cells[i] == 1) {
        fill(255);
      } else {
        fill(0);
      }
      noStroke();
      rect(i*this.cellWidth, this.generation*this.cellWidth, this.cellWidth, this.cellWidth);
    }
  }
}
