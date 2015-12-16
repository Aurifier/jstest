describe( "withExponents", function(){
    var calculator;
    beforeEach( function(){
        calculator = new Calculator();
        withExponents.call( calculator );
    });
    it( "returns 2^3", function(){
        expect( calculator.pow( 2, 3 ) ).toEqual( 8 );
    });
    it( "returns 5^4", function(){
        expect( calculator.pow( 5, 4 ) ).toEqual( 625 );
    });
    it( "multiplies 2^3 and 2^4", function(){
        expect( calculator.multiplyExp( [ 2, 3 ], [ 2, 4 ] ) ).toEqual( 128 );
    });
    it( "multiplies 3^3 and 2^5", function(){
        expect( calculator.multiplyExp( [ 3, 3 ], [ 2, 5 ] ) ).toEqual( 864 );
    });
    it( "divides 2^3 by 2^5", function(){
        expect( calculator.divideExp( [ 2, 3 ], [ 2, 5 ] ) ).toEqual( 0.25 );
    });
    it( "divides 3^5 by 3^3", function(){
        expect( calculator.divideExp( [ 3, 5 ], [ 3, 3 ] ) ).toEqual(9);
    });
} );