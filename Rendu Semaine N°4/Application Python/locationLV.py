import psycopg2

def insert_locationLV(cur, conn):
    immatriculation = input("Enter the vehicle's registration number: ")
    locataire = input("Enter the renter's ID: ")
    query = f"INSERT INTO LocationLV (véhicule, locataire) VALUES ('{immatriculation}', '{locataire}')"
    cur.execute(query)
    conn.commit()
    print("The insert operation was successful.\n")

# def update_locationLV(cur, conn):
#     immatriculation = input("Enter the registration number to update: ")
#     new_locataire = input("Enter new renter's ID: ")
#     query = f"UPDATE LocationLV SET locataire = '{new_locataire}' WHERE véhicule = '{immatriculation}'"
#     cur.execute(query)
#     conn.commit()
#     print("The update operation was successful.\n")

def delete_locationLV(cur, conn):
    immatriculation = input("Enter the registration number to delete: ")
    query = f"DELETE FROM LocationLV WHERE véhicule = '{immatriculation}'"
    cur.execute(query)
    conn.commit()
    print("The delete operation was successful.\n")
