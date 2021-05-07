function arraysSort(arr) {
  // make copy of the array
  let sortedArr = arr.slice();
  sortedArr.sort((a, b) => arrayMax(a) - arrayMax(b));
  return sortedArr;
}

function arrayMax(array) {
  return array.reduce((a, b) => Math.max(a, b));
}

window.arraysSort = arraysSort;

export default arraysSort;
