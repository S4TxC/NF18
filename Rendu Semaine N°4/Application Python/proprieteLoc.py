import psycopg2
from datetime import datetime

def insert_proprieteLoc(cur, conn):
    proprietaire = input("\nEntrer le propriétaire du véhicule : ")
    véhicule = input("\nEntrer le numéro d'immatriculation : ")
    dateDebutLoc = input("\nEntrer la date de début de location (format : AAAA-MM-JJ) : ")
    dateFinLoc = input("\nEntrer la date de fin de location (format : AAAA-MM-JJ) : ")
    seuilKm = int(input("\nEntrer le seuil de kilométrage à ne pas dépasser : "))
    seuilCarbu = int(input("\nEntrer le seuil de carburant minimum requis au retour du véhicule : "))
    print("\nEntrer la liste de pays autorisés parmis les pays suivants : 'France', 'Allemagne', 'Belgique', 'Luxembourg', 'Suisse', 'Italie', 'Espagne', 'Portugal', 'Royaume-Uni', 'Autriche', 'Suède', 'Danemark', 'Irelande'")
    ListePays = input("\nVotre choix (entrez les pays à la suite, séparés par une virgule et sans espace !) : ").split(',')

    dateDebutLoc = datetime.strptime(dateDebutLoc, '%Y-%m-%d').date()
    dateFinLoc = datetime.strptime(dateFinLoc, '%Y-%m-%d').date()

    query = f"INSERT INTO PropriétéLoc (propriétaire, véhicule, DateDebutLoc, DateFinLoc, SeuilKM, SeuilCarbu, ListePays) VALUES ('{proprietaire}', '{véhicule}', '{dateDebutLoc}', '{dateFinLoc}', {seuilKm}, {seuilCarbu}, '{ListePays}')"

    cur.execute(query)
    conn.commit()
    print("Les propriétés ont été enregistrées avec succès.")
    

def update_proprieteLoc(cur, conn):
    proprietaire = input("\nEntrer le propriétaire du véhicule : ")
    vehicule = input("\nEntrer le numéro d'immatriculation : ")
    dateDebutLoc = input("\nEntrer la nouvelle date de début de location (format : AAAA-MM-JJ) : ")
    dateFinLoc = input("\nEntrer la nouvelle date de fin de location (format : AAAA-MM-JJ) : ")
    seuilKm = int(input("\nEntrer le nouveau seuil de kilométrage à ne pas dépasser : "))
    seuilCarbu = int(input("\nEntrer le nouveau seuil de carburant minimum requis au retour du véhicule : "))
    print("\nEntrer la nouvelle liste de pays autorisés parmis les pays suivants : 'France', 'Allemagne', 'Belgique', 'Luxembourg', 'Suisse', 'Italie', 'Espagne', 'Portugal', 'Royaume-Uni', 'Autriche', 'Suède', 'Danemark', 'Irelande'")
    ListePays = input("\nVotre choix (entrez les pays à la suite, séparés par une virgule et sans espace !) : ").split(',')

    dateDebutLoc = datetime.strptime(dateDebutLoc, '%Y-%m-%d').date()
    dateFinLoc = datetime.strptime(dateFinLoc, '%Y-%m-%d').date()

    query = f"""
    UPDATE PropriétéLoc
    SET DateDebutLoc = '{dateDebutLoc}',
        DateFinLoc = '{dateFinLoc}',
        SeuilKM = '{seuilKm}',
        SeuilCarbu = '{seuilCarbu}',
        ListePays = '{ListePays}'
    WHERE propriétaire = '{proprietaire}' AND véhicule = '{vehicule}'
    """

    cur.execute(query)
    conn.commit()
    print("\nLes propriétés ont été mises à jour avec succès.")

def delete_proprieteLoc(cur, conn):
    proprietaire = input("\nEntrer le propriétaire du véhicule à supprimer : ")
    vehicule = input("\nEntrer le numéro d'immatriculation à supprimer : ")

    query = f"DELETE FROM PropriétéLoc WHERE propriétaire = '{proprietaire}' AND véhicule = '{vehicule}'"

    cur.execute(query)
    conn.commit()
    print("\nLes propriétés ont été supprimées avec succès.")
