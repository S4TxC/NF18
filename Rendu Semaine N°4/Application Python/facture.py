import psycopg2
from datetime import datetime

def insert_facture(cur, conn):
    contrat_location = input("Enter contract location number: ")
    montant = float(input("Enter amount: "))
    kilometrage = int(input("Enter mileage: "))
    date_facture = input("Enter invoice date (YYYY-MM-DD): ")
    date_facture = datetime.strptime(date_facture, '%Y-%m-%d').date()
    moyen_de_paiement = input("Enter payment method: ")
    query = f"""
    INSERT INTO Facture (contratLocation, Montant, Kilométrage, DateFacture, MoyenDePaiement)
    VALUES ({contrat_location}, {montant}, {kilometrage}, '{date_facture}', '{moyen_de_paiement}')
    """
    cur.execute(query)
    conn.commit()
    print("Invoice insertion was successful.\n")

def update_facture(cur, conn):
    contrat_location = input("Enter contract location number to update: ")
    new_montant = float(input("Enter new amount: "))
    new_kilometrage = int(input("Enter new mileage: "))
    query = f"""
    UPDATE Facture SET Montant = {new_montant}, Kilométrage = {new_kilometrage}
    WHERE contratLocation = {contrat_location}
    """
    cur.execute(query)
    conn.commit()
    print("Invoice update was successful.\n")

def delete_facture(cur, conn):
    contrat_location = input("Enter contract location number to delete: ")
    query = f"DELETE FROM Facture WHERE contratLocation = {contrat_location}"
    cur.execute(query)
    conn.commit()
    print("Invoice deletion was successful.\n")
