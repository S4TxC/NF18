import psycopg2


def insert_entreprise(cur, conn):
    pseudo = input("Entrez le pseudo de l'entreprise: ")
    siren = int(input("Entrez le numéro SIREN de l'entreprise: "))
    conducteurs = '{' + input("Entrez la liste des conducteurs (séparés par des virgules exemple : Conducteur 1, Conducteur 2 ): ") + '}'


    query = f"INSERT INTO Entreprise (Pseudo, N°SIREN, ListeConducteur) VALUES ('{pseudo}', '{siren}', '{conducteurs}')"

    cur.execute(query)
    conn.commit()
    print("L'entreprise a bien été ajoutée.")


def update_entreprise(cur, conn):
    pseudo = input("Entrez le pseudo de l'entreprise à modifier : ")
    new_siren = input("Entrez le nouveau numéro SIREN de l'entreprise : ")
    new_conducteurs = '{' + input("Entrez la nouvelle liste des conducteurs (séparés par des virgules exemple : Conducteur 1, Conducteur 2): ") + '}'

    query = f"""
    UPDATE Entreprise
    SET N°SIREN = '{new_siren}',
        ListeConducteur = '{new_conducteurs}'
    WHERE Pseudo = '{pseudo}'
    """

    cur.execute(query)
    conn.commit()
    print("\nL'entreprise a été mise à jour avec succès.")

def delete_entreprise(cur, conn):
    pseudo = input("\nEntrer le pseudo de l'entreprise à supprimer : ")

    query = f"DELETE FROM Entreprise WHERE Pseudo = '{pseudo}'"

    cur.execute(query)
    conn.commit()
    print("\nL'entreprise a été supprimée avec succès.")
