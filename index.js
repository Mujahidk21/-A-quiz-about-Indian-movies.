
var readlineSync = require('readline-sync');
var score =0;
var userAns = readlineSync.question("May I know your name please? ");

console.log("Welcome " + userAns +" ! How well do you know Indian cinemas ? ");
console.log("let's quiz ! Hint : Answer in small capitals only !\n ")

function play(question,answer){
  var userAns = readlineSync.question(question);
if(userAns=== answer)  {
  console.log("Hurray ! you are right. ");
  score++;
  console.log ("your new score is : " + score+"\n");
}else {
  console.log("Oops ! you are wrong. ");
  score--;
  console.log("your new score is: " +score+"\n" );
}
}  
play("who's the director of Bahubali ?","rajamouli");
play("Who plays Alluri Sita Ramaraju in RRR ?", "ram charan");
play("who's the main actress in pathaan ? ", "deepika");
play("who's the richest actor in India ? ", "srk");
play("who plays Bhallaladeva in Bahubali ?  ","rana");
