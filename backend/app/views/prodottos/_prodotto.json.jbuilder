json.extract! prodotto, :id, :nome, :descrizione, :data_inserimento, :tipo_prodotto_id, :created_at, :updated_at
json.url prodotto_url(prodotto, format: :json)
