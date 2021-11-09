const db = require('./firebase.js');

// Obtener todos los expertos
function getExperts(){
    return db.collection('experts').get()
        .then((refDoc)=>{
            refDoc.forEach(doc=>{
                console.log(doc.id,'=>',doc.data);
            })
        })
        .catch((err)=>{
            console.error('Error to get user',err);
        })
}


module.exports = {
    getExperts
}