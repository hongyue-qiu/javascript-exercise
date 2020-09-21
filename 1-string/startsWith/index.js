export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  let count = 0;
  collection.forEach(function(e) {
    if (e.startsWith('粤A')) count += 1;
  });
  return count;
}
