// function to generate markdown for README
// module.exports = userAnswers => {
//   const [title] = userAnswers;
//   console.log(title);


// function generateMarkdown() {
//   return `# test5
   
// `;
// }

// module.exports = generateMarkdown;

//${userQuestions.title}

module.exports = generateMarkdown => {
  //console.log(generateMarkdown)
  return `# ${generateMarkdown.title}

  ## Description
  ${generateMarkdown.description}

  ## Table of Contents


  ##


  
  `
};