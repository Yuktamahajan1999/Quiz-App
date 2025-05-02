const webTechQuizQuestions = [
    // HTML Questions
    { 
      id: 1, 
      question: "What does HTML stand for?", 
      options: ["HyperText Markup Language", "HyperText Management Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"], 
      answer: "HyperText Markup Language", 
      category: "HTML", 
      difficulty: "Easy" 
    },
    { 
      id: 2, 
      question: "Which HTML tag is used to define an internal style sheet?", 
      options: ["<script>", "<style>", "<css>", "<link>"], 
      answer: "<style>", 
      category: "HTML", 
      difficulty: "Easy" 
    },
    { 
      id: 3, 
      question: "What is the correct HTML element for inserting a line break?", 
      options: ["<break>", "<br>", "<lb>", "<line>"], 
      answer: "<br>", 
      category: "HTML", 
      difficulty: "Easy" 
    },
    { 
      id: 4, 
      question: "Which HTML element is used to define a hyperlink?", 
      options: ["<a>", "<link>", "<href>", "<anchor>"], 
      answer: "<a>", 
      category: "HTML", 
      difficulty: "Medium" 
    },
    { 
      id: 5, 
      question: "What is the correct HTML element for displaying a bulleted list?", 
      options: ["<ul>", "<ol>", "<li>", "<list>"], 
      answer: "<ul>", 
      category: "HTML", 
      difficulty: "Medium" 
    },
  
    // CSS Questions
    { 
      id: 6, 
      question: "Which property is used to change the background color of an element in CSS?", 
      options: ["background-color", "color", "bg-color", "background"], 
      answer: "background-color", 
      category: "CSS", 
      difficulty: "Easy" 
    },
    { 
      id: 7, 
      question: "Which CSS property controls the text size?", 
      options: ["font-size", "text-size", "size", "font-style"], 
      answer: "font-size", 
      category: "CSS", 
      difficulty: "Easy" 
    },
    { 
      id: 8, 
      question: "How can you add a comment in CSS?", 
      options: ["// comment", "<!-- comment -->", "/* comment */", "# comment"], 
      answer: "/* comment */", 
      category: "CSS", 
      difficulty: "Medium" 
    },
    { 
      id: 9, 
      question: "What does the CSS 'display: none' property do?", 
      options: ["It hides the element", "It shows the element", "It makes the element invisible", "It moves the element off-screen"], 
      answer: "It hides the element", 
      category: "CSS", 
      difficulty: "Medium" 
    },
    { 
      id: 10, 
      question: "What does the CSS 'position: absolute' property do?", 
      options: ["It positions the element relative to its first positioned (not static) ancestor element", "It positions the element at the top of the screen", "It fixes the element to the viewport", "It centers the element"], 
      answer: "It positions the element relative to its first positioned (not static) ancestor element", 
      category: "CSS", 
      difficulty: "Hard" 
    },
  
    // JavaScript Questions
    { 
      id: 11, 
      question: "Which company developed JavaScript?", 
      options: ["Netscape", "Google", "Microsoft", "Apple"], 
      answer: "Netscape", 
      category: "JavaScript", 
      difficulty: "Easy" 
    },
    { 
      id: 12, 
      question: "Which method is used to parse a string into a number in JavaScript?", 
      options: ["parseNumber()", "parseInt()", "parseString()", "toNumber()"], 
      answer: "parseInt()", 
      category: "JavaScript", 
      difficulty: "Easy" 
    },
    { 
      id: 13, 
      question: "What is the output of 'console.log(2 + '2')' in JavaScript?", 
      options: ["4", "22", "Error", "NaN"], 
      answer: "22", 
      category: "JavaScript", 
      difficulty: "Medium" 
    },
    { 
      id: 14, 
      question: "Which keyword is used to define a variable in JavaScript?", 
      options: ["var", "let", "const", "All of the above"], 
      answer: "All of the above", 
      category: "JavaScript", 
      difficulty: "Medium" 
    },
    { 
      id: 15, 
      question: "What does the 'this' keyword refer to in JavaScript?", 
      options: ["The current function", "The current object", "The previous function", "The window object"], 
      answer: "The current object", 
      category: "JavaScript", 
      difficulty: "Hard" 
    },
  
    // jQuery Questions
    { 
      id: 16, 
      question: "Which of these jQuery methods is used to change the content of an HTML element?", 
      options: ["html()", "text()", "content()", "setText()"], 
      answer: "html()", 
      category: "jQuery", 
      difficulty: "Easy" 
    },
    { 
      id: 17, 
      question: "Which function is used to add an event listener in jQuery?", 
      options: ["addEventListener()", "on()", "bind()", "listen()"], 
      answer: "on()", 
      category: "jQuery", 
      difficulty: "Medium" 
    },
    { 
      id: 18, 
      question: "What does the jQuery 'fadeIn()' function do?", 
      options: ["Makes an element visible", "Makes an element invisible", "Changes the color of an element", "Hides the element"], 
      answer: "Makes an element visible", 
      category: "jQuery", 
      difficulty: "Medium" 
    },
    { 
      id: 19, 
      question: "Which jQuery method is used to hide an element?", 
      options: ["hide()", "display()", "invisible()", "clear()"], 
      answer: "hide()", 
      category: "jQuery", 
      difficulty: "Easy" 
    },
    { 
      id: 20, 
      question: "How do you select all paragraphs on a page using jQuery?", 
      options: ["$('p')", "$('div')", "$('.p')", "$('#p')"], 
      answer: "$('p')", 
      category: "jQuery", 
      difficulty: "Medium" 
    },
  
    // React Questions
    { 
      id: 21, 
      question: "Which of the following is used to create components in React?", 
      options: ["class", "function", "both class and function", "none of the above"], 
      answer: "both class and function", 
      category: "React", 
      difficulty: "Easy" 
    },
    { 
      id: 22, 
      question: "What is JSX in React?", 
      options: ["JavaScript XML", "JavaScript XSS", "JavaScript Extensions", "JavaScript Executable"], 
      answer: "JavaScript XML", 
      category: "React", 
      difficulty: "Medium" 
    },
    { 
      id: 23, 
      question: "Which hook is used to manage state in a functional component in React?", 
      options: ["useState()", "useEffect()", "useRef()", "useReducer()"], 
      answer: "useState()", 
      category: "React", 
      difficulty: "Medium" 
    },
    { 
      id: 24, 
      question: "In React, which lifecycle method is called after a component is rendered for the first time?", 
      options: ["componentDidMount()", "componentDidUpdate()", "componentWillUnmount()", "render()"], 
      answer: "componentDidMount()", 
      category: "React", 
      difficulty: "Hard" 
    },
    { 
      id: 25, 
      question: "Which of the following is used to pass data between components in React?", 
      options: ["props", "state", "hooks", "store"], 
      answer: "props", 
      category: "React", 
      difficulty: "Medium" 
    },
  
    // SQL Questions
    { 
      id: 26, 
      question: "Which SQL statement is used to retrieve data from a database?", 
      options: ["SELECT", "INSERT", "UPDATE", "DELETE"], 
      answer: "SELECT", 
      category: "SQL", 
      difficulty: "Easy" 
    },
    { 
      id: 27, 
      question: "Which SQL clause is used to filter the result set?", 
      options: ["WHERE", "GROUP BY", "HAVING", "ORDER BY"], 
      answer: "WHERE", 
      category: "SQL", 
      difficulty: "Easy" 
    },
    { 
      id: 28, 
      question: "Which SQL statement is used to update data in a database?", 
      options: ["SELECT", "INSERT", "UPDATE", "DELETE"], 
      answer: "UPDATE", 
      category: "SQL", 
      difficulty: "Medium" 
    },
    { 
      id: 29, 
      question: "What is the purpose of the SQL 'JOIN' clause?", 
      options: ["To combine rows from two or more tables", "To delete rows from a table", "To update columns in a table", "To insert data into a table"], 
      answer: "To combine rows from two or more tables", 
      category: "SQL", 
      difficulty: "Medium" 
    },
    { 
      id: 30, 
      question: "Which SQL function is used to find the total number of rows in a table?", 
      options: ["COUNT()", "SUM()", "AVG()", "MAX()"], 
      answer: "COUNT()", 
      category: "SQL", 
      difficulty: "Medium" 
    },
  
    // Node.js Questions
    { 
      id: 31, 
      question: "Which module is used to work with the file system in Node.js?", 
      options: ["fs", "path", "http", "url"], 
      answer: "fs", 
      category: "Node.js", 
      difficulty: "Easy" 
    },
    { 
      id: 32, 
      question: "Which command is used to install packages in Node.js?", 
      options: ["npm install", "node install", "npm get", "node get"], 
      answer: "npm install", 
      category: "Node.js", 
      difficulty: "Easy" 
    },
    { 
      id: 33, 
      question: "What is the default port for a Node.js HTTP server?", 
      options: ["8080", "5000", "3000", "80"], 
      answer: "3000", 
      category: "Node.js", 
      difficulty: "Medium" 
    },
    { 
      id: 34, 
      question: "Which of the following is a popular framework for building web applications in Node.js?", 
      options: ["Express", "React", "Angular", "Vue"], 
      answer: "Express", 
      category: "Node.js", 
      difficulty: "Medium" 
    },
    { 
      id: 35, 
      question: "What does 'npm' stand for in Node.js?", 
      options: ["Node Package Manager", "Node Project Manager", "Node Program Manager", "Node Plugin Manager"], 
      answer: "Node Package Manager", 
      category: "Node.js", 
      difficulty: "Medium" 
    }
  ];
  
  export default webTechQuizQuestions;
  


