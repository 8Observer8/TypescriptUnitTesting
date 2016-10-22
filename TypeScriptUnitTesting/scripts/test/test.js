describe("Calculator Mocha",  () => {
    var calculator;
    beforeEach(() =>{
        calculator = new Calculator();
        var spy = sinon.stub(calculator,"add").returns(26);
    });

    it("can add", () => {
        var result = calculator.add(5, 5);
        expect(result).to.be.equal(10);
        
    });

    it("can subtract", () => {
        var result = calculator.subtract(5, 5);
        expect(result).to.be.equal(0);
    });

    it("can multiply", () => {
        var result = calculator.multiply(5, 5);
        expect(result).to.be.equal(25);
    });

    it("can divide", () => {
        var result = calculator.divide(5, 5);
        expect(result).to.be.equal(1);
    });
});