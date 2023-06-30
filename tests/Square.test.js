const Square = require('../lib/shapes/Square');

describe('Square', () => {
  test('renders SVG with the given color', () => {
    const color = 'green';
    const square = new Square(color);
    const expectedSVG = `<svg width="100" height="100">
                          <rect width="100" height="100" fill="${color}" />
                        </svg>`;
    expect(square.render()).toEqual(expectedSVG);
  });
});
