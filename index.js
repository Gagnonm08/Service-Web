// Marie-Michèle Gagnon 
// Date : 14 mai 2024
// Démonstration de l'utilisation de Express et Mongoose 

const express = require('express'); 
const mongoose = require('mongoose');
const app =express(); 
const PORT = 8000;

mongoose.connect('mongodb://localhost/Labo01-ServiceWeb');
let db= mongoose.connection; 

db.on('error', (err) => {
	console.error('erreur de BD: ', err);
}); 

db.once('open', ()=> {
	console.log('Connection à la BD OK!!!');
});

app.use('/api/livres', require('./routes/livres.js')); 
app.use('/api/users', require('./routes/users.js'));
app.use('/', require('./routes/base.js'));

app.get('*', (requete, reponse)=> {
	reponse.send("OUPS, erreur page introuvable!rs!!");
});


app.listen(PORT);
console.log(`Serveur Web fonctionnel sur le port ${PORT}`); 
