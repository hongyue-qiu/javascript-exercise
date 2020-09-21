export default function addSerialNumber(source) {
  // TODO 5: 在这里写实现代码，需要采用ES6 Object.assign
  const sourceNew = source;
  sourceNew.serialNumber = '12345';
  sourceNew.properties.status = 'processed';
  return sourceNew;
}
