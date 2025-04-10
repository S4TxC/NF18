# VehicleShare

**VehicleShare** est un projet scolaire développé dans le cadre d'un travail de groupe. Ce projet consiste à implémenter une base de données pour une entreprise de location de véhicules. L'objectif est de créer à la fois une base de données relationnelle et une base de données non relationnelle en utilisant MongoDB.

## Technologies utilisées

- **Langages** : Python, JavaScript
- **Base de données** : MongoDB (Non relationnelle)

## Participants

Ce projet a été réalisé par les membres suivants :

- **Ismaël Driche**
- **Jingbo Wang**
- **Rayane Nait Bahloul**
- **Yassine Ouzzane**

## Structure du projet

Le projet est organisé en plusieurs rendus hebdomadaires :

1. **Premier rendu** : Note de clarification et première version de l'UML.
2. **Deuxième rendu** : Correction de l'UML et création du MLD.
3. **Troisième rendu** : Tables, inserts, requêtes et suppressions dans la base de données.
4. **Quatrième rendu** : Application Python pour interagir avec les tables (exécuter `menu.py`).  
   - Le mot de passe de l'administrateur est : `mdp1234`
   - Le mot de passe pour les comptes dans la base de données est : `test`
5. **Cinquième rendu** : Tables normalisées (MLD).
6. **Sixième rendu** : Implémentation de la base de données relationnelle en base de données non relationnelle (MongoDB).

## Installation

### Pré-requis

Assurez-vous d'avoir **MongoDB** installé sur votre machine. Vous pouvez télécharger et installer MongoDB à partir du [site officiel](https://www.mongodb.com/try/download/community).

### Lancer le serveur MongoDB

1. Ouvrir un terminal et lancer le serveur MongoDB :

   ```bash
   mongod --dbpath ~/mongodata
   ```

2. Dans un second terminal, se connecter au serveur MongoDB :

   ```bash
   mongo --host localhost
   ```

3. Dans un troisième terminal, exécutez les commandes suivantes (en remplaçant les chemins) :

  ```bash
  mongo --host localhost --port 27017 /path/to/your/project/DATAMDB.js
  mongo --host localhost --port 27017 /path/to/your/project/FINDMDB.js
  ```

### Vérification de la base de données

- Accéder à la base de données :
  ```bash
  use NOSQL_NF18
  ```
  
- Voir les collections disponibles :
  ```bash
  show collections
  ```
  
- Afficher les documents d'une collection (exemple pour la collection Client) :
  ```bash
  db.Client.find().pretty()
  ```

## Utilisation

### Application python

Exécutez le fichier `menu.py` :

```bash
python menu.py
```

### MongoDB

Les requêtes pour interagir avec la base de données non relationnelle sont définies dans le fichier `FINDMDB.js`

---

# VehicleShare

**VehicleShare** is a school project developed as part of a group assignment. The project consists of implementing a database for a vehicle rental company. The goal is to create both a relational database and a non-relational database using MongoDB.

## Technologies Used

- **Languages**: Python, JavaScript
- **Database**: MongoDB (Non-relational)

## Participants

This project was completed by the following members:

- **Ismaël Driche**
- **Jingbo Wang**
- **Rayane Nait Bahloul**
- **Yassine Ouzzane**

## Project Structure

The project is organized into several weekly submissions:

1. **First submission**: Clarification note and first version of the UML.
2. **Second submission**: UML corrections and creation of the **LDM** (Logical Data Model).
3. **Third submission**: Tables, inserts, queries, and deletions in the database.
4. **Fourth submission**: Python application to interact with the tables (run `menu.py`).  
   - The administrator password is: `mdp1234`
   - The password for the accounts in the database is: `test`
5. **Fifth submission**: Normalized tables.
6. **Sixth submission**: Implement the relational database into a non-relational database (MongoDB).

## Installation

### Prerequisites

Make sure **MongoDB** is installed on your machine. You can download and install MongoDB from the [official website](https://www.mongodb.com/try/download/community).

### Start the MongoDB Server

1. Open a terminal and start the MongoDB server:

   ```bash
   mongod --dbpath ~/mongodata

2. In a second terminal, connect to the MongoDB server:

   ```bash
   mongo --host localhost
   ```

3. In a third terminal, execute the following commands (replace the paths):

  ```bash
  mongo --host localhost --port 27017 /path/to/your/project/DATAMDB.js
  mongo --host localhost --port 27017 /path/to/your/project/FINDMDB.js
  ```

### Verify the Database

- Access the database:
  ```bash
  use NOSQL_NF18
  ```
  
- View the available collections:
  ```bash
  show collections
  ```
  
- Display the documents of a collection (example for the `Client` collection):
  ```bash
  db.Client.find().pretty()
  ```

## Usage

### Python Application

Run the `menu.py` file: :

```bash
python menu.py
```

### MongoDB
The queries to interact with the non-relational database are defined in the `FINDMDB.js` file.
