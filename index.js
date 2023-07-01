// import necessary modules
const inquirer = require('inquirer');
const fs = require('fs');
const { Shape, Circle, Triangle, Square } = require('./lib/shapes');

// create a class to represent the SVG
class Svg {
  constructor() {
    this.textElement = '';
    this.shapeElement = '';
  }
// SVG string returned by the render() method
  render() {
    return `version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"`;
  }
// textElement property set with provided text and color
  setText(text, color) {
    this.textElement = ` <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }
// shapeElement property set with rendederd SVG shape string
  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}
// array of questions for inquirer module to prompt user for input
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: function (input) {
      return input.length <= 3;
    },
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (keyword or hexadecimal number):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Select a shape:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (keyword or hexadecimal number):',
  },
];

// generateLogo function to create SVG logo-takes data object as argument
function generateLogo(data) {
  const svg = new Svg();
  svg.setText(data.text, data.textColor);
// shape element determined by switch statement based on selected shape in data object
  switch (data.shape) {
    case 'circle':
      svg.setShapeElement(new Circle(data.shapeColor));
      break;
    case 'triangle':
      svg.setShapeElement(new Triangle(data.shapeColor));
      break;
    case 'square':
      svg.setShapeElement(new Square(data.shapeColor));
      break;
    default:
      console.error(`Invalid shape selected: ${data.shape}`);
      return;
  }

  const svgContent = `<svg ${svg.render()}>${svg.shapeElement}${svg.textElement}</svg>`;

  console.log(svgContent);
// SVG content written to logo.svg file
  fs.writeFileSync('./examples/logo.svg', svgContent);
}
// initialize the script. Uses inquirer module to prompt the questions
function init() {
  inquirer.prompt(questions).then((answers) => {
    // generateLogo function called with answers as argument
    generateLogo(answers);
  });
}
// start the script
init();



