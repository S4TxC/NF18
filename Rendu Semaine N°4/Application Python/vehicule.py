import psycopg2

def insert_vehicule(cur, conn):
    immatriculation = input("Entrer l'immatriculation du véhicule : ")
    categorie = input("Entrer la catégorie du véhicule : ")
    marque = input("Entrer la marque du véhicule : ")
    modele = input("Entrer le modèle du véhicule : ")
    couleur = input("Entrer la couleur du véhicule : ")
    options = input("Entrer les options du véhicule : ")
    carburant = input("Entrer le type de carburant du véhicule : ")
    annee_mise_circulation = input("Entrer l'année de mise en circulation du véhicule (format AAAA-MM-JJ) : ")
    kilometrage = input("Entrer le kilométrage du véhicule : ")
    description = input("Entrer la description du véhicule : ")
    contrat_a = input("Entrer le numéro du contrat d'assurance : ")
    responsable = input("Entrer l'ID du responsable qualité : ")
    proprietaire = input("Entrer le pseudo du propriétaire : ")

    query = f"INSERT INTO Véhicule (N°Immat, Catégorie, Marque, Modèle, Couleur, Options, Carburant, AnnéeMiseCirculation, Kilométrage, Description, contratA, responsable, propriétaire)
    VALUES ('{immatriculation}', '{categorie}', '{marque}', '{modele}', '{couleur}', '{options}', '{carburant}', '{annee_mise_circulation}', {kilometrage}, '{description}', {contrat_a}, {responsable}, '{proprietaire}')
    "

    cur.execute(query)
    conn.commit()
    print("Le véhicule a été inséré avec succès.\n")

def update_vehicule(cur, conn):
    immatriculation = input("Entrer le numéro d'immatriculation dont les informations doivent être mises à jour : ")
    new_couleur = input("Entrer la nouvelle couleur du véhicule : ")
    new_options = input("Entrer les nouvelles options du véhicule : ")
    new_carburant = input("Entrer le nouveau type de carburant du véhicule : ")
    new_kilometrage = input("Entrer le nouveau kilométrage du véhicule : ")
    new_description = input("Entrer la nouvelle description du véhicule : ")
    new_contrat_a = input("Entrer le nouveau numéro du contrat d'assurance : ")
    new_proprietaire = input("Entrer le nouveau pseudo du propriétaire : ")

    query = f"""
    UPDATE Véhicule
    SET Couleur = '{new_couleur}',
        Options = '{new_options}',
        Carburant = '{new_carburant}',
        Kilométrage = {new_kilometrage},
        Description = '{new_description}',
        contratA = {new_contrat_a},
        propriétaire = '{new_proprietaire}'
    WHERE N°Immat = '{immatriculation}'
    """

    cur.execute(query)
    conn.commit()
    print("Le véhicule a été mis à jour avec succès.")

def delete_vehicule(cur, conn):
    immatriculation = input("Entrer l'immatriculation du véhicule à supprimer : ")

    query = f"DELETE FROM Véhicule WHERE N°Immat = '{immatriculation}'"

    cur.execute(query)
    conn.commit()
    print("Le véhicule a été supprimé avec succès.")