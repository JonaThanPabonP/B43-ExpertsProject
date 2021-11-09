// Conexión con la base de datos

const admin = require('firebase-admin');

const serviceAccount = require('./proyectosemana2-93f580fcb239.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


var service = {
    name: "servicio 1",
    description: "Hago ...",
    photos: ["www."],
    experience: 3
}

db.collection("expert").add({
  nombre: "Liz",
  telefono: "1003",
  location: "Colombia",
  occupation: "E.E",
  photo: "www.",
  services: [service],
  bio: "aasdasda",
  DNI: "3897498273"
})
.then((docRef) => {
  console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
  console.error("Error adding document: ", error);
});