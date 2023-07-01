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



## Table of Contents (Optional)

- [Installation](#SVG-Logo-Maker)
- [Description](#Description)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
First I made the file structure and added modules to the gitignore file. Next run npm install. After achieving an ability to get at least one questioned answered when running node index.js I began running occasional tests by running npm test.

The index.js file contains the main logic of the SVG logo generator. The user is prompted for input using the inquirer module, takes in the user's choices and generates an SVG logo based on selected shape, shape color, and text color. The defined svg class is used to constuct the SVG comment and writes the generated SVG content to a file.

The shapes file defines the base'Shape' class and its derived classes Circle, Triangle, and Square. The Shape class provides a common structure and behavior for all shapes, while the derived classes override the render method to generate SVG strings specific to each shape. These classes encapsulate the rendering logic for each shape.

The test file contains tests for the rendering functionality of the shapes. It uses the Jest testing framework to define test cases that verify whether the shapes are rendered correctly by comparing the expected SVG strings with the actual rendered output. These tests ensure that the rendering logic of the shapes is functioning as expected, which helps catch any potential issues or regressions in the rendering code.




## Usage

For a user with the entire solved app, run npm install. Then run node.index.js as many times as desired to created SVG files. The logo.svg files will be saved and stored in the examples folder.


![Screenshot of pink logo](https://github.com/dkpatzer/SVG-Logo-Maker/blob/main/images/Screenshot%20(169).png)

![Screenshot of blue logo](https://github.com/dkpatzer/SVG-Logo-Maker/blob/main/images/Screenshot%20(170).png)
   

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests