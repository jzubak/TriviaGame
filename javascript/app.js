var questionTimeout = setInterval(showQuestion,5*1000);
var questions = [
        {
        question: "Test Question",
        answers: ["a", "b", "c", "d"],
        correctAnswer: "b",
        },
    {
    question: "Test Question2",
    answers: ["a", "b", "c", "d"],
    correctAnswer: "c",
    },
    {question: "Test Question3",
    answers: ["a", "b", "c", "d"],
    correctAnswer: "c",
    },
    {question: "Test Question4",
    answers: ["a", "b", "c", "d"],
    correctAnswer: "c",
    }
]
var count = 0;
var start = $("<button>");
$(start).text("Start");
$(".questionBox").prepend(start);


function showQuestion() {
    
            $(".questionBox").html("<div>" + questions[count].question + " </div>");
    for (var i = 0; i < questions[count].answers.length; i++){
            
           $(`.answer${i+1}`).text(questions[count].answers[i]);
                   
    }
    count++;
    // (questionTimeout)
}

$(start).on("click", function (startGame) {

    showQuestion()
    // $(questionTimeout) = setInterval(nextQuestion, 5*1000);

});

///store answer selected for later total 
//