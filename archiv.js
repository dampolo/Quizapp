// function restartGame() {

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
// }


//     if(temporaryParameter == "HTML") {
    //     // MENU
    //     document.getElementById("nav-section").innerHTML = 
    //     /*html*/ `
    //     <ul class="navbar-nav me-auto mb-lg-0">
    //         <li class="quiz-nav-li fs-4 my-1">
    //             <div id="html" href="#" class="nav-link p-0 active-theme" aria-current="page">HTML</div>
    //         </li>
    //         <li data-bs-toggle="modal" href="#exampleModalToggle" class="fs-4 my-1">
    //             <div id="css" href="#" class="nav-link p-0" aria-current="page">CSS</div>
    //         </li> 
    //     </ul>
    //     `
    //     // RESPONSIVE
    //     document.getElementById("navbarTogglerDemo02").innerHTML = 
    //     /*html*/ `
    //     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li id="html-responsive" class="quiz-nav-link mt-1 active-theme">
    //             <div href="#" class="nav-link ps-2 p-0 " aria-current="page">HTML</div>
    //         </li>
    //         <li id="css-responsive" data-bs-toggle="modal" href="#exampleModalToggle" class="mt-1">
    //             <div href="#" class="nav-link ps-2 p-0" aria-current="page">CS</div>
    //         </li>
    //     </ul>
    //     `
    // } else {
    //     // MENU
    //     document.getElementById("nav-section").innerHTML = 
    //     /*html*/ `
    //     <ul class=" navbar-nav me-auto mb-lg-0">
    //         <li data-bs-toggle="modal" href="#exampleModalToggle" class="quiz-nav-li fs-4 my-1">
    //             <div id="html" href="#" class="nav-link p-0" aria-current="page">HTML</div>
    //         </li> 
    //         <li class="quiz-nav-li fs-4 my-1">
    //             <div id="css" href="#" class="nav-link p-0 active-theme" aria-current="page">CSS</div>
    //         </li>  
    //     </ul> 
    //     `
    //     // RESPONSIVE
    //     document.getElementById("navbarTogglerDemo02").innerHTML =
    //      /*html*/ `
    //      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li data-bs-toggle="modal" href="#exampleModalToggle" class="quiz-nav-link mt-1">
    //             <div id="html-responsive" href="#" class="nav-link ps-2 p-0" aria-current="page">HTML</div>
    //         </li>
    //         <li class="quiz-nav-link mt-1">
    //             <div id="css-responsive" href="#" class="nav-link ps-2 p-0 active-theme" aria-current="page">CS</div>
    //         </li>
    //     </ul>
    //      `  
    // }

    // const questionsCss = [
//     {
//     "question":"What is the correct CSS syntax for making all the &lt;span&gt; elements bold?",
//     "answer-1": "span {text-size: bold}",
//     "answer-2": "span {font-weight: bold}",
//     "answer-3": "&lt;span style='font-size: bold'&gt;",
//     "answer-4": "&lt;span style='text-size: bold'&gt;",
//     "correct-answer": 2,
//     },
//     {
//     "question":"How do you add a comment in a CSS file?",
//     "answer-1": "/* this is a comment */",
//     "answer-2": "// this is a comment //",
//     "answer-3": "// this is a comment",
//     "answer-4": "&lt;!-- this is a comment--&gt;",
//     "correct-answer": 1,
//     },
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
// ];

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

const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

function toggleToolTip() {
    const element = document.getElementById("tooltip");
    const isTooltipEnabled = element.getAttribute("data-bs-toggle") !== null;
    if (isTooltipEnabled) {
        const tooltip = new bootstrap.Tooltip(element);
        tooltip.disable();
    } else {
        const tooltip = new bootstrap.Tooltip(element);
        tooltip.enable();
    }
}

    // toggleToolTip()