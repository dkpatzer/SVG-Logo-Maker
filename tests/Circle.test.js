// declares the circle class
const circle = require('../lib/circle.js');

.
describe('Circle', () => {
  // A test is created to check that the color of the circle comes back the color entered.
  describe('render', () => {
    it('should  render the circle shape color', () => {
        const newCircle = new circle;
        newCircle.shapeColor = "red"
        const renderString = '<circle cx="150" cy="100" r="80" fill="red" />'

      expect(newCircle.render()).toEqual(renderString);
    });
  });
});