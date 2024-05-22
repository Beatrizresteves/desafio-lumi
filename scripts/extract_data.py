import pdfplumber
import re


def extract_data_from_pdf(pdf_path):
    with pdfplumber.open(pdf_path) as pdf:
        text = ''
        for page in pdf.pages:
            text += page.extract_text()

        # Define regex patterns to extract relevant information
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

        # Convert extracted numeric values to appropriate types
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


# Example usage
pdf_path = "path/to/your/fatura.pdf"
data = extract_data_from_pdf(pdf_path)
print(data)
