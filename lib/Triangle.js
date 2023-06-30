const Shapes = require("../lib/shapes.js")

class Triangle extends Shapes{
  constructor(text, textColor, shapeColor){
      super(text, textColor, shapeColor)
  }
  render(){
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    

  }

  renderBottom(){
     return `<text x="150" y="175" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>\n</svg>`
  }
}

module.exports = Triangle;
