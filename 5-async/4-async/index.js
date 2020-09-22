async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  // eslint-disable-next-line prettier/prettier
  const result = await fetch(url);
  const data = await result.json();
  try {
    if (result.status >= 200 && result.status < 300) {
      console.log(data);
      return data;
    }
  } catch (error) {
    Promise.reject(error);
  }
  console.log(result);
  return result;
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
