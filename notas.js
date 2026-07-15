import inquire from 'inquirer'

//calcular o desconto
let questions = [
{
type: 'input',
name: 'nota1',
message: 'informe a primeira nota:'

},
{
    type: 'input',
    name: 'nota2',
    message: 'informe a segunda nota:'
    
    },
    {
        type: 'input',
        name: 'nota3',
        message: 'informe a terceira nota:'
        
        }
]

//entrada de dados
let resp = await inquire.prompt(questions)


let nota1 = parseFloat (resp.nota1)
let nota2 = parseFloat (resp.nota2)
let nota3 = parseFloat (resp.nota3)
let soma = ( nota1 + nota2 + nota3 )/ 3




console.log ("A média aritmética é:" + soma)