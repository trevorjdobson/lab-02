'use strict';

let user = prompt('Hi! Welcome to my page, my name is Trevor Dobson.  What is your name?');
console.log('The user\'s, name is', user);

let currentAnswer =  'no';
let totalCorrect = 0;

function readyToBegin(user){
  currentAnswer = prompt(`Are you ready to begin ${user}`).toLowerCase();

  if(currentAnswer === 'yes' || currentAnswer === 'y'){
    questionTwo(user);
    console.log(`The user answered ${currentAnswer} for the first question`);
  }else if(currentAnswer === 'no' || currentAnswer === 'n'){
    alert('Too bad we\'re going to begin');
    console.log(`The user answered ${currentAnswer} for the first question`);
    questionTwo(user);
  }else{
    alert('Please answer with a yes or no');
    readyToBegin(user);
  }
}

function questionTwo(user){
  currentAnswer = prompt(`${user}, Do you think I have a dog?`).toLowerCase();

  if(currentAnswer === 'yes' || currentAnswer === 'y'){
    totalCorrect++;
    alert(`Right! I do have a dog.  You have answered ${totalCorrect} correct.`);
    console.log(`The user has ${totalCorrect} right`);
    questionThree(user);
  }else if(currentAnswer === 'no' || currentAnswer === 'n'){
    alert(`Wrong, I do have a dog. You have answered ${totalCorrect} correct.`);
    console.log(`The user has ${totalCorrect} right`);
    questionThree(user);
  }else{
    alert('Please answer with a yes or no');
    questionTwo(user);
  }
}

function questionThree(user){
  currentAnswer = prompt(`${user}, Do you think I am originally from Washington?`).toLowerCase();

  if(currentAnswer === 'yes' || currentAnswer === 'y'){
    alert(`Wrong, I am from Iowa originally.  You have answered ${totalCorrect} correct.`);
    console.log(`The user has ${totalCorrect} right`);
    questionFour(user);
  }else if(currentAnswer === 'no' || currentAnswer === 'n'){
    totalCorrect++;
    alert(`Right!, I am from Iowa originally.  You have answered ${totalCorrect} correct.`);
    console.log(`The user has ${totalCorrect} right`);
    questionFour(user);
  }else{
    alert('Please answer with a yes or no');
    questionThree(user);
  }
}

function questionFour(user){
  currentAnswer = prompt(`${user}, Do you think I have a child?`).toLowerCase();

  if(currentAnswer === 'yes' || currentAnswer === 'y'){
    totalCorrect++;
    alert(`Right!, I have a 5 year old daughter, her name is emily.  You have answered ${totalCorrect} correct.`);
    console.log(`The user has ${totalCorrect} right`);
    questionFive(user);
  }else if(currentAnswer === 'no' || currentAnswer === 'n'){
    alert(`Wrong, I have a 5 year old daughter named Emily.  You have answered ${totalCorrect} correct.`);
    console.log(`The user has ${totalCorrect} right`);
    questionFive(user);
  }else{
    alert('Please answer with a yes or no');
    questionFive(user);
  }
}

function questionFive(user){
  currentAnswer = prompt(`${user}, Do I take the ferry to work?`).toLowerCase();

  return currentAnswer === 'yes' || currentAnswer === 'y' ? (
      totalCorrect++,
      alert(`Good Job, I do take the ferry to work.  You have answered ${totalCorrect} correct.`),
      console.log(`The user has ${totalCorrect} right`),
      questionSix(user)
      )
    : currentAnswer === 'no' || currentAnswer === 'n' ? (
      alert(`Wrong, I do take the ferry to work.  You have answered ${totalCorrect} correct.`),
      console.log(`The user has ${totalCorrect} right`),
      questionSix(user)
      )
    : questionFive(user);
}

let guesses = 4;
function questionSix(user){
  currentAnswer = prompt(`${user}, How many years did I serve in the Army?`).toLowerCase();
  
  let correctAnswer =  4;
  if(guesses <= 0){
    alert(`No more guesses, You have answered ${totalCorrect} correct.`);
    questionSeven(user);
  }else{
    if(currentAnswer < correctAnswer){
      guesses--;
      alert(`Too low, try again.  You have ${guesses} left.`);
      questionSix(user);
    }else if(currentAnswer > correctAnswer){
      guesses--;
      alert(`Too high, try again.  You have ${guesses} left.`);
      questionSix(user);
    }else{
      totalCorrect++;
      alert(`You're right! You have now answerwed ${totalCorrect} correct.`);
    }
  }
}

readyToBegin(user);


