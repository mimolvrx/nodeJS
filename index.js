// Importando o módulo HTTP do Node.JS
// Módulo nativo que permite criar servidores web
const hhtp = require('http');

// Criando servidor
// createServer: recebe uma função que será executada toda vez que alguém acessar o servidor
const server = hhtp.createServer((req, res) => {
    // req (request) = requisição
    // res (respose) = resposta

    // Envia uma resposta para o navegador e finaliza a requisição
    res.end("Meu primeiro servidor");
});
// faz o servidor executar a porta 3000
server.listen(3000);

// Portas:
// porta 3000 -> desenvolvimento (Node, React)
// porta 80 -> http padrão
// porta 442 -> https
// porta 