const quizData = [
    {
        question: 'How old is Caleb?',
        a: '10',
        b: '17',
        c: '25',
        d: '75',
        correct : 'c' 
    }, {
        question: 'What is the most used programming language in 2022?',
        a: 'JavaScript',
        b: 'Python',
        c: 'C++',
        d: 'ruby',
        correct: 'b'
    }, {
        question: 'Who is the President of the US?',
        a: 'Elon Musk',
        b: 'Dwayne Johnson',
        c: 'Sleepy Joe',
        d: 'Big Chngus',
        correct: 'c'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Hello Timmy Humus League',
        c: 'Hitman Thinks Moms Love',
        d: 'Howard Todd Makes Lies',
        correct: 'a'
    }, {
        question: 'What year was JavaScript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'b'
    }
]

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

// Attach quiz questions and answers to actual quiz
function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData [currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    // Check if answer is correct
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        
    // Reload quiz and give score
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly.</h2> 
            
            <button onclick='location.reload()'>Reload Quiz</button>`;
        }
    }
});

