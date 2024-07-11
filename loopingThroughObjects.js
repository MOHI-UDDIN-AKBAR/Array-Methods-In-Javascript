const obj = {
  name: "Samir",
  id: 1,
  country: "USA",
  courses: ["English", "Math", "Higher Math"],
};

// Iterating over the object using different methods
function iterateObject(obj) {
  // Using for...in loop
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      console.log(`${key} : ${obj[key]}`);
    }
  }

  // Using Object.keys()
  Object.keys(obj).forEach((key) => {
    console.log(`${key} : ${obj[key]}`);
  });

  // Using Object.values()
  Object.values(obj).forEach((value) => {
    console.log(value);
  });

  // Using Object.entries()
  Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key} : ${value}`);
  });

  // Using for...of loop
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key} : ${value}`);
  }
}

// Demonstrating map function
function demonstrateMap(obj) {
  const arrOne = Object.keys(obj).map((key) => [key, obj[key]]);
  console.log(arrOne);

  const arrTwo = Object.values(obj).map((value) => typeof value === "string");
  console.log(arrTwo);

  const arrThree = Object.entries(obj).map(
    ([key, value]) => `${key}: ${value}`
  );
  console.log(arrThree);
}

// Demonstrating filter function
function demonstrateFilter(obj) {
  const arrFour = Object.keys(obj).filter((key) => key !== "id");
  console.log(arrFour);

  const arrFive = Object.values(obj).filter(
    (value) => typeof value !== "string"
  );
  console.log(arrFive);

  const arrSix = Object.entries(obj)
    .filter(([key, value]) => Array.isArray(value))
    .flat();
  console.log(arrSix);
}

// Demonstrating reduce function
function demonstrateReduce(obj) {
  const arrSeven = Object.keys(obj).reduce((acc, key) => {
    if (Array.isArray(obj[key])) {
      return key;
    }
    return acc;
  }, "");
  console.log(arrSeven);

  const arrEight = Object.values(obj).reduce((acc, value) => {
    if (Number.isInteger(value)) {
      return value;
    }
    return acc;
  }, 0);
  console.log(arrEight);

  const arrNine = Object.entries(obj).reduce((acc, [key, value]) => {
    if (key === "courses") {
      acc[key] = value;
    }
    return acc;
  }, {});
  console.log(arrNine);
}

// Main execution

iterateObject(obj);
demonstrateMap(obj);
demonstrateFilter(obj);
demonstrateReduce(obj);
