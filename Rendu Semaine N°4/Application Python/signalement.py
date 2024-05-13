import psycopg2

def insert_signalement(cur, conn):
    vehicule = input("\nEntrer l'immatriculation du véhicule associé au signalement : ")
    nb_signalement = int(input("\nEntrer le nombre de signalements (doit être multiple de 4) : "))
    responsable = int(input("\nEntrer l'ID du responsable associé au signalement : "))

    # Ensure NbSignalement satisfies the check constraint
    if nb_signalement % 4 != 0:
        print("Le nombre de signalements doit être un multiple de 4.")
        return

    query = f"INSERT INTO Signalement (véhicule, NbSignalement, responsable) VALUES ('{vehicule}', '{nb_signalement}', '{responsable}')"

    cur.execute(query)
    conn.commit()
    print("\nLe signalement a été inséré avec succès.")

def update_signalement(cur, conn):
    vehicule = input("\nEntrer l'immatriculation du véhicule dont les informations de signalement doivent être mises à jour : ")
    new_nb_signalement = int(input("\nEntrer le nouveau nombre de signalements (doit être multiple de 4) : "))
    new_responsable = int(input("\nEntrer le nouvel ID du responsable : "))

    # Ensure NbSignalement satisfies the check constraint
    if new_nb_signalement % 4 != 0:
        print("Le nombre de signalements doit être un multiple de 4.")
        return

    query = f"""
    UPDATE Signalement
    SET NbSignalement = '{new_nb_signalement}',
        responsable = '{new_responsable}'
    WHERE véhicule = '{vehicule}'
    """

    cur.execute(query)
    conn.commit()
    print("\nLe signalement a été mis à jour avec succès.")

def delete_signalement(cur, conn):
    vehicule = input("\nEntrer l'immatriculation du véhicule dont le signalement doit être supprimé : ")

    query = f"DELETE FROM Signalement WHERE véhicule = '{vehicule}'"

    cur.execute(query)
    conn.commit()
    print("\nLe signalement a été supprimé avec succès.")
