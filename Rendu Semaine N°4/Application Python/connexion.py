import psycopg2

def connect_db():
    conn = psycopg2.connect(
        database = "dbnf18p121",
        user = "nf18p121",
        password = "Tf2p0na27smL",
        host = "tuxa.sme.utc",
    )
    return conn