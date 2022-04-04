// Intern is a child of the class employee. Additional Info to hold
// School, getSchool, getRole => Intern

const Employee = require("./employee");

class Intern extends Employee{

    constructor( name, ID, email, school){
        super(name, ID, email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern"
    }
}

module.exports = Intern;