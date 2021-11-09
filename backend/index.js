const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'))
const db = require('./src/db/crudExperts.js');


app.get('/', function (req, res) {
    res.send('Servidor Experts con Express')
});

app.get('/nueva-ruta', (req,res)=>{
    res.send('Esta es una nueva ruta en el servidor de Express');
})

app.get('/get-expert/:id', (req,res)=>{
    const eid = req.params.id;
    res.send('Se consultó el documento '+eid);
})

app.get('/get-user', (req,res)=>{
    res.json({
        "name": "Carolina",
        "DNI": 8646441
    });
})


app.listen(port, ()=>{
    console.log('My port is listening', port);
});