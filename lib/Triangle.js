const Shape = require('./Shape');

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<svg width="100" height="100">
              <polygon points="50,0 0,100 100,100" fill="${this.color}" />
            </svg>`;
  }
}

module.exports = Triangle;
