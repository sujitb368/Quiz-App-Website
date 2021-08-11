var questionDB = [
    {
        question: "Q1 : HTML stand for?",
        a: "high task manage level",
        b: "hyper text markup language",
        c: "high level language",
        d: "hum tum mila loo",
        ans: "ans2"
    },
    {
        question: "Q2 : capital of india",
        a: "Kolkata",
        b: "Delhi",
        c: "Mumbai",
        d: "Hydrabad",
        ans: "ans2"
    },
    {
        question: "Q3 : Best programing language in 2020",
        a: "JavaScript",
        b: "Java",
        c: "Python",
        d: "C++",
        ans: "ans1"
    },
    {
        question: "Q4 : React is writen in?",
        a: "Python",
        b: "java",
        c: "JavaScript",
        d: "c",
        ans: "ans3"

    }
]


// get question reference
const question = document.querySelector("#question");
// get option1 reference
const option1 = document.querySelector("#option1");
// get option2 reference
const option2 = document.querySelector("#option2");

// get option3 reference
const option3 = document.querySelector("#option3");

// get option4 reference
const option4 = document.querySelector("#option4");

// get submit button reference
const submit = document.querySelector("#submit")

// get clicked option by user reference
const answers = document.querySelectorAll(".answer")

// get the accese of score and play again area once complete the quiz
const score_area = document.querySelector(".score_div")

let question_num = 0; // question increment variable


// load question from db to document
const get_question = (question_number) => {
    question.innerText = questionDB[question_number].question;

}

// load options from db to document
const get_option = (option) => {
    option1.innerText = questionDB[option].a;
    option2.innerText = questionDB[option].b;
    option3.innerText = questionDB[option].c;
    option4.innerText = questionDB[option].d;
}

// user clicked which option
const get_clicked_option = () => {
    let answer;

    answers.forEach((current_option) => {
        if (current_option.checked) {
            answer = (current_option.id);
        }

    })
    return answer
}

const deselect = () => {
    answers.forEach((current_option) => {
        current_option.checked = false;
    })
}

// score counter
let score = 0;


get_question(question_num);
get_option(question_num)


// submit to get next question by clicking submit button
submit.addEventListener("click", next = () => {

    if (question_num < questionDB.length) {
        const answer = get_clicked_option()
        if (answer == questionDB[question_num].ans) {
            score++
            console.log(answer);
        }

    }
    question_num++

    if (question_num < questionDB.length) {
        deselect()
        get_question(question_num);
        get_option(question_num)
    } else {
        score_area.innerHTML = `
                <h3> You answered ${score} out of ${questionDB.length} question </h3>
                <button class="btn" onclick="location.reload()"> play again </button>
            `
        score_area.classList.remove('score_div_hide');
    }


});




