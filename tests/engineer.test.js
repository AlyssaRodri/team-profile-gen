const Engineer = require("../lib/engineer")
const Jest = require("jest")

describe("Test Engineer class", () => {

    describe( "Get the engineer's name", () => {
        it("should return the engineer's name", () => {
            const variable = new Engineer ( "Jane", 2, "jane@example.com", "www.github/JaneExample")
            expect(variable.getName()).toEqual("Jane")
        })
    })
    describe( "Get the engineer's ID", () => {
        it("will return the engineer's ID", () => {
            const variable = new Engineer ( "Jane", 2, "jane@example.com", "www.github/JaneExample")
            expect(variable.getID()).toEqual(2)
        })
    })
    describe( "Get the engineer's Email", () => {
        it("will return the engineer's email", () => {
            const variable = new Engineer ( "Jane", 2, "jane@example.com", "www.github/JaneExample")
            expect(variable.getEmail()).toEqual("jane@example.com")
        })
    })
    describe( "Get the engineer's Github", () => {
        it("will return the engineer's github", () => {
            const variable = new Engineer ( "Jane", 2, "jane@example.com", "www.github/JaneExample")
            expect(variable.getGitHub()).toEqual("www.github/JaneExample")
        })
    })
    
    describe( "Get Engineer's role", () =>{
        it("should return the engineer's role", () =>{
            expect(getRole()).toEqual("Engineer")
        })
    })

})