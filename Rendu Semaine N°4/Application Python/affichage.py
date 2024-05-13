from connexion import *

def interfaceLoginMenu():
    print("\nBienvenue ")
    print("\nEtes vous un utilisateur ou un administrateur ? ")
#loginMenu()

def interfacecAdminMenu():
    print("\n\n ******************************** Menu ******************************** \n")
    print("""Choisissez une option: \n""")

    print("\n1. Afficher les tables de la BDD")
    print("\n____________________________________________________________________________")

    print("\n2.1 Insérer un client")
    print("\n2.2 Modifier un client")
    print("\n2.3 Supprimer un client")
    print("\n____________________________________________________________________________")

    print("\n3.1 Insérer un propriétaire")
    print("\n3.2 Modifier un propriétaire")
    print("\n3.3 Supprimer un propriétaire")
    print("\n____________________________________________________________________________")

    print("\n4.1 Insérer un locataire")
    print("\n4.2 Modifier un locataire")
    print("\n4.3 Supprimer un locataire")
    print("\n____________________________________________________________________________")

    print("\n5.1 Insérer une entreprise")
    print("\n5.2 Modifier une entreprise")
    print("\n5.3 Supprimer une entreprise")
    print("\n____________________________________________________________________________")

    print("\n6.1 Insérer un numéro de contrat d'assurance")
    print("\n6.2 Modifier un numéro de contrat d'assurance")
    print("\n6.3 Supprimer un numéro de contrat d'assurance")
    print("\n____________________________________________________________________________")

    print("\n7.1 Insérer un responsable qualité")
    print("\n7.2 Modifier un responsable qualité")
    print("\n7.3 Supprimer un responsable qualité")
    print("\n____________________________________________________________________________")

    print("\n8.1 Insérer un véhicule")
    print("\n8.2 Modifier un véhicule")
    print("\n8.3 Supprimer un véhicule")
    print("\n____________________________________________________________________________")

    print("\n9.1 Insérer les propriétés de location pour un véhicule")
    print("\n9.2 Modifier les propriétés de location pour un véhicule")
    print("\n9.3 Supprimer les propriétés de location pour un véhicule")
    print("\n____________________________________________________________________________")

    print("\n10.1 Insérer un véhicule à signaler")
    print("\n10.2 Modifier un véhicule à signaler")
    print("\n10.3 Supprimer un véhicule à signaler")
    print("\n____________________________________________________________________________")

    print("\n11.1 Insérer un locataire ayant signalé un véhicule")
    print("\n11.2 Modifier un locataire ayant signalé un véhicule")
    print("\n11.3 Supprimer un locataire ayant signalé un véhicule")
    print("\n____________________________________________________________________________")

    print("\n12.1 Insérer les données du check-in")
    print("\n12.2 Modifier les données du check-in")
    print("\n12.3 Supprimer les données du check-in")
    print("\n____________________________________________________________________________")

    print("\n13.1 Insérer les données du check-out")
    print("\n13.2 Modifier les données du check-out")
    print("\n13.3 Supprimer les données du check-out")
    print("\n____________________________________________________________________________")

    print("\n14.1 Insérer les données de location entre un locataire et un propriétaire")
    print("\n14.2 Supprimer les données de location entre un locataire et un propriétaire")
    print("\n____________________________________________________________________________")

    print("\n15.1 Insérer les données de location entre un locataire et un véhicule")
    print("\n15.2 Supprimer les données de location entre un locataire et un véhicule")
    print("\n____________________________________________________________________________")

    print("\n16.1 Insérer les données de location entre une entreprise et un véhicule")
    print("\n16.2 Supprimer les données de location entre une entreprise et un véhicule")
    print("\n____________________________________________________________________________")

    print("\n17.1 Insérer un contrat de location")
    print("\n17.2 Modifier un contrat de location")
    print("\n17.3 Supprimer un contrat de location")
    print("\n____________________________________________________________________________")

    print("\n18.1 Insérer un avis")
    print("\n18.2 Modifier un avis")
    print("\n18.3 Supprimer un avis")
    print("\n____________________________________________________________________________")

    print("\n19.1 Insérer une facture")
    print("\n19.2 Modifier une facture")
    print("\n19.3 Supprimer une facture")
    print("\n____________________________________________________________________________")

    print("\n20.1 Insérer une franchise")
    print("\n20.2 Modifier une franchise")
    print("\n20.3 Supprimer une franchise")
    print("\n____________________________________________________________________________")

    print("\nQ. Quitter")
#adminMenu()


def interfaceUserMenu(estProprietaire):
    print("\n\n ******************************** MENU ******************************** \n")
    print("Choisissez une option: \n")

    print("\n1. Résultats sur les spécificités des véhicules en location.")
    print("\n2. Résultats sur les spécificités des contrats de location.")
    print("\n3. Données générales sur les différentes locations.")
    if estProprietaire : print("\n4. Ajouter un vehicule.")
    #print("\n5. ")
    print("\nQ. Quitter")
#userMenu()


def displaySelect(query):
    conn = connect_db()
    cur = conn.cursor()
    cur.execute(query)
    rows = cur.fetchall()

    name = [attribut[0] for attribut in cur.description]
    print("________" + ("_" * 31) * len(name))
    string_col = f"|{'#':6s}|"
    for att in name:
        string_col += f"{str(att):30s}|"
    print(string_col)
    print("|------|" + ("-" * 30 + "|") * len(name))
    for i, raw in enumerate(rows):
        string_att = f"|{str(i+1):6s}|"
        for att in raw:
            string_att += f"{str(att):30s}|"
        print(string_att)
    print("▔▔▔▔▔▔▔▔" + ("▔" * 31) * len(name))
    conn.close()
