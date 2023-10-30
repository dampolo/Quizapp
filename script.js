let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer-1": "Robbie Williams",
        "answer-2": "Lady Gaga",
        "answer-3": "Tim Berners-Lee",
        "answer-4": "Will Smith",
        "correct-answer": 3,
    },
    {
        "question": "Was bedeutet HTML?",
        "answer-1": "Hello Text Markup Language",
        "answer-2": "Hyper Text Markup Language",
        "answer-3": "Hyper Test Markup Language",
        "answer-4": "Hyper Text Makeup Language",
        "correct-answer": 2,
    },
    {
        "question": "Womit beginnt ein HTML Dokument?",
        "answer-1": "!DOCTYPE html",
        "answer-2": "start html",
        "answer-3": "HTML lets GO!",
        "answer-4": "html",
        "correct-answer": 1,
    },
    {
        "question": "Was befindet sich im img-Tag?",
        "answer-1": "Video",
        "answer-2": "Sound",
        "answer-3": "Text",
        "answer-4": "Bild",
        "correct-answer": 4,
    },
    {
        "question": "Was macht oder ist das CSS?",
        "answer-1": "Server",
        "answer-2": "Texte",
        "answer-3": "Styling",
        "answer-4": "Zahlungen",
        "correct-answer": 3,
    },
    {
        "question": "Wofür benötigt man ein script-Tag?",
        "answer-1": "Einbinden von JavaScript",
        "answer-2": "Einbinden von CSS",
        "answer-3": "Einbinden von HTML",
        "answer-4": "Einbinden von Bootstrap",
        "correct-answer": 1,
    },
    {
        "question": "Wofür steht CSS?",
        "answer-1": "Creating Styling Sheets",
        "answer-2": "Computing Sty Sheets",
        "answer-3": "Cascading Style Sheets",
        "answer-4": "Color Sheme Sheets",
        "correct-answer": 3,
    },
    {
        "question": "Wie definiert man eine JavaScript-Funktion?",
        "answer-1": "myFunction()",
        "answer-2": "function myFunction()",
        "answer-3": "function=myFunction()",
        "answer-4": "function:myFunction()",
        "correct-answer": 2,
    },
    {
        "question": "Wie schreibt man eine IF-Abfrage in JavaScript?",
        "answer-1": "if(index : 0)",
        "answer-2": "if(index 0)",
        "answer-3": "if{index = 0)}",
        "answer-4": "if(index == 0)",
        "correct-answer": 4,
    },
];

let currentQuestions = 0;
let rightQuestions = 0;
let AUDIO_SUCCESS = new Audio('./sounds/success.mp3')
let AUDIO_FAIL = new Audio('./sounds/wrong.mp3')

function init() {
    document.getElementById("all-questions-amounts").innerHTML = 5;
    showQuestion()
}

function showQuestion() {
    if(currentQuestions >= 5) {
        // Show end screen
        document.getElementById("end-screen").style = ""
        document.getElementById("question-body").style.display = "none"
        document.getElementById("amounts-of-questions").innerHTML = questions.length;
        document.getElementById("amount-of-right-questions").innerHTML = rightQuestions
        document.getElementById("header-image").src = "img/trophy.png";
        
        
    } else {// Show question
        
        let precent = (((currentQuestions+1) / questions.length) * 100).toFixed(0);

        document.getElementById("progress-bar").style.width = `${precent}%`
        document.getElementById("progress-bar").innerHTML= `${precent}%`

        let question = questions[currentQuestions]

        // Generate a random index within the range of the 'questions' array
        const randomIndex = Math.floor(Math.random() * questions.length);

        // Retrieve the random question object
        const randomQuestion = questions[randomIndex];

        console.log(randomQuestion);

        document.getElementById("number-question").innerHTML = currentQuestions+1
        document.getElementById("question-text").innerHTML = randomQuestion["question"]
        document.getElementById("answer-1").innerHTML = randomQuestion["answer-1"]
        document.getElementById("answer-2").innerHTML = randomQuestion["answer-2"]
        document.getElementById("answer-3").innerHTML = randomQuestion["answer-3"]
        document.getElementById("answer-4").innerHTML = randomQuestion["answer-4"]
    }
}

function answer(selection) {
    let question = questions[currentQuestions]
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer-${question["correct-answer"]}`;

    if (selectedQuestionNumber == question["correct-answer"]) {
        document.getElementById(selection).classList.add("bg-success");
        rightQuestions++
        AUDIO_SUCCESS.play();
    } else {
        document.getElementById(selection).classList.add("bg-danger")
        document.getElementById(idOfRightAnswer).classList.add("bg-success")
        AUDIO_FAIL.play();
    }
    document.getElementById("button").disabled = false;
}

function nextQuestion() {
    currentQuestions++
    document.getElementById("button").disabled = true;
    showQuestion()
    resetAnswers()
}

function resetAnswers() {
    document.getElementById("answer-1").classList.remove("bg-danger")
    document.getElementById("answer-1").classList.remove("bg-success")
    document.getElementById("answer-2").classList.remove("bg-danger")
    document.getElementById("answer-2").classList.remove("bg-success")
    document.getElementById("answer-3").classList.remove("bg-danger")
    document.getElementById("answer-3").classList.remove("bg-success")
    document.getElementById("answer-4").classList.remove("bg-danger")
    document.getElementById("answer-4").classList.remove("bg-success")
}

function restartGame() {
    document.getElementById("header-image").src = "./img/quiz.png";
    document.getElementById("question-body").style = ""; //
    document.getElementById("end-screen").style = "display: none"; //Endscreen ausblenden
    currentQuestions = 0;
    rightQuestions = 0
    init();
}