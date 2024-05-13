import psycopg2

def insert_locationEV(cur, conn):
    vehicule = input("Enter the vehicle's registration number (N°Immat): ")
    entreprise = input("Enter the enterprise ID (Pseudo): ")
    query = f"INSERT INTO LocationEV (véhicule, entreprise) VALUES ('{vehicule}', '{entreprise}')"
    cur.execute(query)
    conn.commit()
    print("Insert operation was successful.\n")

# def update_locationEV(cur, conn):
#     vehicule = input("Enter the vehicle's registration number to update (N°Immat): ")
#     entreprise = input("Enter new enterprise ID (Pseudo): ")
#     query = f"UPDATE LocationEV SET entreprise = '{entreprise}' WHERE véhicule = '{vehicule}'"
#     cur.execute(query)
#     conn.commit()
#     print("Update operation was successful.\n")

def delete_locationEV(cur, conn):
    vehicule = input("Enter the vehicle's registration number to delete (N°Immat): ")
    query = f"DELETE FROM LocationEV WHERE véhicule = '{vehicule}'"
    cur.execute(query)
    conn.commit()
    print("Delete operation was successful.\n")
