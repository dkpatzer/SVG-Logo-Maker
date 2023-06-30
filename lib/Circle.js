const Shape = require('./Shape');

class Circle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<svg width="100" height="100">
              <circle cx="50" cy="50" r="50" fill="${this.color}" />
            </svg>`;
  }
}

module.exports = Circle;

