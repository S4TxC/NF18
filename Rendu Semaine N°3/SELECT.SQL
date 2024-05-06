-- 1) Moyenne d’âge des véhicules | Average vehicle age

SELECT AVG(EXTRACT(YEAR FROM CURRENT_DATE) - EXTRACT(YEAR FROM AnnéeMiseCirculation)) AS Moyenne_Age_Vehicules
FROM Véhicule;


-- 2) Kilométrage moyen des véhicules | Average mileage of vehicles

SELECT AVG(Kilométrage) AS Kilometrage_Moyen
FROM Véhicule;


-- 3) Type de carburant le plus courant | Most common fuel type

SELECT Carburant, COUNT(*) AS Nombre
FROM Véhicule
GROUP BY Carburant
ORDER BY Nombre DESC;


-- 4) Facture moyenne pour une location | Average invoice for a rental

SELECT AVG(Montant) AS Facture_Moyenne
FROM Facture;


-- 5) Facture ayant un montant supérieur à … | Invoices with an amount greater than...

SELECT contratLocation, Montant
FROM Facture
WHERE Montant > 750;


-- 6) Nombres de pays maximum autorisé par un propriétaire | Maximum number of countries allowed by a owner

SELECT propriétaire, COUNT(DISTINCT country) AS Nombre_Pays
FROM PropriétéLoc, unnest(ListePays) AS country
GROUP BY propriétaire
ORDER BY Nombre_Pays DESC;


-- 6bis) Nombre de pays autorisé pour un véhicule donné

SELECT véhicule, COUNT(DISTINCT country) AS Nombre_Pays
FROM PropriétéLoc, unnest(ListePays) AS country
WHERE véhicule = 'ST222UV'
GROUP BY véhicule;


-- 7) Véhicules ayant les meilleurs avis | Vehicles with the best reviews

SELECT véhicule, AVG(Note) AS Note_Moyenne
FROM Avis
GROUP BY véhicule
ORDER BY Note_Moyenne DESC;


-- 8) Nombre de commentaire moyen par véhicules | Average number of comments per vehicle

SELECT véhicule, COUNT(Commentaire) AS Nombre_Commentaires
FROM Avis
GROUP BY véhicule;


-- 9) Moyenne des avis des véhicules loués | Average ratings of rented vehicles

SELECT AVG(Note) AS Note_Moyenne
FROM Avis;


-- 10) Durée moyenne de location | Average rental duration

SELECT AVG(DateFinLoc - DateDebutLoc) AS Duree_Moyenne_Jours
FROM PropriétéLoc;


-- 11) Distance moyenne parcourue pour une location | Average distance traveled for a rental

SELECT AVG(CheckOut.Kilométrage - CheckIn.Kilométrage) AS Kilometrage_Moyen
FROM CheckIn
JOIN CheckOut ON CheckIn.contrat = CheckOut.contrat;


-- 12) Les plus gros locataires | Biggest renters

SELECT locataire, COUNT(*) AS Nombre_Locations
FROM LocationLV
GROUP BY locataire
ORDER BY Nombre_Locations DESC;


-- 13) Les plus gros propriétaires | Biggest owners

SELECT propriétaire, COUNT(*) AS Nombre_Propriétés
FROM PropriétéLoc
GROUP BY propriétaire
ORDER BY Nombre_Propriétés DESC;


-- 14) Entreprise louant le moins de véhicules | Company renting the fewest vehicles

SELECT entreprise, COUNT(*) AS Nombre_Vehicules
FROM LocationEV
GROUP BY entreprise
ORDER BY Nombre_Vehicules ASC;


-- 15) Répartition moyen de paiement | Average payment distribution

SELECT MoyenDePaiement, COUNT(*) AS Nombre_Transactions
FROM Facture
GROUP BY MoyenDePaiement
ORDER BY Nombre_Transactions DESC;


-- 16) Nombre de véhicules rattaché à un contrat d’assurance | Number of vehicles attached to an insurance contract

SELECT contratA, COUNT(*) AS Nombre_Vehicules
FROM Véhicule
GROUP BY contratA
ORDER BY Nombre_Vehicules DESC;


-- 17) Parts des véhicules assurés sur un type de franchise | Shares of vehicles insured by deductible type

SELECT (COUNT(*) FILTER (WHERE ChoixFranchise = 'Zéro franchise')::FLOAT / COUNT(*)) * 100 AS Pourcentage_Zero_Franchise
FROM Franchise;

SELECT (COUNT(*) FILTER (WHERE ChoixFranchise = 'Sans réduction')::FLOAT / COUNT(*)) * 100 AS Pourcentage_Sans_reduction
FROM Franchise;

SELECT (COUNT(*) FILTER (WHERE ChoixFranchise = 'Franchise réduite')::FLOAT / COUNT(*)) * 100 AS Pourcentage_Franchise_réduite
FROM Franchise;


-- 18) État des véhicules (via analyse du responsable qualité) | Condition of vehicles (through quality manager analysis)

SELECT RQ.AnalyseÉtat AS État, COUNT(*) AS Nombre_Véhicules
FROM Véhicule V
JOIN ResponsableQualité RQ ON V.responsable = RQ.id
GROUP BY RQ.AnalyseÉtat
ORDER BY CASE
	WHEN RQ.AnalyseÉtat = 'Excellent' THEN 1
	WHEN RQ.AnalyseÉtat = 'Bon' THEN 2
	WHEN RQ.AnalyseÉtat = 'Passable' THEN 3
	WHEN RQ.AnalyseÉtat = 'Moyen' THEN 4
	WHEN RQ.AnalyseÉtat = 'Médiocre' THEN 5
	WHEN RQ.AnalyseÉtat = 'Mauvais' THEN 6
	WHEN RQ.AnalyseÉtat = 'Exécrable' THEN 7
	ELSE 8
END;


-- 19) Nombre de véhicules moyen ayant reçu des dégâts au cours de la location | Average number of vehicles that received damage during the rental

SELECT AVG(CheckOut.nbDégâtsOut - CheckIn.nbDégâtsIn) AS Dégâts_Moyens
FROM CheckOut
JOIN CheckIn ON CheckOut.contrat = CheckIn.contrat;


-- 20) Nombre de signalement moyen par véhicule | Average number of reports per vehicle

SELECT véhicule, AVG(NbSignalement) AS Moyenne_Signalements
FROM Signalement
GROUP BY véhicule;


-- 21) Marque de véhicule les plus courant | Most common vehicle brands

SELECT Marque, COUNT(*) AS Nombre
FROM Véhicule
GROUP BY Marque
ORDER BY Nombre DESC;


-- 22) Âge permis moyen des locataires | Average age of renters' licenses

SELECT AVG(EXTRACT(YEAR FROM ÉmissionPermis)- EXTRACT(YEAR FROM CURRENT_DATE)) AS Age_Permis_Moyen
FROM Locataire;


-- 23) SeuilKm moyen autorisé par véhicule | Average mileage threshold allowed per vehicle

SELECT AVG(SeuilKM) AS SeuilKm_Moyen
FROM PropriétéLoc;


--24) SeuilCarbu moyen autorisé par véhicule | Average fuel threshold allowed per vehicle

SELECT AVG(SeuilCarbu) AS SeuilCarbu_Moyen
FROM PropriétéLoc;


-- 25) Couleur la plus répandue pour l’ensemble des véhicule | Most common color for all vehicles

SELECT Couleur, Nombre
FROM (SELECT Couleur, COUNT(*) AS Nombre
	FROM Véhicule
	GROUP BY Couleur) AS CompteCouleurs
WHERE Nombre = ( SELECT MAX(Nombre)
    	FROM (SELECT COUNT(*) AS Nombre
    	FROM Véhicule
    	GROUP BY Couleur
	) AS MaxCompte );


-- 26) Pour afficher le nombre de voitures par couleurs :

SELECT Couleur, COUNT(*) AS Nombre
FROM Véhicule
GROUP BY Couleur
ORDER BY COUNT(*) DESC;


-- 27) Nombres de véhicules moyen loué par une entreprise | Average number of vehicles rented by a company

SELECT entreprise, AVG(Nombre_Vehicules) AS Moyenne_Vehicules_Loués_Entreprise
FROM (
  SELECT entreprise, COUNT(*) AS Nombre_Vehicules
  FROM LocationEV
  GROUP BY entreprise, véhicule
) AS Vehicules_Par_Entreprise
GROUP BY entreprise;


-- 28) Véhicule le plus loué | Most rented vehicle

SELECT véhicule, COUNT(*) AS Nombre_Locations
FROM LocationLV
GROUP BY véhicule
ORDER BY Nombre_Locations DESC
LIMIT 1;


-- 29) Classement des véhicules par location (décroissant) | Ranking of Vehicles by Rental (descending order)

SELECT véhicule, COUNT(*) AS Nombre_Locations
FROM LocationLV
GROUP BY véhicule
ORDER BY Nombre_Locations DESC;


-- 30) Véhicule le moins loué | Least rented vehicle

SELECT véhicule, COUNT(*) AS Nombre_Locations
FROM LocationLV
GROUP BY véhicule
ORDER BY Nombre_Locations ASC
LIMIT 1;


-- 31) Classement des véhicules par location (croissant) | Ranking of Vehicles by Rental (ascending order)

SELECT véhicule, COUNT(*) AS Nombre_Locations
FROM LocationLV
GROUP BY véhicule
ORDER BY Nombre_Locations ASC;


-- 32) Locataires ayant loué le véhicule X | Tenants who rented vehicle X

SELECT l.*
FROM Locataire l
JOIN PropriétéLoc pl ON l.Pseudo = pl.propriétaire
JOIN Véhicule v ON pl.véhicule = v.N°Immat
WHERE v.Marque = 'Ford';

SELECT l.*
FROM Locataire l
JOIN PropriétéLoc pl ON l.Pseudo = pl.propriétaire
JOIN Véhicule v ON pl.véhicule = v.N°Immat
WHERE v.Marque = 'Peugeot';

SELECT l.*
FROM Locataire l
JOIN PropriétéLoc pl ON l.Pseudo = pl.propriétaire
JOIN Véhicule v ON pl.véhicule = v.N°Immat
WHERE v.Marque = 'Rimac';
