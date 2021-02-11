const inquirer = require("inquirer");

const promtProject = portfolioData => {
  console.log('');
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required):'
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ["JavaScript", "HTML", "CSS", "ES6", "jQuery", "Bootstrap", "Node"]
    },
    {
      type: 'input',
      name: 'link',
      message: 'Would you like to feature this project?',
      default: false
    },
  ]);



};
  promtUser()
    .then( answers => console.log(answers))
    .then(promtProject)
    .then(projectAnswers => console.log(projectAnswers));

  

// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const generatePage = require("./src/page-template");

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });