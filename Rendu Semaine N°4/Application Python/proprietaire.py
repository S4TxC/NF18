import psycopg2

def insert_proprietaire(cur, conn):
    pseudo = input("Entrez le pseudo du client : ")
    query = f"INSERT INTO Propriétaire (Pseudo) VALUES ('{pseudo}')"

    cur.execute(query)
    conn.commit()
    print("\nLe propriétaire a été inséré avec succès.")

def update_proprietaire(cur, conn):
    pseudo = input("Entrez le pseudo du client à modifier: ")
    new_pseudo = input("Entrez le nouveau pseudo : ")

    query = f"""
    UPDATE Propriétaire
    SET Pseudo = '{new_pseudo}'
    WHERE Pseudo = '{pseudo}'
    """

    cur.execute(query)
    conn.commit()
    print("\nLe pseudo a été mis à jour avec succès.")

def delete_proprietaire(cur, conn):
    pseudo = input("\nEntrer le pseudo du propriétaire à supprimer : ")

    query = f"DELETE FROM Propriétaire WHERE Pseudo = '{pseudo}'"

    cur.execute(query)
    conn.commit()
    print("\nLe propriétaire a été supprimé avec succès.")
