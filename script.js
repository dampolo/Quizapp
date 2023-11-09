let questionsHtml = [
    {
        "question": "Who invented HTML?",
        "answer-1": "Robbie Williams",
        "answer-2": "Lady Gaga",
        "answer-3": "Tim Berners-Lee",
        "answer-4": "Will Smith",
        "correct-answer": 3,
    },
    {
        "question": "What does HTML stands for?",
        "answer-1": "Hello Text Markup Language",
        "answer-2": "Hyper Text Markup Language",
        "answer-3": "Hyper Test Markup Language",
        "answer-4": "Hyper Text Makeup Language",
        "correct-answer": 2,
    },
    // {
    //     "question": "How is document type initialized in HTML5.?",
    //     "answer-1": "!DOCTYPE html",
    //     "answer-2": "start html",
    //     "answer-3": "HTML lets GO!",
    //     "answer-4": "html",
    //     "correct-answer": 1,
    // },
    // {
    //     "question": "What's in the img tag?",
    //     "answer-1": "Video",
    //     "answer-2": "Sound",
    //     "answer-3": "Text",
    //     "answer-4": "Bild",
    //     "correct-answer": 4,
    // },
    // {
    //     "question": "What does or is the CSS?",
    //     "answer-1": "Server",
    //     "answer-2": "Texte",
    //     "answer-3": "Styling",
    //     "answer-4": "Zahlungen",
    //     "correct-answer": 3,
    // },
    // {
    //     "question": "Wofür benötigt man ein script-Tag?",
    //     "answer-1": "Incorporating von JavaScript",
    //     "answer-2": "Incorporating von CSS",
    //     "answer-3": "Incorporating von HTML",
    //     "answer-4": "Incorporating von Bootstrap",
    //     "correct-answer": 1,
    // },
    // {
    //     "question": "What does CSS stand for?",
    //     "answer-1": "Creating Styling Sheets",
    //     "answer-2": "Computing Sty Sheets",
    //     "answer-3": "Cascading Style Sheets",
    //     "answer-4": "Color Sheme Sheets",
    //     "correct-answer": 3,
    // },
    // {
    //     "question": "How do you define a JavaScript function?",
    //     "answer-1": "myFunction()",
    //     "answer-2": "function myFunction()",
    //     "answer-3": "function=myFunction()",
    //     "answer-4": "function:myFunction()",
    //     "correct-answer": 2,
    // },
    // {
    //     "question": "How to write an IF query in JavaScript?",
    //     "answer-1": "if(index : 0)",
    //     "answer-2": "if(index 0)",
    //     "answer-3": "if{index = 0)}",
    //     "answer-4": "if(index == 0)",
    //     "correct-answer": 4,
    // },
];

let questionsCss = [
    {
    "question":"What is the correct CSS syntax for making all the &lt;span&gt; elements bold?",
    "answer-1": "span {text-size: bold}",
    "answer-2": "span {font-weight: bold}",
    "answer-3": "&lt;span style='font-size: bold'&gt;",
    "answer-4": "&lt;span style='text-size: bold'&gt;",
    "correct-answer": 2,
    },
    {
    "question":"How do you add a comment in a CSS file?",
    "answer-1": "/* this is a comment */",
    "answer-2": "// this is a comment //",
    "answer-3": "// this is a comment",
    "answer-4": "&lt;!-- this is a comment--&gt;",
    "correct-answer": 1,
},
//     {
//     "question":"What property is used to change the text color of an element?",
//     "answer-1": "fontcolor:",
//     "answer-2": "textcolor:",
//     "answer-3": "color:",
//     "answer-4": "font-color:",
//     "correct-answer": 3,
//     },
//     {
//     "question": "What does CSS stand for?",
//     "answer-1": "Custom Style Sheets",
//     "answer-2": "Colorful Style Sheets",
//     "answer-3": "Computer Style Sheets",
//     "answer-4": "Cascading Style Sheets",
//     "correct-answer": 4,
//     },
//     {
//     "question": "The # symbol specifies that the selector is?",
//     "answer-1": "class",
//     "answer-2": "tag",
//     "answer-3": "first",
//     "answer-4": "id",
//     "correct-answer": 4,
// },
];

let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})


function toolTip() {
        // Get the element with the id "test"
        let element = document.getElementById("tooltip");
        // Disable the Bootstrap tooltip
        let tooltip = new bootstrap.Tooltip(element);
        tooltip.dispose();
}


let choseSection = "";
let currentQuestions = 0;
let rightQuestions = 0;
let AUDIO_SUCCESS = new Audio('./sounds/success.mp3');
let AUDIO_FAIL = new Audio('./sounds/wrong.mp3');

function choseThema(quizThema) {
    toolTip()
    document.getElementById("progress-bar").style = "display: none";
    document.getElementById("progress-bar-procent").innerHTML= `${0}%`;


    if (quizThema == "HTML") {
        choseSection = questionsHtml;
        document.getElementById("html").classList.add("active-theme")
        document.getElementById("html").classList.remove("quiz-nav-li")
        document.getElementById("css").classList.add("quiz-nav-li")
        document.getElementById("css").classList.remove("active-theme")
        document.getElementById("html-responisve").classList.add("quiz-nav-link-active")
        document.getElementById("html-responisve").classList.remove("quiz-nav-link")
        document.getElementById("css-responisve").classList.add("quiz-nav-link")
        document.getElementById("css-responisve").classList.remove("quiz-nav-link-active")
    } else {
        choseSection = questionsCss;
        document.getElementById("css").classList.add("active-theme")
        document.getElementById("css").classList.remove("quiz-nav-li")
        document.getElementById("html").classList.add("quiz-nav-li")
        document.getElementById("html").classList.remove("active-theme")
        document.getElementById("css-responisve").classList.add("quiz-nav-link-active")
        document.getElementById("css-responisve").classList.remove("quiz-nav-link")
        document.getElementById("html-responisve").classList.add("quiz-nav-link")
        document.getElementById("html-responisve").classList.remove("quiz-nav-link-active")
    }
    document.getElementById("quiz-start-page").style = "display: flex";
    document.getElementById("quizThema").innerHTML = `${quizThema}`;
    document.getElementById("quizThemaFinal").innerHTML = `${quizThema}`;
    document.getElementById("start-button").disabled = false;
}

function startQuiz() {
    document.getElementById("quiz-start-page").style = "display: none";
    document.getElementById("quiz-card").classList.remove("d-none");
    document.getElementById("progress-bar").style = "display: flex";
    document.getElementById("question-body").classList.remove("d-none");
    document.getElementById("start-button").disabled = true;
    showQuestion();
}


function showQuestion() {

    let question = choseSection[currentQuestions]
    
    if(currentQuestions >= choseSection.length) {
        // Show end screen
        document.getElementById("quiz-card").classList.remove("d-none")
        document.getElementById("end-screen").style = "display: flex";
        document.getElementById("question-body").classList.add("d-none");
        document.getElementById("progress-bar").style = "display: flex";
        document.getElementById("progress-bar").style.width = `${100}%`;
        document.getElementById("progress-bar-procent").innerHTML= `${100}%`;


        
        document.getElementById("amounts-of-questions").innerHTML = choseSection.length;
        document.getElementById("amount-of-right-questions").innerHTML = rightQuestions;
        
    } else {// Show question
        let precent = (((currentQuestions) / choseSection.length) * 100).toFixed(0);
        
        document.getElementById("all-questions-amounts").innerHTML = choseSection.length;
        document.getElementById("progress-bar").style.width = `${precent}%`;
        document.getElementById("progress-bar-procent").innerHTML= `${precent}%`;

        document.getElementById("number-question").innerHTML = currentQuestions+1;
        document.getElementById("question-text").innerHTML = question["question"];
        document.getElementById("answer-1").innerHTML = question["answer-1"];
        document.getElementById("answer-2").innerHTML = question["answer-2"];
        document.getElementById("answer-3").innerHTML = question["answer-3"];
        document.getElementById("answer-4").innerHTML = question["answer-4"];
    }
}

function answer(selection) {
    let question = choseSection[currentQuestions];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer-${question["correct-answer"]}-container`;
    let idOfWrongAnswer = `${selection}-container`;
    let idOfRightLetter = `answer-${question["correct-answer"]}-letter`;
    let idOfWrongLetter = `${selection}-letter`;

    if (selectedQuestionNumber == question["correct-answer"]) {
        document.getElementById(idOfRightAnswer).classList.add("quiz-answer-card-color");
        document.getElementById(idOfRightLetter).classList.add("quiz-letter-background-color");

        rightQuestions++
        // AUDIO_SUCCESS.play();
    } else {
        document.getElementById(idOfWrongAnswer).classList.add("quiz-wrong-answer-card-color");
        document.getElementById(idOfWrongLetter).classList.add("quiz-wrong-letter-background-color");
        document.getElementById(idOfRightAnswer).classList.add("quiz-answer-card-color");
        document.getElementById(idOfRightLetter).classList.add("quiz-letter-background-color");
        // AUDIO_FAIL.play();
    }
    document.getElementById("button").disabled = false;
}

function nextQuestion() {
    currentQuestions++
    document.getElementById("button").disabled = true;
    resetAnswers()
    showQuestion()
}

function resetAnswers() {
    document.getElementById("answer-1-container").classList.remove("quiz-wrong-answer-card-color");
    document.getElementById("answer-1-container").classList.remove("quiz-answer-card-color");
    document.getElementById("answer-1-letter").classList.remove("quiz-letter-background-color");
    document.getElementById("answer-1-letter").classList.remove("quiz-wrong-letter-background-color");

    document.getElementById("answer-2-container").classList.remove("quiz-answer-card-color");
    document.getElementById("answer-2-container").classList.remove("quiz-wrong-answer-card-color");
    document.getElementById("answer-2-letter").classList.remove("quiz-letter-background-color");
    document.getElementById("answer-2-letter").classList.remove("quiz-wrong-letter-background-color");

    document.getElementById("answer-3-container").classList.remove("quiz-wrong-answer-card-color");
    document.getElementById("answer-3-container").classList.remove("quiz-answer-card-color");
    document.getElementById("answer-3-letter").classList.remove("quiz-letter-background-color");
    document.getElementById("answer-3-letter").classList.remove("quiz-wrong-letter-background-color");

    document.getElementById("answer-4-container").classList.remove("quiz-wrong-answer-card-color");
    document.getElementById("answer-4-container").classList.remove("quiz-answer-card-color");
    document.getElementById("answer-4-letter").classList.remove("quiz-letter-background-color");
    document.getElementById("answer-4-letter").classList.remove("quiz-wrong-letter-background-color");
}

function restartGame() {
    document.getElementById("end-screen").style = "display: none"; //Endscreen ausblenden
    document.getElementById("quiz-start-page").style = "display: flex";
    document.getElementById("quiz-card").classList.add("d-none");
    // document.getElementById("progress-bar").style = "display: none";
    currentQuestions = 0;
    rightQuestions = 0;
}
