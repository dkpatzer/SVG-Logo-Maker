
// import Node.js built-in fs module,to provide functions for interacting with the file system.
const fs = require('fs');
// import the generateLogo function from the logoGenerator.js module
const { generateLogo } = require('../lib/logoGenerator');
//  set up a test suite with the name 'Logo Generator' to group related test cases together.
describe('Logo Generator', () => {
    // Jest test lifecycle hook that runs after each individual test case
  afterEach(() => {
    if (fs.existsSync('logo.svg')) {
      fs.unlinkSync('logo.svg');
    }
  });

  it('generates a logo and saves it as an SVG file', async () => {
    jest.spyOn(fs, 'writeFileSync');

/* invoke the generateLogo function and awaits its result. 
   assign the returned logo file name to the logoFileName variable.*/

    const logoFileName = await generateLogo();

    expect(fs.writeFileSync).toHaveBeenCalledWith(
      'logo.svg',
      expect.stringContaining('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">')
    );
    // logoFileName variable should be equal to 'logo.svg
    expect(logoFileName).toBe('logo.svg');
  });
});
