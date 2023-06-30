
const inquirer = require('inquirer');
const generateSVG = require('./utils/logoGenerator.js')
const fs = require('fs')

//questions array. For the first question I limit the number of characters
//the user can enter to 3
const questions = [
    {
        type: 'input',
        message: 'Enter text for your logo(Up to 3 characters)',
        name: 'text',
        validate: function(value) {
            if(value.length > 3){
                return "Please enter 3 characters or less"
            }
            else{
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'What color do you want the text to be(Enter keyword or hex value)',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'What shape do you want your logo to be',
        choices: ['Triangle', 'Square', 'Circle'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'What color do you want the shape to be(Enter keyword or hex value)',
        name: 'shapeColor'
    }
]

inquirer
  .prompt(questions)
  .then((data) => {
    const shapeType = data.shape.toLowerCase(); // Convert shape type to lowercase

    fs.writeFile('./examples/logo.svg', generateSVG(data.text, data.textColor, shapeType, data.shapeColor), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Generated logo.svg');
      }
    });
  });


    












