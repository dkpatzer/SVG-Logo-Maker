// logoGenerator.test.js contains a test for the generateLogo function from the logoGenerator.js file

// import fs module to work with file system
// import generateLogo function from logoGenerator.js file
const fs = require('fs');
const { generateLogo } = require('../lib/logoGenerator');

// describe block for generateLogo function
describe('Logo Generator', () => {
    // afterEach block a Jest lifecycle hook 
    //  runs after each test case in the describe block and deletes logo.svg file after each test
  afterEach(() => {
    if (fs.existsSync('logo.svg')) {
      fs.unlinkSync('logo.svg');
    }
  });

// Test case for the generateLogo function
// it block that defines a specific test case for the generateLogo function. 
  it('generates a logo and saves it as an SVG file', async () => {
    jest.spyOn(fs, 'writeFileSync');

    const logoFileName = await generateLogo();
// expect assertions check the behavior of the generateLogo function. 
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      'logo.svg',
      expect.stringContaining('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">')
    );
    expect(logoFileName).toBe('logo.svg');
  });
});


