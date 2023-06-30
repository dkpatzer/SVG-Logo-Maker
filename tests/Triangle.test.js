const Triangle = require('../lib/shapes/Triangle');

describe('Triangle', () => {
  test('renders SVG with the given color', () => {
    const color = 'red';
    const triangle = new Triangle(color);
    const expectedSVG = `<svg width="100" height="100">
                          <polygon points="50,0 0,100 100,100" fill="${color}" />
                        </svg>`;
    expect(triangle.render()).toEqual(expectedSVG);
  });
});
