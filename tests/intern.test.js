const Intern = require("../lib/intern")
const Jest = require("jest")

describe("Test intern class", () => {

    describe( "Get the intern's name", () => {
        it("will return the intern's name", () => {
            const example = new Intern( "Aaron", 3, "aaron@no.com", "SMU")
            expect(example.getName()).toEqual("Aaron")
        })
    })
    describe( "Get the intern's ID", () => {
        it("will return the intern's ID", () => {
            const example = new Intern( "Aaron", 3, "aaron@no.com", "SMU")
            expect(example.getID()).toEqual(3)
        })
    })
    describe( "Get the intern's Email", () => {
        it("will return the intern's email", () => {
            const example = new Intern( "Aaron", 3, "aaron@no.com", "SMU")
            expect(example.getEmail()).toEqual("aaron@no.com")
        })
    })
    describe( "Get the intern's school", () => {
        it("returns the intern's school", () => {
            const example = new Intern( "Aaron", 3, "aaron@no.com", "SMU")
            expect(example.getSchool()).toEqual("SMU")
        })
    })
    describe( "Get the intern's role", () =>{
        it("returns the intern's role", () =>{
            expect(getRole()).toEqual("Intern")
        })
    })


})