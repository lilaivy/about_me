'use strict';

var wannaPlay = prompt("So you think you know me?", "Yes or No").toLowerCase();


if (wannaPlay === 'yes' || wannaPlay === 'y') {  //ask user to play the game
  confirm("Prove it!");
  console.log('User answer to game invite: ' + wannaPlay);
}
else {
  confirm("Play this game to learn some fun Ivy facts!");
  console.log('User answer to game invite: ' + wannaPlay);
}

//Provide instructions for quiz
confirm('For each of the following five questions, ask yourself: Is it true that Ivy . . .');  //<i>this text in CSS

//start game
var question1 = prompt("Has a theory that cilantro is the most polarizing of foods?").toLowerCase();

if (question1 === 'yes' || question1 === 'y') {
  alert('Indeed!  Ivy has mounting evidence that all humans are either "cilantro sluts" or "soap tasters".');
  console.log('User answer to question 1: ' + question1);
}
else {
  alert("While candy corn is a close 2nd, cilantro, according to Ivy, is 100% divisive.");
  console.log('User answer to question 1: ' + question1);
}

var question2 = prompt('Left the country unannounced to trek with sherpas and teach English to children in Nepal.').toLowerCase();

if (question2 === 'yes' || question2 === 'y') {
  alert("I wish! It wasn't Nepal, it was Belieze.  And I wasn't treking with Sherpas, I was farming with Mayans.  The unannounced part was right, though!");
  console.log('User answer to question 2: ' + question2);
}
else {
  alert("It wasn't Nepal, it was Belieze.  And I wasn't treking with Sherpas, I was farming with Mayans.  The unannounced part was right, though!");
  console.log('User answer to question 2: ' + question2);
}


var question3 = prompt('Once complimented Beck, unknowingly, on his "Dope shoestrings!".').toLowerCase();
if (question3 === 'yes' || question3 === 'y') {
  alert("Tragically, this is a fact.");
  console.log('User answer to question 3: ' + question3);
}
else {
  alert('Nothing would make Ivy happier than if this were not true.');
  console.log('User answer to question 3: ' + question3);
}

var question4 = prompt('Ended a cross country road trip in Portland and never left.').toLowerCase();
if (question4 === 'yes' || question4 === 'y') {
  alert("It's mostly true.  I had to return to NYC to tie up some loose ends first.");
  console.log('User answer to question 4: ' + question4);
}
else {
  alert("Sort of. I had to return to NYC to tie up some loose ends first.");
  console.log('User answer to question 4: ' + question4);
}

var question5 = prompt("Once won $700 in a fierce game of BINGO.").toLowerCase();
if (question5 === 'yes' || question5 === 'y') {
  alert("Damn straight!");
  console.log('User answer to question 5: ' + question5);
}
else {
  alert("She suuuure did!");
  console.log('User answer to question 5: ' + question5);  //Is it possibile to alert with an image?
}