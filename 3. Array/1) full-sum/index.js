function fullSum(...args) {
  if (
    args.every((e) => {
      return typeof e === 'number';
    })
  ) {
    // Calling on an empty array will return initialValue === 0
    return args.reduce((prev, curr) => prev + curr, 0);
  } else {
    throw new Error('Wrong Argument Type');
  }
}

window.fullSum = fullSum;

export default fullSum;
