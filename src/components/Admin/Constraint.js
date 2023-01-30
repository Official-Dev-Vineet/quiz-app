export const quiz = [
  {
    "id": 1,
    "question": "JavaScript is the programming language of the _____.",
    "option": ["desktop", "mobile", "web", "server"],
    "answer": "web"
  },
  {
    "id": 2,
    "question": "Which type of JavaScript language is _____",
    "option": [
      "object-oriented",
      "object-based",
      "functional programing",
      "all of these"
    ],
    "answer": "object-based"
  },
  {
    "id": 3,
    "question": "In which HTML element, we put the JavaScript code?",
    "option": [
      "<javascript>...</javascript>",
      "<js>...</js>",
      "<script>...</script>",
      "<css>...</css>"
    ],
    "answer": "<script>...</script>"
  },
  {
    "id": 4,
    "question": "JavaScript code can be written in ____.",
    "option": [
      "JavaScript file (.js file)",
      "HTML document directly",
      "JavaScript file and in HTML document directly",
      "In style sheets (.css file)"
    ],
    "answer": "JavaScript file and in HTML document directly"
  },
  {
    "id": 5,
    "question": "Which symbol is used separate JavaScript statements?",
    "option": ["Comma (,)", "Colon (:)", "Hyphen (_)", "Semicolon (;)"],
    "answer": "Semicolon (;)"
  },
  {
    "id": 6,
    "question": "JavaScript ignores?",
    "option": ["newlines", "tabs", "spaces", " All of the above"],
    "answer": "All of the above"
  },
  {
    "id": 7,
    "question": "Which JavaScript method is used to access an HTML element by id?",
    "option": [
      "getElementById()",
      "getElement(id)",
      "getElementById(id)",
      "elementById(id)"
    ],
    "answer": "getElementById(id)"
  },
  {
    "id": 8,
    "question": "Which property is used to define the HTML content to an HTML element with a specific id?",
    "option": ["innerText", "innerContent", "elementText", "innerHTML"],
    "answer": "innerHTML"
  },
  {
    "id": 9,
    "question": "Which JavaScript method is used to write HTML output?",
    "option": [
      "document.write()",
      "document.output()",
      "console.log()",
      "document.writeHTML()"
    ],
    "answer": "document.write()"
  },
  {
    "id": 10,
    "question": "Which is the correct JavaScript statement to display \"Hello Boss!\" into an alert box?",
    "option": [
      "alert(\"Hello Boss!\");",
      "alert('Hello Boss!');",
      "alert(Text:'Hello Boss!');",
      "Both A. and B."
    ],
    "answer": "Both A. and B."
  },
  {
    "id": 11,
    "question": "Which is the correct JavaScript statement to print the addition of two numbers 10 and 20 in a paragraph whose id is 'result'?",
    "option": [
      "getElementById(\"result\").innerHTML = 10+20;",
      "getElementById(\"result\").innerHTML = \"10+20\";",
      "getElementById(\"#result\").innerHTML = 10+20;",
      "All of the above"
    ],
    "answer": "getElementById(\"result\").innerHTML = 10+20;"
  },
  {
    "id": 12,
    "question": "What is the use of this JavaScript statement?\n\r<button onclick=\"window.print()\">Submit</button>\n",
    "option": [
      "It will write \"Submit\" on the current Window",
      "It will print the content of the current page",
      "It will write the content of the current page in the browser’s console",
      "None of the above"
    ],
    "answer": "It will print the content of the current page"
  },
  {
    "id": 13,
    "question": "In JavaScript, single line comment begins with ___.",
    "option": ["#", "/*", "$", "//"],
    "answer": "//"
  },
  {
    "id": 14,
    "question": "Which JavaScript keyword is used to declare a variable?",
    "option": ["Var", "var", "Const", "All of above"],
    "answer": "var"
  },
  {
    "id": 15,
    "question": "The const keyword is used to define a ______.",
    "option": [
      "Function scopes variable",
      "Block scoped variable",
      "Constant",
      "Constant with no initial value"
    ],
    "answer": "Constant"
  },
  {
    "id": 16,
    "question": "Which is the correct syntax to declare a constant in JavaScript?",
    "option": [
      "const constant_name;",
      "constant_name const;",
      "constant_name const = value;",
      "const constant_name = value;"
    ],
    "answer": "const constant_name = value;"
  },
  {
    "id": 17,
    "question": "What will be the value of VALUE? \n\t<script>\n\tconst VALUE = 10;\n\tVALUE = 20;\n</script>",
    "option": ["10", "20", "ValueError", "TypeError"],
    "answer": "TypeError"
  },
  {
    "id": 18,
    "question": "What is the default value of an uninitialized variable?",
    "option": ["0", "undefined", "null", "Nan"],
    "answer": "undefined"
  },
  {
    "id": 19,
    "question": "What is the output of the following JavaScript code?\n<script>\n\tvar a;\n\tdocument.getElementById(\"demo\").innerHTML = a+1;\n</script>",
    "option": ["0", "undefined", "1", "Nan"],
    "answer": "Nan"
  },
  {
    "id": 20,
    "question": "What is the output of the following JavaScript code?\n<script>\n\tvar a = 10 + 20 + \"5\";\n\tdocument.getElementById(\"demo\").innerHTML = a;\n</script>",
    "option": ["35", "305", "TypeError", "ValueError"],
    "answer": "305"
  },
  {
    "id": 21,
    "question": "Which is the exponentiation operator in JavaScript?",
    "option": ["exp()", "^", "**", "pow"],
    "answer": "**"
  },
  {
    "id": 22,
    "question": "JavaScript arrays are written with _____.",
    "option": [
      "round brackets ()",
      "curly brackets {}",
      "double quotes \"\"",
      "square brackets []"
    ],
    "answer": "square brackets []"
  },
  {
    "id": 23,
    "question": "Which JavaScript operator is used to determine the type of a variable?",
    "option": ["typeof", "TypeOf", "typeOf", "sizeof"],
    "answer": "typeof"
  },
  {
    "id": 24,
    "question": "Which is the correct JavaScript statement to define string as object?",
    "option": [
      "var s = new String(\"IncludeHelp!\");",
      "var s = String(\"IncludeHelp!\");",
      "var s = \"IncludeHelp!\"",
      "All of the above"
    ],
    "answer": "var s = new String(\"IncludeHelp!\");"
  },
  {
    "id": 25,
    "question": "In JavaScript, the string template literals use ____ rather than the quotes (\"\") to define a string?",
    "option": [
      "Single quotes ('')",
      "Backslash with single quote (\\’'\\')",
      "Backslashes (\\\\)",
      "Back-ticks (``)"
    ],
    "answer": "Back-ticks (``)"
  }
]
