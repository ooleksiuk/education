function isEqual(obj1, obj2) {
  // Тип сравниваемых объектов
  var type = objectTypeCheck(obj1, obj2);
  if (!type) return false;

  if (!isObject(type)) return false;

  // Сравниваем количество свойств в объекте
  var obj1_length = Object.keys(obj1).length;
  var obj2_length = Object.keys(obj2).length;
  if (obj1_length !== obj2_length) return false;

  // Сравниваем свойства (проверяя, есть ли свойство с таким ключем в обоих объектах)
  for (var key in obj1) {
    if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
      if (comparePropValues(obj1[key], obj2[key]) === false) return false;
    } else {
      return false;
    }
  }

  return true;
}

// Проверяем равенство типов объектов
function objectTypeCheck(obj1, obj2) {
  let type = Object.prototype.toString.call(obj1);
  return type === Object.prototype.toString.call(obj2) ? type : false;
}

// Проверяем является ли тип объектом
function isObject(type) {
  return type === '[object Object]' ? true : false;
}

// Сравниваем свойства на равенство
function comparePropValues(item1, item2) {
  var itemType1 = Object.prototype.toString.call(item1);
  // сравниваем типы
  if (itemType1 !== Object.prototype.toString.call(item2)) return false;
  // сравниваем значения
  if (item1 !== item2) return false;
}

window.isEqual = isEqual;

export default isEqual;
