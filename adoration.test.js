const each = require("jest-each").default;

const {showHowMuchILoveYou} = require('./adoration');

describe("showHowMuchILoveYou", () => {

    it("exists", () => {
        expect(showHowMuchILoveYou).toBeDefined();
    })

    it("is a function", () => {
        expect(showHowMuchILoveYou instanceof Function).toEqual(true)
    })

    each([["I love you thiiiiis much", 5], 
          ["I love you thiiis much", 3]
        ]).test("Returns %s when passed %s", (expected, amount) => {
            expect(showHowMuchILoveYou(amount)).toBe(expected)
    })

    it("Throws error when oassed a string", () => {
        expect(() => {
            showHowMuchILoveYou("with all my heart")
        }).toThrowError(new Error("Not interested")); //needs to match error message exactly!
        
    })

})
