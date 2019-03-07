var questions = {
    question1: {
        question: "Test Question",
        answers: ["a", "b", "c", "d"],
        correctAnswer: "b",
    }
}

var questionTimeout = setTimeout(function() {
    alert("Alert #1: Called automatically 1 second after page load.");
}, 5*1000);

  (questionTimeout)