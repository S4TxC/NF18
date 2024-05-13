import psycopg2


def insert_checkIn(cur, conn):
    contrat = int(input("\nEntrer le numéro du contrat associé au check-in : "))
    nb_degats_in = int(input("\nEntrer le nombre de dégâts au check-in : "))
    kilometrage = int(input("\nEntrer le kilométrage du véhicule au check-in : "))
    niveau_carburant = int(input("\nEntrer le niveau de carburant du véhicule au check-in : "))
    etat_loc = input("\nEntrer l'état du véhicule au check-in : ")

    # For demonstration, we're simulating the photo as a simple text converted to bytes.
    photo_loc_text = input("\nEntrer un texte représentatif pour la photo du véhicule (sera converti en bytes) : ")
    photo_loc = bytes(photo_loc_text, 'utf-8')

    query = f"INSERT INTO CheckIn (contrat, nbDégâtsIn, Kilométrage, niveauCarburant, EtatLoc, PhotoLoc) VALUES ('{contrat}', '{nb_degats_in}', '{kilometrage}', '{niveau_carburant}', '{etat_loc}', {psycopg2.Binary(photo_loc)})"

    cur.execute(query)
    conn.commit()
    print("\nLe check-in a été inséré avec succès.")

def update_checkIn(cur, conn):
    contrat = int(input("\nEntrer le numéro du contrat dont les informations de check-in doivent être mises à jour : "))
    new_nb_degats_in = int(input("\nEntrer le nouveau nombre de dégâts au check-in : "))
    new_kilometrage = int(input("\nEntrer le nouveau kilométrage du véhicule au check-in : "))
    new_niveau_carburant = int(input("\nEntrer le nouveau niveau de carburant du véhicule au check-in : "))
    new_etat_loc = input("\nEntrer le nouvel état du véhicule au check-in : ")

    query = f"""
    UPDATE CheckIn
    SET nbDégâtsIn = '{new_nb_degats_in}',
        Kilométrage = '{new_kilometrage}',
        niveauCarburant = '{new_niveau_carburant}',
        EtatLoc = '{new_etat_loc}'
    WHERE contrat = '{contrat}'
    """

    cur.execute(query)
    conn.commit()
    print("\nLe check-in a été mis à jour avec succès.")

def delete_checkIn(cur, conn):
    contrat = int(input("\nEntrer le numéro du contrat dont le check-in doit être supprimé : "))

    query = f"DELETE FROM CheckIn WHERE contrat = '{contrat}'"

    cur.execute(query)
    conn.commit()
    print("\nLe check-in a été supprimé avec succès.")
