/*----------------------------------------Client----------------------------------------*/

INSERT INTO Client VALUES('Bidule', 'Machin', 'Chouette', '11-02-1998', NULL, 'Une chaîne de caractère');
INSERT INTO Client VALUES('Alice92', 'Dupont', 'Alice', '1990-05-12', NULL, 'Apt. 5B, 123 Rue des Lilas, 75010 Paris, France');
INSERT INTO Client VALUES('Bob75', 'Martin', 'Bob', '1985-08-25', NULL, '25 Rue des Cerisiers, 92130 Issy-les-Moulineaux, France');
INSERT INTO Client VALUES('Charlie33', 'Durand', 'Charlie', '1979-03-18', NULL, '123 Chemin du Mont Blanc, 74400 Chamonix-Mont-Blanc, France');
INSERT INTO Client VALUES('Eva75020', 'Lefèvre', 'Eva', '1982-11-30', NULL, '10 Avenue de la Mer, 06600 Antibes, France');
INSERT INTO Client VALUES('Gaston', 'Dumas', 'Gaston', '1974-09-03', NULL, '42 Rue du Faubourg Saint-Antoine, 75011 Paris, France');
INSERT INTO Client VALUES('Lola87', 'Girard', 'Lola', '1987-07-15', NULL, '5 Chemin des Vignes, 77123 Montcourt-Fromonville, France');
INSERT INTO Client VALUES('Maxime63', 'Lefort', 'Maxime', '1995-12-08', NULL, '15 Avenue des Champs-Élysées, 75008 Paris, France');
INSERT INTO Client VALUES('Sophie92', 'Bertrand', 'Sophie', '1992-04-22', NULL, 'Chemin des Écureuils, 12345 Forêt de Brocéliande, France');
INSERT INTO Client VALUES('ThomasParis', 'Moreau', 'Thomas', '1980-06-10', NULL, '8 Rue des Fantômes, 28000 Chartres, France');
INSERT INTO Client VALUES('Vanessa78', 'Boucher', 'Vanessa', '1988-02-17', NULL, '50 Rue des Usines, 69002 Lyon, France');

INSERT INTO Client VALUES('AlphaCars', 'Alpha Cars Ltd', 'Location de voitures', '1995-10-20', NULL, '123 Rue des Entreprises, 83990 Saint-Tropez, France');
INSERT INTO Client VALUES('BetaRent', 'Beta Rent SAS', 'Location de véhicules', '1990-06-15', NULL, '25 Avenue des Affaires, 30000 Nîmes, France');
INSERT INTO Client VALUES('GammaAuto', 'Gamma Automobiles SA', 'Vente et location de voitures', '1988-03-05', NULL, '10 Boulevard des Autos, 34000 Montpellier, France');
INSERT INTO Client VALUES('DeltaVoyage', 'Delta Voyages SAS', 'Agence de voyages', '1998-12-12', NULL, '42 Avenue des Voyages, 13000 Marseille, France');
INSERT INTO Client VALUES('EchoTravel', 'Echo Travel SARL', 'Organisation de séjours', '2005-07-08', NULL, '5 Rue du Voyage, 60200 Compiègne, France');


/*----------------------------------------Compte----------------------------------------*/
INSERT INTO Compte VALUES('Bidule', 'f6ae268d2f144b0ab4f6ae117e2f91c36fbf471c85afc16567f762d9c4c16911');
INSERT INTO Compte VALUES('Alice92', 'f6ae268d2f144b0ab4f6ae117e2f91c36fbf471c85afc16567f762d9c4c16911');
INSERT INTO Compte VALUES('Bob75', 'f6ae268d2f144b0ab4f6ae117e2f91c36fbf471c85afc16567f762d9c4c16911');
INSERT INTO Compte VALUES('Charlie33', 'f6ae268d2f144b0ab4f6ae117e2f91c36fbf471c85afc16567f762d9c4c16911');
INSERT INTO Compte VALUES('Eva75020', 'f6ae268d2f144b0ab4f6ae117e2f91c36fbf471c85afc16567f762d9c4c16911');
INSERT INTO Compte VALUES('Maxime63', 'f6ae268d2f144b0ab4f6ae117e2f91c36fbf471c85afc16567f762d9c4c16911');
INSERT INTO Compte VALUES('Sophie92', 'f6ae268d2f144b0ab4f6ae117e2f91c36fbf471c85afc16567f762d9c4c16911');
INSERT INTO Compte VALUES('Vanessa78', 'f6ae268d2f144b0ab4f6ae117e2f91c36fbf471c85afc16567f762d9c4c16911');
INSERT INTO Compte VALUES('AlphaCars', 'f6ae268d2f144b0ab4f6ae117e2f91c36fbf471c85afc16567f762d9c4c16911');
INSERT INTO Compte VALUES('BetaRent', 'f6ae268d2f144b0ab4f6ae117e2f91c36fbf471c85afc16567f762d9c4c16911');
INSERT INTO Compte VALUES('GammaAuto', 'f6ae268d2f144b0ab4f6ae117e2f91c36fbf471c85afc16567f762d9c4c16911');
INSERT INTO Compte VALUES('DeltaVoyage', 'f6ae268d2f144b0ab4f6ae117e2f91c36fbf471c85afc16567f762d9c4c16911');
INSERT INTO Compte VALUES('EchoTravel', 'f6ae268d2f144b0ab4f6ae117e2f91c36fbf471c85afc16567f762d9c4c16911');





/*----------------------------------------Propriétaire----------------------------------------*/

INSERT INTO Propriétaire VALUES('Bidule');
INSERT INTO Propriétaire VALUES('Alice92');
INSERT INTO Propriétaire VALUES('Bob75');
INSERT INTO Propriétaire VALUES('Charlie33');
INSERT INTO Propriétaire VALUES('Eva75020');
INSERT INTO Propriétaire VALUES('Gaston');
INSERT INTO Propriétaire VALUES('Lola87');
INSERT INTO Propriétaire VALUES('Maxime63');
INSERT INTO Propriétaire VALUES('Sophie92');
INSERT INTO Propriétaire VALUES('ThomasParis');
INSERT INTO Propriétaire VALUES('Vanessa78');
-- INSERT INTO Propriétaire VALUES('Taupe'); KO parce que il n'y a pas de client Taupe

/*----------------------------------------Locataire----------------------------------------*/

INSERT INTO Locataire VALUES('Bidule', '123ABC', '2025-06-30');
INSERT INTO Locataire VALUES('Alice92', '456DEF', '2024-12-15');
INSERT INTO Locataire VALUES('Bob75', '789GHI', '2023-10-22');
INSERT INTO Locataire VALUES('Charlie33', '012JKL', '2025-03-18');
INSERT INTO Locataire VALUES('Eva75020', '345MNO', '2024-08-05');
INSERT INTO Locataire VALUES('Gaston', '678PQR', '2023-11-30');
INSERT INTO Locataire VALUES('Lola87', '901STU', '2025-09-10');
INSERT INTO Locataire VALUES('Maxime63', '234VWX', '2024-05-28');
INSERT INTO Locataire VALUES('Sophie92', '567YZA', '2023-07-14');
INSERT INTO Locataire VALUES('ThomasParis', '890BCD', '2025-02-01');
INSERT INTO Locataire VALUES('Vanessa78', '123EFG', '2024-04-17');
/*INSERT INTO Locataire VALUES('Charlie33', '012JKL', '2032-03-18','18598-01-02');
INSERT INTO Locataire VALUES('Eva75020', '345MNO', '2028-08-05', '2034-06-19');
INSERT INTO Locataire VALUES('Gaston', '678PQR', '2100-11-30', '2200-11-30');*/

/*----------------------------------------Entreprise----------------------------------------*/

INSERT INTO Entreprise VALUES('AlphaCars', 123456789, '{Conducteur 1, Conducteur 2}');
INSERT INTO Entreprise VALUES('BetaRent', 987654321, '{Conducteur 3, Conducteur 4}');
INSERT INTO Entreprise VALUES('GammaAuto', 135792468, '{Conducteur 5}');
INSERT INTO Entreprise VALUES('DeltaVoyage', 246813579, '{Conducteur 1, Conducteur 3}');
INSERT INTO Entreprise VALUES('EchoTravel', 369258147, '{Conducteur 2, Conducteur 4, Conducteur 5}');

/*----------------------------------------ContratAssurance----------------------------------------*/

INSERT INTO ContratAssurance VALUES(0001);
INSERT INTO ContratAssurance VALUES(0002);
INSERT INTO ContratAssurance VALUES(0003);
INSERT INTO ContratAssurance VALUES(0004);
INSERT INTO ContratAssurance VALUES(0005);
INSERT INTO ContratAssurance VALUES(0006);
INSERT INTO ContratAssurance VALUES(0007);
INSERT INTO ContratAssurance VALUES(0008);
INSERT INTO ContratAssurance VALUES(0009);
INSERT INTO ContratAssurance VALUES(0010);
INSERT INTO ContratAssurance VALUES(0011);
INSERT INTO ContratAssurance VALUES(0012);
INSERT INTO ContratAssurance VALUES(0013);
INSERT INTO ContratAssurance VALUES(0014);
INSERT INTO ContratAssurance VALUES(0015);
INSERT INTO ContratAssurance VALUES(0016);
INSERT INTO ContratAssurance VALUES(0017);
INSERT INTO ContratAssurance VALUES(0018);
INSERT INTO ContratAssurance VALUES(0019);
INSERT INTO ContratAssurance VALUES(0020);
INSERT INTO ContratAssurance VALUES(0021);
INSERT INTO ContratAssurance VALUES(0022);
INSERT INTO ContratAssurance VALUES(0023);
INSERT INTO ContratAssurance VALUES(0024);

/*----------------------------------------Franchise----------------------------------------*/

INSERT INTO Franchise VALUES (0001, 'Sans réduction');
INSERT INTO Franchise VALUES (0002, 'Franchise réduite');
INSERT INTO Franchise VALUES (0003, 'Zéro franchise');
INSERT INTO Franchise VALUES (0004, 'Sans réduction');
INSERT INTO Franchise VALUES (0005, 'Franchise réduite');
INSERT INTO Franchise VALUES (0006, 'Zéro franchise');
INSERT INTO Franchise VALUES (0007, 'Sans réduction');
INSERT INTO Franchise VALUES (0008, 'Franchise réduite');
INSERT INTO Franchise VALUES (0009, 'Zéro franchise');
INSERT INTO Franchise VALUES (0010, 'Sans réduction');
INSERT INTO Franchise VALUES (0011, 'Franchise réduite');
INSERT INTO Franchise VALUES (0012, 'Zéro franchise');
INSERT INTO Franchise VALUES (0013, 'Zéro franchise');
INSERT INTO Franchise VALUES (0014, 'Zéro franchise');
INSERT INTO Franchise VALUES (0015, 'Franchise réduite');
INSERT INTO Franchise VALUES (0016, 'Sans réduction');
INSERT INTO Franchise VALUES (0017, 'Franchise réduite');
INSERT INTO Franchise VALUES (0018, 'Franchise réduite');
INSERT INTO Franchise VALUES (0019, 'Sans réduction');
INSERT INTO Franchise VALUES (0020, 'Franchise réduite');
INSERT INTO Franchise VALUES (0021, 'Zéro franchise');
INSERT INTO Franchise VALUES (0022, 'Zéro franchise');
INSERT INTO Franchise VALUES (0023, 'Franchise réduite');
INSERT INTO Franchise VALUES (0024, 'Sans réduction');

/*----------------------------------------ResponsableQualité----------------------------------------*/

INSERT INTO ResponsableQualité VALUES (1, 'Excellent');
INSERT INTO ResponsableQualité VALUES (2, 'Bon');
INSERT INTO ResponsableQualité VALUES (3, 'Passable');
INSERT INTO ResponsableQualité VALUES (4, 'Moyen');
INSERT INTO ResponsableQualité VALUES (5, 'Médiocre');
INSERT INTO ResponsableQualité VALUES (6, 'Mauvais');
INSERT INTO ResponsableQualité VALUES (7, 'Exécrable');
INSERT INTO ResponsableQualité VALUES (8, 'Exécrable');
INSERT INTO ResponsableQualité VALUES (9, 'Mauvais');
INSERT INTO ResponsableQualité VALUES (10, 'Médiocre');
INSERT INTO ResponsableQualité VALUES (11, 'Moyen');
INSERT INTO ResponsableQualité VALUES (12, 'Passable');
INSERT INTO ResponsableQualité VALUES (13, 'Bon');
INSERT INTO ResponsableQualité VALUES (14, 'Excellent');
INSERT INTO ResponsableQualité VALUES (15, 'Excellent');
INSERT INTO ResponsableQualité VALUES (16, 'Bon');
INSERT INTO ResponsableQualité VALUES (17, 'Passable');
INSERT INTO ResponsableQualité VALUES (18, 'Moyen');
INSERT INTO ResponsableQualité VALUES (19, 'Médiocre');
INSERT INTO ResponsableQualité VALUES (20, 'Mauvais');
INSERT INTO ResponsableQualité VALUES (21, 'Exécrable');
INSERT INTO ResponsableQualité VALUES (22, 'Excellent');
INSERT INTO ResponsableQualité VALUES (23, 'Passable');
INSERT INTO ResponsableQualité VALUES (24, 'Mauvais');

/*----------------------------------------Véhicule----------------------------------------*/

-- INSERT INTO Véhicule VALUES('N1-QU3-NFI8', 'Citadine', 'Rolls Royce', 'Phantom', 'Noir', 'Full Options', 'Diesel', '2180-04-28', 200000000, 'Yes bébé alors ça marche ? Je suis avec mon gars Patrick sapé avec un régular camouflage urbain  EXTRAAAAAAAAAA LARGEEEEEEEEE, matte la paire de godasses, c''est même plus des godasses c''est des grolles bien serrées, le raclo est stressé', 23498654, 1, 'Bidule');
INSERT INTO Véhicule VALUES ('AB123CD', 'Compacte', 'Renault', 'Clio', 'Rouge', 'Climatisation, Vitres électriques', 'Essence', '2020-05-15', 15000, 'Bonne condition générale', 0001, 1, 'Alice92');
INSERT INTO Véhicule VALUES ('EF777GH', 'Berline', 'Peugeot', '508', 'Bleu', 'Sièges chauffants, Caméra de recul', 'Diesel', '2019-11-15', 18000, 'Bien entretenu, faible consommation', 0016, 16, 'Alice92');
INSERT INTO Véhicule VALUES ('IJ888KL', 'Berline', 'Citroën', 'C5 Aircross', 'Blanc', 'GPS, Bluetooth, Sièges en cuir', 'Diesel', '2019-09-30', 20000, 'Confortable et spacieux', 0020, 20, 'Alice92');
INSERT INTO Véhicule VALUES ('EF456GH', 'Berline', 'Peugeot', '308', 'Noir', 'GPS, Bluetooth, Caméra de recul', 'Diesel', '2019-10-20', 22000, 'Quelques éraflures sur la carrosserie', 0002, 2, 'Bob75');
INSERT INTO Véhicule VALUES ('EF888GH', 'SUV', 'Toyota', 'RAV4', 'Gris', 'Toit panoramique, Système de navigation', 'Hybride', '2018-08-20', 25000, 'Polyvalent et économe', 0017, 17, 'Bob75');
INSERT INTO Véhicule VALUES ('IJ789KL', 'SUV', 'Toyota', 'RAV4', 'Gris', 'Toit ouvrant, Sièges chauffants, Sièges massants, Vitres teintées, Mini-écrans intégrés', 'Hybride', '2018-12-30', 30000, 'Bien entretenu, faible consommation', 0003, 3, 'Charlie33');
INSERT INTO Véhicule VALUES ('IJ777KL', 'Compacte', 'Renault', 'Megane', 'Rouge', 'Climatisation, Vitres électriques', 'Essence', '2020-06-25', 22000, 'Excellent état général', 0019, 19, 'Charlie33');
INSERT INTO Véhicule VALUES ('MN012OP', 'Utilitaire', 'Ford', 'Transit', 'Blanc', 'Porte latérale coulissante', 'Diesel', '2021-02-10', 10000, 'Presque neuf, très peu utilisé', 0004, 4, 'Eva75020');
INSERT INTO Véhicule VALUES ('QR111ST', 'Supercar', 'Pagani', 'Huayra', 'Noir', 'Échappement sport, Écran tactile', 'Diesel', '2021-06-10', 17000, 'Art et performance', 0014, 14, 'Eva75020');
INSERT INTO Véhicule VALUES ('QR222ST', 'Hypercar', 'Rimac', 'Nevera', 'Vert', 'Aérodynamique avancée, Intérieur personnalisé', 'Électrique', '2020-10-25', 22000, 'Le futur de la vitesse', 0015, 15, 'Eva75020');
INSERT INTO Véhicule VALUES ('ST111UV', 'Crossover', 'Nissan', 'Qashqai', 'Rouge', 'Toit panoramique, Système de navigation', 'Hybride', '2020-06-20', 18000, 'Polyvalent et confortable', 0022, 22, 'Eva75020');
INSERT INTO Véhicule VALUES ('ST222UV', 'Cabriolet', 'Mazda', 'MX-5', 'Gris', 'Capote électrique, Sièges en cuir', 'Diesel', '2018-09-25', 22000, 'Plaisir de conduite à ciel ouvert', 0023, 23, 'Eva75020');
INSERT INTO Véhicule VALUES ('ST333UV', 'Compacte', 'Kia', 'Ceed', 'Vert', 'Radar de recul, Caméra de recul', 'Électrique', '2020-02-15', 20000, 'Fiabilité et économie', 0024, 24, 'Eva75020');
INSERT INTO Véhicule VALUES ('QR345ST', 'Coupé', 'BMW', 'Series 4', 'Bleu', 'Toit panoramique, Sièges en cuir, Habitacle en Alcantara', 'Essence', '2017-08-25', 40000, 'Conduite sportive, bon état général', 0005, 5, 'Gaston');
INSERT INTO Véhicule VALUES ('AB111CD', 'Compacte', 'Ferrari', 'F8 Tributo', 'Jaune', 'Toit amovible, Sièges en cuir', 'Essence', '2021-04-20', 10000, 'Performances impressionnantes', 0011, 11, 'Gaston');
INSERT INTO Véhicule VALUES ('UV678WX', 'Cabriolet', 'Audi', 'A3', 'Blanc', 'Capote électrique, Système audio Bose', 'Essence', '2019-04-18', 25000, 'Vroom Vroom', 0006, 6, 'Lola87');
INSERT INTO Véhicule VALUES ('AB333CD', 'SUV', 'Lamborghini', 'Urus', 'Orange', 'Toit panoramique, Sièges chauffants, Système de navigation', 'Hybride', '2019-05-10', 30000, 'Puissance et luxe', 0013, 13, 'Lola87');
INSERT INTO Véhicule VALUES ('YZ901AB', 'Monospace', 'Citroën', 'Grand C4 Picasso', 'Gris', 'Grand coffre, Caméra de recul', 'Diesel', '2016-11-12', 60000, 'Usage familial, Moteur Blue HDI pire moteur ALL TIME', 0007, 7, 'Maxime63');
INSERT INTO Véhicule VALUES ('EF999GH', 'Citadine', 'Volkswagen', 'Golf', 'Noir', 'Radar de stationnement, Régulateur de vitesse', 'Essence', '2020-03-10', 20000, 'Compacte et confortable', 0018, 18, 'Maxime63');
INSERT INTO Véhicule VALUES ('CD234EF', 'Citadine', 'Volkswagen', 'Polo', 'Vert', 'Radar de recul, Radar de police, Radar de radar, Encore des radars, C''est bien les radars', 'Essence', '2020-07-05', 18000, 'Faible consommation, idéale en ville, surtout avec les radars', 0008, 8, 'Sophie92');
INSERT INTO Véhicule VALUES ('GH567IJ', 'Compacte', 'Ford', 'Focus', 'Vert', 'Start-Stop, Phares LED, Boissons fraîches et gazeuses', 'Diesel', '2019-02-28', 28000, 'Usage quotidien, bon état général', 0009, 9, 'ThomasParis');
INSERT INTO Véhicule VALUES ('AB222CD', 'Cabriolet', 'Porsche', '911 Turbo S', 'Argent', 'Toit électrique, Système audio haut de gamme', 'Essence', '2020-09-15', 20000, 'Conduite sportive et confortable', 0012, 12, 'ThomasParis');
INSERT INTO Véhicule VALUES ('IJ999KL', 'SUV', 'Peugeot', '3008', 'Gris', 'Toit ouvrant panoramique, Système de son premium', 'Gaz', '2018-12-05', 28000, 'Style et fonctionnalité', 0021, 21, 'ThomasParis');
INSERT INTO Véhicule VALUES ('KL890MN', 'Crossover', 'Nissan', 'Qashqai', 'Rouge', 'Pas d''options', 'Essence', '2018-06-15', 35000, 'Polyvalent, enfin je crois', 0010, 10, 'Vanessa78');

/*----------------------------------------LocationPL----------------------------------------*/

INSERT INTO LocationPL VALUES ('Alice92', 'Bob75');
INSERT INTO LocationPL VALUES ('Alice92', 'Lola87');
INSERT INTO LocationPL VALUES ('Alice92', 'Eva75020');
INSERT INTO LocationPL VALUES ('Bob75', 'Charlie33');
INSERT INTO LocationPL VALUES ('Bob75', 'Gaston');
INSERT INTO LocationPL VALUES ('Charlie33', 'Vanessa78');
INSERT INTO LocationPL VALUES ('Charlie33', 'Maxime63');
INSERT INTO LocationPL VALUES ('Eva75020', 'Lola87');
INSERT INTO LocationPL VALUES ('Eva75020', 'ThomasParis');
INSERT INTO LocationPL VALUES ('Eva75020', 'Vanessa78');
INSERT INTO LocationPL VALUES ('Eva75020', 'Sophie92');
INSERT INTO LocationPL VALUES ('Eva75020', 'Alice92');
INSERT INTO LocationPL VALUES ('Eva75020', 'Gaston');
INSERT INTO LocationPL VALUES ('Gaston', 'Maxime63');
INSERT INTO LocationPL VALUES ('Gaston', 'Bob75');
INSERT INTO LocationPL VALUES ('Lola87', 'Maxime63');
INSERT INTO LocationPL VALUES ('Sophie92', 'ThomasParis');
INSERT INTO LocationPL VALUES ('Maxime63', 'Sophie92');
INSERT INTO LocationPL VALUES ('Maxime63', 'Gaston');
INSERT INTO LocationPL VALUES ('ThomasParis', 'Lola87');
INSERT INTO LocationPL VALUES ('ThomasParis', 'Maxime63');
INSERT INTO LocationPL VALUES ('ThomasParis', 'Gaston');
INSERT INTO LocationPL VALUES ('Vanessa78', 'Alice92');

/*----------------------------------------LocationLV----------------------------------------*/

-- INSERT INTO LocationLV VALUES ('N1QU3NFI8', 'Bidule'); Problème c'est que Bidule et Truc louent le mêle véhicule, il n'y a pas de notion de temps
INSERT INTO LocationLV VALUES ('AB123CD', 'Bob75');
INSERT INTO LocationLV VALUES ('EF777GH', 'Lola87');
INSERT INTO LocationLV VALUES ('IJ888KL', 'Eva75020');
INSERT INTO LocationLV VALUES ('EF456GH', 'Charlie33');
INSERT INTO LocationLV VALUES ('EF888GH', 'Gaston');
INSERT INTO LocationLV VALUES ('IJ789KL', 'Vanessa78');
INSERT INTO LocationLV VALUES ('IJ777KL', 'Maxime63');
INSERT INTO LocationLV VALUES ('MN012OP', 'Lola87');
INSERT INTO LocationLV VALUES ('QR111ST', 'ThomasParis');
INSERT INTO LocationLV VALUES ('QR222ST', 'Vanessa78');
INSERT INTO LocationLV VALUES ('ST111UV', 'Sophie92');
INSERT INTO LocationLV VALUES ('ST222UV', 'Alice92');
INSERT INTO LocationLV VALUES ('ST333UV', 'Gaston');
INSERT INTO LocationLV VALUES ('QR345ST', 'Maxime63');
INSERT INTO LocationLV VALUES ('AB111CD', 'Lola87');
INSERT INTO LocationLV VALUES ('UV678WX', 'Maxime63');
INSERT INTO LocationLV VALUES ('CD234EF', 'ThomasParis');
INSERT INTO LocationLV VALUES ('YZ901AB', 'Sophie92');
INSERT INTO LocationLV VALUES ('EF999GH', 'Gaston');
INSERT INTO LocationLV VALUES ('GH567IJ', 'Lola87');
INSERT INTO LocationLV VALUES ('AB222CD', 'Maxime63');
INSERT INTO LocationLV VALUES ('IJ999KL', 'Gaston');
INSERT INTO LocationLV VALUES ('KL890MN', 'Alice92');

/*----------------------------------------LocationEV----------------------------------------*/

-- INSERT INTO LocationEV VALUES ('N1-QU3-NFI8', 'Truc'); --Problème c'est que Bidule et Truc louent le mêle véhicule, il n'y a pas de notion de temps
INSERT INTO LocationEV VALUES ('AB123CD', 'AlphaCars');
INSERT INTO LocationEV VALUES ('EF456GH', 'BetaRent');
INSERT INTO LocationEV VALUES ('IJ789KL', 'GammaAuto');
INSERT INTO LocationEV VALUES ('MN012OP', 'DeltaVoyage');
INSERT INTO LocationEV VALUES ('QR345ST', 'EchoTravel');
INSERT INTO LocationEV VALUES ('UV678WX', 'AlphaCars');
INSERT INTO LocationEV VALUES ('YZ901AB', 'BetaRent');
INSERT INTO LocationEV VALUES ('CD234EF', 'GammaAuto');
INSERT INTO LocationEV VALUES ('GH567IJ', 'DeltaVoyage');
INSERT INTO LocationEV VALUES ('KL890MN', 'EchoTravel');

/*----------------------------------------Signalement----------------------------------------*/

INSERT INTO Signalement VALUES ('AB123CD', 2, 1);
INSERT INTO Signalement VALUES ('EF456GH', 3, 2);
INSERT INTO Signalement VALUES ('IJ789KL', 0, 3);
INSERT INTO Signalement VALUES ('MN012OP', 1, 4);
INSERT INTO Signalement VALUES ('QR345ST', 2, 5);
INSERT INTO Signalement VALUES ('UV678WX', 3, 6);
INSERT INTO Signalement VALUES ('YZ901AB', 0, 7);
INSERT INTO Signalement VALUES ('CD234EF', 1, 8);
INSERT INTO Signalement VALUES ('GH567IJ', 2, 9);
INSERT INTO Signalement VALUES ('KL890MN', 3, 10);

/*----------------------------------------Signaler----------------------------------------*/

INSERT INTO Signaler VALUES ('AB123CD', 'Bob75');
INSERT INTO Signaler VALUES ('EF456GH', 'Charlie33');
INSERT INTO Signaler VALUES ('IJ789KL', 'Vanessa78');
INSERT INTO Signaler VALUES ('MN012OP', 'Lola87');
INSERT INTO Signaler VALUES ('QR345ST', 'Maxime63');
INSERT INTO Signaler VALUES ('UV678WX', 'Maxime63');
INSERT INTO Signaler VALUES ('YZ901AB', 'Sophie92');
INSERT INTO Signaler VALUES ('CD234EF', 'ThomasParis');
INSERT INTO Signaler VALUES ('GH567IJ', 'Lola87');
INSERT INTO Signaler VALUES ('KL890MN', 'Alice92');

/*----------------------------------------PropriétéLoc----------------------------------------*/

INSERT INTO PropriétéLoc VALUES ('Alice92', 'AB123CD', '2024-05-01', '2024-06-01', 1500, 50, '{France, Belgique, Suisse, Espagne}');
INSERT INTO PropriétéLoc VALUES ('Alice92', 'EF777GH', '2024-06-01', '2024-07-01', 1800, 60, '{France, Belgique, Suisse}');
INSERT INTO PropriétéLoc VALUES ('Alice92', 'IJ888KL', '2024-07-01', '2024-08-01', 2000, 70, '{France, Belgique, Suisse, Espagne, Suède}');

INSERT INTO PropriétéLoc VALUES ('Bob75', 'EF456GH', '2024-06-01', '2024-07-01', 2000, 60, '{Allemagne, Suisse, Royaume-Uni}');
INSERT INTO PropriétéLoc VALUES ('Bob75', 'EF888GH', '2024-07-01', '2024-08-01', 2200, 70, '{Allemagne, Royaume-Uni}');

INSERT INTO PropriétéLoc VALUES ('Charlie33', 'IJ789KL', '2024-07-01', '2024-08-01', 1800, 55, '{Italie, Espagne, Luxembourg, Belgique, Allemagne, France}');
INSERT INTO PropriétéLoc VALUES ('Charlie33', 'IJ777KL', '2024-08-01', '2024-09-01', 2000, 65, '{Italie, Espagne, Luxembourg, Belgique, Allemagne, France, Danemark}');

INSERT INTO PropriétéLoc VALUES ('Eva75020', 'MN012OP', '2024-08-01', '2024-09-01', 1700, 45, '{Portugal, Royaume-Uni}');
INSERT INTO PropriétéLoc VALUES ('Eva75020', 'QR111ST', '2024-09-01', '2024-10-01', 1900, 55, '{Portugal, Royaume-Uni, France}');
INSERT INTO PropriétéLoc VALUES ('Eva75020', 'QR222ST', '2024-10-01', '2024-11-01', 2100, 60, '{Portugal, Royaume-Uni, France, Espagne}');
INSERT INTO PropriétéLoc VALUES ('Eva75020', 'ST111UV', '2024-11-01', '2024-12-01', 2000, 60, '{Portugal, Royaume-Uni, France, Espagne, Autriche}');
INSERT INTO PropriétéLoc VALUES ('Eva75020', 'ST222UV', '2024-12-01', '2025-01-01', 2100, 65, '{Portugal, Royaume-Uni, France, Espagne, Autriche, Irelande}');
INSERT INTO PropriétéLoc VALUES ('Eva75020', 'ST333UV', '2025-01-01', '2025-02-01', 2200, 70, '{Portugal, Royaume-Uni, France, Espagne, Autriche, Irelande, Danemark}');

INSERT INTO PropriétéLoc VALUES ('Gaston', 'QR345ST', '2024-09-01', '2024-10-01', 1600, 50, '{France, Luxembourg, Suisse}');
INSERT INTO PropriétéLoc VALUES ('Gaston', 'AB111CD', '2024-10-01', '2024-11-01', 1800, 55, '{France, Luxembourg, Suisse, Autriche}');

INSERT INTO PropriétéLoc VALUES ('Lola87', 'UV678WX', '2024-10-01', '2024-11-01', 1900, 55, '{Belgique, Suisse, Italie}');
INSERT INTO PropriétéLoc VALUES ('Lola87', 'AB333CD', '2024-11-01', '2024-12-01', 2000, 60, '{Belgique, Suisse, Italie}');

INSERT INTO PropriétéLoc VALUES ('Maxime63', 'YZ901AB', '2024-11-01', '2024-12-01', 2200, 60, '{Italie, Espagne, Portugal}');
INSERT INTO PropriétéLoc VALUES ('Maxime63', 'EF999GH', '2024-12-01', '2025-01-01', 2300, 65, '{Italie, Espagne, Portugal}');

INSERT INTO PropriétéLoc VALUES ('Sophie92', 'CD234EF', '2024-12-01', '2025-01-01', 2100, 50, '{Portugal, Royaume-Uni, France}');

INSERT INTO PropriétéLoc VALUES ('ThomasParis', 'GH567IJ', '2025-02-01', '2025-03-01', 1800, 55, '{France, Luxembourg, Italie, Portugal}');
INSERT INTO PropriétéLoc VALUES ('ThomasParis', 'AB222CD', '2025-03-01', '2025-04-01', 1900, 60, '{France, Luxembourg, Italie, Portugal, Royaume-Uni}');
INSERT INTO PropriétéLoc VALUES ('ThomasParis', 'IJ999KL', '2025-04-01', '2025-05-01', 2000, 65, '{France, Luxembourg, Italie, Portugal, Royaume-Uni, Suède}');

INSERT INTO PropriétéLoc VALUES ('Vanessa78', 'KL890MN', '2025-05-01', '2025-06-01', 2100, 70, '{Allemagne, Suisse, Espagne}');

/*----------------------------------------ContratLocation----------------------------------------*/

INSERT INTO ContratLocation VALUES (01, '2024-05-01', 'AB123CD');
INSERT INTO ContratLocation VALUES (02, '2024-06-01', 'EF777GH');
INSERT INTO ContratLocation VALUES (03, '2024-07-01', 'IJ888KL');

INSERT INTO ContratLocation VALUES (04, '2024-06-01', 'EF456GH');
INSERT INTO ContratLocation VALUES (05, '2024-07-01', 'EF888GH');

INSERT INTO ContratLocation VALUES (06, '2024-07-01', 'IJ789KL');
INSERT INTO ContratLocation VALUES (07, '2024-08-01', 'IJ777KL');

INSERT INTO ContratLocation VALUES (08, '2024-08-01', 'MN012OP');
INSERT INTO ContratLocation VALUES (09, '2024-09-01', 'QR111ST');
INSERT INTO ContratLocation VALUES (10, '2024-10-01', 'QR222ST');
INSERT INTO ContratLocation VALUES (11, '2024-11-01', 'ST111UV');
INSERT INTO ContratLocation VALUES (12, '2024-12-01', 'ST222UV');
INSERT INTO ContratLocation VALUES (13, '2025-01-01', 'ST333UV');

INSERT INTO ContratLocation VALUES (14, '2024-09-01', 'QR345ST');
INSERT INTO ContratLocation VALUES (15, '2024-10-01', 'AB111CD');

INSERT INTO ContratLocation VALUES (16, '2024-10-01', 'UV678WX');

INSERT INTO ContratLocation VALUES (17, '2024-11-01', 'YZ901AB');
INSERT INTO ContratLocation VALUES (18, '2024-12-01', 'EF999GH');

INSERT INTO ContratLocation VALUES (19, '2024-12-01', 'CD234EF');

INSERT INTO ContratLocation VALUES (20, '2025-02-01', 'GH567IJ');
INSERT INTO ContratLocation VALUES (21, '2025-03-01', 'AB222CD');
INSERT INTO ContratLocation VALUES (22, '2025-04-01', 'IJ999KL');

INSERT INTO ContratLocation VALUES (23, '2025-05-01', 'KL890MN');

/*----------------------------------------Avis----------------------------------------*/

INSERT INTO Avis VALUES ('AB123CD', 01, 1, NULL);
INSERT INTO Avis VALUES ('EF456GH', 04, 3, 'Le véhicule était généralement en bon état, mais j''ai rencontré quelques problèmes mineurs avec la climatisation qui ne fonctionnait pas correctement.');
INSERT INTO Avis VALUES ('IJ789KL', 06, 5, 'Véhicule en excellent état, propre et bien entretenu. Conduite fluide et confortable, aucun problème à signaler.');
INSERT INTO Avis VALUES ('MN012OP', 08, 2, 'Malheureusement, le véhicule avait quelques problèmes mécaniques mineurs qui ont affecté mon expérience de conduite. C''était décevant.');
INSERT INTO Avis VALUES ('QR345ST', 14, 0, 'Le véhicule était dans un état lamentable à la prise en charge. Sale à l''intérieur et à l''extérieur, et il avait des problèmes mécaniques. Très déçu de la qualité du service.');
INSERT INTO Avis VALUES ('UV678WX', 16, 4, 'J''ai beaucoup apprécié conduire ce véhicule. Il était confortable, propre et offrait une conduite agréable. Je le recommanderais sans hésiter.');
INSERT INTO Avis VALUES ('YZ901AB', 17, 3, 'Le véhicule était globalement correct, mais j''ai été déçu de constater que le réservoir de carburant était presque vide lorsque je l''ai pris en charge. Cela aurait pu être mieux préparé.');
INSERT INTO Avis VALUES ('CD234EF', 19, 5, NULL);
INSERT INTO Avis VALUES ('GH567IJ', 20, 2, 'Le principal inconvénient de cette location était le retard lors de la prise en charge du véhicule. Cela a entraîné quelques inconvénients dans mon programme de voyage.');
INSERT INTO Avis VALUES ('KL890MN', 23, 4, NULL);
--INSERT INTO Avis VALUES ('N1-QU3-NFI8', 210, 0, 'Le véhicule est vraiment mauvais ! Comment osez-vous laisser rouler cette !@/$#!! sur la route ????? C''EST INDAMISSBIBLE !!!!!!!!!!!!! RENDEZ L''ARGENT VOUS ALLEZ ENTENDRE PARLER DE MOI SOYEZ-EN CERTAIN ! SI JE POUVAIS J''AURAIS MIS UNE NOTE NÉGATIVE TIENS !');

/*----------------------------------------CheckIn----------------------------------------*/

-- Pas de tests de cohérences entre checkin et checkout
INSERT INTO CheckIn VALUES (01, 0, 65000, 60, 'Bon', NULL);
INSERT INTO CheckIn VALUES (02, 1, 70000, 65, 'Bon', NULL);
INSERT INTO CheckIn VALUES (03, 0, 75000, 60, 'Excellent', NULL);
INSERT INTO CheckIn VALUES (04, 2, 80000, 55, 'Passable', NULL);
INSERT INTO CheckIn VALUES (05, 0, 85000, 45, 'Bon', NULL);
INSERT INTO CheckIn VALUES (06, 1, 90000, 30, 'Passable', NULL);
INSERT INTO CheckIn VALUES (07, 2, 95000, 35, 'Passable', NULL);
INSERT INTO CheckIn VALUES (08, 0, 100000, 40, 'Excellent', NULL);
INSERT INTO CheckIn VALUES (09, 3, 105000, 35, 'Moyen', NULL);
INSERT INTO CheckIn VALUES (10, 0, 110000, 20, 'Excellent', NULL);
INSERT INTO CheckIn VALUES (11, 1, 115000, 32, 'Bon', NULL);
INSERT INTO CheckIn VALUES (12, 2, 120000, 21, 'Passable', NULL);
INSERT INTO CheckIn VALUES (13, 4, 125000, 46, 'Moyen', NULL);
INSERT INTO CheckIn VALUES (14, 0, 130000, 15, 'Bon', NULL);
INSERT INTO CheckIn VALUES (15, 1, 135000, 27, 'Bon', NULL);
INSERT INTO CheckIn VALUES (16, 3, 140000, 38, 'Moyen', NULL);
INSERT INTO CheckIn VALUES (17, 0, 145000, 19, 'Bon', NULL);
INSERT INTO CheckIn VALUES (18, 0, 150000, 34, 'Excellent', NULL);
INSERT INTO CheckIn VALUES (19, 4, 155000, 36, 'Moyen', NULL);
INSERT INTO CheckIn VALUES (20, 2, 160000, 21, 'Passable', NULL);
INSERT INTO CheckIn VALUES (21, 4, 165000, 19, 'Moyen', NULL);
INSERT INTO CheckIn VALUES (22, 0, 170000, 33, 'Excellent', NULL);
INSERT INTO CheckIn VALUES (23, 0, 175000, 26, 'Excellent', NULL);

/*----------------------------------------CheckOut----------------------------------------*/

-- Pas de tests entre les checkout et checkin
INSERT INTO CheckOut VALUES (01, 0, 65123, 58, 'Bon');
INSERT INTO CheckOut VALUES (02, 1, 72340, 42, 'Bon');
INSERT INTO CheckOut VALUES (03, 2, 75658, 23, 'Bon');
INSERT INTO CheckOut VALUES (04, 2, 80998, 60, 'Passable');
INSERT INTO CheckOut VALUES (05, 4, 87654, 32, 'Médiocre');
INSERT INTO CheckOut VALUES (06, 6, 93450, 24, 'Mauvais');
INSERT INTO CheckOut VALUES (07, 6, 96263, 37, 'Mauvais');
INSERT INTO CheckOut VALUES (08, 0, 101570, 40, 'Excellent');
INSERT INTO CheckOut VALUES (09, 3, 105142, 30, 'Moyen');
INSERT INTO CheckOut VALUES (10, 0, 113216, 20, 'Excellent');
INSERT INTO CheckOut VALUES (11, 1, 113216, 20, 'Excellent');
INSERT INTO CheckOut VALUES (12, 2, 120001, 21, 'Passable');
INSERT INTO CheckOut VALUES (13, 8, 128985, 1, 'Exécrable');
INSERT INTO CheckOut VALUES (14, 0, 130150, 15, 'Bon');
INSERT INTO CheckOut VALUES (15, 1, 135002, 27, 'Bon');
INSERT INTO CheckOut VALUES (16, 3, 140025, 38, 'Moyen');
INSERT INTO CheckOut VALUES (17, 0, 145895, 19, 'Bon');
INSERT INTO CheckOut VALUES (18, 0, 150132, 34, 'Excellent');
INSERT INTO CheckOut VALUES (19, 4, 155846, 36, 'Moyen');
INSERT INTO CheckOut VALUES (20, 2, 161478, 21, 'Passable');
INSERT INTO CheckOut VALUES (21, 4, 165478, 19, 'Moyen');
INSERT INTO CheckOut VALUES (22, 0, 176523, 33, 'Excellent');
INSERT INTO CheckOut VALUES (23, 0, 175698, 26, 'Excellent');

/*----------------------------------------Facture----------------------------------------*/

INSERT INTO Facture VALUES (01, 500.00, 20500, '2024-06-01', 'Carte bancaire');
INSERT INTO Facture VALUES (02, 603.00, 25500, '2024-07-01', 'Espèce');
INSERT INTO Facture VALUES (03, 700.00, 18500, '2024-08-01', 'Virement bancaire');
INSERT INTO Facture VALUES (04, 550.00, 22500, '2024-09-01', 'Chèque');
INSERT INTO Facture VALUES (05, 802.00, 30500, '2024-10-01', 'Carte bancaire');
INSERT INTO Facture VALUES (06, 450.00, 15500, '2024-11-01', 'Espèce');
INSERT INTO Facture VALUES (07, 909.00, 28500, '2024-12-01', 'Virement bancaire');
INSERT INTO Facture VALUES (08, 700.00, 21500, '2025-01-01', 'Chèque');
INSERT INTO Facture VALUES (09, 600.00, 19500, '2025-02-01', 'Carte bancaire');
INSERT INTO Facture VALUES (10, 850.00, 27500, '2025-03-01', 'Espèce');
INSERT INTO Facture VALUES (11, 957.00, 98500, '2025-03-01', 'Virement bancaire');
INSERT INTO Facture VALUES (12, 1050.00, 47500, '2025-03-01', 'Chèque');
INSERT INTO Facture VALUES (13, 300.00, 2000, '2025-03-01', 'Carte bancaire');
INSERT INTO Facture VALUES (14, 50.00, 2798, '2025-03-01', 'Carte bancaire');
INSERT INTO Facture VALUES (15, 324.00, 500, '2025-03-01', 'Virement bancaire');
INSERT INTO Facture VALUES (16, 1234.00, 248, '2025-03-01', 'Carte bancaire');
INSERT INTO Facture VALUES (17, 324.00, 2, '2025-03-01', 'Virement bancaire');
INSERT INTO Facture VALUES (18, 467.00, 34, '2025-03-01', 'Espèce');
INSERT INTO Facture VALUES (19, 564.00, 746, '2025-03-01', 'Espèce');
INSERT INTO Facture VALUES (20, 745.00, 438, '2025-03-01', 'Chèque');
INSERT INTO Facture VALUES (21, 333.00, 465, '2025-03-01', 'Virement bancaire');
INSERT INTO Facture VALUES (22, 234.00, 3498, '2025-03-01', 'Espèce');
INSERT INTO Facture VALUES (23, 651.00, 84, '2025-03-01', 'Carte bancaire');

/*----------------------------------------ÉmetLS----------------------------------------*/

INSERT INTO ÉmetLS VALUES ('AB123CD', 'Bob75');
INSERT INTO ÉmetLS VALUES ('EF456GH', 'Charlie33');
INSERT INTO ÉmetLS VALUES ('IJ789KL', 'Eva75020');
INSERT INTO ÉmetLS VALUES ('MN012OP', 'Gaston');
INSERT INTO ÉmetLS VALUES ('QR345ST', 'Lola87');
INSERT INTO ÉmetLS VALUES ('UV678WX', 'Maxime63');
INSERT INTO ÉmetLS VALUES ('YZ901AB', 'Sophie92');
INSERT INTO ÉmetLS VALUES ('CD234EF', 'ThomasParis');
INSERT INTO ÉmetLS VALUES ('GH567IJ', 'Vanessa78');
INSERT INTO ÉmetLS VALUES ('KL890MN', 'Alice92');
