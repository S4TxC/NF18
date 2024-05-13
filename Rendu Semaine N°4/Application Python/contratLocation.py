import psycopg2

def insert_contrat_location(cur, conn):
    num_contrat = input("Enter contract number: ")
    date_debut = input("Enter start date (YYYY-MM-DD): ")
    vehicule = input("Enter vehicle ID (N°Immat): ")
    query = f"INSERT INTO ContratLocation (NumContratL, DateDébutCL, véhicule) VALUES ({num_contrat}, '{date_debut}', '{vehicule}')"
    cur.execute(query)
    conn.commit()
    print("Contract insertion was successful.\n")

def update_contrat_location(cur, conn):
    num_contrat = input("Enter contract number to update: ")
    new_date = input("Enter new start date (YYYY-MM-DD): ")
    query = f"UPDATE ContratLocation SET DateDébutCL = '{new_date}' WHERE NumContratL = {num_contrat}"
    cur.execute(query)
    conn.commit()
    print("Contract update was successful.\n")

def delete_contrat_location(cur, conn):
    num_contrat = input("Enter contract number to delete: ")
    query = f"DELETE FROM ContratLocation WHERE NumContratL = {num_contrat}"
    cur.execute(query)
    conn.commit()
    print("Contract deletion was successful.\n")
