// Global Variables
const question = document.getElementById("question")
const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")
const option4 = document.getElementById("option4")

// Questions and Answers
let questions = [
    "Test Question 1",
    "Test Question 2",
    "Test Question 3",
    "test question 4",
    "test question 5",
    "test question 6",
    "test question 7",
    "test question 8",
    "test question 9",
    "test question 10"
]


let Answers = [
    ["Answer 1A", "Answer 1B", "Answer 1C", "Answer 1D"],
    ["Answer 2A", "Answer 2B", "Answer 2C", "Answer 2D"],
    ["Answer 3A", "Answer 3B", "Answer 3C", "Answer 3D"],
    ["Answer 4A", "Answer 4B", "Answer 4C", "Answer 4D"],
    ["Answer 5A", "Answer 5B", "Answer 5C", "Answer 5D"],
    ["Answer 6A", "Answer 6B", "Answer 6C", "Answer 6D"],
    ["Answer 7A", "Answer 7B", "Answer 7C", "Answer 7D"],
    ["Answer 8A", "Answer 8B", "Answer 8C", "Answer 8D"],
    ["Answer 9A", "Answer 9B", "Answer 9C", "Answer 9D"],
    ["Answer 10A", "Answer 10B", "Answer 10C", "Answer 10D"]
]

// 
let currentQuestionIndex = 0;

function labelChangeTest() {
    if (currentQuestionIndex < questions.length) {
        // Display the question
        question.innerText = questions[currentQuestionIndex];
        
        // Display the answers
        for (let i = 0; i < 4; i++) {
            document.getElementById("label" + (i + 1)).innerText = Answers[currentQuestionIndex][i];
        }
        
        currentQuestionIndex++;
    } else {
        question.innerText = "Quiz Complete!";
        document.getElementById("options").style.display = "none";
    }
}
