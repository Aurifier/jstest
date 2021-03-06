describe("Calculator", function () {
    var calculator;
    beforeEach(function () {
        calculator = new Calculator();
    });
    it("adds 1 and 2", function () {
        expect(calculator.add(1, 2)).toEqual(3);
    });
    it("subtracts 2 from 9", function () {
        expect(calculator.subtract(9, 2)).toEqual(7);
    });
    it("multiplies 4 and 3", function () {
        expect(calculator.multiply(4, 3)).toEqual(12);
    });
    it("multiplies 7 and 5", function () {
        expect(calculator.multiply(7, 5)).toEqual(35);
    });
    it("divides 10 by 2", function () {
        expect(calculator.divide(10, 2)).toEqual(5);
    });
    it("divides 36 by 6", function() {
        expect(calculator.divide(36, 6)).toEqual(6);
    });
    it("does not divide by 0", function () {
        expect(calculator.divide(5, 0)).toEqual(NaN);
    });
});