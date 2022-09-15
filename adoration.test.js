const {showHowMuchILoveYou} = require('./adoration');

describe("showHowMuchILoveYou", () => {

    it("exists", () => {
        expect(showHowMuchILoveYou).toBeDefined();
    })

    it("is a function", () => {
        expect(showHowMuchILoveYou instanceof Function).toEqual(true)
    })

    it("Returns a string with correct number of 'i's", () => {
        expect(showHowMuchILoveYou(5)).toBe("I love you thiiiiis much")
    })

    it("Throws error when oassed a string", () => {
        expect(() => {
            showHowMuchILoveYou("with all my heart")
        }).toThrowError(new Error("Not interested")); //needs to match error message exactly!
        
    })

})
