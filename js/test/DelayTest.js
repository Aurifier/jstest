describe( "delay", function(){
    var calculator;

    beforeEach(function () {
        calculator = new Calculator();
    });

    it( "returns a promise", function(done){
        var willAdd = delay( 100, calculator, 'add', [ 1, 1 ] );
        expect( willAdd instanceof Promise).toBe(true);
        willAdd.then(function() {
            done();
        });
    });

    it( "delays execution for addition", function(done) {
        delay(1000, calculator, 'add', [10, 5]).then(function (result) {
            expect(result).toEqual(15);
            done();
        });
    });

    it( "delays execution for subtraction", function(done) {
        delay( 500, calculator, 'subtract', [ 9, 5 ]).then(function(result) {
            expect(result).toEqual(4);
            done();
        });
    });

    it( "cannot execute functions that do not exist", function(done){
        delay( 1000, calculator, 'sqrt', [ 2, 2 ]).catch(function() {
            done();
        });
    });
} );