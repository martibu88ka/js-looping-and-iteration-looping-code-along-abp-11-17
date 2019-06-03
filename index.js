// Code your solutions in this file
const badges = ['Ada', 'Brendan', 'Ali'];

function printBadges(badges){
  for (let i =0; i < badges.length; i++){
    console.log (`Welcome ${badges[i]}! You are employee #${[i+1]}.`)
}
return badges;
}

function coinToss(){
  return Math.random() >= 0.5 ;
  }

function tailsNeverFails(){
  let counter = 0;
  while (coinToss()) {
  counter++
}
  return `You got ${counter} tails in a row!`
}
