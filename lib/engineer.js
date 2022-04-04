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

    htmlCode(){
    `<div class="card">
        <div class="card-body">
          <h3> ${this.name} </h3>
          <h4> Engineer </h4>
          <ul> 
            <li class="list"> ID: ${this.ID} </li>
             <li class="list"> Email: ${this.email} </li>
            <li class="list"> GitHub: ${this.github} </li>
          </ul>
        </div>
    </div>`
    }
}

module.exports = Engineer;