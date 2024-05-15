const express = require('express'); 
const router = express.Router();

const Livres = require('../modeles/Livres.js');

router.get('/titrecontient/:titre', (requete,reponse)=> {
	let titre= requete.params.titre;
	let filtre = {"titre": {$regex: titre, $options: 'i'}} 
	Livres.getLivresParFiltre(filtre, (err, livres)=> {
		if (err) throw err; 
		reponse.json(livres);
	}, 25);
});


router.get('/auteur/:auteur', (requete,reponse)=> {
	let auteur= requete.params.auteur;
	let filtre = {"auteur": {$regex: auteur, $options: 'i'}} 
	Livres.getLivresParFiltre(filtre, (err, livres)=> {
		if (err) throw err; 
		reponse.json(livres);
	}, 25);
});


router.get('/:isbn', (requete,reponse)=> {
	let isbn= requete.params.isbn;
	let filtre = {"_id": isbn} 
	Livres.getLivresParFiltre(filtre, (err, livres)=> {
		if (err) throw err; 
		reponse.json(livres);
	}, 25);
});

router.get('/', (requete,reponse)=> {
	Livres.getLivres((err, livres)=> {
		if (err) throw err; 
		reponse.json(livres);
	}, 25); //25 est la limite 
});



module.exports= router; 