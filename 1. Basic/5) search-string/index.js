function searchString(obj) {
  let qs = [];
  for (let key in obj) {
    if (obj[key] !== undefined && obj[key] !== null && obj[key] !== '') {
      qs.push(`${key}=${obj[key]}`);
    }
  }
  return !qs.length ? '' : '?' + qs.join('&');
}

window.searchString = searchString;

export default searchString;
