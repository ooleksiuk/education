function basicCalc(operation, a, b) {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '/':
      return a / b;
    case '*':
      return a * b;
    default:
      console.log('Неверный оператор!');
      break;
  }
}

window.basicCalc = basicCalc;

export default basicCalc;
