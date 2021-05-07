function isEqual(obj1, obj2) {
  // Type of compared objects
  const type = objectTypeCheck(obj1, obj2);
  if (!type && !isObject(type)) return false;

  // Compare equality of properties quantity
  const obj1_length = Object.keys(obj1).length;
  const obj2_length = Object.keys(obj2).length;
  if (obj1_length !== obj2_length) return false;

  // Compare properties (check whether there is a property with the given key in both objects)
  for (let key in obj1) {
    if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
      if (!isPropValuesEqual(obj1[key], obj2[key])) return false;
    } else {
      return false;
    }
  }

  return true;
}

// Check object equality
function objectTypeCheck(obj1, obj2) {
  const type = Object.prototype.toString.call(obj1);
  return type === Object.prototype.toString.call(obj2) ? type : false;
}

// Check whether it's an object
function isObject(type) {
  return type === '[object Object]';
}

// Check values equality
function isPropValuesEqual(item1, item2) {
  return item1 === item2;
}

window.isEqual = isEqual;

export default isEqual;
