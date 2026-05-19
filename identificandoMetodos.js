const http = require('http');

const server = http.createServer((req, res) => {
    // Escreve no console o tipo de métood da requisiçção que está sendo feita (sendo GET, POST, PUT ou DELETE)
    console.log(req.method);
    // WRITEHEAD: me permite passar tanto o status code quanto o tipo de dados que será respondido para o servidor
    // NESTW CASO:
    // STATUS CODE = 200 e O dado será um texto simples
    res.writeHead(200, {'contentTYpe': 'text/plain'}); //  
    res.end(`Método recebido: ${req.method}`);
});

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
    console.log("http://localhost:3000");
});