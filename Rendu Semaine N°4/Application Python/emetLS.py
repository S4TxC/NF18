import psycopg2

def insert_emetLS(cur, conn):
    signalement = input("\nInsérer le numéro d'immatricalation du véhicule :")
    locataire = input("\nInsérer le pseudo du locataire : ")
    query = f"INSERT INTO ÉmetLS (signalement, locataire) VALUES ('{signalement}', '{locataire}')"
    cur.execute(query)
    conn.commit()
    print("\nLe signalement a été effectué avec succès.")

def update_emetLS(cur, conn):
    signalement = input("\nInsérer le numéro d'immatriculation à mettre à jour :")
    new_locataire = input("\nInsérer le pseudo du locataire à mettre à jour : ")
    querylocataire = f"UPDATE ÉmetLS SET locataire = '{new_locataire}' WHERE signalement = '{signalement}'"
    cur.execute(querylocataire)
    conn.commit()
    print("\nLe signalement a été mis à jour avec succès.")

def delete_emetLS(cur, conn):
    signalement = input("\nInsérer le numéro d'immatriculation à supprimer :")
    querylocataire = f"DELETE FROM ÉmetLS WHERE signalement = '{signalement}'"
    cur.execute(querylocataire)
    conn.commit()
    print("\nLe signalement a été supprimé avec succès.")