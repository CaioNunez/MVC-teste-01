const express = require('express')
const app = express()
const port = 3000

app.listen(port,()=>{
    console.log('Rodando servidor na porta '+ port)
})

console.log('Ola, mundo')