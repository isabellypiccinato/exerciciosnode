import inquire from 'inquirer'

//calcular o desconto
let questions = [
{
type: 'input',
name: 'valor',
message: 'informe o valor:'

}


]

//entrada de dados
let resp = await inquire.prompt(questions)

let valor = parseFloat(resp.valor)
let desconto = valor * 0.1
let valorAtualizado = valor - desconto

console.log("O valor do desconto é:" + desconto)
console.log("Então, o valor atualizado é:" + valorAtualizado)

