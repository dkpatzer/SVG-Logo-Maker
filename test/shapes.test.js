// import shape classes from lib/shapes folder
const Triangle = require('../lib/shapes/Triangle');
const Circle = require('../lib/shapes/Circle');
const Square = require('../lib/shapes/Square');

// Describe block for Shape classes
describe('Shape classes', () => {
    // Test block for Triangle class
  describe('Triangle', () => {
    // it block describes specific case
    it('renders the triangle shape with the given color', () => {
      const triangle = new Triangle();
      triangle.setColor('blue');
      expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });

    // Add more tests for Triangle class if needed
  });
// test block for Circle class
  describe('Circle', () => {
    // it block tests rendering of circle shape with given color
    it('renders the circle shape with the given color', () => {
      const circle = new Circle();
      circle.setColor('red');
      expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });

    // Add more tests for Circle class if needed
  });
// test block for Square class
  describe('Square', () => {
    // it block tests rendering of square shape with given color
    it('renders the square shape with the given color', () => {
      const square = new Square();
      square.setColor('green');
      expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="green" />');
    });

    // Add more tests for Square class if needed
  });
});
