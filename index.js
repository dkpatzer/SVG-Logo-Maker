// index.js

const { generateLogo } = require('./logoGenerator');

async function runLogoGenerator() {
  try {
    const logo = await generateLogo();
    console.log('Generated logo.svg');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

runLogoGenerator();
