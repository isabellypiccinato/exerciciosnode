import inquire from 'inquirer'

//calcular o desconto
let questions = [
{
type: 'input',
name: 'peso',
message: 'informe o seu peso:'

},
{
    type: 'input',
    name: 'altura',
    message: 'informe sua altura:'
    
    }

]
let resp = await inquire.prompt(questions)

let altura = parseFloat(resp.altura)
let peso = parseFloat(resp.peso)
let imc = peso / altura * altura

console.log("O seu Imc é:" + imc)