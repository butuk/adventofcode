import {input} from '/input.js';
function divideWord(str) {
  let secondPartFirstLetterIdext = (str.length)/2;
  let firstWord = str.slice(0,secondPartFirstLetterIdext);
  let secondWord = str.slice(secondPartFirstLetterIdext, str.length);
  return [firstWord, secondWord];
}
const index = {
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 4,
  'e': 5,
  'f': 6,
  'g': 7,
  'h': 8,
  'i': 9,
  'j': 10,
  'k': 11,
  'l': 12,
  'm': 13,
  'n': 14,
  'o': 15,
  'p': 16,
  'q': 17,
  'r': 18,
  's': 19,
  't': 20,
  'u': 21,
  'v': 22,
  'w': 23,
  'x': 24,
  'y': 25,
  'z': 26,
  'A': 27,
  'B': 28,
  'C': 29,
  'D': 30,
  'E': 31,
  'F': 32,
  'G': 33,
  'H': 34,
  'I': 35,
  'J': 36,
  'K': 37,
  'L': 38,
  'M': 39,
  'N': 40,
  'O': 41,
  'P': 42,
  'Q': 43,
  'R': 44,
  'S': 45,
  'T': 46,
  'U': 47,
  'V': 48,
  'W': 49,
  'X': 50,
  'Y': 51,
  'Z': 52,
}
function findSimilarLetter(twoWords) {
  let firstSet = new Set(twoWords[0]);
  let secondSet = new Set(twoWords[1]);
  let result;
  for(let element of firstSet.values()) {
    if(secondSet.has(element)){
      result = element;
    };
  };
  return index[result];
}
let sumArr = [];
input.array.forEach(word => {
  sumArr.push(findSimilarLetter(divideWord(word)));
})
console.log(sumArr.reduce((sum, next) => sum + next, 0));
  



