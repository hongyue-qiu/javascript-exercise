function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  const array = [];
  collection.forEach(function(e) {
    if (e % 3 == 0) array.push(e);
  });
  return array;
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  const array = [...new Set(collection)];
  return array;
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
