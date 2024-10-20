puts "Pulizia del database..."
Prodotto.destroy_all
TipoProdotto.destroy_all

puts "Creazione dei tipi di prodotto..."
buste = TipoProdotto.create!(tipo: "Buste")
carta = TipoProdotto.create!(tipo: "Carta")
toner = TipoProdotto.create!(tipo: "Toner")

puts "Creazione dei prodotti..."
Prodotto.create!([
  {
    nome: "Buste A4",
    descrizione: "Buste formato A4 per corrispondenza",
    data_inserimento: Time.current,
    tipo_prodotto: buste
  },
  {
    nome: "Buste con finestra",
    descrizione: "Buste con finestra trasparente",
    data_inserimento: Time.current,
    tipo_prodotto: buste
  },
  {
    nome: "Carta A4 80g",
    descrizione: "Risma di carta A4 80g/m²",
    data_inserimento: Time.current,
    tipo_prodotto: carta
  },
  {
    nome: "Carta fotografica",
    descrizione: "Carta fotografica lucida A4",
    data_inserimento: Time.current,
    tipo_prodotto: carta
  },
  {
    nome: "Toner nero",
    descrizione: "Cartuccia toner nero per stampante laser",
    data_inserimento: Time.current,
    tipo_prodotto: toner
  },
  {
    nome: "Toner colore set",
    descrizione: "Set di cartucce toner a colori (ciano, magenta, giallo)",
    data_inserimento: Time.current,
    tipo_prodotto: toner
  }
])

puts "Seed data creati con successo!"
puts "Riepilogo:"
puts "- Tipi di prodotto creati: #{TipoProdotto.count}"
puts "- Prodotti creati: #{Prodotto.count}"