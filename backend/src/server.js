const { WebSocketServer } = require("ws");
const dotenv = require("dotenv");

dotenv.config();

const wss = new WebSocketServer({ port: process.env.PORT || 8080 }); // cria uma nova instância do servidor WebSocket, utilizando a porta definida em 'PORT' nas variáveis de ambiente, ou 8080 como fallback padrão

wss.on("connection", (ws) => { // evento que é disparado sempre que um novo cliente WebSocket se conecta ao servidor

    ws.on("error", console.error); // listener de erro para a conexão individual do cliente (ws), garantindo que erros sejam logados

    // evento disparado quando o servidor recebe uma mensagem de um cliente específico (o 'ws' atual)
    ws.on("message", (data) => { // 'data' -> Buffer que contém a mensagem JSON enviada pelo frontend

        // itera sobre todas as conexões de clientes ativas gerenciadas pelo servidor (wss)
        wss.clients.forEach((client) => client.send(data.toString())); // envia a mensagem (convertida de Buffer para string) para cada cliente conectado | famoso "broadcast"
    });

    console.log("client connected!");
})