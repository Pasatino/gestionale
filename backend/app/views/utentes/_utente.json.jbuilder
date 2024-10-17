json.extract! utente, :id, :username, :password_digest, :nome, :cognome, :data_nascita, :created_at, :updated_at
json.url utente_url(utente, format: :json)
