const Shape = require('./Shape');

class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }

  draw() {
    // Implement the drawing logic for a circle here
    console.log(`Drawing a circle with radius ${this.radius} and color ${this.color}.`);
  }
}

module.exports = Circle;
