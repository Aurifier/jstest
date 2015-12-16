describe( "delay", function(){
    var calculator;
    var spy;

    beforeEach(function () {
        calculator = new Calculator();
        spy = jasmine.createSpy("spy");
        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it( "returns a promise", function(done){
        var willAdd = delay( 100, calculator, 'add', [ 1, 1 ] );
        expect( willAdd instanceof Promise).toBe(true);
        willAdd.then(function() {
            done();
        });
        jasmine.clock().tick(101);
    });

    it( "delays execution for addition", function(done) {
        delay(1000, calculator, 'add', [10, 5]).then(function (result) {
            expect(result).toEqual(15);
            done();
        });
        jasmine.clock().tick(1001);
    });

    it( "delays execution for subtraction", function(done) {
        delay( 500, calculator, 'subtract', [ 9, 5 ]).then(function(result) {
            expect(result).toEqual(4);
            done();
        });
        jasmine.clock().tick(501);
    });

    it( "actually delays 500ms", function(done){
        delay( 500, calculator, 'add', [ 1, 1 ]).then(function(result) {
            spy();
            done();
        });
        expect(spy).not.toHaveBeenCalled();
        jasmine.clock().tick(501);
    });

    it( "actually delays 1000ms", function(done){
        delay( 1000, calculator, 'add', [ 1, 1 ]).then(function(result) {
            spy();
            done();
        });
        expect(spy).not.toHaveBeenCalled();
        jasmine.clock().tick(501);
        expect(spy).not.toHaveBeenCalled();
        jasmine.clock().tick(500);
    });

    it( "cannot execute functions that do not exist", function(done){
        delay( 1000, calculator, 'sqrt', [ 2, 2 ]).catch(function() {
            done();
        });
        jasmine.clock().tick(1001);
    });
});