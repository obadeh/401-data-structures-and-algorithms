

const validator = require('../multiBracketValidation/multi-bracket-validation.js');

describe('test the multi bracket validation function', () => {
  test('check for balance brackets strings that should return true', () => {
    expect(validator('()')).toEqual(true);
    expect(validator('({})')).toEqual(true);
    expect(validator('[()()]')).toEqual(true);
  });

  test('check strings that should return false', () => {
    expect(validator('([)')).toEqual(false);
    expect(validator(')')).toEqual(false);
    expect(validator('[})')).toEqual(false);
    expect(validator('}')).toEqual(false);
    expect(validator('(')).toEqual(false);

  });
});