const Inquirer = require("inquirer");
const fs = require("fs");
const Jest = require("jest")

//Add in all of our libraries
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const inquirer = require("inquirer");

let teamMembers = []

// Here I create a function that will start the code
const init = () => {

    //The first question I will ask is for the type of employee on a team
    inquirer.prompt([
        {
            type: "list",
            name: "employeeRole",
            message: "What is your employee's role?",
            choices: ["Engineer", "Intern", "Manager", "I have no more employee's to add."]
        }
    ]).then(response => {
        // Given the users response I will pick the kind of questions the User will be asked
        if (response.employeeRole === "Engineer") {
            engineerQuestions()
        } else if (response.employeeRole === "Intern") {
            internQuestions()
        } else if (response.employeeRole === "Manager") {
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
    ]).then(response => {
        const eng = new Engineer(response.name, response.ID, response.email, response.github)

        teamMembers.push(eng)

        if (response.moreEmployee === true) {
            init()
        } else {
            generateHTML()
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
    ]).then(response => {
        const int = new Intern(response.name, response.ID, response.email, response.school)

        teamMembers.push(int)

        console.log(teamMembers)

        if (response.moreEmployee === true) {
            init()
        } else {
            generateHTML()
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
    ]).then(response => {
        const man = new Manager(response.name, response.ID, response.email, response.officeNum)

        teamMembers.push(man)
        // console.log(teamMembers)
        if (response.moreEmployee === true) {
            init()
        } else {
            fs.writeFile("./dist/index.html", generateHTML(teamMembers), err => {
                if (err) {
                    console.error(err)
                    return
                }
            })
        }

    })
}

// Lastly, create the page!


const generateHTML = (teamMembers) => {
    let data = ""
    console.log(teamMembers)
    for (var i=0; i < teamMembers.length; i++){
        data += teamMembers[i].htmlCode()
    }
    console.log(data)
    return `
        <!doctype html>
        <html lang="en">
        <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>Profile Generator</title>
      </head>
      <body>
        <h1>Meet The Team! </h1>
    
        ${data}
    
        
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      </body>
    </html>
        `

}


init()