import inquire from 'inquirer'

//pergunta inicial
let questions = [
{
type: 'input',
name: 'nomeInserido',
message: 'Digite o seu nome:'

},
{
    type: 'input',
    name: 'idadeInserida',
    message: 'Digite sua idade:'
    
    }
]

let resp = await inquire.prompt(questions)

let idade = parseFloat(resp.idadeInserida)

console.log("Olá, " + resp.nomeInserido)
console.log("Voce tem " + resp.idadeInserida + " anos")