const Shape = require('./Shape');

class Square extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<svg width="100" height="100">
              <rect width="100" height="100" fill="${this.color}" />
            </svg>`;
  }
}

module.exports = Square;
