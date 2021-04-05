const express = require("express");
const app = express();


app.get("/", (req, res)=> { // exemplo de rota com GET
    res.send("Bem vindo! Rodou!"); // send só pode ser chamado uma vez, senão ocorre erro
});

app.get("/blog/:artigo?", (req, res)=> { // exemplo de rota com GET
    // res.send("Bem vindo ao blog 3233"); // send só pode ser chamado uma vez, senão ocorre erro
    
    var artigo = req.params.artigo;

    if(artigo){
        pessoa = {}; // exemplo de lista com JSON
        pessoa2 = {};
        pArray = [];

        pessoa.id = 1;
        pessoa.idade = 29;
        pessoa.nome = "Diogo";
    
        pArray.push(pessoa);

        pessoa2.id = 2;
        pessoa2.idade = 24;
        pessoa2.nome = "Bárbara";

        pArray.push(pessoa2);
        
        res.json(pArray);
    } else {
        res.send("Não recebemos nenhum parâmetro!");
    }
    
});

app.get("/canal", (req, res)=> { // exemplo de rota com GET
    
    var canal = req.query["canal"];
    res.send(canal); // send só pode ser chamado uma vez, senão ocorre erro
});

app.get("/ola/:nome/:empresa", function (req, res){
    var nome = req.params.nome;
    var empresa = req.params.empresa;

    res.send("<h1>Ola "+ nome + "</h1>" + "<h1>"+ empresa + "</h1>");
});




app.listen(4000, function(error){
    if(error){
        console.log("Ocorreu um erro")
    }
    else {
        console.log("Server inciado com sucesso")
    }
})