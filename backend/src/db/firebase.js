// Conexión con la base de datos

const admin = require('firebase-admin');

const serviceAccount = require('./proyectosemana2-93f580fcb239.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;