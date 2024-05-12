import psycopg2
from datetime import datetime

def insert_vehicule(cur, conn):
    immatriculation = input("\nEntrer l'immatriculation du véhicule : ")
    categorie = input("\nEntrer la catégorie du véhicule : ")
    marque = input("\nEntrer la marque du véhicule : ")
    modele = input("\nEntrer le modèle du véhicule : ")
    couleur = input("\nEntrer la couleur du véhicule : ")
    options = input("\nEntrer les options du véhicule : ")
    carburant = input("\nEntrer le type de carburant du véhicule : ")
    annee_mise_circulation = input("\nEntrer l'année de mise en circulation du véhicule (format AAAA-MM-JJ) : ")
    kilometrage = float(input("\nEntrer le kilométrage du véhicule : "))
    description = input("\nEntrer la description du véhicule : ")
    contrat_a = int(input("\nEntrer le numéro du contrat d'assurance : "))
    responsable = int(input("\nEntrer l'ID du responsable qualité : "))
    proprietaire = input("\nEntrer le pseudo du propriétaire : ")

    annee_mise_circulation = datetime.strptime(annee_mise_circulation, '%Y-%m-%d').date()

    query = f"INSERT INTO Véhicule (N°Immat, Catégorie, Marque, Modèle, Couleur, Options, Carburant, AnnéeMiseCirculation, Kilométrage, Description, contratA, responsable, propriétaire) VALUES ('{immatriculation}', '{categorie}', '{marque}', '{modele}', '{couleur}', '{options}', '{carburant}', '{annee_mise_circulation}', '{kilometrage}', '{description}', '{contrat_a}', '{responsable}', '{proprietaire}')"

    cur.execute(query)
    conn.commit()
    print("\nLe véhicule a été inséré avec succès.")

def update_vehicule(cur, conn):
    immatriculation = input("\nEntrer le numéro d'immatriculation dont les informations doivent être mises à jour : ")
    new_couleur = input("\nEntrer la nouvelle couleur du véhicule : ")
    new_options = input("\nEntrer les nouvelles options du véhicule : ")
    new_carburant = input("\nEntrer le nouveau type de carburant du véhicule : ")
    new_kilometrage = int(input("\nEntrer le nouveau kilométrage du véhicule : "))
    new_description = input("\nEntrer la nouvelle description du véhicule : ")
    new_contrat_a = int(input("\nEntrer le nouveau numéro du contrat d'assurance : "))
    new_proprietaire = input("\nEntrer le nouveau pseudo du propriétaire : ")

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
    print("\nLe véhicule a été mis à jour avec succès.")

def delete_vehicule(cur, conn):
    immatriculation = input("\nEntrer l'immatriculation du véhicule à supprimer : ")

    query = f"DELETE FROM Véhicule WHERE N°Immat = '{immatriculation}'"

    cur.execute(query)
    conn.commit()
    print("\nLe véhicule a été supprimé avec succès.")
