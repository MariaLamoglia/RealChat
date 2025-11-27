// LOGIN ELEMENTS
const login = document.querySelector(".login");
const loginForm = login.querySelector(".login__form");
const loginInput = login.querySelector(".login__input");

// CHAT ELEMENTS
const chat = document.querySelector(".chat");
const chatForm = chat.querySelector(".chat__form");
const chatInput = chat.querySelector(".chat__input");
const chatMessages = chat.querySelector(".chat__messages");

const colors = [
    "cadetblue",
    "darkgoldenrod",
    "cornflowerblue",
    "darkkhaki",
    "hotpink",
    "gold"
];

const user = { id: "", name: "", color: "" };

let websocket // variável para armazenar a instância de conexão WebSocket

const createMessageSelfElement = (content) => {
    const div = document.createElement("div");

    div.classList.add("message--self");
    div.innerHTML = content;

    return div;
}

const createMessageOtherElement = (content, sender, senderColor) => {
    const div = document.createElement("div");
    const span = document.createElement("span");

    div.classList.add("message--other");

    span.classList.add("message--sender");
    span.style.color = senderColor;

    div.appendChild(span);

    span.innerHTML = sender;
    div.innerHTML += content;

    return div;
}

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length); // gera índice aleatório baseado no tamanho do array 'colors'
    return colors[randomIndex];
}

// função para rolar a tela automaticamente até o final, exibindo a mensagem mais recente
const scrollScreen = () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}

// função chamada sempre que o WebSocket recebe uma nova mensagem do servidor
const processMessage = ({ data }) => {
    const { userId, userName, userColor, content } = JSON.parse(data); // desestrutura e converte a string JSON recebida para um objeto JS

    const message = userId == user.id ? createMessageSelfElement(content) : createMessageOtherElement(content, userName, userColor);

    chatMessages.appendChild(message);

    scrollScreen();
}

// função executada quando o formulário de login é submetido
const handleLogin = (event) => {
    event.preventDefault();

    user.id = crypto.randomUUID(); // gera um ID único e universalmente exclusivo (UUID) para o usuário
    user.name = loginInput.value;
    user.color = getRandomColor();

    login.style.display = "none";
    chat.style.display = "flex";

    websocket = new WebSocket("ws://localhost:8080"); // instancia uma nova conexão WebSocket com o servidor
    websocket.onmessage = processMessage; // define a função 'processMessage' para ser chamada sempre que uma mensagem for recebida
}

// função executada quando o formulário de chat é submetido
const sendMessage = (event) => {
    event.preventDefault();

    const message = {
        userId: user.id,
        userName: user.name,
        userColor: user.color,
        content: chatInput.value
    };

    websocket.send(JSON.stringify(message)); // envia o objeto 'message' serializado em JSON para o servidor via WebSocket

    chatInput.value = "";
}

loginForm.addEventListener("submit", handleLogin);
chatForm.addEventListener("submit", sendMessage);