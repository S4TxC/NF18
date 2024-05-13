import psycopg2

def insert_checkOut(cur, conn):
    contrat = int(input("\nEntrer le numéro du contrat associé au check-out : "))
    nb_degats_out = int(input("\nEntrer le nombre de dégâts au check-out : "))
    kilometrage = int(input("\nEntrer le kilométrage du véhicule au check-out : "))
    niveau_carburant = int(input("\nEntrer le niveau de carburant du véhicule au check-out : "))
    etat_prop = input("\nEntrer l'état du véhicule au check-out : ")

    query = f"INSERT INTO CheckOut (contrat, nbDégâtsOut, Kilométrage, niveauCarburant, EtatProp) VALUES ('{contrat}', '{nb_degats_out}', '{kilometrage}', '{niveau_carburant}', '{etat_prop}')"

    cur.execute(query)
    conn.commit()
    print("\nLe check-out a été inséré avec succès.")

def update_checkOut(cur, conn):
    contrat = int(input("\nEntrer le numéro du contrat dont les informations de check-out doivent être mises à jour : "))
    new_nb_degats_out = int(input("\nEntrer le nouveau nombre de dégâts au check-out : "))
    new_kilometrage = int(input("\nEntrer le nouveau kilométrage du véhicule au check-out : "))
    new_niveau_carburant = int(input("\nEntrer le nouveau niveau de carburant du véhicule au check-out : "))
    new_etat_prop = input("\nEntrer le nouvel état du véhicule au check-out : ")

    query = f"""
    UPDATE CheckOut
    SET nbDégâtsOut = '{new_nb_degats_out}',
        Kilométrage = '{new_kilometrage}',
        niveauCarburant = '{new_niveau_carburant}',
        EtatProp = '{new_etat_prop}'
    WHERE contrat = '{contrat}'
    """

    cur.execute(query)
    conn.commit()
    print("\nLe check-out a été mis à jour avec succès.")

def delete_checkOut(cur, conn):
    contrat = int(input("\nEntrer le numéro du contrat dont le check-out doit être supprimé : "))

    query = f"DELETE FROM CheckOut WHERE contrat = '{contrat}'"

    cur.execute(query)
    conn.commit()
    print("\nLe check-out a été supprimé avec succès.")
