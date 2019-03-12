// var questionInterval = setInterval(showQuestion, 5 * 1000);
var questionTimeout = setTimeout(nextquestion, 5 * 1000);
var questions = [
    {
        question: "Which politician has the nickname 'The Iron Lady?' ",
        answers: ["Theresa May", "Margaret Thatcher", "Hillary Clinton", "Angela Merkle"],
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
    },
]
var count = 0;
var correct = 0;
var wrong = 0;
var intervalId;
var start = $("<button>");
// $(start).addclass("startbutton");
$(start).text("Start");
$(".questionBox").prepend(start);

// $(document).ready(function () {
// hidden();

function showQuestion() {
    if (count === (questions.length-1)) {
        return finalscreen();
        console.log(questions.length);
    }
    console.log(count);
    console.log(questions.length);
    $(".questionBox").html("<div>" + questions[count].question + " </div>");
    for (var i = 0; i < questions[count].answers.length; i++) {

        $(`.answer${i + 1}`).text(questions[count].answers[i]);
        
    
    }
    console.log(questions[count]);
};

$(".answerbutton").on("click", function (answer) {
    if ($(this).html() === questions[count].correctAnswer) {
        $(this).addClass("#right");
        correct++;
        console.log(correct);
        nextquestion();
    }
    else if ($(this).html() != questions[count].correctAnswer) {
        $(this).addClass("#wrong");
        wrong++;
        nextquestion();
        console.log(wrong);
    }
    // else
    //     // questionInterval;
    // wrong++;
    // count++;
    console.log(correct);
    console.log(wrong);
});

function nextquestion() {
    count++;
    clearTimeout(questionTimeout);
    questionTimeout = setTimeout(function(){
        nextquestion();
        wrong++;
    }, 5 * 1000);
    // questionTimeout;
    showQuestion();
};

function finalscreen() {
    // clearInterval(questionInterval);
    $(correct).text("<div>You got " + correct + "questions correct!</div>");
    $(wrong).text("You got " + wrong + "questions wrong, time to go back to school!");
}
$(start).on("click", function () {
    showQuestion()
    // questionInterval = setInterval(showQuestion, 5 * 1000);

});
    // $("#hidden").click(function(hidden){
    //     $(".answersdiv").hide();
    //   });

    //   $("#unhidden").click(function(show){
    //     $(".answersdiv").show();
    //   });

// });