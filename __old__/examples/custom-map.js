function customMap(array, callback) {
  const mappedArray = [];
  for (const [index, current] of array.entries()) {
    mappedArray.push(callback(current, index, array));
  }

  return mappedArray;
}

const mapped = customMap(['Luiz', 'Goufix', 'Bruno'], (current, index) => {
  return `${index} ${current}`;
});

console.log(mapped);
