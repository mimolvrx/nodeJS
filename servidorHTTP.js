// Importando o módulo HTTP do Node.JS
// Módulo nativo que permite criar servidores web
const http = require('http');

// Criando servidor
// createServer: recebe uma função que será executada toda vez que alguém acessar o servidor
const server = http.createServer((req, res) => {
    // req (request) = requisição
    // res (respose) = resposta
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Envia uma resposta para o navegador e finaliza a requisição
    res.end('Servidor rodando!');
});
// faz o servidor executar a porta 3000
server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});

// Portas:
// porta 3000 -> desenvolvimento (Node, React)
// porta 80 -> http padrão
// porta 442 -> https