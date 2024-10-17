class CreateProdottos < ActiveRecord::Migration[7.2]
  def change
    create_table :prodottos do |t|
      t.string :nome
      t.text :descrizione
      t.datetime :data_inserimento
      t.references :tipo_prodotto, null: false, foreign_key: true

      t.timestamps
    end
  end
end
