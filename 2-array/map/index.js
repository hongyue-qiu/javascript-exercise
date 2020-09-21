export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  const array = [];
  collection.forEach(function(e) {
    array.push(String.fromCharCode(96 + e));
  });
  return array;
}
