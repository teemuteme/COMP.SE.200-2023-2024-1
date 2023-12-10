import filter from '../src/filter.js'
import chai from 'chai';
const expect = chai.expect;

describe('Filtering products from array', function () {

    it("Test function to work correctly with basic numbers", function(){
        const inputArray = [1, 2, 3, 4, 5];
        const predicate = (value) => value < 4;
        expect(filter(inputArray, predicate)).to.deep.equal([1,2,3])
    })
    it("Test empty array and null",function(){
        const inputArray = [];
        const nullValue = null
        const predicate = (value) => value > 0;
        expect(filter(inputArray, predicate)).to.be.lengthOf(0)
        expect(filter(nullValue, predicate)).to.be.lengthOf(0)
    })
    it("Test array with only same values",function(){
        const inputArray = [1,1,1,1,1];
        const predicate = (value) => value < 5;
        expect(filter(inputArray, predicate)).to.deep.equal([1,1,1,1,1])
    })
    it("Test array with string",function(){
        const inputArray = ['tea', 'banana', 'bread', 'cheese'];
        const predicate = (value) => value === 'cheese';
        expect(filter(inputArray, predicate)).to.deep.equal(['cheese'])
    })
    it("Test filter to always return array",function(){
        const inputArray1 = ['tea', 'banana', 'bread', 'cheese'];
        const inputArray2 = [];
        const inputArray3 = [1, 2, 3, 4, 5];
        const predicate = (value) => true;
        expect(filter)
    })
});
