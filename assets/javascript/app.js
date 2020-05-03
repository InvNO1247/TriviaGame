
let card = $("#quiz-area");

// Question set
let questions = [{
    question: "What actress was first offered the lead roll in La La Land?",
    answers: ["Jennifer Lawrence", "Alicia Vikander", "Emma Watson", "Brie Larson"],
    correctAnswer: "Emma Watson"
}, {
    question: "What actor turned down the roll of Forrest in Forrest Gump?",
    answers: ["George Clooney ", "John Travolta", "Sean Penn", "Kenneth Branagh"],
    correctAnswer: "John Travolta"
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
    correctAnswer: "Richard Gere"
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
let timer;

let game = {

    correct: 0,
    incorrect: 0,
    counter: 120,

    countdown: function () {
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
            console.log("TIME UP");
            game.done();
        }
    },

    start: function () {
        timer = setInterval(game.countdown, 1000);

        $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

        $("#start").remove();

        for (var i = 0; i < questions.length; i++) {
            card.append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                card.append("<input type='radio' name='question-" + i +
                    "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
            }
        }

        card.append("<button id='done'>Done</button>");
    },

    done: function () {

        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() === questions[0].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() === questions[1].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() === questions[2].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() === questions[3].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() === questions[4].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() === questions[5].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-6']:checked"), function () {
            if ($(this).val() === questions[6].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-7']:checked"), function () {
            if ($(this).val() === questions[7].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });

        this.result();

    },

    result: function () {

        clearInterval(timer);

        $("#sub-wrapper h2").remove();

        card.html("<h2>All Done!</h2>");
        card.append("<h3>Correct Answers: " + this.correct + "</h3>");
        card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        card.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }
};

// CLICK EVENTS

$(document).on("click", "#start", function () {
    game.start();
});


$(document).on("click", "#done", function () {
    game.done();
});