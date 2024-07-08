// Array Methods in JavaScript
const arrOne = [1, 1, 3, 3, 5];
const arrOfOb = [
  { name: "Arafat", age: 27, id: 5 },
  { name: "Rifat", age: 20, id: 8 },
  { name: "Samir", age: 27, id: 10 },
];

// ForEach Method
console.group("%cForEach method", "color: blue; font-size: 20px;");

// Log values where the value equals the index
arrOne.forEach((num, index) => {
  if (num === index) {
    console.log(`Value of index ${index} = ${num}`);
  }
});

// Log details of specific objects in a table
arrOfOb.forEach(({ name, age, id }) => {
  if (name.toLowerCase() === "arafat" && age === 27) {
    console.table([{ name, age, id }]);
  }
});

console.groupEnd();

// Map Method
console.group("%cMap method", "color: blue; font-size: 20px;");

console.log(arrOne.map((num, i) => num * i));
console.log(["1", "2", "3", "4"].map(Number));
console.table(
  arrOfOb.map(({ name, age }) => ({
    name,
    age,
  }))
);

console.groupEnd();

// Filter Method
console.group("%cFilter method", "color: blue; font-size: 20px;");

console.log(arrOne.filter((num) => num > 2));
console.log(arrOfOb.filter(({ id }) => id !== 5));

console.groupEnd();

// Reduce Method
console.group("%cReduce method", "color: blue; font-size: 20px;");

console.log(
  "Sum of array: ",
  arrOne.reduce((acc, num) => acc + num, 0)
);

console.log(
  "Max value from array: ",
  arrOne.reduce((acc, num) => (acc < num ? num : acc), arrOne[0])
);

console.log(
  "Min value from array: ",
  arrOne.reduce((acc, num) => (num < acc ? num : acc), arrOne[0])
);

console.log(
  "Product of age and id: ",
  arrOfOb.reduce((acc, { age, id }) => acc + age * id, 0)
);

console.groupEnd();

// Slice Method
console.group("%cSlice method", "color: blue; font-size: 20px;");

console.log(arrOne.slice(2));
console.log(arrOne.slice(1, 3));
console.log(arrOne.slice(-2));

console.groupEnd();

// Splice Method
console.group("%cSplice method", "color: blue; font-size: 20px;");

const arrTwo = [1, 2, 3, 4, 5];
const arrThree = [1, 2, 3, 4, 5];

arrTwo.splice(1, 2, 4, 5);
arrThree.splice(1, 2);

console.log(arrTwo);
console.log(arrThree);

console.groupEnd();

// Sort Method
console.group("%cSort method", "color: blue; font-size: 20px;");

const strOfArr = ["gold", "apple", "cow", "love"];

console.log(strOfArr.sort());
console.log(arrOne.sort((a, b) => a - b));
console.log(arrOne.sort((a, b) => b - a));
console.log("1314".split("").sort().join(""));

console.groupEnd();

// Reverse Method
console.group("%cReverse method", "color: blue; font-size: 20px;");

console.log(arrOne.reverse());
console.log(strOfArr.reverse());
console.log("cba".split("").reverse().join(""));

console.groupEnd();

// Concat Method
console.group("%cConcat method", "color: blue; font-size: 20px;");

console.log(arrOne.concat(7, 8, [2, 3, 4], arrThree));
console.log(["Hi", "Hello"].concat("Hey", "Bye"));

console.groupEnd();

// Fill Method
console.group("%cFill method", "color: blue; font-size: 20px;");

console.log([1, 2, 3, 4].fill(0));
console.log([1, 2, 3, 4].fill(0, 1, 3));
console.log([1, 2, 3, 4].fill(0, 2));
console.log([1, 2, 3, 4].fill(2, 1, 3));

console.groupEnd();

// Includes Method
console.group("%cIncludes method", "color: blue; font-size: 20px;");

console.log([1, 3, 4, 5].includes(3));
console.log(["Hi", "Hello", "Hey"].includes("Hello"));
console.log(["Hi", "Hello", "Hey"].includes("Ei"));

console.groupEnd();

// IndexOf Method
console.group("%cIndexOf method", "color: blue; font-size: 20px;");

console.log([6, 5, 4, 3, 2, 2].indexOf(2));
console.log(["Hi", "Hello", "Hey", "Hello"].indexOf("Hello"));
console.log(["Hi", "Hello", "Hey"].indexOf("Ei"));

console.groupEnd();

// LastIndexOf Method
console.group("%cLastIndexOf method", "color: blue; font-size: 20px;");

console.log([6, 5, 4, 3, 2, 2].lastIndexOf(2));
console.log(["Hi", "Hello", "Hey", "Hello"].lastIndexOf("Hello"));
console.log(["Hi", "Hello", "Hey"].lastIndexOf("Ei"));

console.groupEnd();

// Every Method
console.group("%cEvery method", "color: blue; font-size: 20px;");

console.log([1, 2, 3, 4].every((num) => num > 0));
console.log([1, 2, 3, 4].every((num) => num > 2));

console.groupEnd();

// Some Method
console.group("%cSome method", "color: blue; font-size: 20px;");

console.log([1, 2, 3, 4].some((num) => num > 0));
console.log([1, 2, 3, 4].some((num) => num > 2));
console.log([1, 2, 3, 4].some((num) => num > 4));

console.groupEnd();

// Find Method
console.group("%cFind method", "color: blue; font-size: 20px;");

console.log([1, 2, 3, 4].find((num) => num === 2));
console.log(arrOfOb.find(({ name }) => name.toLowerCase() === "arafat"));

console.groupEnd();

// FindIndex Method
console.group("%cFindIndex method", "color: blue; font-size: 20px;");

console.log([1, 2, 3, 4].findIndex((num) => num === 2));
console.log(arrOfOb.findIndex(({ name }) => name.toLowerCase() === "arafat"));

console.groupEnd();

// Array.from Method
console.group("%cArray.from method", "color: blue; font-size: 20px;");

console.log(Array.from({ length: 5 }, (_, index) => index + 1));
console.log(Array.from("Hello"));
console.log(Array.from("1234", Number));
console.log(Array.from("1234", (num) => Number(num)));
console.log(Array.from(new Set([1, 2, 3, 3, 3])));

console.groupEnd();

// Array.of Method
console.group("%cArray.of method", "color: blue; font-size: 20px;");

console.log(Array.of(1, 2, 3, 4));
console.log(Array.of("Hi", "Hello", "Hey"));

console.groupEnd();

// Array.isArray Method
console.group("%cArray.isArray method", "color: blue; font-size: 20px;");

console.log(Array.isArray([1, 2]));
console.log(Array.isArray(["Hi"]));
console.log(Array.isArray(1, 3));
console.log(Array.isArray("Hi"));

console.groupEnd();

// Join Method
console.group("%cJoin method", "color: blue; font-size: 20px;");

console.log(["Hi", " Samir"].join(","));

console.groupEnd();

// Flat Method
console.group("%cFlat method", "color: blue; font-size: 20px;");

const arrFive = [[[[[[[[[2]]], 4]]], 5], 6], 7];

console.log(arrFive.flat());
console.log(arrFive.flat(1));
console.log(arrFive.flat(2));
console.log(arrFive.flat(Infinity));

console.groupEnd();

// At Method
console.group("%cAt method", "color: blue; font-size: 20px;");

console.log([1, 2, 3].at(2));
console.log(["Hi", "Hello", "Hey"].at(0));

console.groupEnd();

// CopyWithin Method
console.group("%cCopyWithin method", "color: blue; font-size: 20px;");

console.log([1, 2, 3, 4, 5].copyWithin(1, 2, 4));
console.log([1, 2, 3, 4, 5].copyWithin(1, 2));

console.groupEnd();

// ToString Method
console.group("%cToString method", "color: blue; font-size: 20px;");

console.log([1, 2, 3].toString());

console.groupEnd();
