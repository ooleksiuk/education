function queryToObject(query) {
  let obj = {};
  if (query === '' || query === '?') return obj;

  query
    .slice(1)
    .split('&')
    .forEach((e) => addProp(e, obj));
  return obj;
}

function addProp(prop, obj) {
  const [key, value] = prop.split('=');
  obj[key] = stringToType(value);
}

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
  } else return Number(str);
}

window.queryToObject = queryToObject;

export default queryToObject;
