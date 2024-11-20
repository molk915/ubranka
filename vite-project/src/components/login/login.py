from flask import Flask, request, jsonify
import json
import os

app = Flask(__name__)

accounts_json = "accounts.json"

def create_account(email, password):
    account = {
        "email": email,
        "password": password  # Storing password as plain text (not secure)
    }

    if os.path.isfile(accounts_json):
        with open(accounts_json, "r", encoding='utf-8') as file:
            try:
                accounts = json.load(file)
            except json.JSONDecodeError:
                accounts = []
    else:
        accounts = []

    if any(acc['email'] == email for acc in accounts):
        return False, f"An account with email '{email}' already exists."

    accounts.append(account)
    
    with open(accounts_json, "w", encoding='utf-8') as file:
        json.dump(accounts, file, indent=4, ensure_ascii=False)
    
    return True, f"Account for '{email}' created successfully."

def login_user(email, password):
    if os.path.isfile(accounts_json):
        with open(accounts_json, "r", encoding='utf-8') as file:
            try:
                accounts = json.load(file)
            except json.JSONDecodeError:
                return False, "Accounts data is corrupted."
    else:
        return False, "No accounts found. Please create an account first."

    for account in accounts:
        if account['email'] == email:
            if account['password'] == password:
                return True, f"User '{email}' logged in successfully."
            else:
                return False, "Incorrect password."

    return False, f"No account found with email '{email}'."

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    if not data or not all(k in data for k in ("email", "password")):
        return jsonify({'message': 'Email and password are required.'}), 400

    email = data['email']
    password = data['password']

    success, message = login_user(email, password)
    if success:
        return jsonify({'message': message}), 200
    else:
        return jsonify({'message': message}), 401

@app.route('/create-account', methods=['POST'])
def create_account_route():
    data = request.get_json()
    if not data or not all(k in data for k in ("email", "password")):
        return jsonify({'message': 'Email and password are required.'}), 400

    email = data['email']
    password = data['password']

    success, message = create_account(email, password)
    if success:
        return jsonify({'message': message}), 201
    else:
        return jsonify({'message': message}), 409

if __name__ == '__main__':
    app.run(debug=True)
