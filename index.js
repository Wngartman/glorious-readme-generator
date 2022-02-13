// Gets inquierer
const inquirer = require('inquirer');
const fs = require('fs');

// Template for readme
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

## Contributors
${answers.contributing}

## Tests
${answers.tests}

## Questions
For more questions contact ${answers.author}

## License
This project is licensed under ${answers.license}
`;
}

// Prompt for the inquierer questions
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
            type: 'input',
            name: 'author',
            message: 'Enter author email',
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

// Writing the new file as README.md with the updated answers
        fs.writeFile('README.md', readmePageContent, (err) =>
            err ? console.log(err) : console.log(`Successfully created  ${answers.name}s' readme!`)
        );
    });
