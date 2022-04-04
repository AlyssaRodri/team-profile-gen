const Inquirer = require("inquirer");
const fs = require("fs");
const Jest = require("jest")

//Add in all of our libraries
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const inquirer = require("inquirer");


/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
*/

// Here I create a function that will start the code
const init = () => {

    //The first question I will ask is for the type of employee on a team
    inquirer.prompt([
        {
            type: "List",
            name: "employeeRole",
            message: "What is your employee's role?",
            choices: ["Engineer", "Intern", "Manager", "I have no more employee's to add."]
        }
    ]) .then( response => {
        // Given the users response I will pick the kind of questions the User will be asked
            if ( response.employeeRole === "Engineer"){
                engineerQuestions()
            } else if ( response.employeeRole === "Intern"){
                internQuestions()
            } else if ( response.employeeRole === "Manager"){
                managerQuestions()
            } else {
                createPage()
            }
    })
}

//Engineer Questions Prompt

const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: "Input",
            name: "name",
            message: "What is your engineer's name?"
        },
        {
            type: "Input",
            name: "ID",
            message: "What is your engineer's ID?",
        },
        {
            type: "Input",
            name: "email",
            message: "What is your engineer's email?",
        },
        {
            type: "input",
            name: "github",
            message: "What is your engineer's GitHub?"
        },
        {
            type: "confirm",
            name: "moreEmployee",
            message: "Would you like to add another employee?"
        }
    ]) .then ( response => {
        const eng = new Engineer( response.name, response.ID, response.email, response.github)

        if ( response.moreEmployee === true){
            init()
        } else {
            createPage()
        }
    })
}

// Intern Questions

const internQuestions = () => {
    inquirer.prompt([
        {
            type: "Input",
            name: "name",
            message: "What is your intern's name?"
        },
        {
            type: "Input",
            name: "ID",
            message: "What is your intern's ID?",
        },
        {
            type: "Input",
            name: "email",
            message: "What is your intern's email?",
        },
        {
            type: "Input",
            name: "school",
            message: "What school does your intern attend?",
        },
        {
            type: "confirm",
            name: "moreEmployee",
            message: "Would you like to add another employee?"
        }
    ]) .then( response => {
        const int = new Intern( response.name, response.ID, response.email, response.school )

        if (response.moreEmployee === true){
            init()
        } else {
            createPage()
        }
    })
}

// Manager Questions

const managerQuestions = () => {
    inquirer.prompt([
        {
            type: "Input",
            name: "name",
            message: "What is your manager's name?"
        },
        {
            type: "Input",
            name: "ID",
            message: "What is your manager's ID?",
        },
        {
            type: "Input",
            name: "email",
            message: "What is your manager's email?",
        },
        {
            type: "Input",
            name: "officeNum",
            message: "What is your manager's office number?"
        },
        {
            type: "confirm",
            name: "moreEmployee",
            message: "Would you like to add another employee?"
        }
    ]) .then( response =>{
        const man = new Manager(response.name, response.ID, response.email, response.officeNum )

        if (response.moreEmployee === true){
            init()
        } else {
            createPage()
        }

    })
}

