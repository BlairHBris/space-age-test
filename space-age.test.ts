import { age } from "./space-age";

describe("age function tests", () => {
    it("converts to mercury", () => {
        const result = age('mercury', 31557600)
        expect(result).toEqual(4.15)
    })
})