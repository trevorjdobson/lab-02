'use strict';


let user = prompt('Hi! Welcome to my page, my name is Trevor Dobson.  What is your name?');
console.log('The user\'s, name is', user);

let currentAnswer =  'no';
let totalCorrect = 0;

var readyToBegin = function(user){
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
};

var questionTwo = function(user){
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
};

var questionThree =function(user){
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
};

var questionFour = function (user){
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
};

var questionFive = function (user){
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
    ): questionFive(user);
};

let guesses = 4;

var questionSix = function (user){
  let correctAnswer =  4;
  if(guesses>0){
    currentAnswer = parseInt(prompt(`${user}, How many years did I serve in the Army?`));
  }

  if(guesses <= 0){
    alert(`No more guesses, I served 4 years in the Army. You have answered ${totalCorrect} correct.`);
    questionSeven(user);
  }else{
    if(currentAnswer < correctAnswer){
      guesses--;
      alert(`Too low.  You have ${guesses} guesses left.`);
      questionSix(user);
    }else if(currentAnswer > correctAnswer){
      guesses--;
      alert(`Too high.  You have ${guesses} guesses left.`);
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

};

let tries = 6;

var questionSeven = function (user){
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
    totalCorrect++;
    alert(`Good job! The correct answers are; canada, mexico, taiwan, philippines, afghanistan, kyrgyzstan.  You have answered ${totalCorrect} right`);
    questionEight(user);
  }else if(isCorrect === false && tries>0){
    alert(`Try again, you have ${tries} remaining.`);
    questionSeven(user);
  }else{
    alert(`Sorry you're out of tries. The correct answers are; canada, mexico, taiwan, philippines, afghanistan, kyrgyzstan. You have answered ${totalCorrect} right`);
    questionEight(user);
  }

};

var questionEight = function (user){
  alert(`You are done with my guessing game.  ${user} you got ${totalCorrect} answers right`);
};

readyToBegin(user);
