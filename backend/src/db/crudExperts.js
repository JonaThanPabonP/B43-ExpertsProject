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
            console.error('Error to get expert',err);
            callback('Error to get expert',err);
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


// Actualizar expertos set()
function replaceExpert(eid, expert, callback) {
    return db.collection('experts').doc(eid).set(expert)
        .then(()=>{
            callback('Success to update replacing an expert');
        })
        .catch((err)=>{
            console.error('Error to replace expert',err);
            callback('Error to replace expert',err);
        })
}

// Actualizar expertos update()
function updateExpert(eid, expert, callback) {
    return db.collection('experts').doc(eid).update(expert)
        .then(()=>{
            callback('Success to update an expert');
        })
        .catch((err)=>{
            console.error('Error to update expert',err);
            callback('Error to update expert',err);
        })
}


// Eliminar expertos
function deleteExpert(eid, callback) {
    return db.collection('experts').doc(eid).delete()
        .then(()=>{
            callback('Success to delete an expert');
        })
        .catch((err)=>{
            console.error('Error to delete expert',err);
            callback('Error to delete expert',err);
        })
}

module.exports = {
    getExperts,
    getExpert,
    addExpert,
    replaceExpert,
    updateExpert,
    deleteExpert
}