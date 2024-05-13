import psycopg2

def insert_contrat_assurance(cur, conn):
    num_contrat_a = int(input("\nEntrer le numéro du contrat d'assurance : "))

    query = f"INSERT INTO ContratAssurance (NumContratA) VALUES ('{num_contrat_a}')"

    cur.execute(query)
    conn.commit()
    print("\nLe contrat d'assurance a été inséré avec succès.")


def update_contrat_assurance(cur, conn):
    num_contrat_a = int(input("\nEntrer le numéro du contrat d'assurance à mettre à jour : "))
    new_num_contrat_a = int(input("\nEntrer le nouveau numéro du contrat d'assurance à mettre à jour : "))

    query = f"""
    UPDATE ContratAssurance
    SET NumContratA = '{new_num_contrat_a}'
    WHERE NumContratA = '{num_contrat_a}'
    """

    cur.execute(query)
    conn.commit()
    print("\nLa description du contrat d'assurance a été mise à jour avec succès.")

def delete_contrat_assurance(cur, conn):
    num_contrat_a = int(input("\nEntrer le numéro du contrat d'assurance à supprimer : "))

    query = f"DELETE FROM ContratAssurance WHERE NumContratA = '{num_contrat_a}'"

    cur.execute(query)
    conn.commit()
    print("\nLe contrat d'assurance a été supprimé avec succès.")
