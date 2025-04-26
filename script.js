function stringChop(str, size) {
 if (str === null || size <= 0) return []; // Safety checks

  const chunks = [];
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));// Extract chunk and push to array
  }

  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);
alert(JSON.stringify(stringChop(str, size)));
