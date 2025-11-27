# 💬 RealChat | Chat em Tempo Real com WebSocket

> 🚀 Um projeto de chat simples e moderno que demonstra o poder da comunicação bidirecional em tempo real usando **WebSockets**. Desenvolvido como estudo do canal **Manual do Dev**.

---

## 🔗 Live Demo (Em Produção) 🌟

Seu projeto está ativo e funcionando na nuvem!

| Serviço | Link de Acesso |
| :--- | :--- |
| **RealChat** (Deploy no Render) | **[https://realchat-frontend-x6f5.onrender.com]** |

> **Nota:** Para testar a funcionalidade em tempo real, abra o link em **duas ou mais abas** no seu navegador.

---

## 💻 Funcionalidades Principais

* **Conexão em Tempo Real:** Utiliza **WebSockets** (`ws`) para garantir a troca instantânea de mensagens entre múltiplos clientes.
* **Identificação Única:** Cada usuário recebe um **ID único (UUID)** e uma **cor aleatória** ao entrar, melhorando a rastreabilidade e a experiência visual.
* **Design Responsivo:** Interface simples e intuitiva, com foco na usabilidade (login e chat).
* **Broadcast de Mensagens:** O servidor Node.js retransmite a mensagem recebida para *todos* os clientes conectados.
* **Rolagem Automática:** A tela de chat rola automaticamente para exibir a mensagem mais recente.

---

## 🛠️ Tecnologias Utilizadas

O projeto está dividido em duas partes essenciais: **Frontend** (o cliente web) e **Backend** (o servidor de WebSocket).

### Frontend

| Tecnologia | Descrição |
| :--- | :--- |
| **HTML5** | Estrutura da interface de login e chat. |
| **CSS3** | Estilização moderna (incluindo *dark mode* e efeitos visuais). |
| **JavaScript** | Lógica de interação, tratamento de dados (JSON), conexão WebSocket e manipulação do DOM. |

### Backend

| Tecnologia | Descrição |
| :--- | :--- |
| **Node.js** | Ambiente de execução do servidor. |
| **`ws` (npm)** | Biblioteca para criação e gerenciamento do Servidor WebSocket. |
| **`dotenv` (npm)** | Gerenciamento da porta do servidor via arquivo `.env`. |

---

## ⚙️ Como Executar o Projeto Localmente

Embora o chat esteja online, você ainda pode executá-lo em sua máquina.

### 1. Pré-requisitos

Certifique-se de ter o **Node.js** instalado em sua máquina.

### 2. Configuração do Backend

1.  Navegue até o diretório `backend`:
    ```bash
    cd RealChat/backend
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Crie um arquivo chamado **`.env`** na raiz do diretório `backend` (ao lado de `package.json`) e defina a porta.
    ```
    # Conteúdo do arquivo .env
    PORT=8080 
    ```
4.  Inicie o servidor:
    ```bash
    node src/server.js
    ```
    O console deve exibir: `client connected!`

### 3. Configuração do Frontend (Local)

1.  Mantenha o servidor Node.js rodando.
2.  Navegue até o diretório `frontend`:
    ```bash
    cd ../frontend
    ```
3.  Abra o arquivo **`index.html`** em seu navegador.

---

### 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

### 👨‍💻 Autor

Feito com 🧠 e muito ❤️ por **Maria Lamoglia**.

[![linkedIn](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/maria-lamoglia/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MariaLamoglia/)