const Manager = require("../lib/manager")
const Jest = require("jest")



describe("Test manager class", () => {

    describe( "Get the manager's name", () => {
        it("will return the manager's name", () => {
            const manager = new Manager("Kayla", 4, "kayla@sims.com", 101)
            expect(manager.getName()).toEqual("Kayla")
        })
    })
    describe( "Get the manager's ID", () => {
        it("will provide the manager's ID", () => {
            const manager = new Manager("Kayla", 4, "kayla@sims.com", 101)
            expect(manager.getID()).toEqual(4)
        })
    })
    describe( "Get the manager's Email", () => {
        it("will return the manager's email", () => {
            const manager = new Manager("Kayla", 4, "kayla@sims.com", 101)
            expect(manager.getEmail()).toEqual("kayla@sims.com")
        })
    })
    describe( "Get the manager's office number", () => {
        it("returns the manager's office number", () => {
            const manager = new Manager("Kayla", 4, "kayla@sims.com", 101)
            expect(manager.getOfficeNum()).toEqual(101)
        })
    })
    describe( "Get the manager's Role", () => {
        it("will return the managers role", () => {
            const manager = new Manager("Kayla", 4, "kayla@sims.com", 101)
            expect(getrole()).toEqual("Manager")
        })
    })



})