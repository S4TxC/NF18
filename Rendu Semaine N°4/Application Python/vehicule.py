import psycopg2
from datetime import datetime

def insert_vehicule(cur, conn):
    immatriculation = input("Entrer l'immatriculation du véhicule : "\n)
    categorie = input("Entrer la catégorie du véhicule : "\n)
    marque = input("Entrer la marque du véhicule : "\n)
    modele = input("Entrer le modèle du véhicule : "\n)
    couleur = input("Entrer la couleur du véhicule : "\n)
    options = input("Entrer les options du véhicule : "\n)
    carburant = input("Entrer le type de carburant du véhicule : "\n)
    annee_mise_circulation = input("Entrer l'année de mise en circulation du véhicule (format AAAA-MM-JJ) : "\n)
    kilometrage = float(input("Entrer le kilométrage du véhicule : "\n))
    description = input("Entrer la description du véhicule : "\n)
    contrat_a = int(input("Entrer le numéro du contrat d'assurance : "\n))
    responsable = int(input("Entrer l'ID du responsable qualité : "\n))
    proprietaire = input("Entrer le pseudo du propriétaire : "\n)

    annee_mise_circulation = datetime.strptime(annee_mise_circulation, '%Y-%m-%d').date()

    query = f"INSERT INTO Véhicule (N°Immat, Catégorie, Marque, Modèle, Couleur, Options, Carburant, AnnéeMiseCirculation, Kilométrage, Description, contratA, responsable, propriétaire) VALUES ('{immatriculation}', '{categorie}', '{marque}', '{modele}', '{couleur}', '{options}', '{carburant}', '{annee_mise_circulation}', '{kilometrage}', '{description}', '{contrat_a}', '{responsable}', '{proprietaire}')"

    cur.execute(query)
    conn.commit()
    print("Le véhicule a été inséré avec succès.\n")

def update_vehicule(cur, conn):
    immatriculation = input("Entrer le numéro d'immatriculation dont les informations doivent être mises à jour : "\n)
    new_couleur = input("Entrer la nouvelle couleur du véhicule : "\n)
    new_options = input("Entrer les nouvelles options du véhicule : "\n)
    new_carburant = input("Entrer le nouveau type de carburant du véhicule : "\n)
    new_kilometrage = int(input("Entrer le nouveau kilométrage du véhicule : "\n))
    new_description = input("Entrer la nouvelle description du véhicule : "\n)
    new_contrat_a = int(input("Entrer le nouveau numéro du contrat d'assurance : "\n))
    new_proprietaire = input("Entrer le nouveau pseudo du propriétaire : "\n)

    query = f"""
    UPDATE Véhicule
    SET Couleur = '{new_couleur}',
        Options = '{new_options}',
        Carburant = '{new_carburant}',
        Kilométrage = '{new_kilometrage}',
        Description = '{new_description}',
        contratA = '{new_contrat_a}',
        propriétaire = '{new_proprietaire}'
    WHERE N°Immat = '{immatriculation}'
    """

    cur.execute(query)
    conn.commit()
    print("Le véhicule a été mis à jour avec succès."\n)

def delete_vehicule(cur, conn):
    immatriculation = input("Entrer l'immatriculation du véhicule à supprimer : "\n)

    query = f"DELETE FROM Véhicule WHERE N°Immat = '{immatriculation}'"

    cur.execute(query)
    conn.commit()
    print("Le véhicule a été supprimé avec succès."\n)
