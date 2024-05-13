import psycopg2

def insert_signaler(cur, conn):
    signalement = input("\nEntrer le signalement (immatriculation du véhicule associé) : ")
    locataire = input("\nEntrer le pseudo du locataire associé : ")

    query = f"INSERT INTO Signaler (signalement, locataire) VALUES ('{signalement}', '{locataire}')"

    cur.execute(query)
    conn.commit()
    print("\nLa relation Signaler a été insérée avec succès.")

def update_signaler(cur, conn):
    print("La table Signaler ne contient que des clés primaires composites sans attributs supplémentaires pour la mise à jour.")

def delete_signaler(cur, conn):
    signalement = input("\nEntrer le signalement (immatriculation du véhicule associé) à supprimer : ")
    locataire = input("\nEntrer le pseudo du locataire associé à supprimer : ")

    query = f"DELETE FROM Signaler WHERE signalement = '{signalement}' AND locataire = '{locataire}'"

    cur.execute(query)
    conn.commit()
    print("\nLa relation Signaler a été supprimée avec succès.")
