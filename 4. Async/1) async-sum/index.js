function asyncSum(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a === 'number' && typeof b === 'number') {
      setTimeout(() => resolve(a + b), 1000);
    } else {
      reject(new Error('a & b have to be numbers'));
    }
  });
}

window.asyncSum = asyncSum;

export default asyncSum;
