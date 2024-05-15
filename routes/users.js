const express = require('express'); 
const router = express.Router(); 

router.get('/', (requete,reponse)=> {
	reponse.send('Voici la route /api/users')
});

router.get('/autre', (requete,reponse)=> {
	reponse.send('Voici la route /api/users/autre')
});
router.get('/9',(requete,reponse)=> {
	reponse.send('Voici la route /api/users/9')
});

module.exports= router; 