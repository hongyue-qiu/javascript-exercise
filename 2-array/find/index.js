export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  // let array;
  // collection.forEach(function(e) {
  //   if (e.age <= 20 && e.age > 10) array = e.name;
  // });
  const result = collection.find(e => e.age <= 20 && e.age > 10);
  return result.name;
}
