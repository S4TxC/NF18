Nous avons opté pour notre base de données non relationnelle de la créer complètement par fichier javascript.
La création de nos collections et des documents associés sont effectués depuis le fichier "DATAMDB.js".
En ce qui concerne les requêtes celles-ci sont disponibles dans le fichier "FINDMDB.js"

Pour obtenir les résultats de notre BDD non relationnelle voici la procédure à suivre :

1) Dans un premier terminal on lance la commande suivante pour lancer le server :           mongod --dbpath ~/mongodata

2) Dans un second terminal on lance la commande suivante pour se connecter au server :      mongo --host localhost

3) Dans un troisième terminal on importe nos fichiers et ils sont directement exécutés :

(1)       mongo --host localhost --port 27017 /volsme/users/nf18p121/Documents/Projet/Semaine\ 6/DATAMDB.js

(2)       mongo --host localhost --port 27017 /volsme/user1x/users/nf18p121/Documents/Projet/Semaine\ 6/FINDMDB.js


REMPLACER dans (1) et (2) EN ADAPTANT LE CHEMIN DU FICHIER ET/OU LE PORT.
La commande (2) devrait afficher les résultats de nos requêtes.


4) Enfin dans le shell de MongoDB (second terminal lancé) on peut lancer quelques commandes proposées ci-dessous
pour vérifier la bonne création de nos collections et de nos documents (liste non exhaustive) :

Pour accéder à notre base de données :              use NOSQL_NF18

Pour voir nos collections :                         show collections

Pour afficher les documents d'une collection :      db.Client.find().pretty()

La méthode .pretty() permet l'affichage correctement formaté.    
