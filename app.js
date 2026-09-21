const express = require('express')

const app = express()

const port = 3000

app.get('/',(req,res)=>{
    res.send('Bem vindo, entre no arquivo para testar outros arquivos')
})

app.listen(port,()=>{
    console.log(`Executando na porta: ${port}`)
});