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
            type:'input',
            name: 'credit',
            message: 'List your collaborators, if any, with links to their GitHub profiles'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Select any licenses below',
            choices: ['license 1','license 2', 'license 3']
        },
        {
            type: 'input',
            name: 'contribute', 
            message: 'List any contribution guidelines if any (if none hit "Enter")'
        },
        {
            type: 'input',
            name: 'test',
            message: 'List any tests you performed on your application and how to run them:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username:'
        }, 
        {
            type: 'input',
            name: 'useremail',
            message: 'Enter in your email address:'
        }
    ])
    //takes the user's answers, makes them available to the readme markdown generator file, then creates the new readme file
    .then(userAnswers => {
        const readMeFile = generateMarkdown(userAnswers);
            fs.writeFile('./newReadMe.md', readMeFile, err => {
                if(err) throw err;
            });
        console.log('Check the current folder for your new ReadME file titled "newReadMe.md"');
    });
};
userQuestions();

