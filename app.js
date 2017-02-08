'use strict';

var wannaPlay = prompt("So you think you know me?", "Yes or No").toLowerCase();


if(wannaPlay ==='yes'|| wannaPlay ==='y'){  //ask user to play the game
        confirm("Prove it!");
    console.log('User answer to game invite: ' + wannaPlay);
}
else{
    confirm("Play this game to learn some fun Ivy facts!")
    console.log('User answer to game invite: ' + wannaPlay);
}

//Provide instructions for quiz
confirm('For each of the following five questions, ask yourself: Is it true that Ivy . . .');  //<i>this text in CSS

//start game
var question1 = prompt("Has a theory that cilantro is the most polarizing of foods?").toLowerCase();

if(question1==='yes' || question1==='y'){
    alert('Indeed!  Ivy has mounting evidence that all humans are either "cilantro sluts" or "soap tasters".');
console.log('User answer to question 1: ' + question1);
}
else{
    alert("While candy corn is a close 2nd, Ivy does, indeed, believe that cilantro is 100% divisive.");
    console.log('User answer to question 1: ' + question1);
}



