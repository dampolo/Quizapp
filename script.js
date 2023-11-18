const questionsHtml = [
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
    {
        "question": "How is document type initialized in HTML5.?",
        "answer-1": "!DOCTYPE html",
        "answer-2": "start html",
        "answer-3": "HTML lets GO!",
        "answer-4": "html",
        "correct-answer": 1,
    },
    {
        "question": "What's in the img tag?",
        "answer-1": "Video",
        "answer-2": "Sound",
        "answer-3": "Text",
        "answer-4": "Bild",
        "correct-answer": 4,
    },
    {
        "question": "What does or is the CSS?",
        "answer-1": "Server",
        "answer-2": "Texte",
        "answer-3": "Styling",
        "answer-4": "Zahlungen",
        "correct-answer": 3,
    },
    {
        "question": "Why do you need a script tag??",
        "answer-1": "Incorporating von JavaScript",
        "answer-2": "Incorporating von CSS",
        "answer-3": "Incorporating von HTML",
        "answer-4": "Incorporating von Bootstrap",
        "correct-answer": 1,
    },
    {
        "question": "What does CSS stand for?",
        "answer-1": "Creating Styling Sheets",
        "answer-2": "Computing Sty Sheets",
        "answer-3": "Cascading Style Sheets",
        "answer-4": "Color Sheme Sheets",
        "correct-answer": 3,
    },
    {
        "question": "How do you define a JavaScript function?",
        "answer-1": "myFunction()",
        "answer-2": "function myFunction()",
        "answer-3": "function=myFunction()",
        "answer-4": "function:myFunction()",
        "correct-answer": 2,
    },
    {
        "question": "How to write an IF query in JavaScript?",
        "answer-1": "if(index : 0)",
        "answer-2": "if(index 0)",
        "answer-3": "if{index = 0)}",
        "answer-4": "if(index == 0)",
        "correct-answer": 4,
    },
];

const questionsCss = [
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
    {
    "question":"What property is used to change the text color of an element?",
    "answer-1": "fontcolor:",
    "answer-2": "textcolor:",
    "answer-3": "color:",
    "answer-4": "font-color:",
    "correct-answer": 3,
    },
    {
    "question": "What does CSS stand for?",
    "answer-1": "Custom Style Sheets",
    "answer-2": "Colorful Style Sheets",
    "answer-3": "Computer Style Sheets",
    "answer-4": "Cascading Style Sheets",
    "correct-answer": 4,
    },
    {
    "question": "The # symbol specifies that the selector is?",
    "answer-1": "class",
    "answer-2": "tag",
    "answer-3": "first",
    "answer-4": "id",
    "correct-answer": 4,
},
];


// const test = [{
//     "question": "Who invented HTML?",
//     "answers": [{answer: "Robbie Williams", correct: false},
//                 {answer: "Lady Gaga", correct: false},
//                 {answer: "Tim Berners-Lee", correct: true},
//                 {answer: "Will Smith", correct: false},
//                 ] },
//                 {
//     "question": "What does HTML stands for?",
//     "answers": [{answer: "Hello Text Markup Language", correct: false},
//                 {answer: "Hyper Text Markup Language", correct: true},
//                 {answer: "Hyper Test Markup Language", correct: false},
//                 {answer: "Hyper Text Makeup Language", correct: false},
//                 ] }
//             ]

const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

function toggleToolTip() {
    // Get the element with the id "tooltip"
    const element = document.getElementById("tooltip");
    // Check if the tooltip is currently enabled
    const isTooltipEnabled = element.getAttribute("data-bs-toggle") !== null;

    // Toggle the Bootstrap tooltip based on its current state
    if (isTooltipEnabled) {
        const tooltip = new bootstrap.Tooltip(element);
        tooltip.disable();
    } else {
        const tooltip = new bootstrap.Tooltip(element);
        tooltip.enable();
    }
}

let temporaryParameter = ""
let currentQuestions = 0;
let rightQuestions = 0;
const AUDIO_SUCCESS = new Audio('./sounds/success.mp3');
const AUDIO_FAIL = new Audio('./sounds/wrong.mp3');


function choseThema(params) {

    temporaryParameter = params;  //this is for the if-query in the function startQuiz()

    toggleToolTip()
    document.getElementById("progress-bar").classList.add("d-none");
    document.getElementById("progress-bar-procent").innerHTML= `${0}%`;


    if (temporaryParameter == "HTML") {
        choseSection = questionsHtml;
        document.getElementById("html").classList.add("active-theme")
        document.getElementById("css").classList.remove("active-theme")
        document.getElementById("html-responsive").classList.add("active-theme")
        document.getElementById("css-responsive").classList.remove("active-theme")

     } else {
        choseSection = questionsCss;
        document.getElementById("css").classList.add("active-theme")
        document.getElementById("html").classList.remove("active-theme")
        document.getElementById("css-responsive").classList.add("active-theme")
        document.getElementById("html-responsive").classList.remove("active-theme")
    } 
    document.getElementById("quiz-start-page").classList.remove("d-none");
    document.getElementById("quizThema").innerHTML = `${params}`;
    document.getElementById("quizThemaFinal").innerHTML = `${params}`;
    document.getElementById("start-button").disabled = false;
}

function startQuiz() {
        if(temporaryParameter == "HTML") {
        // MENU
        document.getElementById("nav-section").innerHTML = 
        /*html*/ `
        <ul class="navbar-nav me-auto mb-lg-0">
            <li class="quiz-nav-li fs-4 my-1">
                <a id="html" href="#" class="nav-link p-0 active-theme" aria-current="page">HTML</a>
            </li>
            <li data-bs-toggle="modal" href="#exampleModalToggle" class="fs-4 my-1">
                <a id="css" href="#" class="nav-link p-0" aria-current="page">CSS</a>
            </li> 
        </ul>
        `
        // RESPONSIVE
        document.getElementById("navbarTogglerDemo02").innerHTML = 
        /*html*/ `
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li id="html-responsive" class="quiz-nav-link mt-1 active-theme">
                <a href="#" class="nav-link ps-2 p-0 " aria-current="page">HTML</a>
            </li>
            <li id="css-responsive" data-bs-toggle="modal" href="#exampleModalToggle" class="mt-1">
                <a href="#" class="nav-link ps-2 p-0" aria-current="page">CS</a>
            </li>
        </ul>
        `
    } else {
        // MENU
        document.getElementById("nav-section").innerHTML = 
        /*html*/ `
        <ul class=" navbar-nav me-auto mb-lg-0">
            <li data-bs-toggle="modal" href="#exampleModalToggle" class="quiz-nav-li fs-4 my-1">
                <a id="html" href="#" class="nav-link p-0" aria-current="page">HTML</a>
            </li> 
            <li class="quiz-nav-li fs-4 my-1">
                <a id="css" href="#" class="nav-link p-0 active-theme" aria-current="page">CSS</a>
            </li>  
        </ul> 
        `
        // RESPONSIVE
        document.getElementById("navbarTogglerDemo02").innerHTML =
         /*html*/ `
         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li data-bs-toggle="modal" href="#exampleModalToggle" class="quiz-nav-link mt-1">
                <a id="html-responsive" href="#" class="nav-link ps-2 p-0" aria-current="page">HTML</a>
            </li>
            <li class="quiz-nav-link mt-1">
                <a id="css-responsive" href="#" class="nav-link ps-2 p-0 active-theme" aria-current="page">CS</a>
            </li>
        </ul>
         `  
    }

    document.getElementById("quiz-start-page").classList.add("d-none");
    document.getElementById("quiz-card").classList.remove("d-none");
    document.getElementById("progress-bar").classList.remove("d-none");
    document.getElementById("question-body").classList.remove("d-none");
    document.getElementById("start-button").disabled = true;
    showQuestion();
}

function showQuestion() {

    const question = choseSection[currentQuestions]

    if(currentQuestions >= choseSection.length) {
        // Show end screen
        document.getElementById("quiz-card").classList.remove("d-none");
        document.getElementById("end-screen").classList.remove("d-none");
        document.getElementById("question-body").classList.add("d-none");
        document.getElementById("progress-bar").classList.remove("d-none");
        document.getElementById("progress-bar").style.width = `${100}%`;
        document.getElementById("progress-bar-procent").innerHTML= `${100}%`;
        document.getElementById("amounts-of-questions").innerHTML = choseSection.length;
        document.getElementById("amount-of-right-questions").innerHTML = rightQuestions;
        
    } else {// Show question
        const precent = (((currentQuestions) / choseSection.length) * 100).toFixed(0);
        
        document.getElementById("all-questions-amounts").innerHTML = choseSection.length;
        document.getElementById("progress-bar").style.width = `${precent}%`;
        document.getElementById("progress-bar-procent").innerHTML= `${precent}%`;

        document.getElementById("number-question").innerHTML = currentQuestions+1;
        document.getElementById("question-text").innerHTML = question["question"];
        document.getElementById("answer-1").innerHTML = question["answer-1"];
        document.getElementById("answer-2").innerHTML = question["answer-2"];
        document.getElementById("answer-3").innerHTML = question["answer-3"];
        document.getElementById("answer-4").innerHTML = question["answer-4"]
    }
}

function answer(selection) {
    const question = choseSection[currentQuestions];
    const selectedQuestionNumber = selection.slice(-1);
    const idOfRightAnswer = `answer-${question["correct-answer"]}-container`;
    const idOfWrongAnswer = `${selection}-container`;
    const idOfRightLetter = `answer-${question["correct-answer"]}-letter`;
    const idOfWrongLetter = `${selection}-letter`;

    if (selectedQuestionNumber == question["correct-answer"]) {
        document.getElementById(idOfRightLetter).classList.add("bg-quiz-letter-background-color");
        document.getElementById(idOfRightLetter).classList.add("text-white");
        document.getElementById(idOfRightAnswer).classList.add("bg-quiz-answer-card-color");

        document.getElementById(idOfWrongAnswer).classList.remove("bg-white");
        document.getElementById(idOfRightAnswer).classList.remove("bg-white");
        rightQuestions++
        
        // AUDIO_SUCCESS.play();
    } else {
        document.getElementById(idOfWrongLetter).classList.add("bg-quiz-wrong-letter-background-color");
        document.getElementById(idOfWrongAnswer).classList.add("bg-quiz-wrong-answer-card-color");
        document.getElementById(idOfWrongAnswer).classList.remove("bg-white");
        document.getElementById(idOfRightAnswer).classList.remove("bg-white");
        
        document.getElementById(idOfWrongLetter).classList.add("text-white");
        document.getElementById(idOfRightLetter).classList.add("bg-quiz-letter-background-color");
        document.getElementById(idOfRightLetter).classList.add("text-white");
        document.getElementById(idOfRightAnswer).classList.add("bg-quiz-answer-card-color");
        // AUDIO_FAIL.play();
    }
    document.getElementById("questionTable").style.pointerEvents = "none";
    document.getElementById("button").disabled = false;
}

function nextQuestion() {
    currentQuestions++
    document.getElementById("questionTable").style.pointerEvents = "all";
    document.getElementById("button").disabled = true;
    resetAnswers()
    showQuestion()
}

function resetAnswers() {
    document.getElementById("answer-1-container").classList.remove("bg-quiz-wrong-answer-card-color");
    document.getElementById("answer-1-container").classList.add("bg-white");
    document.getElementById("answer-1-container").classList.remove("bg-quiz-answer-card-color");
    document.getElementById("answer-1-letter").classList.remove("bg-quiz-letter-background-color");
    document.getElementById("answer-1-letter").classList.remove("text-white");
    document.getElementById("answer-1-letter").classList.remove("bg-quiz-wrong-letter-background-color");

    document.getElementById("answer-2-container").classList.remove("bg-quiz-answer-card-color");
    document.getElementById("answer-2-container").classList.add("bg-white");
    document.getElementById("answer-2-container").classList.remove("bg-quiz-wrong-answer-card-color");
    document.getElementById("answer-2-letter").classList.remove("bg-quiz-letter-background-color");
    document.getElementById("answer-2-letter").classList.remove("text-white");
    document.getElementById("answer-2-letter").classList.remove("bg-quiz-wrong-letter-background-color");

    document.getElementById("answer-3-container").classList.remove("bg-quiz-wrong-answer-card-color");
    document.getElementById("answer-3-container").classList.add("bg-white");
    document.getElementById("answer-3-container").classList.remove("bg-quiz-answer-card-color");
    document.getElementById("answer-3-letter").classList.remove("bg-quiz-letter-background-color");
    document.getElementById("answer-3-letter").classList.remove("text-white");
    document.getElementById("answer-3-letter").classList.remove("bg-quiz-wrong-letter-background-color");

    document.getElementById("answer-4-container").classList.remove("bg-quiz-wrong-answer-card-color");
    document.getElementById("answer-4-container").classList.add("bg-white");
    document.getElementById("answer-4-container").classList.remove("bg-quiz-answer-card-color");
    document.getElementById("answer-4-letter").classList.remove("bg-quiz-letter-background-color");
    document.getElementById("answer-4-letter").classList.remove("text-white");
    document.getElementById("answer-4-letter").classList.remove("bg-quiz-wrong-letter-background-color");

}

function restartGame() {
//     document.getElementById("nav-section").innerHTML = 
//         /*html*/ `
//         <ul class=" navbar-nav me-auto mb-lg-0">
//             <li id="html" onclick="choseThema('HTML')" class="quiz-nav-li fs-4 my-1">
//             <a href="#" class="nav-link" aria-current="page">HTML</a>
//             </li>
//             <li id="css" onclick="choseThema('CSS')" class="quiz-nav-li fs-4 my-1">
//             <a href="#" class="nav-link" aria-current="page">CSS</a>
//             </li>  
//         </ul>
//         ` 
//     document.getElementById("navbarTogglerDemo02").innerHTML = 
//     /*html*/ `
//         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//             <li id="html-responsive"  onclick="choseThema('HTML')" class="quiz-nav-link mt-1">
//                 <a href="#" id="html-a-tag" class="ps-2 p-0 nav-link nav-responsive-text" aria-current="page">HTML</a>
//             </li>
//             <li id="css-responsive" onclick="choseThema('CSS')" class="quiz-nav-link mt-1">
//                 <a href="#" id="css-a-tag" class="ps-2 p-0 nav-link nav-responsive-text" aria-current="page">CS</a>
//             </li>
//         </ul>
//         ` 
//     document.getElementById("end-screen").classList.add("d-none"); //Endscreen ausblenden
//     document.getElementById("quiz-start-page").classList.remove("d-none");
//     document.getElementById("quizThema").innerHTML = "";
//     document.getElementById("quiz-card").classList.add("d-none");
//     document.getElementById("html").classList.remove("active-theme")
//     document.getElementById("css").classList.remove("active-theme")
//     document.getElementById("progress-bar-procent").innerHTML= `${0}%`;


//     resetAnswers()
//     toggleToolTip()
//     currentQuestions = 0;
//     rightQuestions = 0;
}


function restartGame() {
    location.reload();
}