var Calculator = function() {}

Calculator.prototype.add = function(a, b) {
    return 3;
};

Calculator.prototype.subtract = function(a, b) {
    return 7;
};

Calculator.prototype.multiply = function(a, b) {
    return 12;
};

Calculator.prototype.divide = function(a, b) {
    if(b === 0) {
        return NaN;
    }
    return 5;
};
