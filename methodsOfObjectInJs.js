// Demonstrating built-in Object methods
const exampleObject = { name: "Arafat", id: 1 };
console.log(exampleObject.toString());
console.log(exampleObject.toLocaleString());
console.log(exampleObject.valueOf());
console.log(exampleObject.hasOwnProperty("name"));

// Class definition and usage
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi, ${this.name}`);
  }
}

const samir = new Person("Samir");
samir.greet();
console.log(Person.prototype.isPrototypeOf(samir));
console.log(samir instanceof Person);

// Object creation and manipulation using Object.create
const proto = {
  greet() {
    console.log(`Hi, ${this.name}`);
  },
};

const ob = Object.create(proto, {
  name: {
    value: "Rifat",
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

ob.greet();

// More complex example with Object.create
const PrototypeOfStudent = {
  greet() {
    console.log(`${this.name} is ${this.age} years old`);
  },
  getName() {
    return this.name;
  },
  setName(name) {
    this.name = name;
  },
};

const Student = Object.create(PrototypeOfStudent, {
  age: {
    value: 27,
    writable: true,
    enumerable: true,
    configurable: true,
  },
  getAge: {
    value: function () {
      return this.age;
    },
    writable: true,
    enumerable: true,
    configurable: true,
  },
  setAge: {
    value: function (newAge) {
      this.age = newAge;
    },
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

const rifat = Object.create(Student, {
  name: {
    value: "Rifat",
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

rifat.greet();
console.log(rifat.getAge());
rifat.age = 22;
console.log(rifat.getAge());
console.table(rifat);

// Object.assign example
const obOne = {};
const obTwo = { name: "rifat", age: 22 };
const obThree = { id: 5, country: "USA" };
const obFour = { id: 6, name: "samir" };

console.log(Object.assign(obOne, obTwo));
console.log(Object.assign(obOne, obTwo, obThree));
console.log(Object.assign(obOne, obTwo, obThree, obFour));

// Object.defineProperty example
const personObject = {};
Object.defineProperty(personObject, "name", {
  value: "samir",
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(personObject);

// Modify property attributes
let internalName = personObject.name;
Object.defineProperty(personObject, "name", {
  get() {
    return internalName;
  },
  set(value) {
    internalName = value;
  },
  enumerable: false,
  configurable: false,
});

console.log(personObject.name);
personObject.name = "rifat";
console.log(personObject.name);

// Object.defineProperties example
const studentObject = {};
Object.defineProperties(studentObject, {
  name: {
    value: "arafat",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  id: {
    value: 5,
    writable: true,
    enumerable: true,
    configurable: true,
  },
});
console.log(studentObject);

// Object properties and descriptors
const newObject = { name: "arafat", id: 5, country: "USA" };
console.log(Object.getOwnPropertyDescriptor(newObject, "name"));
console.log(Object.getOwnPropertyDescriptors(newObject));
console.log(Object.getOwnPropertyNames(newObject));
console.log(Object.getPrototypeOf(newObject));

const protoTypeOfNewObject = {
  greet() {
    console.log(
      `ID of ${this.name} is ${this.id} and he is from ${this.country}`
    );
  },
};

Object.setPrototypeOf(newObject, protoTypeOfNewObject);
newObject.greet();
console.log(Object.getPrototypeOf(newObject));

// Object property enumeration
console.log(Object.keys(newObject));
console.log(Object.values(newObject));
console.log(Object.entries(newObject));
console.log(
  Object.fromEntries([
    ["name", "arafat"],
    ["id", 4],
  ])
);

// Object freezing, sealing, and prevent extensions
const newObjectOne = { name: "arafat", id: 5 };
const newObjectTwo = { name: "rifat", id: 6 };
const newObjectThree = { name: "samir", id: 7 };

Object.freeze(newObjectOne);
newObjectOne.name = "Li"; // Will not change
newObjectOne.country = "USA"; // Will not add
delete newObjectOne.id; // Will not delete
console.log(newObjectOne);

Object.seal(newObjectTwo);
newObjectTwo.name = "Lui"; // Will change
newObjectTwo.country = "USA"; // Will not add
delete newObjectTwo.id; // Will not delete
console.log(newObjectTwo);

Object.preventExtensions(newObjectThree);
newObjectThree.name = "CA"; // Will change
newObjectThree.country = "USA"; // Will not add
delete newObjectThree.id; // Will delete
console.log(newObjectThree);

// Object comparison and type checking
console.log(Object.is(5, 5)); // true
console.log(Object.is(5, "5")); // false
console.log(Object.is({}, {})); // false

// Checking freeze, seal and extensible states
console.log(Object.isFrozen(newObjectOne)); // true
console.log(Object.isSealed(newObjectTwo)); // true
console.log(Object.isExtensible(newObjectThree)); //false

// Other utility methods
const newObjectFour = { name: "arafat" };
console.log(Object.hasOwn(newObjectFour, "name"));
