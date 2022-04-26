//Manager is a child of employee. Additional info to Hold
// Office Number and getRole() => Manager
const Employee = require("./employee");

class Manager extends Employee{

    constructor( name, ID, email, officeNum){
        super(name, ID, email);
        this.officeNum = officeNum;
    }

    getOfficeNum(){
        return this.officeNum
    }

    getRole(){
        return "Manager"
    }

    htmlCode(){
        return `
        <div class="card">
            <div class="card-body">
              <h3> ${this.name} </h3>
              <h4> Manager </h4>
              <ul> 
                <li class="list"> ID: ${this.ID} </li>
                 <li class="list"> Email: ${this.email} </li>
                <li class="list"> Office Number: ${this.officeNum} </li>
              </ul>
            </div>
        </div>`
        
    }
}

module.exports = Manager