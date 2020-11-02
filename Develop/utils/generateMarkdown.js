module.exports = generateMarkdown => {
  return `
  # ${generateMarkdown.title}


  ## Description
  ${generateMarkdown.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation 
  ${generateMarkdown.install}


  ## Usage
  ${generateMarkdown.usage}


  ## Credits
  ${generateMarkdown.credit}


  ## License
  ${generateMarkdown.license}


  ## Contributing
  ${generateMarkdown.contribute}


  ## Tests
  ${generateMarkdown.test}


  ## Questions
  GitHub Username: [${generateMarkdown.github}](https://github.com/${generateMarkdown.github})

  If you have any questions, feel free to email me at ${generateMarkdown.useremail}

  `
};