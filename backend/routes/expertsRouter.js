const express = require('express');
const dbE = require('../src/db/crudExperts.js');
const axios = require('axios').default;
const router = express.Router();

// ************************ EXPERTS ***************************

router.get('/', (req,res)=>{
    dbE.getExperts(function (arrayExperts){
        res.send(arrayExperts);
    });
})

router.get('/:id', (req,res)=>{
    const eid = req.params.id;
    dbE.getExpert(eid, function(doc){
        res.send(doc);
    })
})


// Método POST
router.post('/', (req,res)=>{
    const expert = req.body;
    const country = expert.location;
    axios.get('https://restcountries.com/v3.1/name/'+country)
        .then(function (response) {
            // handle success
            console.log(response.data[0].languages);
            expert.languages = response.data[0].languages;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            res.status(400).send(error);
        })
        .then(function () {
            // always executed
            dbE.addExpert(expert, function(response){
                if(response == 'Success to create an expert'){
                    res.status(201).send(response);
                }else{
                    res.status(400).send(response);
                }   
        });
    })
})


// Método PUT
router.put('/:id', (req,res)=>{
    const expert = req.body;
    const eid = req.params.id;
    dbE.replaceExpert(eid, expert, function(response){
        res.send(response);
    })
})


// Método PATCH
router.patch('/:id', (req,res)=>{
    const expert = req.body;
    const eid = req.params.id;
    dbE.updateExpert(eid, expert, function(response){
        res.send(response);
    })
})


// Método DELETE
router.delete('/:id', (req,res)=>{
    const eid = req.params.id;
    dbE.deleteExpert(eid, function(response){
        res.send(response);
    })
})


// Método filtrado por ubicación
router.get('/:location', (req,res)=>{
    const location = req.params.location;
    dbE.searchExpert(location, function (arrayExperts){
        res.send(arrayExperts);
    })
})


// ********************* END EXPERTS *************************


module.exports = router;