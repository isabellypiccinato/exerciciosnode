import inquire from 'inquirer'

//calcular o desconto
let questions = [
{
type: 'input',
name: 'salario',
message: 'informe o seu salário mensal:'

},
{
    type: 'input',
    name: 'horas',
    message: 'informe as horas trabalhadas por mês:'
    
    }

]

//entrada de dados
let resp = await inquire.prompt(questions)

let salario = parseFloat(resp.salario)
let horas = parseFloat(resp.horas)
let conversão =  salario / horas

console.log("O valor da hora trabalhada é:" + conversão)