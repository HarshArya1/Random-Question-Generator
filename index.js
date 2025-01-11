const questionBank = [
    {question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Markup Language"], answer: "Hyper Text Markup Language"},
    {question: "Who is making the Web standards?", options: ["Mozilla", "Google", "Microsoft", "The World Wide Web Consortium"], answer: "The World Wide Web Consortium"},
    {question: "Choose the correct HTML element for the largest heading:", options: ["<heading>", "<h6>", "<h1>", "<head>"], answer: "<h1>"},
    {question: "What is the correct HTML element for inserting a line break?", options: ["<br>", "<lb>", "<break>", "<ln>"], answer: "<br>"},
    {question: "What is the correct HTML for adding a background color?", options: ["<body bg='yellow'>", "<body style='background-color: yellow;'>", "<background>yellow</background>", "<body bgcolor='yellow'>"], answer: "<body style='background-color: yellow;'>"},
    {question: "Choose the correct HTML element to define important text:", options: ["<strong>", "<important>", "<b>", "<i>"], answer: "<strong>"},
    {question: "Choose the correct HTML element to define emphasized text:", options: ["<i>", "<italic>", "<em>", "<b>"], answer: "<em>"},
    {question: "Which character is used to indicate an end tag?", options: ["/", "<", ">", "*"], answer: "/"},
    {question: "How can you make a numbered list?", options: ["<dl>", "<list>", "<ul>", "<ol>"], answer: "<ol>"},
    {question: "How can you make a bulleted list?", options: ["<ul>", "<ol>", "<list>", "<dl>"], answer: "<ul>"},
    {question: "What is the correct HTML for making a checkbox?", options: ["<checkbox>", "<check>", "<input type='check'>", "<input type='checkbox'>"], answer: "<input type='checkbox'>"},
    {question: "What is the correct HTML for making a text area?", options: ["<input type='textarea'>", "<input type='text'>", "<textarea>", "<textinput>"], answer: "<textarea>"},
    {question: "What is the correct HTML for inserting an image?", options: ["<img alt='MyImage'>image.jpg</img>", "<img src='image.jpg' alt='MyImage'>", "<img href='image.jpg'>", "<image src='image.jpg' alt='MyImage'>"], answer: "<img src='image.jpg' alt='MyImage'>"},
    {question: "What is the correct HTML for creating a hyperlink?", options: ["<a>www.example.com</a>", "<a name='www.example.com'>Example</a>", "<a href='www.example.com'>Example</a>", "<a url='www.example.com'>Example</a>"], answer: "<a href='www.example.com'>Example</a>"},
    {question: "Which HTML attribute is used to define inline styles?", options: ["class", "font", "style", "styles"], answer: "style"},
    {question: "Which is the correct HTML tag for the smallest heading?", options: ["<h1>", "<h6>", "<h5>", "<heading>"], answer: "<h6>"},
    {question: "How can you open a link in a new tab/browser window?", options: ["<a href='url' new>", "<a href='url' target='_new'>", "<a href='url' target='_blank'>", "<a href='url' target='_tab'>"], answer: "<a href='url' target='_blank'>"},
    {question: "Which of the following HTML elements is used to create a drop-down list?", options: ["<list>", "<dropdown>", "<select>", "<input type='dropdown'>"], answer: "<select>"},
    {question: "What is the correct HTML for creating a form?", options: ["<form>", "<input>", "<form input>", "<form input='text'>"], answer: "<form>"},
    {question: "Which HTML element is used to specify a header for a document or section?", options: ["<section>", "<header>", "<head>", "<top>"], answer: "<header>"}
  ];
  
function randomselect(){
    const data=new Set();
    while(data.size!=5){
        const index=Math.floor(Math.random()*20);
        data.add(questionBank[index]);
    }

    // convert obj into array
    return [...data];
}
const form=document.querySelector('form');
const problem=randomselect();

original_answer={};

problem.forEach((obj,index)=>{
    const div_element=document.createElement('div');
    div_element.className="question";
    original_answer[`q${index+1}`]=obj['answer'];

    const para=document.createElement('p');
    para.innerHTML=`${index+1}. ${obj['question']}`; 
    div_element.appendChild(para);

    // create 4 option
    obj['options'].forEach((data)=>{
        const label=document.createElement('label');
        const input=document.createElement('input');
        input.type='radio';
        input.name=`q${index+1}`
        input.value=data
        label.appendChild(input);
        label.appendChild(document.createTextNode(data));
        div_element.appendChild(label);
        div_element.appendChild(document.createElement('br'));

    })
    form.appendChild(div_element);
})

const button=document.createElement('button');
button.type="submit"
button.className="submit-btn";
button.innerHTML="Submit";
form.appendChild(button);
// eventlistener and question check
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    let result = 0;
    let number=0;
    for (let [key, value] of formData.entries()) {
        if (value === original_answer[key]){
            result++;
            number+=4;
        }
        else if(value !== original_answer[key]){
            number-=1;
        }
    }
    window.scrollBy(0, 500); 
    const out = document.getElementById('out');
    out.innerText = `${result} out of 5 is correct and you got ${number} Marks out of 20`;
    form.reset();
});

// const reset=document.createElement('button');
// reset.type='reset';
// reset.className="submit-btn btn";
// reset.innerHTML="Reset";
// form.appendChild(reset);

// form.addEventListener('reset',()=>{
//     form.reset();
//     const out = document.getElementById('out');
//     out.innerHTML=``;
//     window.scrollBy(0, 500); 

// })
  