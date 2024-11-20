import json
import os

accounts_json = "accounts.json"

def create_account(email, password):
    account = {
        "email": email,
        "password": password
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
        print(f"An account with email '{email}' already exists.")
        return

    accounts.append(account)
    
    with open(accounts_json, "w", encoding='utf-8') as file:
        json.dump(accounts, file, indent=4, ensure_ascii=False)
    
    print(f"Account for '{email}' created successfully.")

def login_user(email, password):
    if os.path.isfile(accounts_json):
        with open(accounts_json, "r", encoding='utf-8') as file:
            try:
                accounts = json.load(file)
            except json.JSONDecodeError:
                print("Accounts data is corrupted.")
                return False
    else:
        print("No accounts found. Please create an account first.")
        return False

    for account in accounts:
        if account['login'] == email:
            if account['password'] == password:
                print(f"User '{email}' logged in successfully.")
                return True
            else:
                print("Incorrect password.")
                return False

    print(f"No account found with email '{email}'.")
    return False
