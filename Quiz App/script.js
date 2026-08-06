let questions = [
    {
        question: "capital of pakistan",
        options: ["peshawar","islamabad","lahore","karachi"],
        answer: "islamabad"
    },

    {
        question: "2 + 2 = ?",
        options:["3","4","5","6"],
        answer: "4"
    },

    {
        question: "2 + 5 - 1",
        options:["4","5","6","7"],
        answer:"6"
    }
]

let score = 0;
let currentIntex = 0;

function loadQuestion() {

    document.getElementById("question").innerHTML = questions[currentIntex].question;

    document.getElementById("optionsContainer").innerHTML = "";

    questions[currentIntex].options.forEach( function(optionText) {
    let optionBtn = document.createElement("button");
    optionBtn.innerHTML = optionText;
    document.getElementById("optionsContainer").appendChild(optionBtn)

    optionBtn.addEventListener("click",function () {
        if (optionText === questions[currentIntex].answer) {
            score++
            document.getElementById("score").innerHTML = "Score:" + score
            } else {
            console.log("Your option is Wrong");
            
            }
        })
    })
}

document.getElementById("nextBtn").addEventListener("click", function() {
    currentIntex++
    loadQuestion();
    if (currentIntex < questions.length) {
    } else {
        document.getElementById("question").innerHTML = "Quiz Over!";
        document.getElementById("optionsContainer").innerHTML = "";
        document.getElementById("nextBtn").style.display = "none";
        
    }
})
loadQuestion()