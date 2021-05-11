function xhrGet(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(xhr.response);
      }
    };
  });
}

window.xhrGet = xhrGet;

export default xhrGet;
