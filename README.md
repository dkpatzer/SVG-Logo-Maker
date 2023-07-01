# SVG-Logo-Maker

## Description
The task was to build a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.

"SVG is a markup language for describing two-dimensional graphics applications and images, and a set of related graphics script interfaces." (https://www.w3.org/Graphics/SVG/)

User Story: 
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

Accetance Criteria:
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

This app gave me further experience with Node.js, npm, and the Inquirer package. I also learned about SVG files and how to create them using JavaScript. I applied tests for the first time in an app using Jest. 


The files collectively solve the problem of generating an SVG logo based on user input. 



## Table of Contents 

- [description](#description)
- [installation](#installation)
- [Usage](#usage) 
- [Link to Screencastify video](#link-to-screencastify-video)
- [Credits](#credits)


## Installation
First I made the file structure and added modules to the gitignore file. Next run npm install. After achieving an ability to get at least one questioned answered when running node index.js I began running occasional tests by running npm test.

The index.js file contains the main logic of the SVG logo generator. The user is prompted for input using the inquirer module, takes in the user's choices and generates an SVG logo based on selected shape, shape color, and text color. The defined svg class is used to constuct the SVG comment and writes the generated SVG content to a file.

The shapes file defines the base'Shape' class and its derived classes Circle, Triangle, and Square. The Shape class provides a common structure and behavior for all shapes, while the derived classes override the render method to generate SVG strings specific to each shape. These classes encapsulate the rendering logic for each shape.

The test file contains tests for the rendering functionality of the shapes. It uses the Jest testing framework to define test cases that verify whether the shapes are rendered correctly by comparing the expected SVG strings with the actual rendered output. These tests ensure that the rendering logic of the shapes is functioning as expected, which helps catch any potential issues or regressions in the rendering code.




## Usage

For a user with the entire solved app, run npm install. Then run node.index.js as many times as desired to created SVG files. The logo.svg files will be saved and stored in the examples folder.


![Screenshot of pink logo](./Assets/images/Screenshot%20(169).png)

![Screenshot of blue logo](./Assets/images/Screenshot%20(170).png)

   
## Llink to Screencastify video

https://watch.screencastify.com/v/9IlS2C8sMwx90pUiXxHA


## Credits

The SVG Logo Maker App was developed by David Patzer as part of the NU coding bootcamp. 


I obtained information from many sources: 

- The Jest documentation: https://jestjs.io/

- w3collective: https://www.w3.org/Graphics/SVG/

- https://en.wikipedia.org/wiki/SVG: For SVG information and examples.

- https://marketplace.visualstudio.com/items?itemName=jock.svg

- https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial

- https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes

- https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts

- https://marketplace.visualstudio.com/items?itemName=jock.svg

- http://techslides.com/save-svg-as-an-image

- http://www.kevlindev.com/tutorials/basics/shapes/js_dom/index.htm

- https://www.educative.io/blog/object-oriented-programming

- https://www.npmjs.com/package/dotenv

- Stack Overflow: For the community's invaluable insights and solutions.

- https://chat.openai.com/: For text verification and assistance.





















