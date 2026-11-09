const express = require("express"); // Importa o Express
const path = require("path"); // Importa o módulo de caminhos do Node.js

const app = express(); // Cria a aplicação

// Disponibiliza as páginas HTML, CSS, JavaScript e imagens
app.use(express.static(path.join(__dirname, "public")));

// Ao acessar o endereço principal, abre o portfólio
app.get("/", function (requisicao, resposta) {
    resposta.redirect("/Página-principal/index.html");
});

// Inicia o servidor na porta 80 e permite acesso pela rede local
app.listen(80, "0.0.0.0", function () {
    console.log("Servidor rodando na porta 80!");
});
