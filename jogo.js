const prompt = require ("prompt-sync")();

const jogos = []

const criar = () => {
    // let classind = prompt("Informe a classificação indicativa do jogo: ")
    // let genero = prompt("Informe o gênero de seu jogo: ")
    let nome = prompt("Nome do jogo: ")
    let ano_lancamento = prompt("Informe o ano de lançamento do jogo: ")
    let duracao = prompt ("Informe a duração média do jogo: ")
    let estudio = prompt ("Informe o estudio do jogo: ")
    let sequencia = prompt ("Informe a sequencia do jogo: ")
    let preco = prompt ("Informe o preço do jogo: ")

    if (
        nome != "" &&
        ano_lancamento >= 1962 && ano_lancamento <= 2024 &&
        duracao > 0 &&
        preço >= 0 &&
        estudio != "" &&
        ((sequencia > 0 && sequencia < jogos.length) || jogos.length == 0)
    ){
        jogos.push({
            nome, ano_lancamento, duracao, preco, estudio, sequencia
        })

        console.log("Jogo cadastrado com sucesso!")
    } else {
        console.log("Dados inválidos!")
    }
}