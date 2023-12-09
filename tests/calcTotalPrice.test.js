import add from '../src/add.js'
import ceil from '../src/ceil.js'
import chai from 'chai';
const expect = chai.expect;

describe('Calculating total price of the products', function () {

    it("Test functions to work correctly with two products", function(){
        const product1Price = 11.99;
        const product2Price = 5.99;
        expect(ceil(add(product1Price, product2Price), 1)).to.deep.equal(Math.ceil(product1Price+product2Price))
    })
    it("Test functions to work correctly with list of products", function(){
        const listOfProducts = [0.99, 21, 25.99, 24.49, 2.99, 18.39]
        let totalPrice = 0;
        let totalPriceOfAdd = 0;
        const round = Math.pow(10, 2);
        for(let i = 0; i < listOfProducts.length; i++)
        {
            totalPrice += listOfProducts[i];
            totalPriceOfAdd = add(listOfProducts[i], totalPriceOfAdd)
        }

        expect(ceil(totalPriceOfAdd, 2)).to.deep.equal(Math.ceil(totalPrice * round) / round)
    })
})