function fullSum(...args) {
  // check whether parameters were passed
  if (!args.length) return 0;

  // check whether all passed parameters are numbers
  if (
    args.every((e) => {
      return typeof e === 'number';
    })
  ) {
    return args.reduce((prev, curr) => prev + curr);
  } else {
    throw new Error('Wrong Argument Type');
  }
}

window.fullSum = fullSum;

export default fullSum;
