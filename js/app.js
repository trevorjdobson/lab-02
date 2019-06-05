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
  currentAnswer = parseInt(prompt(`${user}, How many years did I serve in the Army?`));
  let correctAnswer =  4;

  if(guesses <= 0){
    alert(`No more guesses, I served 4 years in the Army. You have answered ${totalCorrect} correct.`);
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
    }else if(currentAnswer === correctAnswer){
      totalCorrect++;
      alert(`You're right! You have now answerwed ${totalCorrect} correct.`);
      questionSeven(user);
    }else{
      alert(`This needs to be ansered in number form.  You have ${guesses} remaining.`);
      questionSix(user);
    }
  }

}

let tries = 6;
function questionSeven(user){
  let answersArr = ['canada', 'mexico', 'taiwan', 'philippines', 'afghanistan', 'kyrgyzstan'];
  let isCorrect = false;
  currentAnswer = prompt(`${user}, Name a country other than the U.S. that I've been to.`).toLowerCase();

  if(tries > 0){
    tries--;
    for(var i=0; i < answersArr.length; i++){
      if(answersArr[i] === currentAnswer){
        isCorrect = true;
      }
    }
  }

  if(isCorrect === true){
    alert('good job!');
    questionEight(user);
  }else if(isCorrect === false && tries>0){
    alert('try again');
    questionSeven(user);
  }else{
    alert('out of tries');
    questionEight(user);
  }

}

function questionEight(user){
  alert(`You are done with my guessing game.  ${user} you got ${totalCorrect} answers right`);
}

readyToBegin(user);
