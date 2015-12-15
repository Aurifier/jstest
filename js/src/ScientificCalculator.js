var ScientificCalculator = function() {};

ScientificCalculator.prototype = new Calculator();

ScientificCalculator.prototype.sin = function() {
    return 1;
};

ScientificCalculator.prototype.cos = function() {
    return -1;
};

ScientificCalculator.prototype.tan = function() {
    return 0;
};

ScientificCalculator.prototype.log = function() {
    return 0;
};