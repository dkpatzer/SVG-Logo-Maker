
const inquirer = require('inquirer');
const { generateLogo } = require('./lib/logoGenerator');

// Prompt the user for input
function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter the text for the logo (up to three characters):',
      validate: function (value) {
        if (value.length <= 3) {
          return true;
        }
        return 'Please enter up to three characters.';
      }
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal number):'
    },
    {
      type: 'list',
      name: 'shapeType',
      message: 'Select a shape:',
      choices: ['circle', 'triangle', 'square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hexadecimal number):'
    }
  ]);
}

// Start the application
function startApp() {
  promptUser()
    .then(answers => {
      const { text, textColor, shapeType, shapeColor } = answers;
      generateLogo(text, textColor, shapeType, shapeColor);
    })
    .catch(error => console.error(error));
}

startApp();












// // index.js

// const { generateLogo } = require('./logoGenerator');

// async function runLogoGenerator() {
//   try {
//     const logo = await generateLogo();
//     console.log('Generated logo.svg');
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// }

// runLogoGenerator();
