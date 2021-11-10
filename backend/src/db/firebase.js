// Conexión con la base de datos

const admin = require('firebase-admin');

const serviceAccount = require('./b43---proyectoexperts-2f884bb610c9.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;