/*
*
*
*       Complete the handler logic below
*       
*       
*/

const math = require('mathjs')

function ConvertHandler() {
  
  this.getNum = function(input) {
    const regex = /[A-Z]+/gi
    const test = input.match(regex)
    const match = test[test.length - 1]
    const matchIndex = input.indexOf(match)
    const result = matchIndex !== 0 ? input.slice(0, matchIndex) : '1'

    const testResult = result.match(/\//g)
    if (Array.isArray(testResult) && testResult.length > 1) return 'invalid number'

    try {
      return math.evaluate(result.trim())
    } catch (err) {
      return 'invalid number'
    }

  };
  
  this.getUnit = function(input) {
    const regex = /[A-Z]+/i
    let result = input.search(regex)

    const unit = input.slice(result)
    const validUnits = ['gal', 'L', 'lbs', 'kg', 'mi', 'km']
    
    return validUnits.find(e => e.toLowerCase() === unit.toLowerCase()) || 'invalid unit'
  };

  this.getReturnUnit = function(initUnit) {
    const units = {
      gal: 'L',
      L: 'gal',
      lbs: 'kg',
      kg: 'lbs',
      mi: 'km',
      km: 'mi'
    }

    return units[initUnit]
  };

  this.spellOutUnit = function(unit) {
    const fullUnits = {
      gal: 'gallons',
      L: 'liters',
      lbs: 'pounds',
      kg: 'kilograms',
      mi: 'miles',
      km: 'kilometers'
    }
    
    return fullUnits[unit]
  };
  
  this.convert = function(initNum, initUnit) {
    const conversions = {
      gal: 3.78541,
      L: 1/3.78541,
      lbs: 0.453592,
      kg: 1/0.453592,
      mi: 1.60934,
      km: 1/1.60934
    }

    const conversion = conversions[initUnit]
    
    return +(initNum * conversion).toFixed(5)
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    const fullInitUnit = this.spellOutUnit(initUnit)
    const fullReturnUnit = this.spellOutUnit(returnUnit)
    return `${initNum} ${fullInitUnit} converts to ${returnNum.toFixed(5)} ${fullReturnUnit}`
  };
  
}

module.exports = ConvertHandler;
