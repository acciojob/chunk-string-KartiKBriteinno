function stringChop(str, size) {
  // Check if the input string is null or empty
  if (!str) {
    return [];
  }

  // Initialize an empty array to store the chunks
  const chunks = [];

  // Loop through the string and extract chunks of the specified size
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.substring(i, i + size));
  }

  // Return the array of chunks
  return chunks;
}

// Test cases
console.log(stringChop("Hello, world!", 5)); // ["Hello", ", wor", "ld!"]
console.log(stringChop("12345", 2)); // ["12", "34", "5"]
console.log(stringChop("abc", 5)); // ["abc"]


// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
