import capitalize from '../src/capitalize.js'
import toString from '../src/toString.js'
import upperFirst from '../src/upperFirst.js'
import chai from 'chai';
const expect = chai.expect;

describe('Capitalization of product descriptions', function () {

    it("Test upperFirst if string is all lowercase", function(){
        const test = "test"
        expect(upperFirst(test)).to.be.deep.equal("Test")
    })
    it("Test upperFirst if string is all uppercase", function(){
        const test = "TEST"
        expect(upperFirst(test)).to.be.deep.equal("TEST")
    })
    it("Test upperFirst to work correctly when string has whitespaces", function(){
        const test = "test description"
        expect(upperFirst(test)).to.be.deep.equal("Test description")
    })

    it("Test capitalize to work correctly when all letters are lowercase", function(){
        const test = "test"
        expect(capitalize(test)).to.be.deep.equal("Test")
    })
    it("Test capitalize to work correctly when all letters are uppercase", function(){
        const test = "TEST"
        expect(capitalize(test)).to.be.deep.equal("Test")
    })
    it("Test capitalize to work correctly when string has whitespaces", function(){
        const test = "test DESCRIPTION to TEST capitalize"
        expect(capitalize(test)).to.be.deep.equal("Test description to test capitalize")
    })
})