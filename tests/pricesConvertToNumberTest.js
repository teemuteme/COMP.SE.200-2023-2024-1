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
})