// Importando o módulo nativo HTTP do Node.JS
const http = require('http');

// Simulação de um banco de dados em mémoria usando um array de objetos
let livros = [
    {
        id: 1,
        titulo: 'O pequeno príncipe',
        autor: 'Antoine de Saint-Exupéry'
    }
];

// Crição do Servidor HTTP
const server = http.createServer((req, res) => {
    // Captura o método da requisição (GET, POST, PUT, DELETE)
    const metodo = req.method;

    // Captura a URL da requisição (/livros)
    const url = req.url;

    // Define a resposta que será em JSON
    res.setHeader('Content-Type', 'application/json');

    // Construindo o método GET - Listar livros
    if (url === '/livros' && metodo === "GET") {
        res.statusCode = 200; // sucesso

        // Retornará a lista de livros em formato JSON
        res.end(JSON.stringify(livros)); 
        
        // Encerra a exucução dessa requisição
        return;
    };

    // Construindo o método POST - Adicionar um livro
    if (url === '/livros' && metodo === "POST") {
        // variavel que vai armazenar os dados do enviados no body
        let body = '';
        req.on('data', parte => {
            body += parte; // Concatena as partes do body (os pedaços de dados)
        });
        // Eento a ser disparado depois que todos os dados chegam
        req.on('end', () => {
            // Converte o body de string para objeto
            const novoLivro = JSON.parse(body); 
            // Adiciona o novo livro ao array de livros
            livros.push(novoLivro); 

            res.statusCode = 201; // criado com sucesso

            res.end(JSON.stringify({
                mensagem: 'Livro adicionado com sucesso',
                livro: novoLivro
            }));
        });
        return; // encerra a requisição
    };


    // Construindo o método PUT - Atualizar livro
    if (url === '/livros' && metodo === "PUT") {
        let body = '';
        req.on('data', parte => {
            body += parte; // Concatena as partes do body (os pedaços de dados)
        });
        req.on('end', () => {

            // Recebe todos os dados atualizado vindo do cliente
            const livroAtualizado = JSON.parse(body); // Converte o body de string para objeto
            // Percorre a lista de livros (array) e substitui o livro com id igual
            livros = livros.map(livro => {
                // Se encontrar o mesmo id, substitui
                if (livro.id === livroAtualizado.id) {
                    return livroAtualizado; // Retorna o livro atualizado
                };
                // Devolve todas as atualizações e o que não mudar
                return livro; // Retorna o livro original
            });
            res.statusCode = 200; // sucesso
            res.end(JSON.stringify({
                mensagem: 'Livro atualizado com sucesso',
                livro: livros
            }));
        });
        return; // encerra a requisição
    };

    // Construindo o método DELETE - Excluir livro
    if (url === '/livros' && metodo === "DELETE") {
        let body ='';

        req.on('data', parte => {
            body += parte;
        });

        req.on('end', () => {
            // Recebe o id do livro a ser removido
            const dados = JSON.parse(body);

            // Filtra o array, removendo o livro com id informado.
            // dessa forma, o array de livros será mantido apenas com os objetos cujo ID é diferente do que é removido.
            livros = livros.filter(livro => livro.id !== dados.id);

            res.statusCode = 200; // sucesso 

            res.end(JSON.stringify({
                mensagem: 'Livro removido com sucesso',
                livros: livros
            }));
        });
        return; // encerra a requisição
    }

    // Rota não encontrada
    res.statusCode = 404;

    // Convertendo a resposta em JSON e exibindo a mensagem
    res.end(JSON.stringify({ 
        mensagem: 'Rota não encontrada' 
    }));
});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});