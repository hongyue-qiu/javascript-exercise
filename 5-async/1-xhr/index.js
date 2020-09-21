/* eslint-disable prettier/prettier */
function fetchData(url, successCallback, errorCallback) {
  const xhr = new XMLHttpRequest();
  // <-- start
  // TODO 21: 通过XMLHttpRequest实现异步请求
  xhr.open('GET', url, true);
  // eslint-disable-next-line func-names
  xhr.onload = function() {
    if (xhr.readyState === xhr.DONE) {
      if (xhr.status >= 200 && xhr.status < 300) {
        successCallback(xhr.responseText);
      } else {
        errorCallback(xhr.statusText);
      }
    }
  };
  xhr.send(null);
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(
  URL,
  result => {
    document.writeln(JSON.parse(result).name);
  },
  error => {
    console.error(error);
  }
);
