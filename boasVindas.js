import inquire from 'inquirer'

//pergunta inicial
let questions = [
{
type: 'input',
name: 'nomeInserido',
message: 'informe o seu nome:'

}
]

let resp = await inquire.prompt(questions)

console.log("Olá, seja bem-vinda," + resp.nomeInserido)