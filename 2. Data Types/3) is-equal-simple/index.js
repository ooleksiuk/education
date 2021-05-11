function isEqual(obj1, obj2) {
  if (isNull(obj1, obj2)) return false;
  if (!areBothObjects(obj1, obj2)) return false;

  // Compare equality of properties quantity
  const obj1_length = Object.keys(obj1).length;
  const obj2_length = Object.keys(obj2).length;
  if (obj1_length !== obj2_length) return false;

  // Compare properties (check whether there is a property with the given key in both objects)
  for (let key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      if (!isPropValuesEqual(obj1[key], obj2[key])) return false;
    } else {
      return false;
    }
  }

  return true;
}

function areBothObjects(obj1, obj2) {
  return typeof obj1 === 'object' && typeof obj2 === 'object';
}

function isNull(obj1, obj2) {
  return obj1 === null || obj2 === null;
}

// Check values equality
function isPropValuesEqual(item1, item2) {
  return item1 === item2;
}

window.isEqual = isEqual;

export default isEqual;
