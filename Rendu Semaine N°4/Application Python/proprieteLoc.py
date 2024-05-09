import psycopg2
from datetime import datetime

def insert_proprieteLoc(cur, conn):
    proprietaire = input("Entrer le propriétaire du véhicule : "\n)
    véhicule = input("Entrer le numéro d'immatriculation : "\n)
    dateDebutLoc = input("Entrer la date de début de location (format : AAAA-MM-JJ) : "\n)
    dateFinLoc = input("Entrer la date de fin de location (format : AAAA-MM-JJ) : "\n)
    seuilKm = int(input("Entrer le seuil de kilométrage à ne pas dépasser : "\n))
    seuilCarbu = int(input("Entrer le seuil de carburant minimum requis au retour du véhicule : "\n))
    print("Entrer la liste de pays autorisés parmis les pays suivants : 'France', 'Allemagne', 'Belgique', 'Luxembourg', 'Suisse', 'Italie', 'Espagne', 'Portugal', 'Royaume-Uni', 'Autriche', 'Suède', 'Danemark', 'Irelande'"\n)
    ListePays = input("Votre choix : "\n).split(',')

    dateDebutLoc = datetime.strptime(dateDebutLoc, '%Y-%m-%d').date()
    dateFinLoc = datetime.strptime(dateFinLoc, '%Y-%m-%d').date()

    query = f"INSERT INTO PropriétéLoc (propriétaire, véhicule, DateDebutLoc, DateFinLoc, SeuilKM, SeuilCarbu, ListePays) VALUES ('{proprietaire}', '{véhicule}', '{dateDebutLoc}', '{dateFinLoc}', {seuilKm}, {seuilCarbu}, '{ListePays}')"

    cur.execute(query)
    conn.commit()
    print("Les propriétés ont été enregistrées avec succès.\n")
    

def update_proprieteLoc(cur, conn):
    proprietaire = input("Entrer le propriétaire du véhicule : "\n)
    vehicule = input("Entrer le numéro d'immatriculation : "\n)
    dateDebutLoc = input("Entrer la nouvelle date de début de location (format : AAAA-MM-JJ) : "\n)
    dateFinLoc = input("Entrer la nouvelle date de fin de location (format : AAAA-MM-JJ) : "\n)
    seuilKm = int(input("Entrer le nouveau seuil de kilométrage à ne pas dépasser : "\n))
    seuilCarbu = int(input("Entrer le nouveau seuil de carburant minimum requis au retour du véhicule : "\n))
    print("Entrer la nouvelle liste de pays autorisés parmis les pays suivants : 'France', 'Allemagne', 'Belgique', 'Luxembourg', 'Suisse', 'Italie', 'Espagne', 'Portugal', 'Royaume-Uni', 'Autriche', 'Suède', 'Danemark', 'Irelande'"\n)
    ListePays = input("Votre choix (entrez les pays à la suite, séparés par une virgule et sans espace !) :  "\n).split(',')

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
    print("Les propriétés ont été mises à jour avec succès.\n")

def delete_proprieteLoc(cur, conn):
    proprietaire = input("Entrer le propriétaire du véhicule à supprimer : "\n)
    vehicule = input("Entrer le numéro d'immatriculation à supprimer : "\n)

    query = f"DELETE FROM PropriétéLoc WHERE propriétaire = '{proprietaire}' AND véhicule = '{vehicule}'"

    cur.execute(query)
    conn.commit()
    print("Les propriétés ont été supprimées avec succès.\n")
