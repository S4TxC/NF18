import psycopg2

def insert_franchise(cur, conn):
    contrat_assurance = input("Enter insurance contract number: ")
    choix_franchise = input("Enter franchise option: ")
    query = f"""
    INSERT INTO Franchise (contratAssurance, ChoixFranchise) 
    VALUES ({contrat_assurance}, '{choix_franchise}')
    """
    cur.execute(query)
    conn.commit()
    print("Franchise insertion was successful.\n")

def update_franchise(cur, conn):
    contrat_assurance = input("Enter insurance contract number to update: ")
    new_choix_franchise = input("Enter new franchise option: ")
    query = f"""
    UPDATE Franchise SET ChoixFranchise = '{new_choix_franchise}' 
    WHERE contratAssurance = {contrat_assurance}
    """
    cur.execute(query)
    conn.commit()
    print("Franchise update was successful.\n")

def delete_franchise(cur, conn):
    contrat_assurance = input("Enter insurance contract number to delete: ")
    query = f"DELETE FROM Franchise WHERE contratAssurance = {contrat_assurance}"
    cur.execute(query)
    conn.commit()
    print("Franchise deletion was successful.\n")
