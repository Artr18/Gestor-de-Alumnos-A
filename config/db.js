const mongoose = require('mongoose');

// Cambié la cadena de conexión para incluir el nombre de la base de datos 'Escuela'
const MONGO_URI = 'mongodb+srv://er663699:uATEDqDy5yKFCsMd@cluster0.alhgo.mongodb.net/Escuela?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Conectado a MongoDB');
    })
    .catch((error) => {
        console.error('Error conectando a MongoDB:', error);
    });