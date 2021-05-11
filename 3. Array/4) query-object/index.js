// 'queryToObject(""?test=123"") => { test: 123 }'

function queryToObject(query) {
  const obj = {};
  if (query === '' || query === '?') return obj;

  query
    .slice(1)
    .split('&')
    .forEach((e) => {
      const [key, value] = e.split('=');
      obj[key] = stringToType(value);
    });

  return obj;
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
