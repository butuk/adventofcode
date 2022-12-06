import {input} from '/input.js';
import {index} from '/index.js';
function divideWord(str) {
  let secondPartFirstLetterIdext = (str.length)/2;
  let firstWord = str.slice(0,secondPartFirstLetterIdext);
  let secondWord = str.slice(secondPartFirstLetterIdext, str.length);
  return [firstWord, secondWord];
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

//console.log(sumArr.reduce((sum, next) => sum + next, 0));

function makeSet(str) {
  return new Set(str.split(''));
}

function findLetter(set1, set2, set3) {
  let array = Array.from(set1.values());
  let resultletter;
  array.forEach(letter => {
    if(set2.has(letter) && set3.has(letter)) {
      resultletter =  index[letter];
    }
  })
  return resultletter;
}
let resultArray = [];

function findInGroups(array) {
  let i = 0;
  while(i < array.length-2) {
    let one = makeSet(array[i]);
    let two = makeSet(array[i+1]);
    let three = makeSet(array[i+2]);
    resultArray.push(findLetter(one, two, three));
    i += 3;
  }
  return resultArray.reduce((sum, cur) => sum + cur);
}

let test1 = makeSet('adfasdfagarg');
let test2 = makeSet('aGJJTHREDDJ');
let test3 = makeSet('ghrhljghdja');
//console.log(findLetter(test1, test2, test3));

console.log(findInGroups(input.array));




