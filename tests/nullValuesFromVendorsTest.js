import isSymbol from '../src/isSymbol.js'
import toString from '../src/toString.js'
import chai from 'chai';
const expect = chai.expect;

describe('Testing null values left by vendors', function () {

    it("Test if value is null", function(){
        const value = null;
        const string = toString(value)
        expect(isSymbol(string)).to.be.false
    })
    it("Testing functionality of isSymbol when true", function(){
        const testWord = Symbol("test")
        expect(isSymbol(testWord)).to.be.true
    })
    it("Testing functionality of isSymbol when false", function(){
        expect(isSymbol(null)).to.be.false
    })
    it("Testing functionality of toString", function(){
        const value = 2;
        expect(toString(value)).to.be.deep.equal("2")
    })
})