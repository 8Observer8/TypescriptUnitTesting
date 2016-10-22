/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/sinon/index.d.ts" />

var expect = chai.expect;
var sinon = sinon;

describe("Calculator Mocha",  () => {
    var calculator;
    beforeEach(() =>{
        calculator = new Calculator();
        // var spy = sinon.stub(calculator,"add").returns(26);
    });

    xit("can add", () => {
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