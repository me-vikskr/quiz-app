const quizData = [
    {
        question: "It is given that (2^36 +1) is divisible by N. Which of the following is also divisible by N?",
        a: "2^18 - 1",
        b: "2^72 - 1",
        c: "2^12 - 1",
        d: "2^24 - 1",
        correct: "b",
    },
    
    {
        question: "Find the smallest 7 digit number divisible by 19",
        a: "1000008",
        b: "9999985",
        c: "1000019",
        d: "1900000",
        correct: "a",
    },
    {
        question: "Find the unit digit of 1! + 2! + 3! ….. 101!..",
        a: "0",
        b: "3",
        c: "1",
        d: "7",
        correct: "b",
    },
    {
        question: "How many different numbers of the form 25y171x are divisible by 8",
        a: "9",
        b: "10",
        c: "20",
        d: "5",
        correct: "c",
    },
    {
        question: "If given 2 numbers are 36% and 12% of a third number. What percentage is first of the second?",
        a: "33.33",
        b: "300",
        c: "30",
        d: "20",
        correct: "b",
    },
    {
        question: "If the prices of fuel have increased by 15%, By what percentage approximately will consumption decrease to keep the cost same?",
        a: "13",
        b: "15",
        c: "16",
        d: "17",
        correct: "a",
    },
    {
        question: "A family spends 1/4th of the total budget on food. If expenditure on food is expected to rise by 20 %. By what percent will their total budget increase if the rest of the expenditure remains constant.",
        a: "20",
        b: "5",
        c: "4",
        d: "7",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEls => {
        if(answerEls.checked){
            answer = answerEls.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick = "location.reload()">Reload</button>
            `
        }
    }
})