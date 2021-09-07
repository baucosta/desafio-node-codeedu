var express = require('express');
var path = require('path');
const crud = require("./crud");

var app = express();

const port = 3000;


app.use('/', crud);

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



// app.get('/', (req,res) => {
//     crud.insert( function (err, results) {
//         if (err == 'error') {
//             console.log(err);
//         }
//     });

//     res.send('<h1>Full Cycle</h1>')

//     crud.get( function (err, results) {
//       if (err == 'error') {
//           console.log(err);
//       } else {
//          console.log(results)
//       }
//     });
// })

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})