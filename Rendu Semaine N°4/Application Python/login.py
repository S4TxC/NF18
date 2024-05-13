import hashlib
from client import *
from proprietaire import *

def hash_mdp(mdp):
    mdp_hash = hashlib.sha256((mdp + 'sel').encode('utf-8')).hexdigest()
    return mdp_hash


#Hash mot de passe. Source : https://www.c-sharpcorner.com/article/secure-password-hashing-with-sha-256-and-salt-in-python/



def insert_compte(cur, conn) :
    insert_client(cur, conn)
    pseudo = input("Veuillez saisir une nouvelle fois votre pseudo : ")
    mdp = input("Veuillez saisir votre mot de passe : ")
    hashMdp = hash_mdp(mdp)
    query = f"INSERT INTO Compte (Pseudo, Mot_de_passe) VALUES ('{pseudo}', '{hashMdp}')"

    cur.execute(query)
    conn.commit()
    print("Le compte a bien été ajouté.")


def connexion_compte(cur, conn) :
    pseudo = input("Veuillez saisir votre pseudo : ")
    mdp = input("Veuillez saisir votre mot de passe : ")
    hashMdp = hash_mdp(mdp)
    query = f"SELECT * FROM Compte WHERE pseudo = '{pseudo}' AND Mot_de_passe = '{hashMdp}'"
    cur.execute(query)
    compte_existant = cur.fetchone()
    conn.commit()

    query = f"SELECT * FROM Propriétaire WHERE pseudo = '{pseudo}'"
    cur.execute(query)
    propriataire = cur.fetchone()
    conn.commit()

    return compte_existant != None, propriataire != None
