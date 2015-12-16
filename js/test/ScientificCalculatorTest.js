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
    it("returns the sine of 0", function () {
        expect(calculator.sin(0)).toEqual(0);
    });
    it("returns the cosine of PI", function () {
        expect(calculator.cos(Math.PI)).toEqual(-1);
    });
    it("returns the cosine of PI / 3", function () {
        expect(calculator.cos(Math.PI / 3)).toBeCloseTo(0.5, 0.00001);
    });
    it("returns the tangent of 0", function () {
        expect(calculator.tan(0)).toEqual(0);
    });
    it("returns the tangent of PI / 4", function () {
        expect(calculator.tan(Math.PI / 4)).toBeCloseTo(1, 0.00001);
    });
    it("returns the logarithm of 1", function () {
        expect(calculator.log(1)).toEqual(0);
    });
    it("returns the logarithm of e", function () {
        expect(calculator.log(Math.E)).toEqual(1);
    });
});