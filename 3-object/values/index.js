export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  let count = 0;
  for (const i in source) {
    count = parseInt(source[i]) + count;
    console.log(parseInt(i));
    console.log(i);
  }
  return count;
}
