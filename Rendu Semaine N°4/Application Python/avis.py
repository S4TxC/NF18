import psycopg2

def insert_avis(cur, conn):
    vehicule = input("Enter vehicle ID (N°Immat): ")
    contrat = input("Enter contract number: ")
    note = int(input("Enter rating (0-5): "))
    commentaire = input("Enter comment: ")
    query = f"INSERT INTO Avis (véhicule, contrat, Note, Commentaire) VALUES ('{vehicule}', {contrat}, {note}, '{commentaire}')"
    cur.execute(query)
    conn.commit()
    print("Review insertion was successful.\n")

def update_avis(cur, conn):
    vehicule = input("Enter vehicle ID to update review: ")
    new_note = int(input("Enter new rating (0-5): "))
    new_comment = input("Enter new comment: ")
    query = f"UPDATE Avis SET Note = {new_note}, Commentaire = '{new_comment}' WHERE véhicule = '{vehicule}'"
    cur.execute(query)
    conn.commit()
    print("Review update was successful.\n")

def delete_avis(cur, conn):
    vehicule = input("Enter vehicle ID to delete review: ")
    query = f"DELETE FROM Avis WHERE véhicule = '{vehicule}'"
    cur.execute(query)
    conn.commit()
    print("Review deletion was successful.\n")
