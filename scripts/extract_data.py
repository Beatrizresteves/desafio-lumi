import requests
import pdfplumber
import re
import os
from datetime import datetime


def extract_data_from_pdf(pdf_path):
    with pdfplumber.open(pdf_path) as pdf:
        text = ''
        for page in pdf.pages:
            text += page.extract_text()

        # Defina regex patterns para extrair informações relevantes
        patterns = {
            "no_do_cliente": re.compile(r"No DO CLIENTE:\s*(\d+)"),
            "referente_a": re.compile(r"Referente a:\s*([\w\s]+)"),
            "energia_eletrica_kwh": re.compile(r"Energia Elétrica\s*\(kWh\):\s*(\d+)"),
            "energia_eletrica_valor": re.compile(r"Energia Elétrica\s*\(R\$\):\s*([\d,]+)"),
            "energia_sceee_kwh": re.compile(r"Energia SCEEE s/ICMS\s*\(kWh\):\s*(\d+)"),
            "energia_sceee_valor": re.compile(r"Energia SCEEE s/ICMS\s*\(R\$\):\s*([\d,]+)"),
            "energia_compensada_kwh": re.compile(r"Energia Compensada GD I\s*\(kWh\):\s*(\d+)"),
            "energia_compensada_valor": re.compile(r"Energia Compensada GD I\s*\(R\$\):\s*([\d,]+)"),
            "contrib_ilum_valor": re.compile(r"Contrib Ilum Publica Municipal\s*\(R\$\):\s*([\d,]+)")
        }

        extracted_data = {}
        for key, pattern in patterns.items():
            match = pattern.search(text)
            extracted_data[key] = match.group(1) if match else None

        # Converta os valores numéricos extraídos para os tipos apropriados
        if extracted_data["energia_eletrica_valor"]:
            extracted_data["energia_eletrica_valor"] = float(
                extracted_data["energia_eletrica_valor"].replace(',', '.'))
        if extracted_data["energia_sceee_valor"]:
            extracted_data["energia_sceee_valor"] = float(
                extracted_data["energia_sceee_valor"].replace(',', '.'))
        if extracted_data["energia_compensada_valor"]:
            extracted_data["energia_compensada_valor"] = float(
                extracted_data["energia_compensada_valor"].replace(',', '.'))
        if extracted_data["contrib_ilum_valor"]:
            extracted_data["contrib_ilum_valor"] = float(
                extracted_data["contrib_ilum_valor"].replace(',', '.'))

        return extracted_data


def insert_data_to_db(data):
    url = 'http://localhost:3000/faturas'
    fatura_data = {
        "referencia": data['referente_a'],
        "quantidadeEnergia": data['energia_eletrica_kwh'],
        "valorEnergia": data['energia_eletrica_valor'],
        "quantidadeSCEEE": data['energia_sceee_kwh'],
        "valorSCEEE": data['energia_sceee_valor'],
        "quantidadeCompensada": data['energia_compensada_kwh'],
        "valorCompensada": data['energia_compensada_valor'],
        "valorIluminacaoPublica": data['contrib_ilum_valor'],
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


# Uso do exemplo
pdf_directory = "/home/beatrizesteves/Documentos/Faturas"
process_pdf_directory(pdf_directory)
