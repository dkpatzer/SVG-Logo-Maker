const fs = require('fs');
const { Circle, Triangle, Square } = require('./shapes');

function generateLogo(text, textColor, shapeType, shapeColor) {
  let shape;

  switch (shapeType) {
    case 'circle':
      shape = new Circle(50, shapeColor);
      break;
    case 'triangle':
      shape = new Triangle(50, shapeColor);
      break;
    case 'square':
      shape = new Square(50, shapeColor);
      break;
    default:
      throw new Error('Invalid shape type.');
  }

  const logo = `<svg width="300" height="200">
                  <text x="50%" y="50%" text-anchor="middle" fill="${textColor}">${text}</text>
                  ${shape.draw()}
                </svg>`;

  fs.writeFile('logo.svg', logo, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });
}

module.exports = {
  generateLogo
};
