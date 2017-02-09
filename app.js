 'use strict';

 var correct = 0;// indert correct = + 1 to count the correct answers
 var userName = prompt ("Hey There!  What's your name, huckleberry?");
 console.log('User name:' + userName);

/*
 var wannaPlay = prompt("So you think you know me?", "Yes or No").toLowerCase();

 if (wannaPlay === 'yes' || wannaPlay === 'y') {  //ask user to play the game
   confirm("Prove it!");
   console.log('User answer to game invite: ' + wannaPlay);
 } else {
   confirm("Play this game to learn some fun Ivy facts!");
   console.log('User answer to game invite: ' + wannaPlay);
 }

//Provide instructions for quiz
 confirm('For each of the following five questions, ask yourself: Is it true that Ivy . . .');  //<i>this text in CSS
*/

 function firstFunction() {
   var question1 = prompt('Has a theory that cilantro is the most polarizing of foods?', 'Yes or No').toLowerCase();

   if (question1 === 'yes' || question1 === 'y') {
     alert('Indeed!  Ivy has mounting evidence that all humans are either "cilantro sluts" or "soap tasters".');
     correct += 1;
     console.log('User answer to question 1: ' + question1);
     console.log(correct);
   } else {
     alert('While candy corn is a close 2nd, cilantro, according to Ivy, is 100% divisive.');
     console.log('User answer to question 1: ' + question1);
     console.log(correct);
   }
 }

//start game


 function secondFunction() {
   var question2 = prompt('Left the country unannounced to trek with sherpas and teach English to children in Nepal.', 'Yes or No').toLowerCase();

   if (question2 === 'yes' || question2 === 'y') {
     alert("I wish! It wasn't Nepal, it was Belieze.  And I wasn't treking with Sherpas, I was farming with Mayans.  The unannounced part was right, though!");
     console.log('User answer to question 2: ' + question2);
     console.log(correct);
   } else {
     alert("It wasn't Nepal, it was Belieze.  And I wasn't treking with Sherpas, I was farming with Mayans.  The unannounced part was right, though!");
     console.log('User answer to question 2: ' + question2);
     correct += 1;
     console.log(correct);
   }
 }


 function thirdFunction() {
   var question3 = prompt('Once complimented Beck, unknowingly, on his "Dope shoestrings!".',"Yes or No").toLowerCase();
   if (question3 === 'yes' || question3 === 'y') {
     alert("Tragically, this is a fact.");
     correct += 1;
     console.log('User answer to question 3: ' + question3);
   } else {
     alert('Nothing would make Ivy happier than if this were not true.');
     console.log('User answer to question 3: ' + question3);
   }
 }

 function fourthFunction() {
   var question4 = prompt('Ended a cross country road trip in Portland and never left.', 'Yes or No').toLowerCase();
   if (question4 === 'yes' || question4 === 'y') {
     alert('It\'s mostly true.  I had to return to NYC to tie up some loose ends first.');
     console.log('User answer to question 4: ' + question4);
     correct += 1;
   }
   else {
     alert("Sort of. I had to return to NYC to tie up some loose ends first.");
     console.log('User answer to question 4: ' + question4);
     correct += 1;
   }
 }

 function fifthFunction() {
   var question5 = prompt('Once won a large sum of cash in a fierce game of BINGO.', 'Yes or No').toLowerCase();
   if (question5 === 'yes' || question5 === 'y') {
     alert('Damn straight!');
     console.log('User answer to question 5: ' + question5);
     correct += 1;
   } else {
     alert('She suuuure did!');
     console.log('User answer to question 5: ' + question5);
     correct += 1;           //Is it possibile to alert with an image?
   }
 }

 //congratulate user and initiate stage 2 of game
//  confirm("CONGRATULATIONS! You're learning the A-Z's of Ivy. Click OK to up the anty!");
//  confirm("You're almost Ivy's BFF...just answer a few more questions correctly and you will live happily ever after!");


 function sixthFunction() {
   var bingoMoney = 700;
   var count = 0;

   while (count < 4 && question6 != bingoMoney) {
  //figure out how to convert a string into a number and change to === instead of ==
     var question6 = prompt('How much cash money did Ivy walk with in this epic game of Bingo');
     count++;

     //guessed right
     if (question6 == bingoMoney) {
       alert('You got it! $700 big ones, sucka!');
       console.log('User answer to question 6: ' + question6);
       correct += 1;
       //guessed low
     } else if (question6 < bingoMoney) {
       alert(question6 + ' ?! Ivy knows when to hold \'em, fool!  Guess Higher!');
       console.log('User answer to question6: ' + question6);
       //guessed high
     } else if (question6 > bingoMoney) {
       alert(question6 + " ?! It's Bingo, not fantasy football. Guess Lower!");
       console.log('User answer to question 6: ' + question6);
       //out of guesses
     }
   }
   alert('Let\'s move on to the final question!');
 }

/*
 var bingoNumbers = ['o44', 'i19', 'n31', 'g43'];
 
 
 //THE REASON THE CODE BELOW WORKED IS BECAUSE YOU RESET THE SAME COUNT VARIABLE AS ABOVE. BUUUUT WE JUST WRAPPED IT INTO A FUNCTION AND MADE IT LOCAL TO THE FUNCTIONS SO THIS WON'T HAPPEN AGAIN
 count = 0;

 while(count < 6){
   count++;
   var question7 = prompt('Can you guess one of the five numbers called that won Ivy her Bingo crown? (HINT:One of them was B12)').toLowerCase();

   for(var i = 0; i < bingoNumbers.length; i++) {  //Job of this for loop is to run through the answers in the array to see if correct.

     if(question7 === bingoNumbers[i]){  //compares answer to each element of array
       alert('BINGO! You got it!');
       console.log('User answer to question 7: ' + question7);
       correct += 1;
       count = 8;   //breaks the while loop
       break;       //breaks the for loop
     }
   }
   if (question7 === 'b12') {
     alert('Nice cheat, hot shot.  Try again!');
     console.log('User answer to question 7: ' + question7);
   } else{
     alert('No dice! Keep guessing!');
     console.log('User answer to 7: ' + question7);

   }
 }
 alert("Ok, so Bingo is not your game.  Click OK to see how well you know Ivy"); //end user guesses

 if(correct < 4){   //Anounce user score
   alert(userName + ', you need to up your Ivy knowledge. You got ' + correct + ' out of 7 correct!');
   console.log(correct);
 } else{
   alert(userName + ', you got ' + correct + ' out of 7 correct. You are a bonefide Ivy expert!');
   console.log(correct);
 }


firstFunction();
secondFunction();
thirdFunction();
fourthFunction();
fifthFunction();
sixthFunction();


*/