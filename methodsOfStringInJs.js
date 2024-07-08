// String Creation

// Array of Unicode values
const uniCodes = [
  73, 32, 108, 111, 118, 101, 32, 74, 97, 118, 97, 115, 99, 114, 105, 112, 116,
];

// Various ways to create strings
const strOne = String("Hello world");
const strTwo = new String("Hi, Samir.");
const strThree = String.fromCharCode(...uniCodes);
const strFour = String.fromCodePoint(...uniCodes);

// Basic Methods of String
const str = "Hello World!";

console.log("String length:", str.length); // Length of the string
console.log("First character:", str.charAt(0)); // Character at index 0
console.log("Unicode of first character:", str.charCodeAt(0)); // Unicode of character at index 0
console.log("Slice (0, 5):", str.slice(0, 5)); // Slicing string from index 0 to 5
console.log("Substring (6 to second last):", str.substring(6, str.length - 1)); // Substring from index 6 to second last
console.log("Substr (0, 5):", str.substr(0, 5)); // Substring of length 5 from index 0
console.log("String representation:", str.toString()); // String representation
console.log("Code point at index 1:", str.codePointAt(1)); // Code point at index 1
console.log("Concatenated string:", str.concat(" ", "How you doing?")); // Concatenate strings
console.log("From char codes:", String.fromCharCode(...uniCodes)); // Create string from char codes
console.log("From code points:", String.fromCodePoint(...uniCodes)); // Create string from code points
console.log("Value of string:", str.valueOf()); // Value of the string

// Case Conversion Methods of String
console.log("Lowercase:", str.toLowerCase()); // Convert to lowercase
console.log("Uppercase:", str.toUpperCase()); // Convert to uppercase
console.log("Locale Lowercase (Turkish):", "Açık Kapı".toLocaleLowerCase("tr")); // Locale-specific lowercase
console.log("Locale Uppercase (Turkish):", "Açık Kapı".toLocaleUpperCase("tr")); // Locale-specific uppercase

// Trim Methods of String
const strSeven = "    Hello World       ";
console.log("Trimmed:", strSeven.trim()); // Trim whitespace
console.log("Trimmed Start:", strSeven.trimStart()); // Trim leading whitespace
console.log("Trimmed End:", strSeven.trimEnd()); // Trim trailing whitespace

// Padding Methods String
const strEight = "Hello";
console.log("Pad Start:", strEight.padStart(10, "*")); // Pad at start
console.log("Pad End:", strEight.padEnd(10, "*")); // Pad at end

// Repeat Method Of String
const strNine = "Hello ";
console.log("Repeated string:", strNine.repeat(5)); // Repeat the string

// Search Methods Of String
const strTen = "Hello World!";
console.log("Starts with 'Hello':", strTen.startsWith("Hello")); // Check if string starts with
console.log("Ends with 'World!':", strTen.endsWith("World!")); // Check if string ends with
console.log("Includes 'Hello':", strTen.includes("Hello")); // Check if string includes
console.log("Index of 'Hello':", strTen.indexOf("Hello")); // Index of substring
console.log("Last index of 'World!':", strTen.lastIndexOf("World!")); // Last index of substring
console.log("Search 'hello' (case insensitive):", strTen.search(/hello/i)); // Search using regex

// Match Methods of String
const strA = "Hello World";
let regex = /(Hello)/g;
console.log("Match 'h' (case insensitive):", strA.match(/h/i)); // Match regex
console.log(
  "MatchAll results:",
  [...strA.matchAll(regex)].map((match) => match[1])
); // MatchAll and map results
console.log("MatchAll objects:", [...strA.matchAll(regex)]); // MatchAll results

// Replace method Of String
const strB = "Hi, Samir.\nHi, Rifat";
regex = /HI/i;
console.log("Replace 'Hi' with 'Hey':", strB.replace("Hi", "Hey")); // Replace first occurrence
console.log(
  "Replace regex 'HI' (case insensitive):",
  strB.replace(regex, getNewString())
); // Replace using regex
console.log("Replace all 'Hi' with 'Hey':", strB.replaceAll("Hi", "Hey")); // Replace all occurrences

// Function to get new string for replace
function getNewString() {
  return "Hey";
}

// Split & Join & Sort Methods of String
const strC = "Cba";
console.log("Reversed and capitalized:", reverseAndCapitalize(strC)); // Reverse and capitalize
// Function to reverse a string and capitalize the first letter
function reverseAndCapitalize(str) {
  const reversed = str.split("").reverse().join("");
  return reversed.at(0).toUpperCase() + reversed.slice(1).toLowerCase();
}
console.log("sort :", strC.toLowerCase().split("").sort().join("")); // sort an string

// Localize Method of string
console.log("'a' compared to 'b':", "a".localeCompare("b")); // Compare strings
console.log("'b' compared to 'a':", "b".localeCompare("a")); // Compare strings
console.log("'a' compared to 'a':", "a".localeCompare("a")); // Compare strings

// Raw Method of String
const strD = String.raw`Hello\tworld!`;
console.log("Raw string:", strD); // Raw string

// Array Methods with String
console.log("Array from string:", Array.from("Hello World")); // Create array from string
console.log(
  "Array of numbers from string:",
  Array.from("12345", (num) => Number(num))
); // Array of numbers
console.log("Array of numbers:", Array.from("12345", Number)); // Array of numbers
console.log(
  "Array of values:",
  Array.of("Hi", "Samir,", " ", "How", "Are", "you")
); // Array of values
console.log("Array of mixed values:", Array.of("1", "3", 5, "3")); // Array of mixed values
