import psycopg2

def insert_responsable_qualite(cur, conn):
    id_responsable = int(input("\nEntrer l'ID du responsable qualité : "))
    analyse_etat = input("\nEntrer l'analyse d'état (État) du responsable qualité : ")

    query = f"INSERT INTO ResponsableQualité (id, AnalyseÉtat) VALUES ('{id_responsable}', '{analyse_etat}')"

    cur.execute(query)
    conn.commit()
    print("\nLe responsable qualité a été inséré avec succès.")

def update_responsable_qualite(cur, conn):
    id_responsable = int(input("\nEntrer l'ID du responsable qualité dont les informations doivent être mises à jour : "))
    new_analyse_etat = input("\nEntrer la nouvelle analyse d'état (État) du responsable qualité : ")

    query = f"""
    UPDATE ResponsableQualité
    SET AnalyseÉtat = '{new_analyse_etat}'
    WHERE id = '{id_responsable}'
    """

    cur.execute(query)
    conn.commit()
    print("\nL'analyse d'état du responsable qualité a été mise à jour avec succès.")

def delete_responsable_qualite(cur, conn):
    id_responsable = int(input("\nEntrer l'ID du responsable qualité à supprimer : "))

    query = f"DELETE FROM ResponsableQualité WHERE id = '{id_responsable}'"

    cur.execute(query)
    conn.commit()
    print("\nLe responsable qualité a été supprimé avec succès.")
