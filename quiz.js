// Global Variables
const question = document.getElementById("question")
const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")
const option4 = document.getElementById("option4")
let right = 0;
let wrong = 0;
let correctAnswers = [2, 1, 0, 3, 2, 0, 3, 2, 1, 3]
let currentQuestion = 0;




// Array of questions
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

// Array of answer choices for each question
let Answers = [
    ["Answer 1A", "Answer 1B", "correct answer", "Answer 1D"],
    ["Answer 2A", "correct answer", "Answer 2C", "Answer 2D"],
    ["correct answer", "Answer 3B", "Answer 3C", "Answer 3D"],
    ["Answer 4A", "Answer 4B", "Answer 4C", "correct answer"],
    ["Answer 5A", "Answer 5B", "correct answer", "Answer 5D"],
    ["correct answer", "Answer 6B", "Answer 6C", "Answer 6D"],
    ["Answer 7A", "Answer 7B", "Answer 7C", "correct answer"],
    ["Answer 8A", "Answer 8B", "correct answer", "Answer 8D"],
    ["Answer 9A", "correct answer", "Answer 9C", "Answer 9D"],
    ["Answer 10A", "Answer 10B", "Answer 10C", "correct answer"]
]


function initializeQuiz() {
    question.innerText = questions[currentQuestion];
    for (let i = 0; i < 4; i++) {
        document.getElementById("label" + (i + 1)).innerText = Answers[currentQuestion][i];
    }
}

initializeQuiz();

function quiz(event) {
    // prevent reload
    if (event)  event.preventDefault();
    
    // 
    if (currentQuestion < questions.length) {
        let selected = -1;
        for (let i = 0; i < 4; i++) {
            if (document.getElementById("option" + (i + 1)).checked){
                selected = i;
                break;
            }
        }
        
        if(selected !== -1){
            if (selected === correctAnswers[currentQuestion]){
                right++;
                console.log("right");
            }
            else{
                wrong++;
                console.log("wrong");
            }
            document.getElementById("right").innerText = "Right: " + right;
            document.getElementById("wrong").innerText = "Wrong: " + wrong;
        
        

        currentQuestion++;

        if (currentQuestion < questions.length) {
            question.innerText = questions[currentQuestion];
            for(let i = 0; i < 4; i++){
                document.getElementById("label" + (i + 1)).innerText = Answers[currentQuestion][i];
                document.getElementById("option" + (i + 1)).checked = false;
            }
        } else {
            question.innerText = "Quiz Complete!";
            document.getElementById("options").style.display = "none";
            document.getElementById("Submit").style.display = "none";
            return;
        }
    } else {
        alert("Please Select an Answer");
    }
 }
}
