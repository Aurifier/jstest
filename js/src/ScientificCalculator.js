var ScientificCalculator = function() {};

ScientificCalculator.prototype = new Calculator();

ScientificCalculator.prototype.sin = function(a) {
    return Math.sin(a);
};

ScientificCalculator.prototype.cos = function(a) {
    return Math.cos(a);
};

ScientificCalculator.prototype.tan = function(a) {
    return Math.tan(a);
};

ScientificCalculator.prototype.log = function(a) {
    return Math.log(a);
};