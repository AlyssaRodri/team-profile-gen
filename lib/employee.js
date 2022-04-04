
const Choice = require("inquirer/lib/objects/choice")
const { run } = require("jest")
//I want employee to be the parent class which means that it will be holding these key pieces of data
// Name, ID, Email, getName(), getID(), getEmail(), getRole() => return Employee

class Employee {
    constructor(name, ID, email, role) {
        this.name = name
        this.ID = ID
        this.email = email
        this.role = role
    }

    getName(){
        return this.name
    }

    getID(){
        return this.ID
    }

    getEmail(){
        return this.email
    }
    
    getRole(){
        return "Employee"
    }

}

module.exports = Employee