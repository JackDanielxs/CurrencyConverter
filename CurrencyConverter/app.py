from flask import Flask, jsonify, request, send_from_directory
import requests

app = Flask(__name__, static_folder="static")

API_KEY = "key" # Replace with your actual API key
API_URL = "https://v6.exchangerate-api.com/v6"

@app.route("/convert", methods=["GET"])
def convert():
    amount = float(request.args.get("amount"))
    from_currency = request.args.get("from")
    to_currency = request.args.get("to")

    url = f"{API_URL}/{API_KEY}/pair/{from_currency}/{to_currency}" # Setting request params
    response = requests.get(url) # Making request

    if response.status_code == 200:
        data = response.json()
        rate = data["conversion_rate"]
        result = round(amount * rate, 2) # Stops after 2 decimals (cents)
        return jsonify({
            "result": result,
            "rate": rate
        })
    else:
        return jsonify({"error": "API Error"}), 500

@app.route("/")
def home():
    return send_from_directory('templates', 'index.html')

if __name__ == "__main__":
    app.run()
