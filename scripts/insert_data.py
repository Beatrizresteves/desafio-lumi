import psycopg2


def insert_data_to_db(data):
    conn = psycopg2.connect(
        dbname="your_dbname",
        user="your_dbuser",
        password="your_dbpassword",
        host="your_dbhost",
        port="your_dbport"
    )
    cur = conn.cursor()

    query = """
    INSERT INTO faturas (no_do_cliente, referente_a, energia_eletrica_kwh, energia_eletrica_valor, 
                         energia_sceee_kwh, energia_sceee_valor, energia_compensada_kwh, 
                         energia_compensada_valor, contrib_ilum_valor)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
    """

    cur.execute(query, (
        data['no_do_cliente'], data['referente_a'], data['energia_eletrica_kwh'],
        data['energia_eletrica_valor'], data['energia_sceee_kwh'], data['energia_sceee_valor'],
        data['energia_compensada_kwh'], data['energia_compensada_valor'], data['contrib_ilum_valor']
    ))

    conn.commit()
    cur.close()
    conn.close()


# Example usage
insert_data_to_db(data)
