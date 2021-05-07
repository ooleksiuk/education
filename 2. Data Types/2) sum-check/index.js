function sumCheck(a, b) {
  const isNumber = (argument) => {
    if (typeof argument !== 'number') throw new Error('Wrong arguments type!');
    else return true;
  };

  return isNumber(a) && isNumber(b) && a + b;
}

window.sumCheck = sumCheck;

export default sumCheck;
