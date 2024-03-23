const message = " mango is a yellow color,apple is a red color   ";

// split the message using commas
const parts = message.split(",");

// exclude these words from capitalize
const excludeWords = ["is", "a"];

// function to capitalize the first letter of the word, exclude certain words
function capitalizedFirstLetter(word) {
  // check if the word is in the excludeWords array
  if (excludeWords.includes(word.toLowerCase())) {
    return word;
  }
  // capitalize the first letter of the word
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// capitalize the first letter of each word
const capitalizedParts = parts.map((part) => {
  // split each part using spaces
  const words = part.trim().split(" ");
  const capitalizedWords = words.map((word) => capitalizedFirstLetter(word));
  return capitalizedWords.join(" ");
});

const capitalizedMessage = capitalizedParts.join(",");
console.log(capitalizedMessage);
