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
}

module.exports = Manager