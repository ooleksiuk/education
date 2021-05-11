/*
  Задача:
  Добавить функции метод reverse, который будет переворачивать строку на оборот
  Примеры:
  'test'.reverse() === 'tset';
  'bob'.reverse() === 'bob';
  'abc123'.reverse() === '321cba';
 */
function reverseString(str) {
  if (!str) {
    str = this;
  }

  return str.split('').reverse().join('');
}

// extending the JS String Prototype
String.prototype.reverse = reverseString;
