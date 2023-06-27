class Shape {
    constructor(color) {
      this.color = color;
    }
  
    draw() {
      throw new Error("The draw method must be implemented by subclasses.");
    }
  }
  
  module.exports = Shape;
  