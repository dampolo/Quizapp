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


function restartGame() {
    //     document.getElementBy"id"("nav-section").innerHTML = 
    //         /*html*/ `
    //         <ul class=" navbar-nav me-auto mb-lg-0">
    //             <li "id"="html" onclick="choseThema('HTML')" class="quiz-nav-li fs-4 my-1">
    //             <a href="#" class="nav-link" aria-current="page">HTML</a>
    //             </li>
    //             <li "id"="css" onclick="choseThema('CSS')" class="quiz-nav-li fs-4 my-1">
    //             <a href="#" class="nav-link" aria-current="page">CSS</a>
    //             </li>  
    //         </ul>
    //         ` 
    //     document.getElementBy"id"("navbarTogglerDemo02").innerHTML = 
    //     /*html*/ `
    //         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //             <li "id"="html-responsive"  onclick="choseThema('HTML')" class="quiz-nav-link mt-1">
    //                 <a href="#" "id"="html-a-tag" class="ps-2 p-0 nav-link nav-responsive-text" aria-current="page">HTML</a>
    //             </li>
    //             <li "id"="css-responsive" onclick="choseThema('CSS')" class="quiz-nav-link mt-1">
    //                 <a href="#" "id"="css-a-tag" class="ps-2 p-0 nav-link nav-responsive-text" aria-current="page">CS</a>
    //             </li>
    //         </ul>
    //         ` 
    //     document.getElementBy"id"("end-screen").classList.add("d-none"); //Endscreen ausblenden
    //     document.getElementBy"id"("quiz-start-page").classList.remove("d-none");
    //     document.getElementBy"id"("quizThema").innerHTML = "";
    //     document.getElementBy"id"("quiz-card").classList.add("d-none");
    //     document.getElementBy"id"("html").classList.remove("active-theme")
    //     document.getElementBy"id"("css").classList.remove("active-theme")
    //     document.getElementBy"id"("progress-bar-procent").innerHTML= `${0}%`;
    
    
    //     reset"answers"()
    //     toggleToolTip()
    //     current"question"s = 0;
    //     right"question"s = 0;
    }


    // MENU
    document.getElementById("nav-section").innerHTML = 
    /*html*/ `
    <ul class="navbar-nav me-auto mb-lg-0">
        <li class="fs-4 my-1">
            <a id="html" href="#" class="d-flex justify-content-center text-decoration-none p-0 active-theme" aria-current="page">HTML</a>
        </li>
        <li data-bs-toggle="modal" href="#exampleModalToggle" class="fs-4 my-1">
            <a id="css" href="#" class="quiz-nav-link d-flex justify-content-center text-decoration-none p-0" aria-current="page">CSS</a>
        </li>
        <li data-bs-toggle="modal" href="#exampleModalToggle" class="fs-4 my-1">
          <a id="python" href="#" class="quiz-nav-link d-flex justify-content-center text-decoration-none p-0" aria-current="page">PYTHON</a>
        </li>
    </ul>
    `
    // RESPONSIVE
    document.getElementById("navbarTogglerDemo02").innerHTML = 
    /*html*/ `
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="mt-1">
            <a id="html-responsive" href="#" class="quiz-nav-link d-flex text-decoration-none ps-2 p-0 active-theme" aria-current="page">HTML</a>
        </li>
        <li data-bs-toggle="modal" href="#exampleModalToggle" class="mt-1">
            <a id="css-responsive" href="#" class="quiz-nav-link d-flex text-decoration-none ps-2 p-0" aria-current="page">CS</a>
        </li>
        <li data-bs-toggle="modal" href="#exampleModalToggle" class="mt-1">
            <a id="css-responsive" href="#" class="quiz-nav-link d-flex text-decoration-none ps-2 p-0" aria-current="page">PYTHON</a>
        </li>
    </ul>
    `

    // MENU
    document.getElementById("nav-section").innerHTML = 
    /*html*/ `
    <ul class="navbar-nav me-auto mb-lg-0">
        <li data-bs-toggle="modal" href="#exampleModalToggle" class=" fs-4 my-1">
            <a id="html" href="#" class="quiz-nav-link d-flex justify-content-center text-decoration-none p-0" aria-current="page">HTML</a>
        </li> 
        <li class="fs-4 my-1">
            <a id="css" href="#" class="quiz-nav-link d-flex justify-content-center text-decoration-none p-0 active-theme" aria-current="page">CSS</a>
        </li>
        <li data-bs-toggle="modal" href="#exampleModalToggle" class="fs-4 my-1">
          <a id="python" href="#" class="quiz-nav-link d-flex justify-content-center text-decoration-none p-0" aria-current="page">PYTHON</a>
        </li>
    </ul> 
    `
    // RESPONSIVE
    document.getElementById("navbarTogglerDemo02").innerHTML =
     /*html*/ `
     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li data-bs-toggle="modal" href="#exampleModalToggle" class="mt-1">
            <a id="html-responsive" href="#" class="quiz-nav-link d-flex text-decoration-none ps-2 p-0" aria-current="page">HTML</a>
        </li>
        <li class="mt-1">
            <a id="css-responsive" href="#" class="quiz-nav-link d-flex text-decoration-none ps-2 p-0 active-theme" aria-current="page">CS</a>
        </li>
        <li data-bs-toggle="modal" href="#exampleModalToggle" class="mt-1">
            <a id="python-responsive" href="#" class="quiz-nav-link d-flex text-decoration-none ps-2 p-0" aria-current="page">PYTHON</a>
        </li>
    </ul>
     ` 

     // MENU
     document.getElementById("nav-section").innerHTML = 
     /*html*/ `
     <ul class=" navbar-nav me-auto mb-lg-0">
         <li data-bs-toggle="modal" href="#exampleModalToggle" class="fs-4 my-1">
             <a id="html" href="#" class="quiz-nav-link d-flex justify-content-center text-decoration-none p-0" aria-current="page">HTML</a>
         </li> 
         <li data-bs-toggle="modal" href="#exampleModalToggle"  class="fs-4 my-1">
             <a id="css" href="#" class="quiz-nav-link d-flex justify-content-center text-decoration-none p-0" aria-current="page">CSS</a>
         </li>
         <li class="fs-4 my-1">
           <a id="python" href="#" class="quiz-nav-link d-flex justify-content-center text-decoration-none p-0 active-theme" aria-current="page">PYTHON</a>
         </li>
     </ul> 
     `
     // RESPONSIVE
     document.getElementById("navbarTogglerDemo02").innerHTML =
      /*html*/ `
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li data-bs-toggle="modal" href="#exampleModalToggle" class="mt-1">
             <a id="html-responsive" href="#" class="quiz-nav-link d-flex text-decoration-none ps-2 p-0" aria-current="page">HTML</a>
         </li>
         <li data-bs-toggle="modal" href="#exampleModalToggle" class="mt-1">
             <a id="css-responsive" href="#" class="quiz-nav-link d-flex text-decoration-none ps-2 p-0" aria-current="page">CS</a>
         </li>
         <li class="mt-1">
             <a id="python-responsive" href="#" class="quiz-nav-link d-flex text-decoration-none ps-2 p-0 active-theme" aria-current="page">PYTHON</a>
         </li>
     </ul>
      `  