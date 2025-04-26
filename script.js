function stringChop(str, size) {
  // If input is null or size is not valid, return an empty array
  if (str === null || typeof str !== "string" || size <= 0 || isNaN(size)) {
    return [];
  }

  const chunks = [];

  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));
  }

  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
if (str === null) {
  alert("Input was canceled. Returning empty array.");
} else {
  const size = parseInt(prompt("Enter Chunk Size."), 10);

  if (isNaN(size) || size <= 0) {
    alert("Invalid chunk size. Please enter a positive number. Returning empty array.");
  } else {
    alert(JSON.stringify(stringChop(str, size))); 
  }
}
