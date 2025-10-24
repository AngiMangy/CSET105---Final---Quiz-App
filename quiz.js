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
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20],
    [21, 22, 23, 24],
    [25, 26, 27, 28],
    [29, 30, 31, 32],
    [33, 34, 35, 36],
    [37, 38, 39, 40]
]

// 
function labelChangeTest() {
    while (questions.length > 0) {
        question.innerText = questions.shift();
        for (let i = 0; i < 4; i++) {
            document.getElementById("option" + (i + 1)).innerText = Answers[0].shift();
        }
        break;
    }
}
