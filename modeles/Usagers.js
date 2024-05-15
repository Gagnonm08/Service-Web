const mongoose = require('mongoose');

// Schéma de données pour la collection Usagers de la BD Labo01-ServiceWeb
// _id, login, prenom, nom, pwd, roles

let schemaUsagers = mongoose.Schema({
    _id: {
        type: Object,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    pwd: {
        type: String,
        required: true
    },
    roles: {
        type: Array,
        required: true
    }
});

let Usagers = module.exports = mongoose.model('usagers', schemaUsagers);

// Obtenir les Usagers de la BD...
module.exports.getUsagers = (callback, limit) => {
    Usagers.find(callback).limit(limit);
};

module.exports.getUsagersParFiltre = (filtre, callback, limit) => {
    Usagers.find(filtre, callback).limit(limit);
};
