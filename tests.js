const expect = require('chai').expect;
const StringScramble = require('./StringScramble');

describe('StringScramble', () => {
  it('should return true when str1 can be rearranged to match str2', () => {
    const result = StringScramble('rkqdlwo', 'world');
    expect(result).to.be.true;
  });

  it('should return false when str1 can not be rearranged to match str2', () => {
    const result = StringScramble('h3llko', 'hello');
    expect(result).to.be.false;
  })

  it('should return false when char has to be used twice', () => {
    const result = StringScramble('rkqodlw', 'worldd');
    expect(result).to.be.false;
  })
})
