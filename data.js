const questionsHtml = [{
    "question": "Who invented HTML?",
    "answers": [
        {answer: "Robbie Williams", correct: false, id: 0},
        {answer: "Lady Gaga", correct: false, id: 1},
        {answer: "Tim Berners-Lee", correct: true, id: 2},
        {answer: "Will Smith", correct: false, id: 3},
    ],
    },
    {
    "question": "What does HTML stands for?",
    "answers": [
        {answer: "Hello Text Markup Language", correct: false, id: 0},
        {answer: "Hyper Text Markup Language", correct: true, id: 1},
        {answer: "Hyper Test Markup Language", correct: false, id: 2},
        {answer: "Hyper Text Makeup Language", correct: false, id: 3},
    ],
    },
    {
    "question": "How is document type initialized in HTML5?",
    "answers": [
        { answer: "!DOCTYPE html", correct: true, id: 0 },
        { answer: "start html", correct: false, id: 1 },
        { answer: "HTML lets GO!", correct: false, id: 2 },
        { answer: "html", correct: false, id: 3 },
    ],
    },
    {
    "question": "What's in the img tag?",
    "answers": [
        { answer: "Video", correct: false, id: 0 },
        { answer: "Sound", correct: false, id: 1 },
        { answer: "Text", correct: false, id: 2 },
        { answer: "Bild", correct: true, id: 3 },
    ],
              },
              {
    "question": "What does or is the CSS?",
    "answers": [
        { answer: "Server", correct: false, id: 0 },
        { answer: "Texte", correct: false, id: 1 },
        { answer: "Styling", correct: true, id: 2 },
        { answer: "Zahlungen", correct: false, id: 3 },
    ],
              },
              {
    "question": "Why do you need a script tag??",
    "answers": [
        { answer: "Incorporating von JavaScript", correct: true, id: 0 },
        { answer: "Incorporating von CSS", correct: false, id: 1 },
        { answer: "Incorporating von HTML", correct: false, id: 2 },
        { answer: "Incorporating von Bootstrap", correct: false, id: 3 },
    ],
    },
    {
    "question": "What does CSS stand for?",
    "answers": [
        { answer: "Creating Styling Sheets", correct: false, id: 0 },
        { answer: "Computing Sty Sheets", correct: false, id: 1 },
        { answer: "Cascading Style Sheets", correct: true, id: 2 },
        { answer: "Color Sheme Sheets", correct: false, id: 3 },
    ],
    },
    {
    "question": "How do you define a JavaScript function?",
    "answers": [
        { answer: "myFunction()", correct: false, id: 0 },
        { answer: "function myFunction()", correct: true, id: 1 },
        { answer: "function=myFunction()", correct: false, id: 2 },
        { answer: "function:myFunction()", correct: false, id: 3 },
    ],
    },
    {
    "question": "How to write an IF query in JavaScript?",
    "answers": [
        { answer: "if(index : 0)", correct: false, id: 0 },
        { answer: "if(index 0)", correct: false, id: 1 },
        { answer: "if{index = 0)}", correct: false, id: 2 },
        { answer: "if(index == 0)", correct: true, id: 3 },
    ],
    },
    {
    "question": "What is the purpose of the HTML <meta> tag?",
    "answers": [
        { answer: "Defining page structure", correct: false, id: 0 },
        { answer: "Creating links to external resources", correct: false, id: 1 },
        { answer: "Specifying metadata about the document", correct: true, id: 2 },
        { answer: "Embedding images", correct: false, id: 3 },
    ],
    }
]

const questionsCss = [
{
    "question": "What is the correct CSS syntax for making all the <span> elements bold?",
    "answers": [
        { answer: "span {text-size: bold}", correct: false, id: 0 },
        { answer: "span {font-weight: bold}", correct: true, id: 1 },
        { answer: "&lt;span style='font-size'&gt: bold'>", correct: false, id: 2 },
        { answer: "&lt;span style='text-size'&gt: bold'>", correct: false, id: 3 },
    ],
    },
    {
    "question": "How do you add a comment in a CSS file?",
    "answers": [
        { answer: "/* this is a comment */", correct: true, id: 0 },
        { answer: "// this is a comment //", correct: false, id: 1 },
        { answer: "// this is a comment", correct: false, id: 2 },
        { answer: "&lt!-- this is a comment--'&gt", correct: false, id: 3 },
    ],
    },
    {
    "question": "What property is used to change the text color of an element?",
    "answers": [
        { answer: "fontcolor:", correct: false, id: 0 },
        { answer: "textcolor:", correct: false, id: 1 },
        { answer: "color:", correct: true, id: 2 },
        { answer: "font-color:", correct: false, id: 3 },
    ],
    },
    {
    "question": "What does CSS stand for?",
    "answers": [
        { answer: "Custom Style Sheets", correct: false, id: 0 },
        { answer: "Colorful Style Sheets", correct: false, id: 1 },
        { answer: "Computer Style Sheets", correct: false, id: 2 },
        { answer: "Cascading Style Sheets", correct: true, id: 3 },
    ],
    },
    {
    "question": "The # symbol specifies that the selector is?",
    "answers": [
        { answer: "class", correct: false, id: 0 },
        { answer: "tag", correct: false, id: 1 },
        { answer: "first", correct: false, id: 2 },
        { answer: "id", correct: true, id: 3 },
    ],
    },
    {
    "question": "What property is used to set the background color of an element?",
    "answers": [
        { answer: "background-color:", correct: true, id: 0 },
        { answer: "color:", correct: false, id: 1 },
        { answer: "bgcolor:", correct: false, id: 2 },
        { answer: "background:", correct: false, id: 3 },
    ],
  },
  {
    "question": "What is the purpose of the CSS box model?",
    "answers": [
        { answer: "To create rounded corners", correct: false, id: 0 },
        { answer: "To control layout and spacing of elements", correct: true, id: 1 },
        { answer: "To add shadows to elements", correct: false, id: 2 },
        { answer: "To apply colors to text", correct: false, id: 3 },
    ],
  },
  {
    "question": "What is the default value of the 'position' property in CSS?",
    "answers": [
        { answer: "relative", correct: false, id: 0 },
        { answer: "absolute", correct: false, id: 1 },
        { answer: "static", correct: true, id: 2 },
        { answer: "fixed", correct: false, id: 3 },
    ],
  },
  {
    "question": "In CSS, what does the 'float' property do?",
    "answers": [
        { answer: "Make elements disappear", correct: false, id: 0 },
        { answer: "Create transparent backgrounds", correct: false, id: 1 },
        { answer: "Specify the alignment of an element", correct: true, id: 2 },
        { answer: "Apply animations to elements", correct: false, id: 3 },
    ],
  },
  {
    "question": "What is the purpose of the 'z-index' property in CSS?",
    "answers": [
        { answer: "Control the transparency of an element", correct: false, id: 0 },
        { answer: "Control the stacking order of elements", correct: true, id: 1 },
        { answer: "Set the width of an element", correct: false, id: 2 },
        { answer: "Define the font size of an element", correct: false, id: 3 },
    ],
  }
];

const questionsPython = [
    {
      "question": "What is Python?",
      "answers": [
        { answer: "A type of snake", correct: false, id: 0 },
        { answer: "A programming language", correct: true, id: 1 },
        { answer: "A tropical fruit", correct: false, id: 2 },
        { answer: "A car brand", correct: false, id: 3 },
      ],
    },
    {
      "question": "Which keyword is used to define a function in Python?",
      "answers": [
        { answer: "def", correct: true, id: 0 },
        { answer: "function", correct: false, id: 1 },
        { answer: "define", correct: false, id: 2 },
        { answer: "func", correct: false, id: 3 },
      ],
    },
    {
      "question": "What is the result of 2 + 3 in Python?",
      "answers": [
        { answer: "4", correct: false, id: 0 },
        { answer: "5", correct: true, id: 1 },
        { answer: "6", correct: false, id: 2 },
        { answer: "7", correct: false, id: 3 },
      ],
    },
    {
      "question": "What is the purpose of the 'if' statement in Python?",
      "answers": [
        { answer: "To repeat a block of code", correct: false, id: 0 },
        { answer: "To define a function", correct: false, id: 1 },
        { answer: "To make decisions in code", correct: true, id: 2 },
        { answer: "To import libraries", correct: false, id: 3 },
      ],
    },
    {
      "question": "Which symbol is used for comments in Python?",
      "answers": [
        { answer: "//", correct: false, id: 0 },
        { answer: "/* */", correct: false, id: 1 },
        { answer: "#", correct: true, id: 2 },
        { answer: "--", correct: false, id: 3 },
      ],
    },
    {
      "question": "Which built-in function is used to get the length of a list?",
      "answers": [
        { answer: "length()", correct: false, id: 0 },
        { answer: "size()", correct: false, id: 1 },
        { answer: "len()", correct: true, id: 2 },
        { answer: "count()", correct: false, id: 3 },
      ],
    },
    {
      "question": "What is the purpose of the 'else' statement in Python?",
      "answers": [
        { answer: "To define a function", correct: false, id: 0 },
        { answer: "To make decisions in code", correct: false, id: 1 },
        { answer: "To repeat a block of code", correct: false, id: 2 },
        { answer: "To provide an alternative code path", correct: true, id: 3 },
      ],
    },
    {
      "question": "What is the output of 'print('Hello, World!')' in Python?",
      "answers": [
        { answer: "Hello, World!", correct: true, id: 0 },
        { answer: "Nothing", correct: false, id: 1 },
        { answer: "Syntax error", correct: false, id: 2 },
        { answer: "Prints the word 'print'", correct: false, id: 3 },
      ],
    },
    {
      "question": "Which data type is used to store a sequence of characters in Python?",
      "answers": [
        { answer: "Integer", correct: false, id: 0 },
        { answer: "Float", correct: false, id: 1 },
        { answer: "String", correct: true, id: 2 },
        { answer: "Boolean", correct: false, id: 3 },
      ],
    },
    {
      "question": "Which keyword is used to exit a loop prematurely in Python?",
      "answers": [
        { answer: "break", correct: true, id: 0 },
        { answer: "continue", correct: false, id: 1 },
        { answer: "exit", correct: false, id: 2 },
        { answer: "stop", correct: false, id: 3 },
      ],
    }
]