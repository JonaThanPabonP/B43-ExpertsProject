const db = require('./firebase.js');

// Obtener todos los expertos
function getExperts(callback){
    return db.collection('experts').get()
        .then((refDoc)=>{
            var arrayExperts = [];
            refDoc.forEach(doc=>{
                console.log(doc.id,'=>',doc.data);
                arrayExperts.push(doc.data());
            })
            callback(arrayExperts);
        })
        .catch((err)=>{
            console.error('Error to get experts',err);
            callback('Error to get experts',err);
        })
}

function getExpert(eid, callback) {
    return db.collection('experts').doc(eid).get()
        .then((refDoc)=>{
            if (refDoc.exists) {
                callback(refDoc.data());
            }
        })
        .catch((err)=>{
            console.error('Error to get user',err);
            callback('Error to get user',err);
        })
}



// Añadir Expertos
function addExpert(expert, callback) {
    return db.collection('experts').add(expert)
        .then(()=>{
            callback('Success to create an expert');
        })
        .catch((err)=>{
            console.error('Error to add expert',err);
            callback('Error to add expert',err);
        })
}





module.exports = {
    getExperts,
    getExpert
}