const Circle = require('../lib/shapes/Circle');

describe('Circle', () => {
  test('renders SVG with the given color', () => {
    const color = 'blue';
    const circle = new Circle(color);
    const expectedSVG = `<svg width="100" height="100">
                          <circle cx="50" cy="50" r="50" fill="${color}" />
                        </svg>`;
    expect(circle.render()).toEqual(expectedSVG);
  });
});
