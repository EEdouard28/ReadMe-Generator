// TODO: Include packages needed for this application
//importing generate Markdown
const generateMarkdown = require("./utils/generateMarkdown")
//importing inquirer package
const inquirer = require("inquirer")
// importing built in node package enables reading/writing of files
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },

    {
        type: "input",
        name: "description",
        message: "Provide a brief description of what this project is about:"
    },

    // {
    //     type: "input",
    //     name: "table of contents",
    //     message: "Please list your table of contents here"
    // },

    {
        type: "input",
        name: "installation",
        message: "Provide installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use."
    },

    {
        type: "input",
        name: "credits",
        message: "Provide information on contributors"
    },
    {
        type: "input",
        name: "email",
        message: "Please provide your email"
    },

    {
        type: "input",
        name: "github",
        message: "Please provide your github"
    },

    {
        type: "list",
        name: "license",
        message: "Please select a license",
        choices: ['GNU', 'Mozilla', 'Apache', 'MIT', 'none'],
    },

    {
        type: "input",
        name: "tests",
        message: "Write tests for your application. Then provide examples on how to run them here.",
    },



];
// 

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
//prompt built in inquirer package
function init() {
    inquirer.prompt(questions).then(data => {
        fs.writeFileSync("Readme.MD", generateMarkdown(data))
    })
}

// Function call to initialize app
init();
