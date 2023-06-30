const shapes = require('../lib/shapes');

class Circle extends shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>\n</svg>`

   
  }
}

module.exports = Circle;

