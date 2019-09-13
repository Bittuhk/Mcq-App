function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What is the capital of India?", ["Delhi", "Mumbai","kolkata", "Paris"], "Delhi"),
    new Question("Which is a procedure oriented programming language?", ["Python", "Javascript", "C", "Java"], "Java"),
    new Question("Which city is called as pink city", ["Jaipur", "Gurgaon","Kolkata", "Pune"], "Jaipur"),
    new Question("What is the value of 96/4?", ["244", "24", "46", "96"], "24"),
    new Question("What is the capital of Germany?", ["Paris", "London", "Tokyo", "Berlin"], "Berlin")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();




