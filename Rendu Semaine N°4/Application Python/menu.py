import psycopg2
from login import *
from affichage import *
from connexion import *
from client import *
from proprietaire import *
from locataire import *
from entreprise import *
from contratAssurance import *
from responsableQualite import *
from vehicule import *
from proprieteLoc import *
from signalement import *
from signaler import *
from checkIn import *
from checkOut import *
from locationPL import *
from locationLV import *
from locationEV import *
from contratLocation import *
from avis import *
from facture import *
from franchise import *
from emetLS import *
# Modifiez les fichiers en conséquence si ils ne correspondent pas


# Fonction exécutant nos requêtes
def exe_query(query):
    conn = connect_db()
    cur = conn.cursor()
    cur.execute(query)
    conn.commit()
    conn.close()

# Fonction permettant d'afficher les résultats des requêtes
def query(query):
    conn = connect_db()
    cur = conn.cursor()
    cur.execute(query)
    conn.commit()
    rows = cur.fetchall()
    print(rows)
    conn.close()

def adminMenu():
    while True:
        conn = connect_db()
        cur = conn.cursor()
        interfacecAdminMenu()
        choix = input("\n Choisissez une option : ")

        if choix == '1':
            print("\n\nToutes les tables de la BDD :")
            query = "SELECT tablename FROM pg_catalog.pg_tables WHERE schemaname = 'public';"
            displaySelect(query)

        elif choix == '2.1':
            insert_client(cur, conn)
        elif choix == '2.2':
            update_client(cur, conn)
        elif choix == '2.3':
            delete_client(cur, conn)

        elif choix == '3.1':
            insert_proprietaire(cur, conn)
        elif choix == '3.2':
            update_proprietaire(cur, conn)
        elif choix == '3.3':
            delete_proprietaire(cur, conn)

        elif choix == '4.1':
            insert_locataire(cur, conn)
        elif choix == '4.2':
            update_locataire(cur, conn)
        elif choix == '4.3':
            delete_locataire(cur, conn)

        elif choix == '5.1':
            insert_entreprise(cur, conn)
        elif choix == '5.2':
            update_entreprise(cur, conn)
        elif choix == '5.3':
            delete_entreprise(cur, conn)

        elif choix == '6.1':
            insert_contrat_assurance(cur, conn)
        elif choix == '6.2':
            update_contrat_assurance(cur, conn)
        elif choix == '6.3':
            delete_contrat_assurance(cur, conn)

        elif choix == '7.1':
            insert_responsable_qualite(cur, conn)
        elif choix == '7.2':
            update_responsable_qualite(cur, conn)
        elif choix == '7.3':
            delete_responsable_qualite(cur, conn)

        elif choix == '8.1':
            insert_vehicule(cur, conn)
        elif choix == '8.2':
            update_vehicule(cur, conn)
        elif choix == '8.3':
            delete_vehicule(cur, conn)

        elif choix == '9.1':
            insert_proprieteLoc(cur, conn)
        elif choix == '9.2':
            update_proprieteLoc(cur, conn)
        elif choix == '9.3':
            delete_proprieteLoc(cur, conn)

        elif choix == '10.1':
            insert_signalement(cur, conn)
        elif choix == '10.2':
            update_signalement(cur, conn)
        elif choix == '10.3':
            delete_signalement(cur, conn)

        elif choix == '11.1':
            insert_signaler(cur, conn)
        elif choix == '11.2':
            update_signaler(cur, conn)
        elif choix == '11.3':
            delete_signaler(cur, conn)

        elif choix == '12.1':
            insert_checkIn(cur, conn)
        elif choix == '12.2':
            update_checkIn(cur, conn)
        elif choix == '12.3':
            delete_checkIn(cur, conn)

        elif choix == '13.1':
            insert_checkOut(cur, conn)
        elif choix == '13.2':
            update_checkOut(cur, conn)
        elif choix == '13.3':
            delete_checkOut(cur, conn)

        elif choix == '14.1':
            insert_locationPL(cur, conn)
        elif choix == '14.2':
            delete_locationPL(cur, conn)

        elif choix == '15.1':
            insert_locationLV(cur, conn)
        elif choix == '15.2':
            delete_locationLV(cur, conn)

        elif choix == '16.1':
            insert_locationEV(cur, conn)
        elif choix == '16.2':
            delete_locationEV(cur, conn)

        elif choix == '17.1':
            insert_contrat_location(cur, conn)
        elif choix == '17.2':
            update_contrat_location(cur, conn)
        elif choix == '17.3':
            delete_contrat_location(cur, conn)

        elif choix == '18.1':
            insert_avis(cur, conn)
        elif choix == '18.2':
            update_avis(cur, conn)
        elif choix == '18.3':
            delete_avis(cur, conn)

        elif choix == '19.1':
            insert_facture(cur, conn)
        elif choix == '19.2':
            update_facture(cur, conn)
        elif choix == '19.3':
            delete_facture(cur, conn)

        elif choix == '20.1':
            insert_franchise(cur, conn)
        elif choix == '20.2':
            update_franchise(cur, conn)
        elif choix == '20.3':
            delete_franchise(cur, conn)

        elif choix == 'Q' or choix == 'q':
            print("\nAu revoir !")
            break

        else:
            print("\nOption invalide, veuillez réessayer.")


def userMenu(estProprietaire):
    while True:
        interfaceUserMenu(estProprietaire)
        choix = input("\nChoisissez votre option : ")

        if choix == '1': #Requêtes du fichier SELECT.SQL : 1, 2, 3, 21, 23, 24, 25, 26

            print("\nMoyenne d’âge des véhicules | Average vehicle age :")
            query = "SELECT AVG(EXTRACT(YEAR FROM CURRENT_DATE) - EXTRACT(YEAR FROM AnnéeMiseCirculation)) AS Moyenne_Age_Vehicules FROM Véhicule;"
            displaySelect(query)

            print("\nKilométrage moyen des véhicules | Average mileage of vehicles :")
            query = "SELECT AVG(Kilométrage) AS Kilometrage_Moyen FROM Véhicule;"
            displaySelect(query)

            print("\nType de carburant le plus courant | Most common fuel type")
            query = "SELECT Carburant, COUNT(*) AS Nombre FROM Véhicule GROUP BY Carburant ORDER BY Nombre DESC;"
            displaySelect(query)

            print("\nMarque de véhicule les plus courant | Most common vehicle brands")
            query = "SELECT Marque, COUNT(*) AS Nombre FROM Véhicule GROUP BY Marque ORDER BY Nombre DESC;"
            displaySelect(query)

            print("\nSeuilKm moyen autorisé par véhicule | Average mileage threshold allowed per vehicle")
            query = "SELECT AVG(SeuilKM) AS SeuilKm_Moyen FROM PropriétéLoc;"
            displaySelect(query)

            print("\nSeuilCarbu moyen autorisé par véhicule | Average fuel threshold allowed per vehicle")
            query = "SELECT AVG(SeuilCarbu) AS SeuilCarbu_Moyen FROM PropriétéLoc;"
            displaySelect(query)

            print("\nCouleur la plus répandue pour l’ensemble des véhicule | Most common color for all vehicles")
            query = """SELECT Couleur, Nombre FROM (SELECT Couleur, COUNT(*) AS Nombre FROM Véhicule GROUP BY Couleur) AS CompteCouleurs
                    WHERE Nombre = ( SELECT MAX(Nombre)
    	            FROM (SELECT COUNT(*) AS Nombre
    	            FROM Véhicule
    	            GROUP BY Couleur) AS MaxCompte );"""
            displaySelect(query)

            print("\nPour afficher le nombre de voitures par couleurs | Displaying vehicles number by colors")
            query = "SELECT Couleur, COUNT(*) AS Nombre FROM Véhicule GROUP BY Couleur ORDER BY COUNT(*) DESC;"
            displaySelect(query)


        elif choix == '2': #Requêtes du fichier SELECT.SQL : 4, 5, 6, 6bis, 10, 11, 15, 17

            print("\nFacture moyenne pour une location | Average invoice for a rental")
            query = "SELECT AVG(Montant) AS Facture_Moyenne FROM Facture;"
            displaySelect(query)

            montant = int(input("Entrez un montant : "))
            print("\nFactures ayant un montant supérieur à %s euros | Invoices with an amount greater than %s euros" % (montant, montant))
            query = "SELECT contratLocation, Montant FROM Facture WHERE Montant > %s;" %montant
            displaySelect(query)

            print("\nNombres de pays maximum autorisé par un propriétaire | Maximum number of countries allowed by a owner")
            query = "SELECT propriétaire, COUNT(DISTINCT country) AS Nombre_Pays FROM PropriétéLoc, unnest(ListePays) AS country GROUP BY propriétaire ORDER BY Nombre_Pays DESC;"
            displaySelect(query)

            print("\nNombre de pays autorisé pour un véhicule donné | Maximum number of countries allowed for a vehicle")
            immat = input("Entrez l'immatriculation du véhicule : ")
            query = "SELECT véhicule, COUNT(DISTINCT country) AS Nombre_Pays FROM PropriétéLoc, unnest(ListePays) AS country WHERE véhicule = '%s' GROUP BY véhicule;" %immat
            displaySelect(query)

            print("\nDurée moyenne de location | Average rental duration")
            query = "SELECT AVG(DateFinLoc - DateDebutLoc) AS Duree_Moyenne_Jours FROM PropriétéLoc;"
            displaySelect(query)

            print("\nDistance moyenne parcourue pour une location | Average distance traveled for a rental")
            query = "SELECT AVG(CheckOut.Kilométrage - CheckIn.Kilométrage) AS Kilometrage_Moyen FROM CheckIn JOIN CheckOut ON CheckIn.contrat = CheckOut.contrat;"
            displaySelect(query)

            print("\nRépartition moyen de paiement | Average payment distribution")
            query =  "SELECT MoyenDePaiement, COUNT(*) AS Nombre_Transactions FROM Facture GROUP BY MoyenDePaiement ORDER BY Nombre_Transactions DESC;"
            displaySelect(query)

            print("\nParts des véhicules assurés sur un type de franchise | Shares of vehicles insured by deductible type")
            while True :
                print("Selectionnez une des options suivantes en respectant la syntaxe ! Choix : 'Zéro franchise', 'Sans réduction', 'Franchise réduite'")
                franchise = input("Votre choix : ")
                if franchise == 'Zéro franchise' or franchise == 'Sans réduction' or franchise == 'Franchise réduite' : break
            query = "SELECT (COUNT(*) FILTER (WHERE ChoixFranchise = '%s')::FLOAT / COUNT(*)) * 100 AS Pourcentage_Zero_Franchise FROM Franchise;" %franchise
            displaySelect(query)


        elif choix == '3': #Requêtes du fichier SELECT.SQL : 7, 8, 9, 12, 13, 18, 22, 28, 32

            print("\nVéhicules ayant les meilleurs avis | Vehicles with the best reviews")
            query = "SELECT véhicule, AVG(Note) AS Note_Moyenne FROM Avis GROUP BY véhicule ORDER BY Note_Moyenne DESC;"
            displaySelect(query)

            print("\nNombre de commentaire moyen par véhicules | Average number of comments per vehicle")
            query = "SELECT véhicule, COUNT(Commentaire) AS Nombre_Commentaires FROM Avis GROUP BY véhicule;"
            displaySelect(query)

            print("\nMoyenne des avis des véhicules loués | Average ratings of rented vehicles")
            query = "SELECT AVG(Note) AS Note_Moyenne FROM Avis;"
            displaySelect(query)

            print("\nLes plus gros locataires | Biggest renters")
            query = "SELECT locataire, COUNT(*) AS Nombre_Locations FROM LocationLV GROUP BY locataire ORDER BY Nombre_Locations DESC;"
            displaySelect(query)

            print("\nLes plus gros propriétaires | Biggest owners")
            query = "SELECT propriétaire, COUNT(*) AS Nombre_Propriétés FROM PropriétéLoc GROUP BY propriétaire ORDER BY Nombre_Propriétés DESC;"
            displaySelect(query)

            print("\nÉtat des véhicules (via analyse du responsable qualité) | Condition of vehicles (through quality manager analysis)")
            query = """SELECT RQ.AnalyseÉtat AS État, COUNT(*) AS Nombre_Véhicules
                        FROM Véhicule V
                        JOIN ResponsableQualité RQ ON V.responsable = RQ.id
                        GROUP BY RQ.AnalyseÉtat
                        ORDER BY CASE
                            WHEN RQ.AnalyseÉtat = 'Excellent' THEN 1
                            WHEN RQ.AnalyseÉtat = 'Bon' THEN 2
                            WHEN RQ.AnalyseÉtat = 'Passable' THEN 3
                            WHEN RQ.AnalyseÉtat = 'Moyen' THEN 4
                            WHEN RQ.AnalyseÉtat = 'Médiocre' THEN 5
                            WHEN RQ.AnalyseÉtat = 'Mauvais' THEN 6
                            WHEN RQ.AnalyseÉtat = 'Exécrable' THEN 7
                            ELSE 8
                        END;"""
            displaySelect(query)

            print("\nÂge permis moyen des locataires | Average age of renters' licenses")
            query = "SELECT AVG(EXTRACT(YEAR FROM ÉmissionPermis)- EXTRACT(YEAR FROM CURRENT_DATE)) AS Age_Permis_Moyen FROM Locataire;"
            displaySelect(query)

            print("\nVéhicule le plus loué | Most rented vehicle")
            query = "SELECT véhicule, COUNT(*) AS Nombre_Locations FROM LocationLV GROUP BY véhicule ORDER BY Nombre_Locations DESC LIMIT 1;"
            displaySelect(query)

            nom = input("\nEntrez la marque d'un véhicule : ")
            print("\nLocataires ayant loué le véhicule '%s' | Tenants who rented vehicle '%s'" %(nom,nom))
            query = "SELECT l.* FROM Locataire l JOIN PropriétéLoc pl ON l.Pseudo = pl.propriétaire JOIN Véhicule v ON pl.véhicule = v.N°Immat WHERE v.Marque = '%s';" %nom
            displaySelect(query)

        elif estProprietaire and choix == '4' :
            insert_vehicule(cur, conn)

        elif choix == 'Q' or 'q':
            print("\nVous quittez l'application")
            break

        else:
            print("\nOption invalide")


#-------------------------------main()--------------------------------------------------------------
conn = connect_db()
cur = conn.cursor()
while True:
    interfaceLoginMenu()
    print("\nRentrez 'Utilisateur', 'Administrateur' ou 'Creation' pour créer un compte, sinon 'Q' pour quitter le programme.")
    choix = input("\n\nVotre choix: ")
    if choix == 'Creation':
        insert_compte(cur, conn)
        reponse = input("\nAvez vous un véhicule à mettre en location ? oui : 1, non : 0")
        if reponse == '1' :
            insert_proprietaire(cur, conn)
            insert_vehicule(cur, conn)
            userMenu(True)
        else :
           userMenu(False)
    if choix == 'Utilisateur':
        compteExistant, estProprietaire = connexion_compte(cur, conn)
        if compteExistant and estProprietaire :
            userMenu(estProprietaire)
        elif compteExistant and not estProprietaire :
           reponse = input("\nAvez vous un véhicule à mettre en location ? oui : 1, non : 0")
           if reponse == '1' :
               insert_proprietaire(cur, conn)
               insert_vehicule(cur, conn)
               userMenu(True)
           else :
               userMenu(False)
        else : print("\nLe pseudo ou le mot de passe est incorrect.")
    elif choix == 'Administrateur':
        password = input("\n Mot de passe : ")
        if password == 'mdp1234':
            adminMenu()
        else:
            print("\nMot de passe erroné")
    elif choix == 'Q':
        print("\nVous avez choisi de quitter l'interface de connexion")
        break
    else:
        print("\n******** Choix invalide ********\n")
