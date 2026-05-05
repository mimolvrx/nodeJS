const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Pagina Inicial");
    } else if (req.url === "/sobre") {
        res.end("Pagina sobre");
    } else if (req.url === "/contato") {
    res.end("Pagina de contatos");
    } else {
        res.end("Pagina não encontrada");
    };
});
server.listen(3000);