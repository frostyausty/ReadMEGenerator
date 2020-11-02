const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const userQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project:'
        },
        {
            type: 'input',
            name: 'install',
            message: 'Provide step by step instructions on how to install your project:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples where your project is used:'
        },
        {
            type: 'input',
            name: 'collaborate', 
            message: 'List any contribution guidelines if any (if none hit "Enter")'
        },
        {
            type: 'input',
            name: 'test',
            message: 'List any tests you performed to test your application:'
        }
    ])
    .then(userAnswers => {
        const readMeFile = generateMarkdown(userAnswers);
        console.log(userAnswers);
        fs.writeFile('./newReadMe.md', readMeFile, err => {
            if(err) throw err;
        });
    });
};
userQuestions();

// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
