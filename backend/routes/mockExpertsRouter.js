const express = require('express');
const router = express.Router();
var db = require('./mockDBexperts.json')

// ************************ EXPERTS ***************************

router.get('/', (req,res)=>{
    res.send(db);
})

router.get('/:id', (req,res)=>{
    const eid = req.params.id;
    var expert = db.filter(function(obj){
        return obj.id === eid;
    })
    res.send(expert);
})


// Método POST
router.post('/', (req,res)=>{
    const expert = req.body;
    expert.id = String(db.length+1);
    db.push(expert);
    res.send("Succes to create an expert");
})


// Método PUT
router.put('/:id', (req,res)=>{
    const eid = req.params.id;
    const expert = req.body;
    expert.id = eid;
    for (let i = 0; i < db.length; i++) {
        if (db[i].id === eid) {
            db[i] = expert;
            break;
        }
    }
    res.send("Success to update an expert");
})


// Método PATCH
router.patch('/:id', (req,res)=>{
    const eid = req.params.id;
})


// Método DELETE
router.delete('/:id', (req,res)=>{
    const eid = req.params.id;
    var arreglo = [];
    var cont = 1;
    for (let i = 0; i < db.length; i++) {
        var element = db[i];
        if (element.id != eid) {
            element.id = String(cont);
            cont++;
            arreglo.push(element);
        }
    }
    db = arreglo;
    res.send("Success to delete exppert");
})


// Método filtrado por ubicación
router.get('/search/:location', (req,res)=>{
    const location = req.params.location;
    var experts = db.filter(function(obj){
        return obj.location === location;
    })
    res.send(experts);
})


// ********************* END EXPERTS *************************


module.exports = router;