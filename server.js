// Importando apenas a função createServer do módulo
// http do Node
const { createServer } = require('node:http');

const hostname = '127.0.0.1'; // localhost
const port = 3000; // porta 3000

// criando servidor
const server = createServer((req, res) => {
    res.statusCode = 200; // sucesso

    // Define o tipo de conteúdo resposta
    res.setHeader('Content-Type', 'text/plain');

    res.end('Servidor funcionando!');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});