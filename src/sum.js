exports.sum = (a, b) => a + b;

exports.sumAll = (array) => {
  const result = array.reduce((a, b) => a + b, 0);
  return result;
};
