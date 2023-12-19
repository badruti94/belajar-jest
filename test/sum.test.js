const { sum, sumAll } = require('../src/sum');

test('should 20', () => {
  const result = sum(10, 10);
  expect(result).toBe(20);
});

it('should 30', () => {
  const result = sumAll([10, 10, 10]);
  expect(result).toBe(30);
});
