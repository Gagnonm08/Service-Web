const mongoose = require('mongoose'); 

//Marie-Michèle Gagnon
//15 mai 2024 
//Schéma de données pour la collection livres de la BD Labo01-ServiceWeb
// _id, titre, auteur, résumé, éditeur, pages(numérique), langue, date, prix(numérique)

let schemaLivre = mongoose.Schema({
	_id: {
		type: String,
		required: true
	},
	titre: {	
		type: String,
		required: true,
	},
	auteur: {
		type: String,
		required: true,
	},
	résumé: {	
		type: String,
		required: true,
	}, 
	éditeur: {
		type: String,
		required: true
	},
	pages: {
		type: Number,
		required: true,
	},
	langue: {
		type: String,
		required: true,
	},
	date: { 
		type: String,
		required: true,
	},
	prix: {
		type: Number,
		required: true
	}
});

let Livres = module.exports = mongoose.model('livres', schemaLivre);

//Obtenir les livres de la BD... 
module.exports.getLivres = (callback, limit) => {
	Livres.find(callback).limit(limit);
};

module.exports.getLivresParFiltre= (filtre, callback, limit) => {
	Livres.find(filtre,callback).limit(limit);
}; 