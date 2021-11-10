const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'))
const db = require('./src/db/crudExperts.js');


app.get('/', function (req, res) {
    res.send('Servidor Experts con Express')
});

app.get('/get-experts', (req,res)=>{
    db.getExperts(function (arrayExperts){
        var arreglo = arrayExperts;
        res.send(arreglo);
    });
    res.send('Se consultó el documento '+eid);
})

app.get('/get-expert/:id', (req,res)=>{
    const eid = req.params.id;
    db.getExpert(eid, function(doc){
        res.send(doc);
    })
})


app.listen(port, ()=>{
    console.log('My port is listening', port);
});