// Gets inquierer
const inquirer = require('inquirer');
const fs = require('fs');

function generateReadmes(answers) {
    return `# ${answers.name}

[Description] ${answers.description}

### Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributors](#Contributors)
* [Tests](#Tests)
* [License](#License)

## Installation
${answers.install}

## Usage
${answers.usage}

##Contrubutors
${answers.contributing}

##Tests
${answers.tests}

##License
This project is licensed under the ${answers.license}
`;
}

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your project name?',
        },
        {
            type: 'input',
            name: 'description',
            message: "What it your project's description?",
        },
        {
            type: 'input',
            name: 'install',
            message: 'How do you install?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use your app?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter contributing GitHub Usernames',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter tests',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose License',
            choices: ["MIT", "GPLv2", "Apache", "GPLv3", "BSD 3-clause", "Unlicense"]
        }
    ])
    .then((answers) => {
        const readmePageContent = generateReadmes(answers);

        fs.writeFile('README.md', readmePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created readme!')
        );
    });


// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
