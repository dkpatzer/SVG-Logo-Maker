// Base class for all shapes
class Shape {
  constructor(color) {
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }
// placeholder that throws an error if not overridden by subclass
  render() {
    throw new Error('Not implemented');
  }
}
// Class Circle defined and overrides render() method from Shape
class Circle extends Shape {
  render() {
    // string with attributes specific to circle-similar for triangle and square
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}" />`;
  }
}




class Square extends Shape {
  render() {
    return `<rect x="50" width="200" height="200" fill="${this.color}" />`;
  }
}
// object with all classes exported so other files can access them
module.exports = {
  Circle,
  Triangle,
  Square
};
