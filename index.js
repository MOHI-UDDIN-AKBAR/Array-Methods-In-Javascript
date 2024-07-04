const arr = [1, 2, 3, 4];

// forEach Methods
arr.forEach((num, index, arr) =>
  console.log(`Item of ${index} index = ${num}`)
);

// map Methods
const newArr = arr.map((num, index, arr) => num * 2);
console.log(newArr);
