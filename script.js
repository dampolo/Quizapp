// Inizalisation of tooltip regarding Bootstrap documentation.
const tooltipTriggerList = document.querySelectorAll("[data-bs-toggle='tooltip']")
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function toggleToolTip() {
        // Get the element with the "id" "tooltip".
    const element = document.getElementById("tooltip");
    const tooltip = bootstrap.Tooltip.getInstance(element)

        // Check if the tooltip is currently enabled
    const isTooltipEnabled = element.getAttribute("data-bs-toggle") !== null;

        // Toggle the Bootstrap tooltip based on its current state.
    if (isTooltipEnabled) {
        tooltip.disable();
    } else {
        tooltip.enable()
    }
}

let temporaryParameter = "";
let currentQuestions = 0;
let rightQuestions = 0;
let chosenSection = [];
let shuffledQuestions = [];
const AUDIO_SUCCESS = new Audio("./sounds/success.mp3");
const AUDIO_FAIL = new Audio("./sounds/wrong.mp3");

const progressBarEl = document.getElementById("progress-bar");
const progressBarPrecentEl = document.getElementById("progress-bar-precent");
const quizStartPageEl = document.getElementById("quiz-start-page");
const quizCardEl = document.getElementById("quiz-card")
const questionBodyEl = document.getElementById("question-body")


const htmlEl = document.getElementById("html")
const cssEl = document.getElementById("css")
const pythonEl = document.getElementById("python")

const htmlResponisveEl = document.getElementById("html-responsive")
const cssResponisveEl = document.getElementById("css-responsive")
const pythonResponisveEl = document.getElementById("python-responsive")

const htmlLiEl = document.getElementById("html-li")
const cssLiEl = document.getElementById("css-li")
const pythonLiEl = document.getElementById("python-li")

const htmlResponisveLiEl = document.getElementById("html-responsive")
const cssResponisveLiEl = document.getElementById("css-responsive-li")
const pythonResponisveLiEl = document.getElementById("python-responsive-li")

const bodyEl = document.getElementById("button")
const questionTableEl = document.getElementById("questionTable")
const startButtonEl = document.getElementById("start-button")


// Shuffle function to randomly order the questions. GOOGLE!
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


function chooseTheme(params) {

    temporaryParameter = params;  //this is for the if-query in the function showQuestion()
    
    toggleToolTip()
    progressBarEl.classList.add("d-none");
    progressBarPrecentEl.innerHTML= `${0}%`;
    htmlEl.classList.remove("active-theme")
    cssEl.classList.remove("active-theme")
    pythonEl.classList.remove("active-theme")
    htmlResponisveEl.classList.remove("active-theme")
    cssResponisveEl.classList.remove("active-theme")
    pythonResponisveEl.classList.remove("active-theme")

    shuffledQuestions = []

    if (params == "HTML") {
        chosenSection = questionsHtml;
        shuffledQuestions.push(...chosenSection)
        htmlEl.classList.add("active-theme")
        htmlResponisveEl.classList.add("active-theme")

     } else if (params == "CSS"){
        chosenSection = questionsCss;
        shuffledQuestions.push(...chosenSection)
        cssEl.classList.add("active-theme")
        cssResponisveEl.classList.add("active-theme")

    } else {
        chosenSection = questionsPython
        shuffledQuestions.push(...chosenSection)
        pythonEl.classList.add("active-theme")
        pythonResponisveEl.classList.add("active-theme")
    }
    quizStartPageEl.classList.remove("d-none");
    document.querySelector(".quiz-thema").innerHTML = `${params}`;
    document.querySelector(".quiz-thema-final").innerHTML = `${params}`;
    startButtonEl.disabled = false;
    shuffle(shuffledQuestions)
    let selectedQuestions = shuffledQuestions.slice(0, 5);
    chosenSection = selectedQuestions 
}

function startQuiz() {
    quizStartPageEl.classList.add("d-none");
    quizCardEl.classList.remove("d-none");
    progressBarEl.classList.remove("d-none");
    questionBodyEl.classList.remove("d-none");
    startButtonEl.disabled = true;
    showQuestion();
}

function showQuestion() {
    const question = chosenSection[currentQuestions];
    htmlLiEl.removeAttribute("onclick");
    cssLiEl.removeAttribute("onclick");
    pythonLiEl.removeAttribute("onclick");
    htmlResponisveLiEl.removeAttribute("onclick");
    cssResponisveLiEl.removeAttribute("onclick");
    pythonResponisveLiEl.removeAttribute("onclick");
    
    if(temporaryParameter == "HTML") {
        cssLiEl.setAttribute("data-bs-toggle", "modal");
        cssLiEl.setAttribute("href", "#exampleModalToggle");
        // cssLiEl.setAttribute("onclick", "newQuizCSS()");
        pythonLiEl.setAttribute("data-bs-toggle", "modal");
        pythonLiEl.setAttribute("href", "#exampleModalToggle");
        // pythonLiEl.setAttribute("onclick", "newQuizPython()");

        
        // document.getElementById("modal-yes").setAttribute("onclick", "CSS")
        cssResponisveLiEl.setAttribute("data-bs-toggle", "modal");
        cssResponisveLiEl.setAttribute("href", "#exampleModalToggle");
        pythonResponisveLiEl.setAttribute("data-bs-toggle", "modal");
        pythonResponisveLiEl.setAttribute("href", "#exampleModalToggle");
        
    } else if (temporaryParameter == "CSS"){
        
        htmlLiEl.setAttribute("data-bs-toggle", "modal");
        htmlLiEl.setAttribute("href", "#exampleModalToggle");
        pythonLiEl.setAttribute("data-bs-toggle", "modal");
        pythonLiEl.setAttribute("href", "#exampleModalToggle");

        htmlResponisveLiEl.setAttribute("data-bs-toggle", "modal");
        htmlResponisveLiEl.setAttribute("href", "#exampleModalToggle");
        pythonResponisveLiEl.setAttribute("data-bs-toggle", "modal");
        pythonResponisveLiEl.setAttribute("href", "#exampleModalToggle");
       
  } else {
        cssLiEl.setAttribute("data-bs-toggle", "modal");
        cssLiEl.setAttribute("href", "#exampleModalToggle");
        htmlLiEl.setAttribute("data-bs-toggle", "modal");
        htmlLiEl.setAttribute("href", "#exampleModalToggle");

        cssResponisveLiEl.setAttribute("data-bs-toggle", "modal");
        cssResponisveLiEl.setAttribute("href", "#exampleModalToggle");
        htmlResponisveLiEl.setAttribute("data-bs-toggle", "modal");
        htmlResponisveLiEl.setAttribute("href", "#exampleModalToggle");
  } 
  
  if (currentQuestions >= chosenSection.length) {
        // Show end screen
        quizCardEl.classList.remove("d-none");
        document.querySelector(".end-screen").classList.remove("d-none");
        questionBodyEl.classList.add("d-none");
        progressBarEl.classList.remove("d-none");
        progressBarEl.style.width = `${100}%`;
        progressBarPrecentEl.innerHTML= `${100}%`;
        document.querySelector(".amounts-of-questions").innerHTML = chosenSection.length;
        document.querySelector(".amount-of-right-questions").innerHTML = rightQuestions;
        
    } else {// Show "question"
        const precent = (((currentQuestions) / chosenSection.length) * 100).toFixed(0);

        questionTableEl.innerHTML = "";
        
        document.querySelector(".all-questions-amounts").innerHTML = chosenSection.length;
        progressBarEl.style.width = `${precent}%`;
        progressBarPrecentEl.innerHTML= `${precent}%`;
        document.querySelector(".number-question").innerHTML = currentQuestions+1;
        document.querySelector(".question-text").innerHTML = question["question"];
        
            for (let i = 0; i < 4; i++) {
                questionTableEl.innerHTML += 
                /*html*/ `
                <div class="row quiz-answer-card mb-2" id="answer-${i}-container" onclick="answer(${question.answers[i].correct}, ${question.answers[i].id})">       
                                
                <div  class="quiz-answer-card-letter m-2 col-1 row justify-content-center align-items-center" id="answer-${i}-letter">${String.fromCharCode("A".charCodeAt(0) + i)}
                </div>
                <div class="quiz-answer col d-flex align-items-center ps-2" id="answer-${i}">
                    ${question.answers[i].answer}
                </div>
                </div>
                `
            }
    }
}


function answer(selection, id) {
    const question = chosenSection[currentQuestions];
    const correctAnswer = question.answers.find(answer => answer.correct);
    const idOfRightAnswer = `answer-${correctAnswer.id}-container`;
    const idOfRightletter = `answer-${correctAnswer.id}-letter`;
    const idOfWrongAnswer = `answer-${id}-container`;
    const idOfWrongletter = `answer-${id}-letter`;

    const rightLetterEl = document.getElementById(idOfRightletter);
    const rightAnswerEl = document.getElementById(idOfRightAnswer);
    const wrongLetterEl = document.getElementById(idOfWrongletter);

    if (selection) {
        rightLetterEl.classList.add("bg-quiz-letter-background-color");
        rightLetterEl.classList.add("text-white");
        rightAnswerEl.classList.add("bg-quiz-answer-card-color");
        rightQuestions++
        // AUDIO_SUCCESS.play();
    } else {
        wrongLetterEl.classList.add("bg-quiz-wrong-letter-background-color");
        document.getElementById(idOfWrongAnswer).classList.add("bg-quiz-wrong-answer-card-color");
        wrongLetterEl.classList.add("text-white");
        rightLetterEl.classList.add("bg-quiz-letter-background-color");
        rightLetterEl.classList.add("text-white");
        rightAnswerEl.classList.add("bg-quiz-answer-card-color");
        // AUDIO_FAIL.play();
    }
    questionTableEl.style.pointerEvents = "none";
    bodyEl.disabled = false;
}

function nextQuestion() {
    currentQuestions++;
    questionTableEl.style.pointerEvents = "all";
    bodyEl.disabled = true;
    showQuestion();
}

function restartGame() {
    location.reload();
}