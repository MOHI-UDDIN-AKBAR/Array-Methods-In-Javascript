const arr = [1, 2, 3, 4];

// forEach Method
arr.forEach((num, index, arr) =>
  console.log(`Item of ${index} index = ${num}`)
);

// map Method
const newArr = arr.map((num, index, arr) => num * 2);
console.log(newArr);

// filter Method

const newArrTwo = arr.filter((num, i, arr) => num > 3);
console.log(newArrTwo);

// reduce Method
const sumOfArr = arr.reduce((acc, element, i, arr) => acc + element, 0);
console.log(sumOfArr);
