const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'))
const dbE = require('./src/db/crudExperts.js');


app.get('/', function (req, res) {
    res.send('Servidor Experts con Express')
});

app.get('/get-experts', (req,res)=>{
    dbE.getExperts(function (arrayExperts){
        var arreglo = arrayExperts;
        res.send(arreglo);
    });
})

app.get('/get-expert/:id', (req,res)=>{
    const eid = req.params.id;
    dbE.getExpert(eid, function(doc){
        res.send(doc);
    })
})


// Método POST
app.get('/add-expert', (req,res)=>{
    const expert = req.body;
    dbE.addExpert(expert, function(response){
        res.send(response);
    })
})


app.listen(port, ()=>{
    console.log('My port is listening', port);
});