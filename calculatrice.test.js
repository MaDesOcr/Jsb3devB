const add = require("./calculatrice")
//import add from "./calculatrice"

test("add(1, 2)", () => {
    expect(add(1, 2)).toBe(3)
})

test("add(2,2) notexpect 3", ()=> {
    expect(add(2,2)).not.toBe(3)
})
