/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      let input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      let input = '32.5L'
      assert.equal(convertHandler.getNum(input), 32.5)
      done();
    });
    
    test('Fractional Input', function(done) {
      let input = '2/5L'
      assert.equal(convertHandler.getNum(input), 0.4)
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      let input = '32.5/32.5L'
      assert.equal(convertHandler.getNum(input), 1)
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      let input = '32.5/2/4L'
      assert.equal(convertHandler.getNum(input), 'invalid number')
      done();
    });
    
    test('No Numerical Input', function(done) {
      let input = '3a4L'
      assert.isNotNumber(convertHandler.getNum(input))
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      let input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(ele => {
        assert.notEqual(convertHandler.getUnit(ele), 'invalid unit')
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      let input = ['4gali', '5.2li', '21kgr']
      input.forEach(e => assert.equal(convertHandler.getUnit(e), 'invalid unit'))
      done()
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      let input = ['gal','l','mi','km','lbs','kg'];
      let expect = ['L','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      //see above example for hint
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      let input = [5, 'gal'];
      let expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      
      //done();
    });
    
    test('Mi to Km', function(done) {
      
      //done();
    });
    
    test('Km to Mi', function(done) {
      
      //done();
    });
    
    test('Lbs to Kg', function(done) {
      
      //done();
    });
    
    test('Kg to Lbs', function(done) {
      
      //done();
    });
    
  });

});