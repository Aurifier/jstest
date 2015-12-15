describe("ScientificCalculator", function () {
    var calculator;
    beforeEach(function () {
        calculator = new ScientificCalculator();
    });
    it("extends Calculator", function () {
        expect(calculator instanceof Calculator).toBe(true);
        expect(calculator instanceof ScientificCalculator).toBe(true);
    });
    it("returns the sine of PI / 2", function () {
        expect(calculator.sin(Math.PI / 2)).toEqual(1);
    });
    it("returns the cosine of PI", function () {
        expect(calculator.cos(Math.PI)).toEqual(-1);
    });
    it("returns the tangent of 0", function () {
        expect(calculator.tan(0)).toEqual(0);
    });
    it("returns the logarithm of 1", function () {
        expect(calculator.log(1)).toEqual(0);
    });
});