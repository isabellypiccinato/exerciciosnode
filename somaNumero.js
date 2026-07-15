import inquire from 'inquirer'

//calcular o desconto
let questions = [
{
type: 'input',
name: 'valor1',
message: 'informe o primeiro número:'

},
{
    type: 'input',
    name: 'valor2',
    message: 'informe o segundo número:'
    
    }

]

//entrada de dados
let resp = await inquire.prompt(questions)

let valor1 = parseFloat (resp.valor1)
let valor2 = parseFloat (resp.valor2)




let resultado = valor1 + valor2

console.log ("A soma dos dois números é:" + resultado)