conn = new Mongo();
db = conn.getDB("NOSQL_NF18");

/*-------------------------- 1) Moyenne d’âge des véhicules | Average vehicle age --------------------------*/

let pipeline1 = [
    {
        $project: {
            age: { $subtract: [ { $year: new Date() }, { $year: "$AnnéeMiseCirculation" } ] }
        }
    },
    {
        $group: {
            _id: null,
            Moyenne_Age_Vehicules: { $avg: "$age" }
        }
    }
];

/*
let result1 = db.Véhicule.aggregate(pipeline1);
print("Moyenne d’âge des véhicules : \n");
result1.forEach(doc => printjson(doc));
*/

let result1 = db.Véhicule.aggregate(pipeline1);
print("Moyenne d’âge des véhicules : \n");
result1.forEach(doc => {printjson(doc); print();});

/*-------------------------- 2) Kilométrage moyen des véhicules | Average mileage of vehicles --------------------------*/

let pipeline2 = [
    {
        $group: {
            _id: null,
            Kilometrage_Moyen: { $avg: "$Kilométrage" }
        }
    }
];

/*
let result2 = db.Véhicule.aggregate(pipeline2);
print("Kilométrage moyen des véhicules : \n");
result2.forEach(doc => printjson(doc));
*/

let result2 = db.Véhicule.aggregate(pipeline2);
print("Kilométrage moyen des véhicules : \n");
result2.forEach(doc => {printjson(doc); print();});

/*-------------------------- 3) Nombre de pays maximum autorisé par un propriétaire | Maximum number of countries allowed by an owner --------------------------*/

let pipeline3 = [
    {
        $unwind: "$ListePays"
    },
    {
        $group: {
            _id: "$propriétaire",
            Nombre_Pays: { $addToSet: "$ListePays" }
        }
    },
    {
        $project: {
            Nombre_Pays: { $size: "$Nombre_Pays" }
        }
    },
    {
        $sort: {
            Nombre_Pays: -1
        }
    }
];

/*
let result3 = db.PropriétéLoc.aggregate(pipeline3);
print("Nombres de pays maximum autorisé par un propriétaire : \n");
result3.forEach(doc => printjson(doc));
*/

let result3 = db.PropriétéLoc.aggregate(pipeline3);
print("Nombres de pays maximum autorisé par un propriétaire : \n");
result3.forEach(doc => {printjson(doc); print();});

/*-------------------------- 4) Moyenne des avis des véhicules loués | Average ratings of rented vehicles --------------------------*/

let pipeline4 = [
    {
        $group: {
            _id: null,
            Note_Moyenne: { $avg: "$Note" }
        }
    }
];

/*
let result4 = db.Avis.aggregate(pipeline4);
print("Moyenne des avis des véhicules loués : \n");
result4.forEach(doc => printjson(doc));
*/

let result4 = db.Avis.aggregate(pipeline4);
print("Moyenne des avis des véhicules loués : \n");
result4.forEach(doc => {printjson(doc); print();});

/*-------------------------- 5) Les plus gros locataires | Biggest renters --------------------------*/

let pipeline5 = [
    {
        $group: {
            _id: "$locataire",
            Nombre_Locations: { $sum: 1 }
        }
    },
    {
        $sort: {
            Nombre_Locations: -1
        }
    }
];

/*
let result5 = db.LocationLV.aggregate(pipeline5);
print("Les plus gros locataires : \n");
result5.forEach(doc => printjson(doc));
*/

let result5 = db.LocationLV.aggregate(pipeline5);
print("Les plus gros locataires : \n");
result5.forEach(doc => {printjson(doc); print();});

/*-------------------------- 6) Les plus gros propriétaires | Biggest owners --------------------------*/

let pipeline6 = [
    {
        $group: {
            _id: "$propriétaire",
            Nombre_Propriétés: { $sum: 1 }
        }
    },
    {
        $sort: {
            Nombre_Propriétés: -1
        }
    }
];

/*
let result6 = db.PropriétéLoc.aggregate(pipeline6);
print("Les plus gros propriétaires : \n");
result6.forEach(doc => printjson(doc));
*/

let result6 = db.PropriétéLoc.aggregate(pipeline6);
print("Les plus gros propriétaires : \n");
result6.forEach(doc => {printjson(doc); print();});

/*-------------------------- 7) État des véhicules (via analyse du responsable qualité) | Condition of vehicles (through quality manager analysis) --------------------------*/

let pipeline7 = [
    {
        $lookup: {
            from: "ResponsableQualité",
            localField: "responsable",
            foreignField: "id",
            as: "qualite_info"
        }
    },
    {
        $unwind: "$qualite_info"
    },
    {
        $group: {
            _id: "$qualite_info.AnalyseÉtat",
            Nombre_Véhicules: { $sum: 1 }
        }
    },
    {
        $addFields: {
            sortOrder: {
                $switch: {
                    branches: [
                        { case: { $eq: ["$_id", "Excellent"] }, then: 1 },
                        { case: { $eq: ["$_id", "Bon"] }, then: 2 },
                        { case: { $eq: ["$_id", "Passable"] }, then: 3 },
                        { case: { $eq: ["$_id", "Moyen"] }, then: 4 },
                        { case: { $eq: ["$_id", "Médiocre"] }, then: 5 },
                        { case: { $eq: ["$_id", "Mauvais"] }, then: 6 },
                        { case: { $eq: ["$_id", "Exécrable"] }, then: 7 }
                    ],
                    default: 8
                }
            }
        }
    },
    {
        $sort: {
            sortOrder: 1
        }
    }
];

/*
let result7 = db.Véhicule.aggregate(pipeline7);
print("État des véhicules (via analyse du responsable qualité) : \n");
result7.forEach(doc => printjson(doc));
*/

let result7 = db.Véhicule.aggregate(pipeline7);
print("État des véhicules (via analyse du responsable qualité) : \n");
result7.forEach(doc => {printjson(doc); print();});

/*-------------------------- 8) Marque de véhicule les plus courant | Most common vehicle brands --------------------------*/

let pipeline8 = [
    {
        $group: {
            _id: "$Marque",
            Nombre: { $sum: 1 }
        }
    },
    {
        $sort: {
            Nombre: -1
        }
    }
];

/*
let result8 = db.Véhicule.aggregate(pipeline8);
print("Marque de véhicule les plus courant : \n");
result8.forEach(doc => printjson(doc));
*/

let result8 = db.Véhicule.aggregate(pipeline8);
print("Marque de véhicule les plus courant : \n");
result8.forEach(doc => {printjson(doc); print();});


/*-------------------------- 9) Âge permis moyen des locataires | Average age of renters' licenses --------------------------*/

let pipeline9 = [
    {
        $project: {
            agePermis: { $subtract: [ { $year: new Date() }, { $year: "$ÉmissionPermis" } ] }
        }
    },
    {
        $group: {
            _id: null,
            Age_Permis_Moyen: { $avg: "$agePermis" }
        }
    }
];

/*
let result9 = db.Locataire.aggregate(pipeline9);
print("Âge permis moyen des locataires : \n");
result9.forEach(doc => printjson(doc));
*/

let result9 = db.Locataire.aggregate(pipeline9);
print("Âge permis moyen des locataires : \n");
result9.forEach(doc => {printjson(doc); print();});

/*-------------------------- 10) SeuilKm moyen autorisé par véhicule | Average mileage threshold allowed per vehicle --------------------------*/

let pipeline10 = [
    {
        $group: {
            _id: null,
            SeuilKm_Moyen: { $avg: "$SeuilKM" }
        }
    }
];

/*
let result10 = db.PropriétéLoc.aggregate(pipeline10);
print("SeuilKm moyen autorisé par véhicule : \n");
result10.forEach(doc => printjson(doc));
*/

let result10 = db.PropriétéLoc.aggregate(pipeline10);
print("SeuilKm moyen autorisé par véhicule : \n");
result10.forEach(doc => {printjson(doc); print();});

/*-------------------------- 11) Couleur la plus répandue pour l’ensemble des véhicule | Most common color for all vehicles --------------------------*/

let pipeline11 = [
    {
        $group: {
            _id: "$Couleur",
            Nombre: { $sum: 1 }
        }
    },
    {
        $sort: {
            Nombre: -1
        }
    },
    {
        $limit: 1
    }
];

/*
let result11 = db.Véhicule.aggregate(pipeline11);
print("Couleur la plus répandue pour l’ensemble des véhicules : \n");
result11.forEach(doc => printjson(doc));
*/

let result11 = db.Véhicule.aggregate(pipeline11);
print("Couleur la plus répandue pour l’ensemble des véhicules : \n");
result11.forEach(doc => {printjson(doc); print();});

/*-------------------------- 12) Pour afficher le nombre de voitures par couleurs | To display the number of cars by color --------------------------*/

let pipeline12 = [
    {
        $group: {
            _id: "$Couleur",
            Nombre: { $sum: 1 }
        }
    },
    {
        $sort: {
            Nombre: -1
        }
    }
];

/*
let result12 = db.Véhicule.aggregate(pipeline12);
print("Nombre de voitures par couleurs : \n");
result12.forEach(doc => printjson(doc));
*/

let result12 = db.Véhicule.aggregate(pipeline12);
print("Nombre de voitures par couleurs : \n");
result12.forEach(doc => {printjson(doc); print();});

/*-------------------------- 13) Véhicule le plus loué | Most rented vehicle --------------------------*/

let pipeline13 = [
    {
        $group: {
            _id: "$véhicule",
            Nombre_Locations: { $sum: 1 }
        }
    },
    {
        $sort: {
            Nombre_Locations: -1
        }
    },
    {
        $limit: 1
    }
];

/*
let result13 = db.LocationLV.aggregate(pipeline13);
print("Véhicule le plus loué : \n");
result13.forEach(doc => printjson(doc));
*/

let result13 = db.LocationLV.aggregate(pipeline13);
print("Véhicule le plus loué : \n");
result13.forEach(doc => {printjson(doc); print();});

/*-------------------------- 14) Classement des véhicules par location (décroissant) | Ranking of Vehicles by Rental (descending order) --------------------------*/

let pipeline14 = [
    {
        $group: {
            _id: "$véhicule",
            Nombre_Locations: { $sum: 1 }
        }
    },
    {
        $sort: {
            Nombre_Locations: -1
        }
    }
];

/*
let result14 = db.LocationLV.aggregate(pipeline14);
print("Classement des véhicules par location (décroissant) : \n");
result14.forEach(doc => printjson(doc));
*/

let result14 = db.LocationLV.aggregate(pipeline14);
print("Classement des véhicules par location (décroissant) : \n");
result14.forEach(doc => {printjson(doc); print();});

/*-------------------------- 15) Classement des véhicules par location (croissant) | Ranking of Vehicles by Rental (ascending order) --------------------------*/

let pipeline15 = [
    {
        $group: {
            _id: "$véhicule",
            Nombre_Locations: { $sum: 1 }
        }
    },
    {
        $sort: {
            Nombre_Locations: 1
        }
    }
];

/*let result15 = db.LocationLV.aggregate(pipeline15);
print("Classement des véhicules par location (croissant) : \n");
result15.forEach(doc => printjson(doc));
*/

let result15 = db.LocationLV.aggregate(pipeline15);
print("Classement des véhicules par location (croissant) : \n");
result15.forEach(doc => {printjson(doc); print();});
