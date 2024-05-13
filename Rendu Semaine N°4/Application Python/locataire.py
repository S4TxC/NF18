import psycopg2
from datetime import datetime

def insert_locataire(cur, conn):
    pseudo = input("\nEntrer le pseudo du locataire : ")
    numero_permis = input("\nEntrer le numéro de permis du locataire : ")
    emission_permis = input("\nEntrer la date d'émission du permis (format AAAA-MM-JJ) : ")
    expire_permis = input("\nEntrer la date d'expiration du permis (format AAAA-MM-JJ) : ")

    # Convert the dates from string to date objects
    emission_permis = datetime.strptime(emission_permis, '%Y-%m-%d').date()
    expire_permis = datetime.strptime(expire_permis, '%Y-%m-%d').date()

    query = f"INSERT INTO Locataire (Pseudo, N°Permis, ÉmissionPermis, ExpirePermis) VALUES ('{pseudo}', '{numero_permis}', '{emission_permis}', '{expire_permis}')"

    cur.execute(query)
    conn.commit()
    print("\nLe locataire a été inséré avec succès.")

def update_locataire(cur, conn):
    pseudo = input("\nEntrer le pseudo du locataire dont les informations doivent être mises à jour : ")
    new_numero_permis = input("\nEntrer le nouveau numéro de permis du locataire : ")
    new_emission_permis = input("\nEntrer la nouvelle date d'émission du permis (format AAAA-MM-JJ) : ")
    new_expire_permis = input("\nEntrer la nouvelle date d'expiration du permis (format AAAA-MM-JJ) : ")

    new_emission_permis = datetime.strptime(new_emission_permis, '%Y-%m-%d').date()
    new_expire_permis = datetime.strptime(new_expire_permis, '%Y-%m-%d').date()

    query = f"""
    UPDATE Locataire
    SET N°Permis = '{new_numero_permis}',
        ÉmissionPermis = '{new_emission_permis}',
        ExpirePermis = '{new_expire_permis}'
    WHERE Pseudo = '{pseudo}'
    """

    cur.execute(query)
    conn.commit()
    print("\nLe locataire a été mis à jour avec succès.")

def delete_locataire(cur, conn):
    pseudo = input("\nEntrer le pseudo du locataire à supprimer : ")

    query = f"DELETE FROM Locataire WHERE Pseudo = '{pseudo}'"

    cur.execute(query)
    conn.commit()
    print("\nLe locataire a été supprimé avec succès.")

