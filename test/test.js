describe('permAlone', function(){
    it('when permAlone is given only 1 option should return that option', function(){
        expect(permAlone("a")).toEqual(1);
    });
    it('when permAlone is  given a 2 length string should return 2, unless they are the same letter', function(){
        expect(permAlone("gw")).toEqual(2);
    });
    it('when findTwoOptions is given abc should return "abc, acb"', function(){
        expect(findTwoOptions([ 'a', 'b', 'c' ], [ 'a', 'b', 'c' ])).toEqual([ 'abc', 'acb' ]);
    });
    it('When rotateOrder is given [ a, b, c ]  should return [ b, c,a ]', function(){
        expect(rotateOrder([ 'a', 'b', 'c' ])).toEqual([ 'b', 'c','a' ]);
    });
    it("when findTwoOptions is given abc should return [ 'abc', 'acb' ]", function(){
        expect(findTwoOptions(["a", "b", "c"], [ 'a', 'b', 'c' ])).toEqual([ 'abc', 'acb' ]);
    });
    it("when findTwoOptions is given 123 should return [ '123', '132' ]", function(){
        expect(findTwoOptions(["1", "2", "3"], [ '1', '2', '3' ])).toEqual([ '123', '132' ]);
    });
    it("when findTwoOptions is given 123 should return [ '123', '132' ]", function(){
        expect(findTwoOptions(["1", "2", "3"], [ '1', '2', '3' ])).toEqual([ '123', '132' ]);
    });
    it("when permAlone is given 1234 should return 24", function(){
        expect(permAlone("1234")).toEqual(24);
    });
    it("when permAlone is given aaab should return 0", function(){
        expect(permAlone("aaab")).toEqual(0);
    });
    it("when permAlone is given 12345 should return 120", function(){
        expect(permAlone("12345")).toEqual(120);
    });

});


/*
 permAlone("aab") should return a number.
 permAlone("aab") should return 2.
 permAlone("aaa") should return 0.
 permAlone("aabb") should return 8.
 permAlone("abcdefa") should return 3600.
 permAlone("abfdefa") should return 2640.
 permAlone("zzzzzzzz") should return 0.
 permAlone("a") should return 1.
 permAlone("aaab") should return 0.
 permAlone("aaabb") should return 12.

 */