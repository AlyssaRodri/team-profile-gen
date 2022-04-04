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

    htmlCode(){
        `<div class="card">
            <div class="card-body">
              <h3> ${this.name} </h3>
              <h4> Intern </h4>
              <ul> 
                <li class="list"> ID: ${this.ID} </li>
                 <li class="list"> Email: ${this.email} </li>
                <li class="list"> School: ${this.school} </li>
              </ul>
            </div>
        </div>`
    }

}

module.exports = Intern;