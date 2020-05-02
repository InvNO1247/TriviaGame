
/* function submitButton() {
console.log("inside function")
  // This function handles events where one button is clicked
    // YOUR CODE GOES HERE
  }
  $("#submit").click(submitButton);
  //on click is used for items that are not loaded on the page
  //function 
  $("#displayTime").text("00:00");
 */
var card = $("#quiz-area");

// Question set
var questions = [{
    question: "What actress was first offered the lead roll in La La Land?",
    answers: ["Jennifer Lawrence", "Alicia Vikander", "Emma Watson", "Brie Larson"],
    correctAnswer: "Emma Watson"
}, {
    question: "What actor turned down the roll of Forrest in Forrest Gump?",
    answers: ["George Clooney ", "John Travolta", "Sean Penn", "Kenneth Branagh"],
    correctAnswer: "John travolta"
}, {
    question: "What actress passed on Titanic?",
    answers: ["Neve Campbell", "Reese Witherspoon", "Naomi Watts", "Gwyneth Paltrow"],
    correctAnswer: "Gwyneth Paltrow"
}, {
    question: "Neo aka the One from The Matrix was originally written for who?",
    answers: ["Will Smith", "Tom Cruise", "Johnny Depp", "Lawrence Fishburne"],
    correctAnswer: "Will Smith"
}, {
    question: "Believe it or not this Actor turned down the roll of Han Solo!",
    answers: ["Tommy Lee Jones", "Michael Douglas", "Rober De Niro", "Al Pacino"],
    correctAnswer: "Al Pacino"
}, {
    question: "Luckily for Bruce Willis this actor turned down Die Hard",
    answers: ["Tom Selleck", "Sam Elliott", "Richard Gere", "Harrison Ford"],
    correctAnswer: "Fresh"
}, {
    question: "This actor turned down Gladiator because of his age",
    answers: ["Mel Gibson", "Liam Neeson", "Ralph Fiennes", "Hugh Jackman"],
    correctAnswer: "Mel Gibson"
}, {
    question: "What actor regrets turning down Avatar",
    answers: ["Ben Affleck", "Mathew McConaughey", "Matt Damon", "Josh Duhamel"],
    correctAnswer: "Matt Damon"
}];

// Variable that will hold the setInterval