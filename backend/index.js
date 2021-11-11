const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(express.json());
const dbE = require('./src/db/crudExperts.js');
const dbU = require('./src/db/crudUsers.js');


app.get('/', function (req, res) {
    res.send('Servidor Experts con Express')
});


// ************************ EXPERTS ***************************

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
app.post('/add-expert', (req,res)=>{
    const expert = req.body;
    dbE.addExpert(expert, function(response){
        res.send(response);
    })
})


// Método PUT
app.put('/replace-expert/:id', (req,res)=>{
    const expert = req.body;
    const eid = req.params.id;
    dbE.replaceExpert(eid, expert, function(response){
        res.send(response);
    })
})


// Método PATCH
app.patch('/update-expert/:id', (req,res)=>{
    const expert = req.body;
    const eid = req.params.id;
    dbE.updateExpert(eid, expert, function(response){
        res.send(response);
    })
})


// Método DELETE
app.delete('/delete-expert/:id', (req,res)=>{
    const eid = req.params.id;
    dbE.deleteExpert(eid, function(response){
        res.send(response);
    })
})


// Método filtrado por ubicación


// ********************* END EXPERTS *************************

// ************************ USERS ***************************

// Método GET
app.get('/get-user/:id', (req,res)=>{
    const uid = req.params.id;
    dbU.getUser(uid, function(doc){
        res.send(doc);
    })
})


// Método POST
app.post('/add-user', (req,res)=>{
    const user = req.body;
    dbU.addUser(user, function(response){
        res.send(response);
    })
})


// Método PUT
app.put('/replace-user/:id', (req,res)=>{
    const user = req.body;
    const uid = req.params.id;
    dbU.replaceUser(uid, user, function(response){
        res.send(response);
    })
})


// Método DELETE
app.delete('/delete-user/:id', (req,res)=>{
    const uid = req.params.id;
    dbU.deleteUser(uid, function(response){
        res.send(response);
    })
})

// ************** END USERS *******************



app.listen(port, ()=>{
    console.log('My port is listening', port);
});