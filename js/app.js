'use strict';

let user = prompt('Hi! Welcome to my page, my name is Trevor Dobson.  What is your name?');
console.log('The user\'s, name is', user);

let currentAnswer =  'no';

function readyToBegin(user){
  currentAnswer = prompt(`Are you ready to begin ${user}`).toLowerCase();

  if(currentAnswer === 'yes' || currentAnswer ===  'y'){
    questionTwo(user);
  }else if(currentAnswer === 'no' || currentAnswer === 'n'){
    alert('Too bad we\'re going to begin');
    questionTwo(user);
  }else{
    alert('Please answer with a yes or no');
    readyToBegin(user);
  }
}

function questionTwo(user){
  currentAnswer = prompt(`${user}, Do you think I have a dog?`).toLowerCase();

  if(currentAnswer === 'yes' || currentAnswer === 'y'){
    alert('Right! I do have a dog');
    questionThree(user);
  }else if(currentAnswer === 'no' || currentAnswer === 'n'){
    alert('Wrong, I do have a dog');
    questionThree(user);
  }else{
    alert('Please answer with a yes or no');
    questionTwo(user);
  }
}

function questionThree(user){
  currentAnswer = prompt(`${user}, Do you think I am originally from Washington?`).toLowerCase();

  if(currentAnswer === 'yes' || currentAnswer === 'y'){
    alert('Wrong, I am from Iowa originally');
    questionFour(user);
  }else if(currentAnswer === 'no' || currentAnswer === 'n'){
    alert('Right!, I am from Iowa originally');
    questionFour(user);
  }else{
    alert('Please answer with a yes or no');
    questionThree(user);
  }
}

function questionFour(user){
  currentAnswer = prompt(`${user}, Do you think I have a child?`).toLowerCase();

  if(currentAnswer === 'yes' || currentAnswer === 'y'){
    alert('Right!, I have a 5 year old daughter, her name is emily');
    questionFive(user);
  }else if(currentAnswer === 'no' || currentAnswer === 'n'){
    alert('Wrong, I have a 5 year old daughter named Emily');
    questionFive(user);
  }else{
    alert('Please answer with a yes or no');
    questionFive(user);
  }
}

function questionFive(user){
  currentAnswer = prompt(`${user}, this is your last question.  Do I take the ferry to work?`).toLowerCase();

  return currentAnswer === 'yes' || currentAnswer === 'y' ? alert('Good Job, I do take the ferry to work')
    : currentAnswer === 'no' || currentAnswer === 'n' ? alert('Wrong, I do take the ferry to work')
    : questionFive(user);

}

readyToBegin(user);

