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

function init() {
    document.getElementById("all-questions-amounts").innerHTML = questions.length;
    showQuestion()
}

function showQuestion() {
    let question = questions[currentQuestions]
    document.getElementById("answer-1").innerHTML = question["answer-1"]
    document.getElementById("answer-2").innerHTML = question["answer-2"]
    document.getElementById("answer-3").innerHTML = question["answer-3"]
    document.getElementById("answer-4").innerHTML = question["answer-4"]
}

function answer(selection) {
    let question = questions[currentQuestions]
    let selectedQuestionNumber = selection.slice(-1)

    if (selectedQuestionNumber == question["correct-answer"]) {
        console.log("RICHTIG")
        document.getElementById(selection).parentNode.classList.add("bg-success")

    } else {
        console.log("FALSCH")
        document.getElementById(selection).classList.add("bg-danger")
    }
}