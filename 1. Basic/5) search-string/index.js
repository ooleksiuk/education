function searchString(obj) {
  let qs = [];
  if (!Object.keys(obj).length) return '';
  for (let key in obj) {
    if (obj[key] !== undefined && obj[key] !== null && obj[key] !== '') {
      qs.push(`${key}=${obj[key]}`);
    }
  }
  return '?' + qs.join('&');
}

window.searchString = searchString;

export default searchString;
