const express = require('express'); 
const router = express.Router(); 

router.get('/', (requete,reponse)=> {
	reponse.send('Voici la route /api/base')
});
router.get('api/aide', (requete,reponse)=>{
	reponse.send('Voici la route api/aide')
});
router.get('api/index.html', (requete,reponse)=>{
	reponse.send('Voici la route index.html')
});

router.get('api/livres9', (requete,reponse)=>{
	reponse.send('Voici la route api/livres9')
});


module.exports= router; 