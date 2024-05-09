import psycopg2

def insert_émetLS(cur, conn):
    signalement = input("Insérer le numéro d'immatricalation du véhicule :"\n)
    locataire = input("Insérer le pseudo du locataire : "\n)
    query = f"INSERT INTO ÉmetLS (signalement, locataire) VALUES ('{signalement}', '{locataire}')"
    cur.execute(query)
    conn.commit()
    print("Le signalement a été effectué avec succès.\n")

def update_émetLS(cur, conn):
    signalement = input("Insérer le numéro d'immatriculation à mettre à jour :"\n)
    querylocataire = f"UPDATE ÉmetLS SET locataire = '{new_locataire}' WHERE signalement = '{signalement}'"
    cur.execute(querylocataire)
    conn.commit()
    print("Le signalement a été mis à jour avec succès."\n)

def delete_émetLS(cur, conn):
    signalement = input("Insérer le numéro d'immatriculation à supprimer :"\n)
    querylocataire = f"DELETE FROM ÉmetLS WHERE signalement = '{signalement}'"
    cur.execute(querylocataire)
    conn.commit()
    print("Le signalement a été supprimé avec succès."\n)