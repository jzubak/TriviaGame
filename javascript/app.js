var questionTimeout = setInterval(showQuestion, 5 * 1000);
var questions = [
    {
        question: "Which politician has the nickname 'The Iron Lady?' ",
        answers: ["Theresa May", "Margret Thatcher", "Hillary Clinton", "Angela Merkle"],
        correctAnswer: "Margaret Thatcher",
    },
    {
        question: "Who was the first women appointed to the U.S. Supreme Court?",
        answers: ["Sandra Day O'Connor", "Ruth Bader Ginsberg", "Sonia Sotomayor", "Elena Kagan"],
        correctAnswer: "Sandra Day O'Connor",
    },
    {
        question: "How many women have become EGOT winners?",
        answers: ["1", "7", "4", "0"],
        correctAnswer: "4",
    },
    {
        question: "Who was the first woman to receive a Noble Prize?",
        answers: ["Jane Adams", "Grazia Deledda", "Marie Sklodowska Curie", "Mother Teresa"],
        correctAnswer: "Marie Sklodowska Curie",
    },
    {
        question: "Who was the first woman in space?",
        answers: ["Valentina Tereshkova", "Sally Ride", "Mae C Jemison", "Svetlana Savitskaya"],
        correctAnswer: "Valentina Tereshkova",
    },
    {
        question: "In 1975 she was the first woman to sumit Mt. Everest, who is she?",
        answers: ["Malavath Purna", "Arunima Sinha", "Junko Tabei", "Tamae Watanabe"],
        correctAnswer: "Junko Tabei",
    },
    {
        question: "In what year did Kathryn Bigelow become the first woman to win the Acdemy Award for 'Best Director'?",
        answers: ["2000", "2015", "2010", "1998"],
        correctAnswer: "2010",
    }
]
var count = 0;
var correct = 0;
var wrong = 0;
var selectedAnswer;
var start = $("<button>");
// $(start).addclass("startbutton");
$(start).text("Start");
$(".questionBox").prepend(start);


function showQuestion() {

    $(".questionBox").html("<div>" + questions[count].question + " </div>");
    for (var i = 0; i < questions[count].answers.length; i++) {

        $(`.answer${i + 1}`).text(questions[count].answers[i]);
    }
        count++;
        if (i > questions[count].answers.length) {
            clearInterval();
        }
    }

};

$(questions[count].answers).on("click", function(answer) {
    if (answer === questions[count].correctAnswer) {
            correct++;
            console.log(correct);
        }
        else wrong++;
        console.log(wrong);
    // };
});

$(start).on("click", function (startGame) {

        showQuestion()


    });


///store answer selected for later total 
//