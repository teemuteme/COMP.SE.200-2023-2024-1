import toInteger from '../src/toInteger.js'
import chai from 'chai';
const expect = chai.expect;

describe('Testing that values are converted to integer', function () {

    it("Test toInteger to work when value is number", function(){
        const value = 5;
        expect(toInteger(value)).to.be.deep.equal(5)
    })
    it("Test toInteger to work when value is string", function(){
        const value = "5"
        expect(toInteger(value)).to.be.deep.equal(5)
    })
    it("Test toInteger to return always integer", function(){
        const value1 = "1"
        const value2 = 2
        expect(toInteger(value1)).to.be.a('number')
        expect(toInteger(value2)).to.be.a('number')
    })
})