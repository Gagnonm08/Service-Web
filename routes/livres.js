const express = require('express'); 
const router = express.Router(); 

router.get('/', (requete,reponse)=> {
	reponse.send('Voici la route /api/livres')
});

router.get('/10', (requete,reponse)=> {
	reponse.send('Voici la route /api/livres/10')
});
router.get('/mariemichele', (requete,reponse)=> {
	reponse.send('Voici la route /api/livres/mariemichele')
});

router.get('/abc',(requete,reponse)=> {
	reponse.send('Voici la route /api/livres/abc')
});
router.get('/9',(requete,reponse)=> {
	reponse.send('Voici la route /api/livres/9')
});

router.get('/autre',(requete,reponse)=> {
	reponse.send('Voici la route /api/livres/autre')
});
router.get('/kekchose',(requete,reponse)=> {
	reponse.send('Voici la route /api/livres/kekchose')
});



module.exports= router; 