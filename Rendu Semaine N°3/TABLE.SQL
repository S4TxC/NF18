DROP VIEW IF EXISTS Vue_Client;
DROP VIEW IF EXISTS Vue_Véhicule_ContratAssurance;
DROP VIEW IF EXISTS Projection_LocationLV;
DROP VIEW IF EXISTS Vue_PropriétéLoc;
DROP VIEW IF EXISTS Vue_Facture;
DROP VIEW IF EXISTS Vue_Franchise;
DROP VIEW IF EXISTS Vue_CohérenceDates;

DROP TABLE IF EXISTS Franchise;
DROP TABLE IF EXISTS ÉmetLS;
DROP TABLE IF EXISTS Facture;
DROP TABLE IF EXISTS CheckIn;
DROP TABLE IF EXISTS CheckOut;
DROP TABLE IF EXISTS Avis;
DROP TABLE IF EXISTS ContratLocation;
DROP TABLE IF EXISTS PropriétéLoc;
DROP TABLE IF EXISTS Signaler;
DROP TABLE IF EXISTS Signalement;
DROP TABLE IF EXISTS LocationEV;
DROP TABLE IF EXISTS LocationLV;
DROP TABLE IF EXISTS LocationPL;
DROP TABLE IF EXISTS Véhicule;
DROP TABLE IF EXISTS ResponsableQualité;
DROP TABLE IF EXISTS ContratAssurance;
DROP TABLE IF EXISTS Entreprise;
DROP TABLE IF EXISTS Locataire;
DROP TABLE IF EXISTS Propriétaire;
DROP TABLE IF EXISTS Client;

DROP TYPE IF EXISTS TypeF;
DROP TYPE IF EXISTS TypeP;
DROP TYPE IF EXISTS Pays;
DROP TYPE IF EXISTS État;
DROP TYPE IF EXISTS TypeC;
DROP TYPE IF EXISTS Conducteur;

CREATE TYPE Conducteur AS ENUM('Conducteur 1', 'Conducteur 2', 'Conducteur 3', 'Conducteur 4', 'Conducteur 5');

CREATE TYPE TypeC AS ENUM('Essence', 'Diesel', 'Gaz', 'Électrique', 'Hybride');

CREATE TYPE État AS ENUM('Excellent', 'Bon', 'Passable', 'Moyen', 'Médiocre', 'Mauvais', 'Exécrable');

CREATE TYPE Pays as ENUM('France', 'Allemagne', 'Belgique', 'Luxembourg', 'Suisse', 'Italie', 'Espagne', 'Portugal', 'Royaume-Uni', 'Autriche', 'Suède', 'Danemark', 'Irelande');

CREATE TYPE TypeP AS ENUM('Carte bancaire', 'Chèque', 'Espèce', 'Virement bancaire');

CREATE TYPE TypeF AS ENUM('Sans réduction', 'Franchise réduite', 'Zéro franchise');

CREATE TABLE Client(
Pseudo VARCHAR,
Nom VARCHAR,
Prénom VARCHAR,
Âge DATE,
Photo BYTEA,
Coordonées VARCHAR,
PRIMARY KEY(Pseudo)
);

CREATE TABLE Propriétaire(
Pseudo VARCHAR,
PRIMARY KEY (Pseudo),
FOREIGN KEY (Pseudo) REFERENCES Client(Pseudo)
);

CREATE TABLE Locataire(
Pseudo VARCHAR PRIMARY KEY,
N°Permis VARCHAR UNIQUE NOT NULL,
ÉmissionPermis DATE,
ExpirePermis DATE,
CHECK (EXTRACT(YEAR FROM ÉmissionPermis) < EXTRACT(YEAR FROM ExpirePermis)),
FOREIGN KEY (Pseudo) REFERENCES Client(Pseudo)
);

CREATE TABLE Entreprise(
Pseudo VARCHAR PRIMARY KEY,
N°SIREN INTEGER UNIQUE NOT NULL,
ListeConducteur Conducteur[],
FOREIGN KEY (Pseudo) REFERENCES Client(Pseudo)
);

CREATE TABLE ContratAssurance(
NumContratA INTEGER PRIMARY KEY
);

CREATE TABLE ResponsableQualité (
id INTEGER PRIMARY KEY,
AnalyseÉtat État
);

CREATE TABLE Véhicule(
N°Immat VARCHAR,
Catégorie VARCHAR,
Marque VARCHAR,
Modèle VARCHAR,
Couleur VARCHAR,
Options VARCHAR,
Carburant TypeC,
AnnéeMiseCirculation DATE,
Kilométrage NUMERIC,
Description TEXT,
contratA INTEGER NOT NULL,
responsable INTEGER NOT NULL,
propriétaire VARCHAR NOT NULL,
CHECK (Kilométrage > 0),
PRIMARY KEY(N°Immat),
FOREIGN KEY (contratA) REFERENCES ContratAssurance(NumContratA),
FOREIGN KEY (responsable) REFERENCES ResponsableQualité(id),
FOREIGN KEY (propriétaire) REFERENCES Propriétaire(Pseudo)
);

CREATE TABLE LocationPL (
propriétaire VARCHAR,
locataire VARCHAR,
PRIMARY KEY (propriétaire,locataire),
FOREIGN KEY (propriétaire) REFERENCES Propriétaire(Pseudo),
FOREIGN KEY (locataire) REFERENCES Locataire(Pseudo)
);

CREATE TABLE LocationLV (
véhicule VARCHAR,
locataire VARCHAR,
PRIMARY KEY (véhicule, locataire),
FOREIGN KEY (véhicule) REFERENCES Véhicule(N°Immat),
FOREIGN KEY (locataire) REFERENCES Locataire(Pseudo)
);

CREATE TABLE LocationEV (
véhicule VARCHAR,
entreprise VARCHAR,
PRIMARY KEY (véhicule, entreprise),
FOREIGN KEY (véhicule) REFERENCES Véhicule(N°Immat),
FOREIGN KEY (entreprise) REFERENCES Entreprise(Pseudo)
);

CREATE TABLE Signalement (
véhicule VARCHAR,
NbSignalement INTEGER,
responsable INTEGER NOT NULL,
CHECK (NbSignalement = NbSignalement%4),
PRIMARY KEY (véhicule),
FOREIGN KEY (véhicule) REFERENCES Véhicule(N°Immat)
);

CREATE TABLE Signaler (
signalement VARCHAR,
locataire VARCHAR,
PRIMARY KEY (signalement, locataire),
FOREIGN KEY (signalement) REFERENCES Signalement(véhicule),
FOREIGN KEY (locataire) REFERENCES Locataire(Pseudo)
);

CREATE TABLE PropriétéLoc (
propriétaire VARCHAR,
véhicule VARCHAR,
DateDebutLoc DATE,
DateFinLoc DATE NOT NULL,
SeuilKM INTEGER NOT NULL,
SeuilCarbu INTEGER,
ListePays Pays[],
CHECK ((DateFinLoc > DateDebutLoc) AND (SeuilKM > 0) AND (SeuilCarbu > 0)),
PRIMARY KEY(propriétaire, véhicule),
FOREIGN KEY (propriétaire) REFERENCES Propriétaire(Pseudo),
FOREIGN KEY (véhicule) REFERENCES Véhicule(N°Immat)
);


CREATE TABLE ContratLocation (
NumContratL INTEGER,
DateDébutCL DATE NOT NULL,
véhicule VARCHAR NOT NULL,
PRIMARY KEY (NumContratL),
FOREIGN KEY (véhicule) REFERENCES Véhicule(N°Immat)
);

CREATE TABLE Avis (
véhicule VARCHAR,
contrat INTEGER UNIQUE NOT NULL,
Note INTEGER,
Commentaire TEXT,
CHECK ((Note >=0) AND (Note <=5)),
PRIMARY KEY (véhicule),
FOREIGN KEY (véhicule) REFERENCES Véhicule(N°Immat),
FOREIGN KEY (contrat) REFERENCES ContratLocation(NumContratL)
);

CREATE TABLE CheckIn (
  contrat INTEGER,
  nbDégâtsIn INTEGER,
  Kilométrage INTEGER,
  niveauCarburant INTEGER,
  EtatLoc État,
  PhotoLoc BYTEA,
  CHECK (nbDégâtsIn >= 0),
  PRIMARY KEY (contrat),
  FOREIGN KEY (contrat) REFERENCES ContratLocation(NumContratL)
);

CREATE TABLE CheckOut (
contrat INTEGER,
nbDégâtsOut INTEGER,
Kilométrage INTEGER,
niveauCarburant INTEGER,
EtatProp État,
CHECK (nbDégâtsOut >= 0),
PRIMARY KEY (contrat),
FOREIGN KEY (contrat) REFERENCES ContratLocation(NumContratL)
);

/*
CREATE TABLE CheckOut (
	contrat INTEGER,
	nbDégâtsOut INTEGER,
	Kilométrage INTEGER,
	niveauCarburant INTEGER,
	EtatProp État,
	CHECK (nbDégâtsOut >= 0 AND
       	Kilométrage > (SELECT Kilométrage FROM CheckIn WHERE contrat = CheckOut.contrat) AND
       	nbDégâtsOut > (SELECT nbDégâtsIn FROM CheckIn WHERE contrat = CheckOut.contrat)),
	PRIMARY KEY (contrat),
	FOREIGN KEY (contrat) REFERENCES ContratLocation(NumContratL)
);*/

CREATE TABLE Facture (
contratLocation INTEGER,
Montant NUMERIC,
Kilométrage INTEGER,
DateFacture DATE NOT NULL,
MoyenDePaiement TypeP,
CHECK ((Montant > 0) AND (Kilométrage > 0)),
PRIMARY KEY (contratLocation),
FOREIGN KEY (contratLocation) REFERENCES ContratLocation(NumContratL)
);

CREATE TABLE ÉmetLS (
signalement VARCHAR,
locataire VARCHAR,
PRIMARY KEY (signalement, locataire),
FOREIGN KEY (signalement) REFERENCES Signalement(véhicule),
FOREIGN KEY (locataire) REFERENCES Locataire(Pseudo)
);

CREATE TABLE Franchise (
contratAssurance INTEGER,
ChoixFranchise TypeF,
PRIMARY KEY (contratAssurance),
FOREIGN KEY (contratAssurance) REFERENCES ContratAssurance(NumContratA)
);

--Vues :

CREATE VIEW Vue_Client AS
SELECT Pseudo FROM Locataire
UNION
SELECT Pseudo FROM Propriétaire
UNION
SELECT Pseudo FROM Entreprise;

CREATE VIEW Vue_Véhicule_ContratAssurance AS
SELECT N°Immat, contratA AS NumContratA FROM Véhicule;

CREATE VIEW Projection_LocationLV AS
SELECT véhicule, locataire FROM LocationLV;

CREATE VIEW Vue_PropriétéLoc AS
SELECT propriétaire, véhicule, DateDebutLoc, DateFinLoc, SeuilKm, SeuilCarbu, ListePays FROM PropriétéLoc;

CREATE VIEW Vue_Facture AS
SELECT contratLocation AS NumContratL, Montant, Kilométrage, DateFacture, MoyenDePaiement FROM Facture;

CREATE VIEW Vue_Franchise AS
SELECT contratAssurance AS NumContratA, ChoixFranchise FROM Franchise;

CREATE VIEW Vue_CohérenceDates AS
SELECT pl.propriétaire,
       pl.véhicule,
       pl.DateDebutLoc AS DateDébutLocation,
       cl.DateDébutCL AS DateDébutContrat
FROM PropriétéLoc pl
JOIN ContratLocation cl ON pl.véhicule = cl.véhicule;

/*SELECT *
FROM Vue_CohérenceDates
WHERE DateDébutLocation >= DateDébutContrat;*/
