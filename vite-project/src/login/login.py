import json
import os

accounts_json = "accounts.json"

def create_account(email, login, password):


    account = {
        "email": email,
        "login": login,
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

    if any(acc['login'] == login for acc in accounts):
        print(f"An account with login '{login}' already exists.")
        return

    accounts.append(account)
    
    with open(accounts_json, "w", encoding='utf-8') as file:
        json.dump(accounts, file, indent=4, ensure_ascii=False)
    
    print(f"Account for '{login}' created successfully.")
