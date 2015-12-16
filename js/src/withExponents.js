var withExponents = function() {
    this.pow = function(a, b) {
        return Math.pow(a, b);
    };

    this.multiplyExp = function(a, b) {
        return Math.pow(a[0],a[1]) * Math.pow(b[0],b[1]);
    };

    this.divideExp = function(a, b) {
        return Math.pow(a[0],a[1]) / Math.pow(b[0],b[1]);
    };
};