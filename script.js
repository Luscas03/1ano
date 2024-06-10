const questions = [
    {
        question: "Quando foi nosso primeiro contato pessoalmente?",
        options: ["a) 15/04/2023", "b) 10/04/2023", "c) 15/04/2022"],
        correctAnswer: "a"
    },
    {
        question: "Quando foi nosso primeiro beijo?",
        options: ["a) 06/05/2024", "b) 08/05/2023", "c) 04/06/2023"],
        correctAnswer: "b"
    },
    {
        question: "Onde foi nosso primeiro beijo?",
        options: ["a) em casa", "b) no cinema", "c) na rua"],
        correctAnswer: "b"
    },
    {
        question: "Qual é a cor preferida de Lucas?",
        options: ["a) Branco", "b) Azul", "c) Preto"],
        correctAnswer: "c"
    },
    {
        question: "Qual carro o Lucas escolheria?",
        options: ["a) Monza Rebaixado", "b) Porsche Carrera", "c) Audi RS6"],
        correctAnswer: "c"
    },
    {
        question: "Qual é o restaurante preferido do Lucas?",
        options: ["a) Burguer King", "b) Mc Donald's", "c) KFC"],
        correctAnswer: "b"
    },
    {
        question: "Qual é o date preferido do Lucas?",
        options: ["a) Filme em casa", "b) Cinema", "c) Shopping"],
        correctAnswer: "a"
    },
    {
        question: "Qual é telefone celular de Lucas?",
        options: ["a) (21) 98904-0363", "b) (21) 99336-4245", "c) (21) 99261-2709"],
        correctAnswer: "a"
    },
    {
        question: "Qual é a bebida favorita de Lucas?",
        options: ["a) Água", "b) Coca-cola", "c) Pepsi"],
        correctAnswer: "b"
    },
    {
        question: "Qual é o lanche favorito de Lucas?",
        options: ["a) Hambúrguer", "b) Açaí", "c) Pizza"],
        correctAnswer: "a"
    },
    
    // Adicione mais perguntas conforme necessário
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedbackText = document.getElementById("feedback-text");
const feedbackContainer = document.getElementById("feedback-container");
const nextBtn = document.getElementById("next-btn");
const resultText = document.getElementById("result-text");
const resultContainer = document.getElementById("result-container");
const restartBtn = document.getElementById("restart-btn");

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    resultContainer.style.display = "none";
    loadQuestion();
}

function loadQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionText.textContent = currentQuestionData.question;

    optionsContainer.innerHTML = "";
    currentQuestionData.options.forEach(option => {
        const optionBtn = document.createElement("button");
        optionBtn.textContent = option;
        optionBtn.classList.add("option-btn");
        optionBtn.dataset.option = option.charAt(0);
        optionBtn.addEventListener("click", () => {
            checkAnswer(optionBtn.dataset.option);
        });
        optionsContainer.appendChild(optionBtn);
    });

    feedbackContainer.style.display = "none";
}

function checkAnswer(selectedOption) {
    const currentQuestionData = questions[currentQuestion];
    if (selectedOption === currentQuestionData.correctAnswer) {
        score++;
        feedbackText.textContent = "Você acertou!";
    } else {
        feedbackText.textContent = "Você errou!";
    }

    feedbackContainer.style.display = "block";
}

function showNextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    resultContainer.style.display = "flex";
    resultContainer.style.justifyContent = "center";
    resultContainer.style.alignItems = "center";
    resultContainer.style.position = "absolute";
    resultContainer.style.top = 0;
    resultContainer.style.left = 0;
    resultContainer.style.width = "100%";
    resultContainer.style.height = "100%";
    resultContainer.style.backgroundColor = "#000000";
    resultContainer.style.color = "#fffff";
    resultContainer.style.fontSize = "3rem";
    resultContainer.textContent = `Parabéns! Você acertou ${score} de ${questions.length} perguntas. Receba seu presente!`;
}

restartBtn.addEventListener("click", restartQuiz);
nextBtn.addEventListener("click", showNextQuestion);

loadQuestion();
