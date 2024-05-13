import psycopg2

def insert_locationPL(cur, conn):
    proprietaire = input("Enter the owner's ID (Pseudo of Propriétaire): ")
    locataire = input("Enter the renter's ID (Pseudo of Locataire): ")
    query = f"INSERT INTO LocationPL (propriétaire, locataire) VALUES ('{proprietaire}', '{locataire}')"
    cur.execute(query)
    conn.commit()
    print("Insert operation was successful.\n")

# def update_locationPL(cur, conn):
#     current_proprietaire = input("Enter the current owner's ID to update (Pseudo of Propriétaire): ")
#     new_locataire = input("Enter the new renter's ID (Pseudo of Locataire): ")
#     query = f"UPDATE LocationPL SET locataire = '{new_locataire}' WHERE propriétaire = '{current_proprietaire}'"
#     cur.execute(query)
#     conn.commit()
#     print("Update operation was successful.\n")

def delete_locationPL(cur, conn):
    proprietaire = input("Enter the owner's ID whose record is to be deleted (Pseudo of Propriétaire): ")
    locataire = input("Enter the renter's ID whose record is to be deleted (Pseudo of Locataire): ")

    query = f"DELETE FROM LocationPL WHERE propriétaire = '{proprietaire}' AND locataire = '{locataire}'"
    cur.execute(query)
    conn.commit()
    print("Delete operation was successful.\n")
