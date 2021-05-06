function stringToType(str) {
  if (str === '') return '';
  else if (isNaN(Number(str))) {
    switch (str) {
      case 'null':
        return null;
      case 'NaN':
        return NaN;
      case 'undefined':
        return undefined;
      case 'false':
        return false;
      case 'true':
        return true;
      default:
        return str;
    }
  } else return Number(str) === null ? null : Number(str);
}

window.stringToType = stringToType;

export default stringToType;
