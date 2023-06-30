const Shapes = require('../lib/shapes');

class Square extends Shapes {
  constructor(text, textcolor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    return  `rect width ="200 height = "200" fill = "${this.shapeColor}" />`
}

rederBottom() {
  return `<text x="85" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>\n</svg>`
}
}
module.exports = Square;
