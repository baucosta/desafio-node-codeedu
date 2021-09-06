const express = require('express')
const app = express()
const port = 3000

const crud = require("./crud");


const sql = `INSERT INTO people(name) values('Wesley')`


app.get('/', (req,res) => {
    res.send('<h1>Full Cycle</h1>')
    crud.get( function (err, results) {
      if (err == 'error') {
          console.log(err);
      } else {
         console.log(results)
      }
    });
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})