const express = require('express');
const { getUsagers } = require('../modeles/Usagers');
const router = express.Router();
const Usagers = require('../modeles/Usagers.js');

router.get('/login/:login', (requete,reponse)=> {
	let login= requete.params.login;
	let filtre = {"login": login};
	Usagers.getUsagersParFiltre(filtre, (err, users)=> {
		if (err) throw err; 
		reponse.json(users);
	}, 25);
});

router.get('/', (requete, reponse) => {
    Usagers.getUsagers((err, users) => {
        if (err) throw err;
        reponse.json(users);
    }, 25); // 25 est la limite
});

router.get('/', (requete, reponse) => {
    reponse.send('Voici la route /api/users');
});

module.exports = router;
