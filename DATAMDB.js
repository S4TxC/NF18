conn = new Mongo();
db = conn.getDB("NOSQL_NF18");

/*----------------------------------------Client----------------------------------------*/

db.Client.insertOne({
    "type": "individu",
    "pseudo": "Bidule",
    "nom": "Machin",
    "prénom": "Chouette",
    "date_naissance": new Date("1998-02-11"),
    "photo": null,
    "coordonnées": "Une chaîne de caractère"
});

db.Client.insertOne({
    "type": "individu",
    "pseudo": "Alice92",
    "nom": "Dupont",
    "prénom": "Alice",
    "date_naissance": new Date("1990-05-12"),
    "photo": null,
    "coordonnées": "Apt. 5B, 123 Rue des Lilas, 75010 Paris, France"
});

db.Client.insertOne({
    "type": "individu",
    "pseudo": "Bob75",
    "nom": "Martin",
    "prénom": "Bob",
    "date_naissance": new Date("1985-08-25"),
    "photo": null,
    "coordonnées": "25 Rue des Cerisiers, 92130 Issy-les-Moulineaux, France"
});

db.Client.insertOne({
    "type": "individu",
    "pseudo": "Charlie33",
    "nom": "Durand",
    "prénom": "Charlie",
    "date_naissance": new Date("1979-03-18"),
    "photo": null,
    "coordonnées": "123 Chemin du Mont Blanc, 74400 Chamonix-Mont-Blanc, France"
});

db.Client.insertOne({
    "type": "individu",
    "pseudo": "Eva75020",
    "nom": "Lefèvre",
    "prénom": "Eva",
    "date_naissance": new Date("1982-11-30"),
    "photo": null,
    "coordonnées": "10 Avenue de la Mer, 06600 Antibes, France"
});

db.Client.insertOne({
    "type": "individu",
    "pseudo": "Gaston",
    "nom": "Dumas",
    "prénom": "Gaston",
    "date_naissance": new Date("1974-09-03"),
    "photo": null,
    "coordonnées": "42 Rue du Faubourg Saint-Antoine, 75011 Paris, France"
});

db.Client.insertOne({
    "type": "individu",
    "pseudo": "Lola87",
    "nom": "Girard",
    "prénom": "Lola",
    "date_naissance": new Date("1987-07-15"),
    "photo": null,
    "coordonnées": "5 Chemin des Vignes, 77123 Montcourt-Fromonville, France"
});

db.Client.insertOne({
    "type": "individu",
    "pseudo": "Maxime63",
    "nom": "Lefort",
    "prénom": "Maxime",
    "date_naissance": new Date("1995-12-08"),
    "photo": null,
    "coordonnées": "15 Avenue des Champs-Élysées, 75008 Paris, France"
});

db.Client.insertOne({
    "type": "individu",
    "pseudo": "Sophie92",
    "nom": "Bertrand",
    "prénom": "Sophie",
    "date_naissance": new Date("1992-04-22"),
    "photo": null,
    "coordonnées": "Chemin des Écureuils, 12345 Forêt de Brocéliande, France"
});

db.Client.insertOne({
    "type": "individu",
    "pseudo": "ThomasParis",
    "nom": "Moreau",
    "prénom": "Thomas",
    "date_naissance": new Date("1980-06-10"),
    "photo": null,
    "coordonnées": "8 Rue des Fantômes, 28000 Chartres, France"
});

db.Client.insertOne({
    "type": "individu",
    "pseudo": "Vanessa78",
    "nom": "Boucher",
    "prénom": "Vanessa",
    "date_naissance": new Date("1988-02-17"),
    "photo": null,
    "coordonnées": "50 Rue des Usines, 69002 Lyon, France"
});

db.Client.insertOne({
    "type": "entreprise",
    "pseudo": "AlphaCars",
    "nom": "Alpha Cars Ltd",
    "prénom": "Location de voitures",
    "date_naissance": new Date("1995-10-20"),
    "photo": null,
    "coordonnées": "123 Rue des Entreprise, 83990 Saint-Tropez, France"
});

db.Client.insertOne({
    "type": "entreprise",
    "pseudo": "BetaRent",
    "nom": "Beta Rent SAS",
    "prénom": "Location de véhicules",
    "date_naissance": new Date("1990-06-15"),
    "photo": null,
    "coordonnées": "25 Avenue des Affaires, 30000 Nîmes, France"
});

db.Client.insertOne({
    "type": "entreprise",
    "pseudo": "GammaAuto",
    "nom": "Gamma Automobiles SA",
    "prénom": "Vente et location de voitures",
    "date_naissance": new Date("1988-03-05"),
    "photo": null,
    "coordonnées": "10 Boulevard des Autos, 34000 Montpellier, France"
});

db.Client.insertOne({
    "type": "entreprise",
    "pseudo": "DeltaVoyage",
    "nom": "Delta Voyages SAS",
    "prénom": "Agence de voyages",
    "date_naissance": new Date("1998-12-12"),
    "photo": null,
    "coordonnées": "42 Avenue des Voyages, 13000 Marseille, France"
});

db.Client.insertOne({
    "type": "entreprise",
    "pseudo": "EchoTravel",
    "nom": "Echo Travel SARL",
    "prénom": "Organisation de séjours",
    "date_naissance": new Date("2005-07-08"),
    "photo": null,
    "coordonnées": "5 Rue du Voyage, 60200 Compiègne, France"
});

/*----------------------------------------Propriétaire----------------------------------------*/

db.Propriétaire.insertOne({ "pseudo": "Bidule" });
db.Propriétaire.insertOne({ "pseudo": "Alice92" });
db.Propriétaire.insertOne({ "pseudo": "Bob75" });
db.Propriétaire.insertOne({ "pseudo": "Charlie33" });
db.Propriétaire.insertOne({ "pseudo": "Eva75020" });
db.Propriétaire.insertOne({ "pseudo": "Gaston" });
db.Propriétaire.insertOne({ "pseudo": "Lola87" });
db.Propriétaire.insertOne({ "pseudo": "Maxime63" });
db.Propriétaire.insertOne({ "pseudo": "Sophie92" });
db.Propriétaire.insertOne({ "pseudo": "ThomasParis" });
db.Propriétaire.insertOne({ "pseudo": "Vanessa78" });

/*----------------------------------------Locataire----------------------------------------*/

db.Locataire.insertOne({
    "Pseudo": "Bidule",
    "Permis": "123ABC"
});

db.Locataire.insertOne({
    "Pseudo": "Alice92",
    "Permis": "456DEF"
});

db.Locataire.insertOne({
    "Pseudo": "Bob75",
    "Permis": "789GHI"
});

db.Locataire.insertOne({
    "Pseudo": "Charlie33",
    "Permis": "012JKL"
});

db.Locataire.insertOne({
    "Pseudo": "Eva75020",
    "Permis": "345MNO"
});

db.Locataire.insertOne({
    "Pseudo": "Gaston",
    "Permis": "678PQR"
});

db.Locataire.insertOne({
    "Pseudo": "Lola87",
    "Permis": "901STU"
});

db.Locataire.insertOne({
    "Pseudo": "Maxime63",
    "Permis": "234VWX"
});

db.Locataire.insertOne({
    "Pseudo": "Sophie92",
    "Permis": "567YZA"
});

db.Locataire.insertOne({
    "Pseudo": "ThomasParis",
    "Permis": "890BCD"
});

db.Locataire.insertOne({
    "Pseudo": "Vanessa78",
    "Permis": "123EFG"
});

// Insertions pour les Permis
db.Permis.insertOne({
    "N°Permis": "123ABC",
    "ÉmissionPermis": new Date("1750-06-30"),
    "ExpirePermis": new Date("2030-06-30")
});

db.Permis.insertOne({
    "N°Permis": "456DEF",
    "ÉmissionPermis": new Date("2020-12-15"),
    "ExpirePermis": new Date("2029-12-15")
});

db.Permis.insertOne({
    "N°Permis": "789GHI",
    "ÉmissionPermis": new Date("2007-10-22"),
    "ExpirePermis": new Date("2028-10-22")
});

db.Permis.insertOne({
    "N°Permis": "012JKL",
    "ÉmissionPermis": new Date("1998-03-18"),
    "ExpirePermis": new Date("2026-03-18")
});

db.Permis.insertOne({
    "N°Permis": "345MNO",
    "ÉmissionPermis": new Date("2015-08-05"),
    "ExpirePermis": new Date("2028-08-05")
});

db.Permis.insertOne({
    "N°Permis": "678PQR",
    "ÉmissionPermis": new Date("2003-11-30"),
    "ExpirePermis": new Date("2034-11-30")
});

db.Permis.insertOne({
    "N°Permis": "901STU",
    "ÉmissionPermis": new Date("2002-09-10"),
    "ExpirePermis": new Date("2100-09-10")
});

db.Permis.insertOne({
    "N°Permis": "234VWX",
    "ÉmissionPermis": new Date("1990-05-28"),
    "ExpirePermis": new Date("2240-05-28")
});

db.Permis.insertOne({
    "N°Permis": "567YZA",
    "ÉmissionPermis": new Date("2001-07-14"),
    "ExpirePermis": new Date("2050-07-14")
});

db.Permis.insertOne({
    "N°Permis": "890BCD",
    "ÉmissionPermis": new Date("2010-02-01"),
    "ExpirePermis": new Date("2028-02-01")
});

db.Permis.insertOne({
    "N°Permis": "123EFG",
    "ÉmissionPermis": new Date("2000-04-17"),
    "ExpirePermis": new Date("2030-04-17")
});

/*----------------------------------------Entreprise----------------------------------------*/

db.Entreprise.insertOne({
    "Pseudo": "AlphaCars",
    "N°SIREN": 123456789,
    "ListeConducteur": ["Conducteur 1", "Conducteur 2"]
});

db.Entreprise.insertOne({
    "Pseudo": "BetaRent",
    "N°SIREN": 987654321,
    "ListeConducteur": ["Conducteur 3", "Conducteur 4"]
});

db.Entreprise.insertOne({
    "Pseudo": "GammaAuto",
    "N°SIREN": 135792468,
    "ListeConducteur": ["Conducteur 5"]
});

db.Entreprise.insertOne({
    "Pseudo": "DeltaVoyage",
    "N°SIREN": 246813579,
    "ListeConducteur": ["Conducteur 1", "Conducteur 3"]
});

db.Entreprise.insertOne({
    "Pseudo": "EchoTravel",
    "N°SIREN": 369258147,
    "ListeConducteur": ["Conducteur 2", "Conducteur 4", "Conducteur 5"]
});

/*----------------------------------------ContratAssurance----------------------------------------*/

db.ContratAssurance.insertMany([
    { "NumContratA": 1 },
    { "NumContratA": 2 },
    { "NumContratA": 3 },
    { "NumContratA": 4 },
    { "NumContratA": 5 },
    { "NumContratA": 6 },
    { "NumContratA": 7 },
    { "NumContratA": 8 },
    { "NumContratA": 9 },
    { "NumContratA": 10 },
    { "NumContratA": 11 },
    { "NumContratA": 12 },
    { "NumContratA": 13 },
    { "NumContratA": 14 },
    { "NumContratA": 15 },
    { "NumContratA": 16 },
    { "NumContratA": 17 },
    { "NumContratA": 18 },
    { "NumContratA": 19 },
    { "NumContratA": 20 },
    { "NumContratA": 21 },
    { "NumContratA": 22 },
    { "NumContratA": 23 },
    { "NumContratA": 24 }
]);

/*----------------------------------------Franchise----------------------------------------*/

db.Franchise.insertMany([
    { "contratAssurance": 1, "ChoixFranchise": "Sans réduction" },
    { "contratAssurance": 2, "ChoixFranchise": "Franchise réduite" },
    { "contratAssurance": 3, "ChoixFranchise": "Zéro franchise" },
    { "contratAssurance": 4, "ChoixFranchise": "Sans réduction" },
    { "contratAssurance": 5, "ChoixFranchise": "Franchise réduite" },
    { "contratAssurance": 6, "ChoixFranchise": "Zéro franchise" },
    { "contratAssurance": 7, "ChoixFranchise": "Sans réduction" },
    { "contratAssurance": 8, "ChoixFranchise": "Franchise réduite" },
    { "contratAssurance": 9, "ChoixFranchise": "Zéro franchise" },
    { "contratAssurance": 10, "ChoixFranchise": "Sans réduction" },
    { "contratAssurance": 11, "ChoixFranchise": "Franchise réduite" },
    { "contratAssurance": 12, "ChoixFranchise": "Zéro franchise" },
    { "contratAssurance": 13, "ChoixFranchise": "Zéro franchise" },
    { "contratAssurance": 14, "ChoixFranchise": "Zéro franchise" },
    { "contratAssurance": 15, "ChoixFranchise": "Franchise réduite" },
    { "contratAssurance": 16, "ChoixFranchise": "Sans réduction" },
    { "contratAssurance": 17, "ChoixFranchise": "Franchise réduite" },
    { "contratAssurance": 18, "ChoixFranchise": "Franchise réduite" },
    { "contratAssurance": 19, "ChoixFranchise": "Sans réduction" },
    { "contratAssurance": 20, "ChoixFranchise": "Franchise réduite" },
    { "contratAssurance": 21, "ChoixFranchise": "Zéro franchise" },
    { "contratAssurance": 22, "ChoixFranchise": "Zéro franchise" },
    { "contratAssurance": 23, "ChoixFranchise": "Franchise réduite" },
    { "contratAssurance": 24, "ChoixFranchise": "Sans réduction" }
]);

/*----------------------------------------ResponsableQualité----------------------------------------*/

db.ResponsableQualité.insertMany([
    { "id": 1, "AnalyseÉtat": "Excellent" },
    { "id": 2, "AnalyseÉtat": "Bon" },
    { "id": 3, "AnalyseÉtat": "Passable" },
    { "id": 4, "AnalyseÉtat": "Moyen" },
    { "id": 5, "AnalyseÉtat": "Médiocre" },
    { "id": 6, "AnalyseÉtat": "Mauvais" },
    { "id": 7, "AnalyseÉtat": "Exécrable" },
    { "id": 8, "AnalyseÉtat": "Exécrable" },
    { "id": 9, "AnalyseÉtat": "Mauvais" },
    { "id": 10, "AnalyseÉtat": "Médiocre" },
    { "id": 11, "AnalyseÉtat": "Moyen" },
    { "id": 12, "AnalyseÉtat": "Passable" },
    { "id": 13, "AnalyseÉtat": "Bon" },
    { "id": 14, "AnalyseÉtat": "Excellent" },
    { "id": 15, "AnalyseÉtat": "Excellent" },
    { "id": 16, "AnalyseÉtat": "Bon" },
    { "id": 17, "AnalyseÉtat": "Passable" },
    { "id": 18, "AnalyseÉtat": "Moyen" },
    { "id": 19, "AnalyseÉtat": "Médiocre" },
    { "id": 20, "AnalyseÉtat": "Mauvais" },
    { "id": 21, "AnalyseÉtat": "Exécrable" },
    { "id": 22, "AnalyseÉtat": "Excellent" },
    { "id": 23, "AnalyseÉtat": "Passable" },
    { "id": 24, "AnalyseÉtat": "Mauvais" }
]);

/*----------------------------------------Véhicule----------------------------------------*/

db.Véhicule.insertMany([
    { 
        "N°Immat": "AB123CD", 
        "Catégorie": "Compacte", 
        "Couleur": "Rouge", 
        "Options": "Climatisation, Vitres électriques", 
        "Carburant": "Essence", 
        "AnnéeMiseCirculation": new Date("2020-05-15"), 
        "Kilométrage": 15000, 
        "Description": "Bonne condition générale", 
        "contratA": 1, 
        "responsable": 1, 
        "propriétaire": "Alice92",
        "marquemodèleid": 1
    },
    { 
        "N°Immat": "EF777GH", 
        "Catégorie": "Berline", 
        "Couleur": "Bleu", 
        "Options": "Sièges chauffants, Caméra de recul", 
        "Carburant": "Diesel", 
        "AnnéeMiseCirculation": new Date("2019-11-15"), 
        "Kilométrage": 18000, 
        "Description": "Bien entretenu, faible consommation", 
        "contratA": 16, 
        "responsable": 16, 
        "propriétaire": "Alice92",
        "marquemodèleid": 2
    },
    { 
        "N°Immat": "IJ888KL", 
        "Catégorie": "Berline", 
        "Couleur": "Blanc", 
        "Options": "GPS, Bluetooth, Sièges en cuir", 
        "Carburant": "Diesel", 
        "AnnéeMiseCirculation": new Date("2019-09-30"), 
        "Kilométrage": 20000, 
        "Description": "Confortable et spacieux", 
        "contratA": 20, 
        "responsable": 20, 
        "propriétaire": "Alice92",
        "marquemodèleid": 3
    },
    { 
        "N°Immat": "EF456GH", 
        "Catégorie": "Berline", 
        "Couleur": "Noir", 
        "Options": "GPS, Bluetooth, Caméra de recul", 
        "Carburant": "Diesel", 
        "AnnéeMiseCirculation": new Date("2019-10-20"), 
        "Kilométrage": 22000, 
        "Description": "Quelques éraflures sur la carrosserie", 
        "contratA": 2, 
        "responsable": 2, 
        "propriétaire": "Bob75",
        "marquemodèleid": 4
    },
    { 
        "N°Immat": "EF888GH", 
        "Catégorie": "SUV", 
        "Couleur": "Gris", 
        "Options": "Toit panoramique, Système de navigation", 
        "Carburant": "Hybride", 
        "AnnéeMiseCirculation": new Date("2018-08-20"), 
        "Kilométrage": 25000, 
        "Description": "Polyvalent et économe", 
        "contratA": 17, 
        "responsable": 17, 
        "propriétaire": "Bob75",
        "marquemodèleid": 5
    },
    { 
        "N°Immat": "IJ789KL", 
        "Catégorie": "SUV", 
        "Couleur": "Gris", 
        "Options": "Toit ouvrant, Sièges chauffants, Sièges massants, Vitres teintées, Mini-écrans intégrés", 
        "Carburant": "Hybride", 
        "AnnéeMiseCirculation": new Date("2018-12-30"), 
        "Kilométrage": 30000, 
        "Description": "Bien entretenu, faible consommation", 
        "contratA": 3, 
        "responsable": 3, 
        "propriétaire": "Charlie33",
        "marquemodèleid": 6
    },
    { 
        "N°Immat": "IJ777KL", 
        "Catégorie": "Compacte", 
        "Couleur": "Rouge", 
        "Options": "Climatisation, Vitres électriques", 
        "Carburant": "Essence", 
        "AnnéeMiseCirculation": new Date("2020-06-25"), 
        "Kilométrage": 22000, 
        "Description": "Excellent état général", 
        "contratA": 19, 
        "responsable": 19, 
        "propriétaire": "Charlie33",
        "marquemodèleid": 7
    },
    { 
        "N°Immat": "MN012OP", 
        "Catégorie": "Utilitaire", 
        "Couleur": "Blanc", 
        "Options": "Porte latérale coulissante", 
        "Carburant": "Diesel", 
        "AnnéeMiseCirculation": new Date("2021-02-10"), 
        "Kilométrage": 10000, 
        "Description": "Presque neuf, très peu utilisé", 
        "contratA": 4, 
        "responsable": 4, 
        "propriétaire": "Eva75020",
        "marquemodèleid": 8
    },
    { 
        "N°Immat": "QR111ST", 
        "Catégorie": "Supercar", 
        "Couleur": "Noir", 
        "Options": "Échappement sport, Écran tactile", 
        "Carburant": "Diesel", 
        "AnnéeMiseCirculation": new Date("2021-06-10"), 
        "Kilométrage": 17000, 
        "Description": "Art et performance", 
        "contratA": 14, 
        "responsable": 14, 
        "propriétaire": "Eva75020",
        "marquemodèleid": 9
    },
    { 
        "N°Immat": "QR222ST", 
        "Catégorie": "Hypercar", 
        "Couleur": "Vert", 
        "Options": "Aérodynamique avancée, Intérieur personnalisé", 
        "Carburant": "Électrique", 
        "AnnéeMiseCirculation": new Date("2020-10-25"), 
        "Kilométrage": 22000, 
        "Description": "Le futur de la vitesse", 
        "contratA": 15, 
        "responsable": 15, 
        "propriétaire": "Eva75020",
        "marquemodèleid": 10
    },
    { 
        "N°Immat": "ST111UV", 
        "Catégorie": "Crossover", 
        "Couleur": "Rouge", 
        "Options": "Toit panoramique, Système de navigation", 
        "Carburant": "Hybride", 
        "AnnéeMiseCirculation": new Date("2020-06-20"), 
        "Kilométrage": 18000, 
        "Description": "Polyvalent et confortable", 
        "contratA": 22, 
        "responsable": 22, 
        "propriétaire": "Eva75020",
        "marquemodèleid": 11
    },
    { 
        "N°Immat": "ST222UV", 
        "Catégorie": "Cabriolet", 
        "Couleur": "Gris", 
        "Options": "Capote électrique, Sièges en cuir", 
        "Carburant": "Diesel", 
        "AnnéeMiseCirculation": new Date("2018-09-25"), 
        "Kilométrage": 22000, 
        "Description": "Plaisir de conduite à ciel ouvert", 
        "contratA": 23, 
        "responsable": 23, 
        "propriétaire": "Eva75020",
        "marquemodèleid": 12
    },
    { 
        "N°Immat": "ST333UV", 
        "Catégorie": "Compacte", 
        "Couleur": "Vert", 
        "Options": "Radar de recul, Caméra de recul", 
        "Carburant": "Électrique", 
        "AnnéeMiseCirculation": new Date("2020-02-15"), 
        "Kilométrage": 20000, 
        "Description": "Fiabilité et économie", 
        "contratA": 24, 
        "responsable": 24, 
        "propriétaire": "Eva75020",
        "marquemodèleid": 13
    },
    { 
        "N°Immat": "QR345ST", 
        "Catégorie": "Coupé", 
        "Couleur": "Bleu", 
        "Options": "Toit panoramique, Sièges en cuir, Habitacle en Alcantara", 
        "Carburant": "Essence", 
        "AnnéeMiseCirculation": new Date("2017-08-25"), 
        "Kilométrage": 40000, 
        "Description": "Conduite sportive, bon état général", 
        "contratA": 5, 
        "responsable": 5, 
        "propriétaire": "Gaston",
        "marquemodèleid": 14
    },
    { 
        "N°Immat": "AB111CD", 
        "Catégorie": "Compacte", 
        "Couleur": "Jaune", 
        "Options": "Toit amovible, Sièges en cuir", 
        "Carburant": "Essence", 
        "AnnéeMiseCirculation": new Date("2021-04-20"), 
        "Kilométrage": 10000, 
        "Description": "Performances impressionnantes", 
        "contratA": 11, 
        "responsable": 11, 
        "propriétaire": "Gaston",
        "marquemodèleid": 15
    },
    { 
        "N°Immat": "UV678WX", 
        "Catégorie": "Cabriolet", 
        "Couleur": "Blanc", 
        "Options": "Capote électrique, Système audio Bose", 
        "Carburant": "Essence", 
        "AnnéeMiseCirculation": new Date("2019-04-18"), 
        "Kilométrage": 25000, 
        "Description": "Vroom Vroom", 
        "contratA": 6, 
        "responsable": 6, 
        "propriétaire": "Lola87",
        "marquemodèleid": 16
    },
    { 
        "N°Immat": "AB333CD", 
        "Catégorie": "SUV", 
        "Couleur": "Orange", 
        "Options": "Toit panoramique, Sièges chauffants, Système de navigation", 
        "Carburant": "Hybride", 
        "AnnéeMiseCirculation": new Date("2019-05-10"), 
        "Kilométrage": 30000, 
        "Description": "Puissance et luxe", 
        "contratA": 13, 
        "responsable": 13, 
        "propriétaire": "Lola87",
        "marquemodèleid": 17
    },
    { 
        "N°Immat": "YZ901AB", 
        "Catégorie": "Monospace", 
        "Couleur": "Gris", 
        "Options": "Grand coffre, Caméra de recul", 
        "Carburant": "Diesel", 
        "AnnéeMiseCirculation": new Date("2016-11-12"), 
        "Kilométrage": 60000, 
        "Description": "Usage familial, Moteur Blue HDI pire moteur ALL TIME", 
        "contratA": 7, 
        "responsable": 7, 
        "propriétaire": "Maxime63",
        "marquemodèleid": 18
    },
    { 
        "N°Immat": "EF999GH", 
        "Catégorie": "Citadine", 
        "Couleur": "Noir", 
        "Options": "Radar de stationnement, Régulateur de vitesse", 
        "Carburant": "Essence", 
        "AnnéeMiseCirculation": new Date("2020-03-10"), 
        "Kilométrage": 20000, 
        "Description": "Compacte et confortable", 
        "contratA": 18, 
        "responsable": 18, 
        "propriétaire": "Maxime63",
        "marquemodèleid": 19
    },
    { 
        "N°Immat": "CD234EF", 
        "Catégorie": "Citadine", 
        "Couleur": "Vert", 
        "Options": "Radar de recul, Radar de police, Radar de radar, Encore des radars, C'est bien les radars", 
        "Carburant": "Essence", 
        "AnnéeMiseCirculation": new Date("2020-07-05"), 
        "Kilométrage": 18000, 
        "Description": "Faible consommation, idéale en ville, surtout avec les radars", 
        "contratA": 8, 
        "responsable": 8, 
        "propriétaire": "Sophie92",
        "marquemodèleid": 20
    },
    { 
        "N°Immat": "GH567IJ", 
        "Catégorie": "Compacte", 
        "Couleur": "Vert", 
        "Options": "Start-Stop, Phares LED, Boissons fraîches et gazeuses", 
        "Carburant": "Diesel", 
        "AnnéeMiseCirculation": new Date("2019-02-28"), 
        "Kilométrage": 28000, 
        "Description": "Usage quotidien, bon état général", 
        "contratA": 9, 
        "responsable": 9, 
        "propriétaire": "ThomasParis",
        "marquemodèleid": 21
    },
    { 
        "N°Immat": "AB222CD", 
        "Catégorie": "Cabriolet", 
        "Couleur": "Argent", 
        "Options": "Toit électrique, Système audio haut de gamme", 
        "Carburant": "Essence", 
        "AnnéeMiseCirculation": new Date("2020-09-15"), 
        "Kilométrage": 20000, 
        "Description": "Conduite sportive et confortable", 
        "contratA": 12, 
        "responsable": 12, 
        "propriétaire": "ThomasParis",
        "marquemodèleid": 22
    },
    { 
        "N°Immat": "IJ999KL", 
        "Catégorie": "SUV", 
        "Couleur": "Gris", 
        "Options": "Toit ouvrant panoramique, Système de son premium", 
        "Carburant": "Gaz", 
        "AnnéeMiseCirculation": new Date("2018-12-05"), 
        "Kilométrage": 28000, 
        "Description": "Style et fonctionnalité", 
        "contratA": 21, 
        "responsable": 21, 
        "propriétaire": "ThomasParis",
        "marquemodèleid": 23
    },
    { 
        "N°Immat": "KL890MN", 
        "Catégorie": "Crossover", 
        "Couleur": "Rouge", 
        "Options": "Pas d'options", 
        "Carburant": "Essence", 
        "AnnéeMiseCirculation": new Date("2018-06-15"), 
        "Kilométrage": 35000, 
        "Description": "Polyvalent, enfin je crois", 
        "contratA": 10, 
        "responsable": 10, 
        "propriétaire": "Vanessa78",
        "marquemodèleid": 24
    }
    ])

db.MarqueModèle.insertMany([
    { "idMM": 1, "Marque": "Renault", "Modèle": "Clio" },
    { "idMM": 2, "Marque": "Peugeot", "Modèle": "308" },
    { "idMM": 3, "Marque": "Toyota", "Modèle": "RAV4" },
    { "idMM": 4, "Marque": "Ford", "Modèle": "Transit" },
    { "idMM": 5, "Marque": "Pagani", "Modèle": "Huayra" },
    { "idMM": 6, "Marque": "Rimac", "Modèle": "Nevera" },
    { "idMM": 7, "Marque": "Nissan", "Modèle": "Qashqai" },
    { "idMM": 8, "Marque": "Volkswagen", "Modèle": "Golf" },
    { "idMM": 9, "Marque": "BMW", "Modèle": "Series 4" },
    { "idMM": 10, "Marque": "Ferrari", "Modèle": "F8 Tributo" },
    { "idMM": 11, "Marque": "Audi", "Modèle": "A3" },
    { "idMM": 12, "Marque": "Porsche", "Modèle": "911 Turbo S" },
    { "idMM": 13, "Marque": "Lamborghini", "Modèle": "Urus" },
    { "idMM": 14, "Marque": "Citroën", "Modèle": "Grand C4 Picasso" },
    { "idMM": 15, "Marque": "Ford", "Modèle": "Focus" },
    { "idMM": 16, "Marque": "Mazda", "Modèle": "MX-5" },
    { "idMM": 17, "Marque": "Kia", "Modèle": "Ceed" },
    { "idMM": 18, "Marque": "Lamborghini", "Modèle": "Huracan" },
    { "idMM": 19, "Marque": "Audi", "Modèle": "A5" },
    { "idMM": 20, "Marque": "Peugeot", "Modèle": "3008" },
    { "idMM": 21, "Marque": "Citroën", "Modèle": "C5 Aircross" },
    { "idMM": 22, "Marque": "BMW", "Modèle": "Series 3" },
    { "idMM": 23, "Marque": "Mazda", "Modèle": "CX-30" },
    { "idMM": 24, "Marque": "Volkswagen", "Modèle": "Polo" }
])
   
/*----------------------------------------LocationPL----------------------------------------*/

db.LocationPL.insertMany([
    { "propriétaire": "Alice92", "locataire": "Bob75" },
    { "propriétaire": "Alice92", "locataire": "Lola87" },
    { "propriétaire": "Alice92", "locataire": "Eva75020" },
    { "propriétaire": "Bob75", "locataire": "Charlie33" },
    { "propriétaire": "Bob75", "locataire": "Gaston" },
    { "propriétaire": "Charlie33", "locataire": "Vanessa78" },
    { "propriétaire": "Charlie33", "locataire": "Maxime63" },
    { "propriétaire": "Eva75020", "locataire": "Lola87" },
    { "propriétaire": "Eva75020", "locataire": "ThomasParis" },
    { "propriétaire": "Eva75020", "locataire": "Vanessa78" },
    { "propriétaire": "Eva75020", "locataire": "Sophie92" },
    { "propriétaire": "Eva75020", "locataire": "Alice92" },
    { "propriétaire": "Eva75020", "locataire": "Gaston" },
    { "propriétaire": "Gaston", "locataire": "Maxime63" },
    { "propriétaire": "Gaston", "locataire": "Bob75" },
    { "propriétaire": "Lola87", "locataire": "Maxime63" },
    { "propriétaire": "Sophie92", "locataire": "ThomasParis" },
    { "propriétaire": "Maxime63", "locataire": "Sophie92" },
    { "propriétaire": "Maxime63", "locataire": "Gaston" },
    { "propriétaire": "ThomasParis", "locataire": "Lola87" },
    { "propriétaire": "ThomasParis", "locataire": "Maxime63" },
    { "propriétaire": "ThomasParis", "locataire": "Gaston" },
    { "propriétaire": "Vanessa78", "locataire": "Alice92" }
])

/*----------------------------------------LocationLV----------------------------------------*/

db.LocationLV.insertMany([
    { "véhicule": "AB123CD", "locataire": "Bob75" },
    { "véhicule": "EF777GH", "locataire": "Lola87" },
    { "véhicule": "IJ888KL", "locataire": "Eva75020" },
    { "véhicule": "EF456GH", "locataire": "Charlie33" },
    { "véhicule": "EF888GH", "locataire": "Gaston" },
    { "véhicule": "IJ789KL", "locataire": "Vanessa78" },
    { "véhicule": "IJ777KL", "locataire": "Maxime63" },
    { "véhicule": "MN012OP", "locataire": "Lola87" },
    { "véhicule": "QR111ST", "locataire": "ThomasParis" },
    { "véhicule": "QR222ST", "locataire": "Vanessa78" },
    { "véhicule": "ST111UV", "locataire": "Sophie92" },
    { "véhicule": "ST222UV", "locataire": "Alice92" },
    { "véhicule": "ST333UV", "locataire": "Gaston" },
    { "véhicule": "QR345ST", "locataire": "Maxime63" },
    { "véhicule": "AB111CD", "locataire": "Lola87" },
    { "véhicule": "UV678WX", "locataire": "Maxime63" },
    { "véhicule": "CD234EF", "locataire": "ThomasParis" },
    { "véhicule": "YZ901AB", "locataire": "Sophie92" },
    { "véhicule": "EF999GH", "locataire": "Gaston" },
    { "véhicule": "GH567IJ", "locataire": "Lola87" },
    { "véhicule": "AB222CD", "locataire": "Maxime63" },
    { "véhicule": "IJ999KL", "locataire": "Gaston" },
    { "véhicule": "KL890MN", "locataire": "Alice92" }
])

/*----------------------------------------LocationEV----------------------------------------*/

db.LocationEV.insertMany([
    { "véhicule": "AB123CD", "entreprise": "AlphaCars" },
    { "véhicule": "EF456GH", "entreprise": "BetaRent" },
    { "véhicule": "IJ789KL", "entreprise": "GammaAuto" },
    { "véhicule": "MN012OP", "entreprise": "DeltaVoyage" },
    { "véhicule": "QR345ST", "entreprise": "EchoTravel" },
    { "véhicule": "UV678WX", "entreprise": "AlphaCars" },
    { "véhicule": "YZ901AB", "entreprise": "BetaRent" },
    { "véhicule": "CD234EF", "entreprise": "GammaAuto" },
    { "véhicule": "GH567IJ", "entreprise": "DeltaVoyage" },
    { "véhicule": "KL890MN", "entreprise": "EchoTravel" }
])

/*----------------------------------------Signalement----------------------------------------*/

db.Signalement.insertMany([
    { "véhicule": "AB123CD", "NbSignalement": 2, "responsable": 1 },
    { "véhicule": "EF456GH", "NbSignalement": 3, "responsable": 2 },
    { "véhicule": "IJ789KL", "NbSignalement": 0, "responsable": 3 },
    { "véhicule": "MN012OP", "NbSignalement": 1, "responsable": 4 },
    { "véhicule": "QR345ST", "NbSignalement": 2, "responsable": 5 },
    { "véhicule": "UV678WX", "NbSignalement": 3, "responsable": 6 },
    { "véhicule": "YZ901AB", "NbSignalement": 0, "responsable": 7 },
    { "véhicule": "CD234EF", "NbSignalement": 1, "responsable": 8 },
    { "véhicule": "GH567IJ", "NbSignalement": 2, "responsable": 9 },
    { "véhicule": "KL890MN", "NbSignalement": 3, "responsable": 10 }
])

/*----------------------------------------Signaler----------------------------------------*/

db.Signaler.insertMany([
    { "signalement": "AB123CD", "locataire": "Bob75" },
    { "signalement": "EF456GH", "locataire": "Charlie33" },
    { "signalement": "IJ789KL", "locataire": "Vanessa78" },
    { "signalement": "MN012OP", "locataire": "Lola87" },
    { "signalement": "QR345ST", "locataire": "Maxime63" },
    { "signalement": "UV678WX", "locataire": "Maxime63" },
    { "signalement": "YZ901AB", "locataire": "Sophie92" },
    { "signalement": "CD234EF", "locataire": "ThomasParis" },
    { "signalement": "GH567IJ", "locataire": "Lola87" },
    { "signalement": "KL890MN", "locataire": "Alice92" }
])

/*----------------------------------------PropriétéLoc----------------------------------------*/

db.PropriétéLoc.insertMany([
    {
        "propriétaire": "Alice92",
        "véhicule": "AB123CD",
        "DateDebutLoc": "2024-05-01",
        "DateFinLoc": "2024-06-01",
        "SeuilKM": 1500,
        "SeuilCarbu": 50,
        "ListePays": ["France", "Belgique", "Suisse", "Espagne"]
    },
    {
        "propriétaire": "Alice92",
        "véhicule": "EF777GH",
        "DateDebutLoc": "2024-06-01",
        "DateFinLoc": "2024-07-01",
        "SeuilKM": 1800,
        "SeuilCarbu": 60,
        "ListePays": ["France", "Belgique", "Suisse"]
    },
    {
        "propriétaire": "Alice92",
        "véhicule": "IJ888KL",
        "DateDebutLoc": "2024-07-01",
        "DateFinLoc": "2024-08-01",
        "SeuilKM": 2000,
        "SeuilCarbu": 70,
        "ListePays": ["France", "Belgique", "Suisse", "Espagne", "Suède"]
    },
    {
        "propriétaire": "Bob75",
        "véhicule": "EF456GH",
        "DateDebutLoc": "2024-06-01",
        "DateFinLoc": "2024-07-01",
        "SeuilKM": 2000,
        "SeuilCarbu": 60,
        "ListePays": ["Allemagne", "Suisse", "Royaume-Uni"]
    },
    {
        "propriétaire": "Bob75",
        "véhicule": "EF888GH",
        "DateDebutLoc": "2024-07-01",
        "DateFinLoc": "2024-08-01",
        "SeuilKM": 2200,
        "SeuilCarbu": 70,
        "ListePays": ["Allemagne", "Royaume-Uni"]
    },
    {
        "propriétaire": "Charlie33",
        "véhicule": "IJ789KL",
        "DateDebutLoc": "2024-07-01",
        "DateFinLoc": "2024-08-01",
        "SeuilKM": 1800,
        "SeuilCarbu": 55,
        "ListePays": ["Italie", "Espagne", "Luxembourg", "Belgique", "Allemagne", "France"]
    },
    {
        "propriétaire": "Charlie33",
        "véhicule": "IJ777KL",
        "DateDebutLoc": "2024-08-01",
        "DateFinLoc": "2024-09-01",
        "SeuilKM": 2000,
        "SeuilCarbu": 65,
        "ListePays": ["Italie", "Espagne", "Luxembourg", "Belgique", "Allemagne", "France", "Danemark"]
    },
    {
        "propriétaire": "Eva75020",
        "véhicule": "MN012OP",
        "DateDebutLoc": "2024-08-01",
        "DateFinLoc": "2024-09-01",
        "SeuilKM": 1700,
        "SeuilCarbu": 45,
        "ListePays": ["Portugal", "Royaume-Uni"]
    },
    {
        "propriétaire": "Eva75020",
        "véhicule": "QR111ST",
        "DateDebutLoc": "2024-09-01",
        "DateFinLoc": "2024-10-01",
        "SeuilKM": 1900,
        "SeuilCarbu": 55,
        "ListePays": ["Portugal", "Royaume-Uni", "France"]
    },
    {
        "propriétaire": "Eva75020",
        "véhicule": "QR222ST",
        "DateDebutLoc": "2024-10-01",
        "DateFinLoc": "2024-11-01",
        "SeuilKM": 2100,
        "SeuilCarbu": 60,
        "ListePays": ["Portugal", "Royaume-Uni", "France", "Espagne"]
    },
    {
        "propriétaire": "Eva75020",
        "véhicule": "ST111UV",
        "DateDebutLoc": "2024-11-01",
        "DateFinLoc": "2024-12-01",
        "SeuilKM": 2000,
        "SeuilCarbu": 60,
        "ListePays": ["Portugal", "Royaume-Uni", "France", "Espagne", "Autriche"]
    },
    {
        "propriétaire": "Eva75020",
        "véhicule": "ST222UV",
        "DateDebutLoc": "2024-12-01",
        "DateFinLoc": "2025-01-01",
        "SeuilKM": 2100,
        "SeuilCarbu": 65,
        "ListePays": ["Portugal", "Royaume-Uni", "France", "Espagne", "Autriche", "Irlande"]
    },
    {
        "propriétaire": "Eva75020",
        "véhicule": "ST333UV",
        "DateDebutLoc": "2025-01-01",
        "DateFinLoc": "2025-02-01",
        "SeuilKM": 2200,
        "SeuilCarbu": 70,
        "ListePays": ["Portugal", "Royaume-Uni", "France", "Espagne", "Autriche", "Irlande", "Danemark"]
    },
    {
        "propriétaire": "Gaston",
        "véhicule": "QR345ST",
        "DateDebutLoc": "2024-09-01",
        "DateFinLoc": "2024-10-01",
        "SeuilKM": 1600,
        "SeuilCarbu": 50,
        "ListePays": ["France", "Luxembourg", "Suisse"]
    },
    {
        "propriétaire": "Gaston",
        "véhicule": "AB111CD",
        "DateDebutLoc": "2024-10-01",
        "DateFinLoc": "2024-11-01",
        "SeuilKM": 1800,
        "SeuilCarbu": 55,
        "ListePays": ["France", "Luxembourg", "Suisse", "Autriche"]
    },
    {
        "propriétaire": "Lola87",
        "véhicule": "UV678WX",
        "DateDebutLoc": "2024-10-01",
        "DateFinLoc": "2024-11-01",
        "SeuilKM": 1900,
        "SeuilCarbu": 55,
        "ListePays": ["Belgique", "Suisse", "Italie"]
    },
    {
        "propriétaire": "Lola87",
        "véhicule": "AB333CD",
        "DateDebutLoc": "2024-11-01",
        "DateFinLoc": "2024-12-01",
        "SeuilKM": 2000,
        "SeuilCarbu": 60,
        "ListePays": ["Belgique", "Suisse", "Italie"]
    },
    {
        "propriétaire": "Maxime63",
        "véhicule": "YZ901AB",
        "DateDebutLoc": "2024-11-01",
        "DateFinLoc": "2024-12-01",
        "SeuilKM": 2200,
        "SeuilCarbu": 60,
        "ListePays": ["Italie", "Espagne", "Portugal"]
    },
    {
        "propriétaire": "Maxime63",
        "véhicule": "EF999GH",
        "DateDebutLoc": "2024-12-01",
        "DateFinLoc": "2025-01-01",
        "SeuilKM": 2300,
        "SeuilCarbu": 65,
        "ListePays": ["Italie", "Espagne", "Portugal"]
    },
    {
        "propriétaire": "Sophie92",
        "véhicule": "CD234EF",
        "DateDebutLoc": "2024-12-01",
        "DateFinLoc": "2025-01-01",
        "SeuilKM": 2100,
        "SeuilCarbu": 50,
        "ListePays": ["Portugal", "Royaume-Uni", "France"]
    },
    {
        "propriétaire": "ThomasParis",
        "véhicule": "GH567IJ",
        "DateDebutLoc": "2025-02-01",
        "DateFinLoc": "2025-03-01",
        "SeuilKM": 1800,
        "SeuilCarbu": 55,
        "ListePays": ["France", "Luxembourg", "Italie", "Portugal"]
    },
    {
        "propriétaire": "ThomasParis",
        "véhicule": "AB222CD",
        "DateDebutLoc": "2025-03-01",
        "DateFinLoc": "2025-04-01",
        "SeuilKM": 1900,
        "SeuilCarbu": 60,
        "ListePays": ["France", "Luxembourg", "Italie", "Portugal", "Royaume-Uni"]
    },
    {
        "propriétaire": "ThomasParis",
        "véhicule": "IJ999KL",
        "DateDebutLoc": "2025-04-01",
        "DateFinLoc": "2025-05-01",
        "SeuilKM": 2000,
        "SeuilCarbu": 65,
        "ListePays": ["France", "Luxembourg", "Italie", "Portugal", "Royaume-Uni", "Suède"]
    },
    {
        "propriétaire": "Vanessa78",
        "véhicule": "KL890MN",
        "DateDebutLoc": "2025-05-01",
        "DateFinLoc": "2025-06-01",
        "SeuilKM": 2100,
        "SeuilCarbu": 70,
        "ListePays": ["Allemagne", "Suisse", "Espagne"]
    }
]);

/*----------------------------------------ContratLocation----------------------------------------*/

db.ContratLocation.insertMany([
    {
        "NumContratL": 1,
        "DateDébutCL": "2024-05-01",
        "véhicule": "AB123CD"
    },
    {
        "NumContratL": 2,
        "DateDébutCL": "2024-06-01",
        "véhicule": "EF777GH"
    },
    {
        "NumContratL": 3,
        "DateDébutCL": "2024-07-01",
        "véhicule": "IJ888KL"
    },
    {
        "NumContratL": 4,
        "DateDébutCL": "2024-06-01",
        "véhicule": "EF456GH"
    },
    {
        "NumContratL": 5,
        "DateDébutCL": "2024-07-01",
        "véhicule": "EF888GH"
    },
    {
        "NumContratL": 6,
        "DateDébutCL": "2024-07-01",
        "véhicule": "IJ789KL"
    },
    {
        "NumContratL": 7,
        "DateDébutCL": "2024-08-01",
        "véhicule": "IJ777KL"
    },
    {
        "NumContratL": 8,
        "DateDébutCL": "2024-08-01",
        "véhicule": "MN012OP"
    },
    {
        "NumContratL": 9,
        "DateDébutCL": "2024-09-01",
        "véhicule": "QR111ST"
    },
    {
        "NumContratL": 10,
        "DateDébutCL": "2024-10-01",
        "véhicule": "QR222ST"
    },
    {
        "NumContratL": 11,
        "DateDébutCL": "2024-11-01",
        "véhicule": "ST111UV"
    },
    {
        "NumContratL": 12,
        "DateDébutCL": "2024-12-01",
        "véhicule": "ST222UV"
    },
    {
        "NumContratL": 13,
        "DateDébutCL": "2025-01-01",
        "véhicule": "ST333UV"
    },
    {
        "NumContratL": 14,
        "DateDébutCL": "2024-09-01",
        "véhicule": "QR345ST"
    },
    {
        "NumContratL": 15,
        "DateDébutCL": "2024-10-01",
        "véhicule": "AB111CD"
    },
    {
        "NumContratL": 16,
        "DateDébutCL": "2024-10-01",
        "véhicule": "UV678WX"
    },
    {
        "NumContratL": 17,
        "DateDébutCL": "2024-11-01",
        "véhicule": "YZ901AB"
    },
    {
        "NumContratL": 18,
        "DateDébutCL": "2024-12-01",
        "véhicule": "EF999GH"
    },
    {
        "NumContratL": 19,
        "DateDébutCL": "2024-12-01",
        "véhicule": "CD234EF"
    },
    {
        "NumContratL": 20,
        "DateDébutCL": "2025-02-01",
        "véhicule": "GH567IJ"
    },
    {
        "NumContratL": 21,
        "DateDébutCL": "2025-03-01",
        "véhicule": "AB222CD"
    },
    {
        "NumContratL": 22,
        "DateDébutCL": "2025-04-01",
        "véhicule": "IJ999KL"
    },
    {
        "NumContratL": 23,
        "DateDébutCL": "2025-05-01",
        "véhicule": "KL890MN"
    }
]);

/*----------------------------------------Avis----------------------------------------*/

db.Avis.insertMany([
    {
        "véhicule": "AB123CD",
        "contrat": 1,
        "Note": 1,
        "Commentaire": null
    },
    {
        "véhicule": "EF456GH",
        "contrat": 4,
        "Note": 3,
        "Commentaire": "Le véhicule était généralement en bon état, mais j'ai rencontré quelques problèmes mineurs avec la climatisation qui ne fonctionnait pas correctement."
    },
    {
        "véhicule": "IJ789KL",
        "contrat": 6,
        "Note": 5,
        "Commentaire": "Véhicule en excellent état, propre et bien entretenu. Conduite fluide et confortable, aucun problème à signaler."
    },
    {
        "véhicule": "MN012OP",
        "contrat": 8,
        "Note": 2,
        "Commentaire": "Malheureusement, le véhicule avait quelques problèmes mécaniques mineurs qui ont affecté mon expérience de conduite. C'était décevant."
    },
    {
        "véhicule": "QR345ST",
        "contrat": 14,
        "Note": 0,
        "Commentaire": "Le véhicule était dans un état lamentable à la prise en charge. Sale à l'intérieur et à l'extérieur, et il avait des problèmes mécaniques. Très déçu de la qualité du service."
    },
    {
        "véhicule": "UV678WX",
        "contrat": 16,
        "Note": 4,
        "Commentaire": "J'ai beaucoup apprécié conduire ce véhicule. Il était confortable, propre et offrait une conduite agréable. Je le recommanderais sans hésiter."
    },
    {
        "véhicule": "YZ901AB",
        "contrat": 17,
        "Note": 3,
        "Commentaire": "Le véhicule était globalement correct, mais j'ai été déçu de constater que le réservoir de carburant était presque vide lorsque je l'ai pris en charge. Cela aurait pu être mieux préparé."
    },
    {
        "véhicule": "CD234EF",
        "contrat": 19,
        "Note": 5,
        "Commentaire": null
    },
    {
        "véhicule": "GH567IJ",
        "contrat": 20,
        "Note": 2,
        "Commentaire": "Le principal inconvénient de cette location était le retard lors de la prise en charge du véhicule. Cela a entraîné quelques inconvénients dans mon programme de voyage."
    },
    {
        "véhicule": "KL890MN",
        "contrat": 23,
        "Note": 4,
        "Commentaire": null
    }
]);

/*----------------------------------------Facture----------------------------------------*/

db.Facture.insertMany([
    {
        "contratLocation": 1,
        "Montant": 500.00,
        "Kilométrage": 20500,
        "DateFacture": "2024-06-01",
        "MoyenDePaiement": "Carte bancaire"
    },
    {
        "contratLocation": 2,
        "Montant": 603.00,
        "Kilométrage": 25500,
        "DateFacture": "2024-07-01",
        "MoyenDePaiement": "Espèce"
    },
    {
        "contratLocation": 3,
        "Montant": 700.00,
        "Kilométrage": 18500,
        "DateFacture": "2024-08-01",
        "MoyenDePaiement": "Virement bancaire"
    },
    {
        "contratLocation": 4,
        "Montant": 550.00,
        "Kilométrage": 22500,
        "DateFacture": "2024-09-01",
        "MoyenDePaiement": "Chèque"
    },
    {
        "contratLocation": 5,
        "Montant": 802.00,
        "Kilométrage": 30500,
        "DateFacture": "2024-10-01",
        "MoyenDePaiement": "Carte bancaire"
    },
    {
        "contratLocation": 6,
        "Montant": 450.00,
        "Kilométrage": 15500,
        "DateFacture": "2024-11-01",
        "MoyenDePaiement": "Espèce"
    },
    {
        "contratLocation": 7,
        "Montant": 909.00,
        "Kilométrage": 28500,
        "DateFacture": "2024-12-01",
        "MoyenDePaiement": "Virement bancaire"
    },
    {
        "contratLocation": 8,
        "Montant": 700.00,
        "Kilométrage": 21500,
        "DateFacture": "2025-01-01",
        "MoyenDePaiement": "Chèque"
    },
    {
        "contratLocation": 9,
        "Montant": 600.00,
        "Kilométrage": 19500,
        "DateFacture": "2025-02-01",
        "MoyenDePaiement": "Carte bancaire"
    },
    {
        "contratLocation": 10,
        "Montant": 850.00,
        "Kilométrage": 27500,
        "DateFacture": "2025-03-01",
        "MoyenDePaiement": "Espèce"
    },
    {
        "contratLocation": 11,
        "Montant": 957.00,
        "Kilométrage": 98500,
        "DateFacture": "2025-03-01",
        "MoyenDePaiement": "Virement bancaire"
    },
    {
        "contratLocation": 12,
        "Montant": 1050.00,
        "Kilométrage": 47500,
        "DateFacture": "2025-03-01",
        "MoyenDePaiement": "Chèque"
    },
    {
        "contratLocation": 13,
        "Montant": 300.00,
        "Kilométrage": 2000,
        "DateFacture": "2025-03-01",
        "MoyenDePaiement": "Carte bancaire"
    },
    {
        "contratLocation": 14,
        "Montant": 50.00,
        "Kilométrage": 2798,
        "DateFacture": "2025-03-01",
        "MoyenDePaiement": "Carte bancaire"
    },
    {
        "contratLocation": 15,
        "Montant": 324.00,
        "Kilométrage": 500,
        "DateFacture": "2025-03-01",
        "MoyenDePaiement": "Virement bancaire"
    },
    {
        "contratLocation": 16,
        "Montant": 1234.00,
        "Kilométrage": 248,
        "DateFacture": "2025-03-01",
        "MoyenDePaiement": "Carte bancaire"
    },
    {
        "contratLocation": 17,
        "Montant": 324.00,
        "Kilométrage": 2,
        "DateFacture": "2025-03-01",
        "MoyenDePaiement": "Virement bancaire"
    },
    {
        "contratLocation": 18,
        "Montant": 467.00,
        "Kilométrage": 34,
        "DateFacture": "2025-03-01",
        "MoyenDePaiement": "Espèce"
    },
    {
        "contratLocation": 19,
        "Montant": 564.00,
        "Kilométrage": 746,
        "DateFacture": "2025-03-01",
        "MoyenDePaiement": "Espèce"
    },
    {
        "contratLocation": 20,
        "Montant": 745.00,
        "Kilométrage": 438,
        "DateFacture": "2025-03-01",
        "MoyenDePaiement": "Chèque"
    },
    {
        "contratLocation": 21,
        "Montant": 333.00,
        "Kilométrage": 465,
        "DateFacture": "2025-03-01",
        "MoyenDePaiement": "Virement bancaire"
    },
    {
        "contratLocation": 22,
        "Montant": 234.00,
        "Kilométrage": 3498,
        "DateFacture": "2025-03-01",
        "MoyenDePaiement": "Espèce"
    },
    {
        "contratLocation": 23,
        "Montant": 651.00,
        "Kilométrage": 84,
        "DateFacture": "2025-03-01",
        "MoyenDePaiement": "Carte bancaire"
    }
]);

/*----------------------------------------ÉmetLS----------------------------------------*/

db.ÉmetLS.insertMany([
    {
        "signalement": "AB123CD",
        "locataire": "Bob75"
    },
    {
        "signalement": "EF456GH",
        "locataire": "Charlie33"
    },
    {
        "signalement": "IJ789KL",
        "locataire": "Eva75020"
    },
    {
        "signalement": "MN012OP",
        "locataire": "Gaston"
    },
    {
        "signalement": "QR345ST",
        "locataire": "Lola87"
    },
    {
        "signalement": "UV678WX",
        "locataire": "Maxime63"
    },
    {
        "signalement": "YZ901AB",
        "locataire": "Sophie92"
    },
    {
        "signalement": "CD234EF",
        "locataire": "ThomasParis"
    },
    {
        "signalement": "GH567IJ",
        "locataire": "Vanessa78"
    },
    {
        "signalement": "KL890MN",
        "locataire": "Alice92"
    }
]);

/*----------------------------------------CheckIn----------------------------------------*/

db.DégâtsInÉtat.insertMany([
    { "nbDégâtsIn": 0, "EtatLoc": "Bon" },
    { "nbDégâtsIn": 1, "EtatLoc": "Passable" },
    { "nbDégâtsIn": 2, "EtatLoc": "Excellent" },
    { "nbDégâtsIn": 3, "EtatLoc": "Moyen" },
    { "nbDégâtsIn": 4, "EtatLoc": "Mauvais" }
]);


db.CheckIn.insertMany([
    { "contrat": 1, "Kilométrage": 65000, "niveauCarburant": 60, "PhotoLoc": null, "dégatsinetat": 0 },
    { "contrat": 2, "Kilométrage": 70000, "niveauCarburant": 65, "PhotoLoc": null, "dégatsinetat": 1 },
    { "contrat": 3, "Kilométrage": 75000, "niveauCarburant": 60, "PhotoLoc": null, "dégatsinetat": 2 },
    { "contrat": 4, "Kilométrage": 80000, "niveauCarburant": 55, "PhotoLoc": null, "dégatsinetat": 3 },
    { "contrat": 5, "Kilométrage": 85000, "niveauCarburant": 45, "PhotoLoc": null, "dégatsinetat": 0 },
    { "contrat": 6, "Kilométrage": 90000, "niveauCarburant": 30, "PhotoLoc": null, "dégatsinetat": 1 },
    { "contrat": 7, "Kilométrage": 95000, "niveauCarburant": 35, "PhotoLoc": null, "dégatsinetat": 2 },
    { "contrat": 8, "Kilométrage": 100000, "niveauCarburant": 40, "PhotoLoc": null, "dégatsinetat": 2 },
    { "contrat": 9, "Kilométrage": 105000, "niveauCarburant": 35, "PhotoLoc": null, "dégatsinetat": 3 },
    { "contrat": 10, "Kilométrage": 110000, "niveauCarburant": 20, "PhotoLoc": null, "dégatsinetat": 2 },
    { "contrat": 11, "Kilométrage": 115000, "niveauCarburant": 32, "PhotoLoc": null, "dégatsinetat": 0 },
    { "contrat": 12, "Kilométrage": 120000, "niveauCarburant": 21, "PhotoLoc": null, "dégatsinetat": 1 },
    { "contrat": 13, "Kilométrage": 125000, "niveauCarburant": 46, "PhotoLoc": null, "dégatsinetat": 3 },
    { "contrat": 14, "Kilométrage": 130000, "niveauCarburant": 15, "PhotoLoc": null, "dégatsinetat": 0 },
    { "contrat": 15, "Kilométrage": 135000, "niveauCarburant": 27, "PhotoLoc": null, "dégatsinetat": 1 },
    { "contrat": 16, "Kilométrage": 140000, "niveauCarburant": 38, "PhotoLoc": null, "dégatsinetat": 3 },
    { "contrat": 17, "Kilométrage": 145000, "niveauCarburant": 19, "PhotoLoc": null, "dégatsinetat": 0 },
    { "contrat": 18, "Kilométrage": 150000, "niveauCarburant": 34, "PhotoLoc": null, "dégatsinetat": 2 },
    { "contrat": 19, "Kilométrage": 155000, "niveauCarburant": 36, "PhotoLoc": null, "dégatsinetat": 3 },
    { "contrat": 20, "Kilométrage": 160000, "niveauCarburant": 21, "PhotoLoc": null, "dégatsinetat": 2 },
    { "contrat": 21, "Kilométrage": 165000, "niveauCarburant": 19, "PhotoLoc": null, "dégatsinetat": 3 },
    { "contrat": 22, "Kilométrage": 170000, "niveauCarburant": 33, "PhotoLoc": null, "dégatsinetat": 2 },
    { "contrat": 23, "Kilométrage": 175000, "niveauCarburant": 26, "PhotoLoc": null, "dégatsinetat": 2 }
]);

/*----------------------------------------CheckOut----------------------------------------*/

db.DégâtsOutÉtat.insertMany([
    { "nbDégâtsOut": 0, "EtatLoc": "Bon" },
    { "nbDégâtsOut": 1, "EtatLoc": "Passable" },
    { "nbDégâtsOut": 2, "EtatLoc": "Excellent" },
    { "nbDégâtsOut": 3, "EtatLoc": "Moyen" },
    { "nbDégâtsOut": 4, "EtatLoc": "Médiocre" },
    { "nbDégâtsOut": 6, "EtatLoc": "Mauvais" },
    { "nbDégâtsOut": 8, "EtatLoc": "Exécrable" }
]);

db.CheckOut.insertMany([
    { "contrat": 1, "Kilométrage": 65123, "niveauCarburant": 58, "dégatsoutetat": 0 },
    { "contrat": 2, "Kilométrage": 72340, "niveauCarburant": 42, "dégatsoutetat": 1 },
    { "contrat": 3, "Kilométrage": 75658, "niveauCarburant": 23, "dégatsoutetat": 2 },
    { "contrat": 4, "Kilométrage": 80998, "niveauCarburant": 60, "dégatsoutetat": 2 },
    { "contrat": 5, "Kilométrage": 87654, "niveauCarburant": 32, "dégatsoutetat": 4 },
    { "contrat": 6, "Kilométrage": 93450, "niveauCarburant": 24, "dégatsoutetat": 6 },
    { "contrat": 7, "Kilométrage": 96263, "niveauCarburant": 37, "dégatsoutetat": 6 },
    { "contrat": 8, "Kilométrage": 101570, "niveauCarburant": 40, "dégatsoutetat": 0 },
    { "contrat": 9, "Kilométrage": 105142, "niveauCarburant": 30, "dégatsoutetat": 3 },
    { "contrat": 10, "Kilométrage": 113216, "niveauCarburant": 20, "dégatsoutetat": 0 },
    { "contrat": 11, "Kilométrage": 113216, "niveauCarburant": 20, "dégatsoutetat": 1 },
    { "contrat": 12, "Kilométrage": 120001, "niveauCarburant": 21, "dégatsoutetat": 2 },
    { "contrat": 13, "Kilométrage": 128985, "niveauCarburant": 1, "dégatsoutetat": 8 },
    { "contrat": 14, "Kilométrage": 130150, "niveauCarburant": 15, "dégatsoutetat": 0 },
    { "contrat": 15, "Kilométrage": 135002, "niveauCarburant": 27, "dégatsoutetat": 1 },
    { "contrat": 16, "Kilométrage": 140025, "niveauCarburant": 38, "dégatsoutetat": 3 },
    { "contrat": 17, "Kilométrage": 145895, "niveauCarburant": 19, "dégatsoutetat": 0 },
    { "contrat": 18, "Kilométrage": 150132, "niveauCarburant": 34, "dégatsoutetat": 0 },
    { "contrat": 19, "Kilométrage": 155846, "niveauCarburant": 36, "dégatsoutetat": 4 },
    { "contrat": 20, "Kilométrage": 161478, "niveauCarburant": 21, "dégatsoutetat": 2 },
    { "contrat": 21, "Kilométrage": 165478, "niveauCarburant": 19, "dégatsoutetat": 4 },
    { "contrat": 22, "Kilométrage": 176523, "niveauCarburant": 33, "dégatsoutetat": 0 },
    { "contrat": 23, "Kilométrage": 175698, "niveauCarburant": 26, "dégatsoutetat": 0 }
]);
