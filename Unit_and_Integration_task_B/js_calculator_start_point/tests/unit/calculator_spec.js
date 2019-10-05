var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  // add 1 to 4 and get 5
  it('add 1 to 4 and get 5', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+')
    calculator.add(4);
    assert.equal(calculator.runningTotal , 5);
  })

  // subtract 4 from 7 and get 3
  it('subtract 4 from 7 and get 3', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.subtract(4);
    assert.equal(calculator.runningTotal , 3);
  })

  // multiply 3 by 5 and get 15
  it('multiply 3 by 5 and get 15', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15);
  })

  // divide 21 by 7 and get 3
  it('divide 21 by 7 and get 3', function(){
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3);
  })

  // concatenate multiple number button clicks
  it('concatenate multiple number button clicks 4 & 4 to 44', function(){
    calculator.numberClick(4);
    calculator.numberClick(4);
    assert.equal(calculator.runningTotal, 44);
  })

  // chain multiple operations together
  it('chain multiple operations together', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.operatorClick('*');
    assert.equal(calculator.runningTotal, 9);
  })

  // clear the running total without affecting the calculation
  it('clear the running total without affecting the calculation', function(){
    calculator.numberClick(5);
    calculator.operatorClick('*');
    calculator.numberClick(4);
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 10);
  })
});
