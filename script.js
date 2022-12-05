import {input} from '/jobtobedone.js';
import {stack} from '/stack.js';

function defineDirectives(str) {
  let comandsArr = str.split(' from ');
  const firstDirective = Number(comandsArr[0]);
  const secondDirective = Number(comandsArr[1].split(' to ')[0]);
  const thirdDirective = Number(comandsArr[1].split(' to ')[1]);
  return [firstDirective, secondDirective, thirdDirective];
}
function makeChanges(directiveArr){
  let [amount, initialPlace, targetPlace] = directiveArr;
  for(let i=0; i<amount; i++) {
    stack.piles[targetPlace].push(stack.piles[initialPlace].pop());
  }
};
for(let i = 0; i < input.array.length; i++) {
  makeChanges(defineDirectives(input.array[i]));   
};
let resultArr = [];
for (let j = 1; j < stack.piles.length; j++) {
  resultArr.push(stack.piles[j].pop());
};

console.log(resultArr.join(''));
