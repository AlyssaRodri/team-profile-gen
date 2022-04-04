//Engineer is a child of Employee. Additional information to hold
// GitHub, getGitHub(), getRole() => Engineer

const Employee = require("./employee");

class Engineer extends Employee {

    constructor( name, ID, email, github){
        super( name, ID, email);
        this.github = github;
    }
    getGitHub(){
        return this.github;
    }

    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer;