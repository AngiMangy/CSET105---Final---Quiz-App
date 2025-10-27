// Global Variables
const question = document.getElementById("question")
let right = 0;
let wrong = 0;
let correctAnswers = [2, 1, 0, 3, 2, 0, 3, 0, 1, 0];
let currentQuestion = 0;


let attempt = 2;
let attemptDisplay = document.getElementById("attempt");




// Array of questions
let questions = [
    "Whos the Red Rifle?",
    "What is the capital city of France?",
    "Which one of Saturn's moons has methane lakes?",
    "What is the Largest Land Animal to ever exist?",
    "Which country is known for inventing pizza?",
    "Which country has the most vending machines per capita",
    "Which bird is known for mimicking chainsaws, car alarms, and camera shutters?",
    "Is the Parasaurolophus the coolest Dino?",
    "What Question is this?",
    "Was This a good Quiz?"
]

// Array of answer choices for each question
let Answers = [
    ["Lamar Jackson", "Joe Flacco", "Andy Dalton", "Patrick Mahomes"],
    ["Berlin", "Paris", "Washington D.C", "Pluto"],
    ["Titan", "Hyperion", "Tethys", "Dione"],
    ["Mr.C", "Rob", "Elephant", "Patagotitan"],
    ["Greece", "France", "Italy", "Spain"],
    ["Japan", "Germany", "United States", "South Korea"],
    ["Parrot", "Mynah", "Mockingbird", "Lyrebird"],
    ["Yes", "No", "Maybe", "What is a Dino?"],
    ["Question 1", "Question 9", "Question 7", "Question 10"],
    ["Yes", "No", "Maybe", "What's a Quiz?"]
]

function retryQuiz() {
    let attemptDisplay = document.getElementById("attempt");
    attemptDisplay.innerText = "Attempt: " + attempt;
    attempt++;
    currentQuestion = 0
    right = 0
    wrong = 0
    question.innerText = questions[currentQuestion];
    for (let i = 0; i < 4; i++) {
        document.getElementById("label" + (i + 1)).innerText = Answers[currentQuestion][i];
        document.getElementById("option" + (i + 1)).checked = false;
    }
    document.getElementById("options").style.display = "";
    document.getElementById("submit").style.display = "";
    document.getElementById("retry").style.display = "none";
    document.getElementById("score").style.display = "none";
    console.clear();
    console.log("Quiz Restarted");
}

function initializeQuiz() {
    question.innerText = questions[currentQuestion];
    for (let i = 0; i < 4; i++) {
        document.getElementById("label" + (i + 1)).innerText = Answers[currentQuestion][i];
    }
}

initializeQuiz();



function quiz(event) {
    if (event)  event.preventDefault();
     
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
                console.log(`Question ${currentQuestion + 1} Submitted`);
            }
            else{
                wrong++;
                console.log(`Question ${currentQuestion + 1} Submitted`);
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
            document.getElementById("submit").style.display = "none";
            document.getElementById("retry").style.display = "block";
            document.getElementById("score").style.display = "block";
            console.log(`Quiz completed. Score: ${right}/${questions.length}`);
            document.getElementById("finalScore").innerText = `Final Score: ${right}/${questions.length}`;
            return;
        }
    } else {
        alert("Please Select an Answer");
    }
 }
}
