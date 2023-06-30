const shapes = require("../lib/shapes.js")
const circle = require("../lib/circle.js")
const triangle = require("../lib/triangle.js")
const square = require("../lib/square")


// this funtion takes in the data from the user and generates the svg code
const generateSVG = (data) => {
   let newStr = ""
   const newShape = new shapes
   newStr = newShape.render();


      switch(data.shape){
         case 'Circle':
            const newCircle = new circle(data.text, data.textColor, data.shapeColor)
            newStr += `\n     ${newCircle.render()}\n     ${newCircle.renderBottom()}`
            break;

         case 'Triangle':
            const newTriangle = new triangle(data.text, data.textColor, data.shapeColor);
            newStr += `\n     ${newTriangle.render()}\n   ${newTriangle.renderBottom()}`;
            break;
         case 'Square':
            const newSquare = new square(data.text, data.textColor, data.shapeColor);
            newStr += `\n     ${newSquare.render()}\n     ${newSquare.renderBottom()}`;
            break;


      }
      return newStr;
}

module.exports = generateSVG



