import re
import pdfplumber
import os
from datetime import datetime
import requests
from datetime import datetime


def extract_data_from_text(text):
    # Defina regex patterns para extrair informações relevantes
    patterns = {
        "no_do_cliente": re.compile(r"Nº DO CLIENTE\s+Nº DA INSTALAÇÃO\s+\d{2}\.\d{2}\.\d{4}\s+às\s+\d{2}:\d{2}:\d{2}\s+(\d+)\s"),
        "referente_a": re.compile(r"\b([A-Z]{3}/\d{4})\b"),
        "energia_eletrica_kwh": re.compile(r"Energia Elétrica kWh\s+(\d+)"),
        "energia_eletrica_valor": re.compile(r"Energia Elétrica kWh\s+\d+\s+\d+,\d+\s+(\d+,\d+)"),
        "energia_sceee_kwh": re.compile(r"Energia SCEE ISENTA kWh\s+(\d+)"),
        "energia_sceee_valor": re.compile(r"Energia SCEE ISENTA kWh\s+\d+\s+\d+,\d+\s+(\d+,\d+)"),
        "energia_compensada_kwh": re.compile(r"Energia compensada GD I kWh\s+(\d+)"),
        "energia_compensada_valor": re.compile(r"Energia compensada GD I kWh\s+\d+\s+\d+,\d+\s+(-?\d+,\d+)"),
        "contrib_ilum_valor": re.compile(r"Contrib Ilum Publica Municipal\s+(\d+,\d+)")
    }

    extracted_data = {}
    for key, pattern in patterns.items():
        match = pattern.search(text)
        if match:
            extracted_data[key] = match.group(1).replace(',', '.')  # Substitui vírgulas por pontos
        else:
            extracted_data[key] = None
        print(f"{key}: {extracted_data[key]}")  # Print dos dados extraídos

    return extracted_data

def extract_data_from_pdf(pdf_path):
    with pdfplumber.open(pdf_path) as pdf:
        text = ''
        for page in pdf.pages:
            text += page.extract_text()
        
        return extract_data_from_text(text)

def insert_data_to_db(data):
    url = 'http://localhost:3000/faturas'
    fatura_data = {
        "numero_cliente": data['no_do_cliente'],
        "referencia": data['referente_a'],
        "quantidadeEnergia": int(data['energia_eletrica_kwh']) if data['energia_eletrica_kwh'] else None,
        "valorEnergia": float(data['energia_eletrica_valor']) if data['energia_eletrica_valor'] else None,
        "quantidadeSCEEE": int(data['energia_sceee_kwh']) if data['energia_sceee_kwh'] else None,
        "valorSCEEE": float(data['energia_sceee_valor']) if data['energia_sceee_valor'] else None,
        "quantidadeCompensada": int(data['energia_compensada_kwh']) if data['energia_compensada_kwh'] else None,
        "valorCompensada": float(data['energia_compensada_valor']) if data['energia_compensada_valor'] else None,
        "valorIluminacaoPublica": float(data['contrib_ilum_valor']) if data['contrib_ilum_valor'] else None,
        "createdAt": datetime.now().isoformat(),
        "updatedAt": datetime.now().isoformat()
    }
    response = requests.post(url, json=fatura_data)
    if response.status_code == 201:
        print('Fatura inserida com sucesso!')
    else:
        print('Falha ao inserir a fatura:', response.text)

def process_pdf_directory(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(".pdf"):
                pdf_path = os.path.join(root, file)
                data = extract_data_from_pdf(pdf_path)
                insert_data_to_db(data)

# Exemplo de uso
pdf_directory = "/home/beatrizesteves/Documentos/Faturas"
process_pdf_directory(pdf_directory)
