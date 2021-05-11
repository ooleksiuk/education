function findPair(arr) {
  const duplicateVal = arr.find((item, index, arr) => {
    return thereIsCouple(item, index, arr);
  });

  return duplicateVal || null;
}

function thereIsCouple(item, from, arr) {
  return arr.includes(item, ++from);
}

window.findPair = findPair;

export default findPair;
