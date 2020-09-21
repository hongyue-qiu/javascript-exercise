export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  let array;
  collection.forEach(function(e) {
    if (e.age <= 18 && e.age > 8) array = e.name;
  });
  return array;
}
