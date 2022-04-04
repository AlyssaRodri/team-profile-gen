const Employee = require("../lib/employee");
const Jest = require("jest");


describe("Test employee class", () => {

    describe( "Get the employee's name", () => {
        it("should populate with the employee's name", () => {
            const example = new Employee ( "Mike", 1, "mike@jones.com", "Employee")
            expect( example.getName()).toEqual("Mike")
        })
    })
    describe( "Get the employee's ID", () => {
        it("something", () => {
            const example = new Employee ( "Mike", 1, "mike@jones.com", "Employee")
            expect( example.getID()).toEqual(1)
        })
    })
    describe( "Get the employee's Email", () => {
        it("something", () => {
            const example = new Employee ( "Mike", 1, "mike@jones.com", "Employee")
            expect(example.getEmail()).toEqual("mike@jones.com")
        })
    })
    describe( "Get the employee's Role", () => {
        it("something", () => {
            const example = new Employee ( "Mike", 1, "mike@jones.com", "Employee")
            expect(example.getRole()).toEqual("Employee")
        })
    })



})