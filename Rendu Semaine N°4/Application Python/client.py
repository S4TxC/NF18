import psycopg2


def insert_client(cur, conn):
    pseudo = input("Entrez le pseudo du client : ")
    nom = input("Entrez le nom du client : ")
    prenom = input("Entrez le prénom du client : ")
    age = input("Entrez l'âge du client (YYYY-MM-DD) : ")
    photo = input("Entrez la photo du client (chemin vers le fichier) : ")
    coordonnees = input("Entrez les coordonnées du client : ")

    query = f"INSERT INTO Client (Pseudo, Nom, Prénom, Âge, Photo, Coordonées) VALUES ('{pseudo}', '{nom}', '{prenom}', '{age}', '{photo}', '{coordonnees}')"

    cur.execute(query)
    conn.commit()
    print("Le client a bien été ajouté.")


def update_client(cur, conn):
    pseudo = input("Entrez le pseudo du client à modifier : ")
    new_nom = input("Entrez le nouveau nom du client : ")
    new_prenom = input("Entrez le nouveau prénom du client : ")
    new_age = input("Mettez l'âge du client à jour (YYYY-MM-DD) : ")
    new_photo = input("Entrez la nouvelle photo du client (chemin vers le fichier) : ")
    new_coordonnees = input("Entrez les nouvelles coordonnées du client : ")

    query = f"""
    UPDATE Client
    SET Nom = '{new_nom}',
        Prénom = '{new_prenom}',
        Âge = '{new_age}',
        Photo = '{new_photo}',
        Coordonées = '{new_coordonnees}'
    WHERE Pseudo = '{pseudo}'
    """

    cur.execute(query)
    conn.commit()
    print("\nLe client a été mis à jour avec succès.")

def delete_client(cur, conn):
    pseudo = input("\nEntrer le client à supprimer : ")

    query = f"DELETE FROM Client WHERE Pseudo = '{pseudo}'"

    cur.execute(query)
    conn.commit()
    print("\nLe client a été supprimé avec succès.")
