

var timerAmount = 30;
var intervalId;
var questionIndex = 0;

// var question = ["What color is the moon?","Where are Egytians from?","Why is the sky blue?"];
// var possibleAnswers =["Green", "Blue","Yellow","Violet"];
var correctAnswer = [];
var movie = [];
var correct = 0;
var wrong = 0;
var questions = [
{

    
q1:"Vernal equinox of northern hemisphere which occurs in month of March marks which season?",

possibleAnswers:["A. spring","B. summer","C. winter","D. autumn"],

flag:[true,false,false,false],

answer:"A. Spring",

}
,
{

q1:"Considering facts about comets, small solar system body which is made of ice mixed with rock and dust is classified as what?",

possibleAnswers:["A. Kuiper","B. Comet","C. meteorite","D. planet"],

flag:[false,true,false,false,false],

answer:"B. Comet",

}
,
{

q1:"Considering facts about Sun, what is the mean average distance of Sun from Earth?",

possibleAnswers:["A. 150 million kilometers","B. 200 million kilometers","C. 250 million kilometers","D. 300 million kilometers"],

flag:[true,false,false,false,false],

answer:"A. 150 million kilometers",

}
,
{

q1:"White dwarf collapse into what?",

possibleAnswers:["A. neuron star","B. neutron star","C. proton star","D. comet star"],

flag:[false,true,false,false,false],

answer:"B. neutron star",

}
,
{

q1:"Asteroids that are made up of silicate rocks and clay are known as this?",

possibleAnswers:["A. C-type asteroids", "B. M-type asteroids", "C. S-type asteroids", "D. R-type asteroids"],

flag:[true,false,false,false,false],

answer:"A. C-type asteroids",

}


];




function checkAnswer(a){
  if (questionIndex === 4){
    
    alert("You got Them All right");
    reset_game();

  }



if ((questions[questionIndex].flag[a] == true)){
    $("#correcto").html("You Are Right!");
    questionIndex ++;
    $("#possibleAnswer1").html("");
    $("#correcto").html("");
    presentQuestion();
    possibleAnswer();
  } else {
    $("#correcto").html("You Are Wrong!");
  }
}
// }

function startGame(){
// console.log("start");
timerCountDown();
presentQuestion();
possibleAnswer();
console.log(questionIndex);
console.log(questions[questionIndex].flag[0]);




// getAnswer();

stop();

// answerChecker();
}



function timerCountDown() {
   clearInterval(intervalId);
   intervalId = setInterval(decrement, 1000);
   
   
  }

function decrement() {
  timerAmount--;
  // console.log(timerAmount);
  $("#time_rem").html("<h3>Time Remaining:  " +timerAmount+"</h3>");

  if (timerAmount === 0) {
  
    setTimeout(function(){
    alert("Time is Up!");  
  }, 10)
  
    clearInterval(intervalId);
    location.reload();
  
  }
}


function presentQuestion() {
  // var questionIndex = Math.floor(Math.random()*2);
  console.log(questionIndex);
  console.log(questions[questionIndex].q1);
  $("#question").html("" + questions[questionIndex].q1 + "");
 
}


function possibleAnswer() {
  for (var i = 0; i < 4; i++) {
      
    
  $("#possibleAnswer1").append("<h3>"+questions[questionIndex].possibleAnswers[i]+"</h3>");
  console.log(questions[questionIndex].possibleAnswers[i]);
  }  
}


// function answerCheckerA() {

//   console.log("ButtonA");
//   console.log(questions[questionIndex].flag[0]);

//   if ((questions[questionIndex].flag[0] == true)){
//     $("#correcto").html("You Are Right!");
//     questionIndex ++;
//     $("#possibleAnswer1").html("");
//     $("#correcto").html("");
//     presentQuestion();
//     possibleAnswer();
//   } else {
//     $("#correcto").html("You Are Wrong!");
//   }
// }

// function answerCheckerB() {

// console.log("ButtonB");
// console.log(questions[questionIndex].flag[1]);

// if ((questions[questionIndex].flag[1] == true)){
// $("#correcto").html("You Are Right!");
// questionIndex ++;
// $("#possibleAnswer1").html("");
// $("#correcto").html("");
// presentQuestion();
// possibleAnswer();
// } else {

// $("#correcto").html("You Are Wrong!");

// }
// }

// function answerCheckerC() {

// console.log("ButtonC");
// console.log(questions[questionIndex].flag[2]);

// if ((questions[questionIndex].flag[2] == true)){
// $("#correcto").html("You Are Right!");
// questionIndex ++;
// $("#possibleAnswer1").html("");
// $("#correcto").html("");
// presentQuestion();
// possibleAnswer();
// } else {

// $("#correcto").html("You Are Wrong!");

// }
// }

// function answerCheckerD() {

// console.log("ButtonD");
// console.log(questions[questionIndex].flag[3]);

// if ((questions[questionIndex].flag[3] == true)){
// $("#correcto").html("You Are Right!");
// questionIndex ++;
// // if (questionIndex = 5){
// // showScore();
// $("#possibleAnswer1").html("");
// $("#correcto").html("");
// presentQuestion();
// possibleAnswer();
// } else {

// $("#correcto").html("You Are Wrong!");


// // }

// }
// }




//stop the game using a button

function stop(){
// console.log("stop");
  if (timerAmount === 0){
    console.log(timerAmount);
  // $("#question").html("<h3>Time Remaining:  " +timerAmount+"</h3>");
  clearInterval(intervalId);
    }
  }


//reset the game using a button
function reset_game (){
  location.reload();
  timerStart = 30;
  startGame();
}

function stopGame(){

console.log("stop button press");
clearInterval(intervalId);
}


