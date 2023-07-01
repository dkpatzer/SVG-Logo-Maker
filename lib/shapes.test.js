// script imports Circle, Triangle and Square classes from shapes.js files.
// uses destructuring assignment to assign to variables with the same name
const { Circle, Triangle, Square } = require('./shapes');

// code block that defines test suite
// describe function groups related tests together  
describe('Shape rendering', () => {
  // new circle instance created, circle rendered and compared to expected string
  // same for triangle and square
  test('Circle renders correctly', () => {
    const circle = new Circle('red');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
  });

test('Triangle renders correctly', () => {
  const triangle = new Triangle('green');
  expect(triangle.render()).toBe('<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="green" />');
});



  test('Square renders correctly', () => {
    const square = new Square('blue');
    expect(square.render()).toBe('<rect x="50" width="200" height="200" fill="blue" />');
  });
});
/* Jest will be executed by npm run test command.
   Jest will discover and execute the test files based on certain naming conventions 
   and configuration settings.*/