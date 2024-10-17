class CreateUtentes < ActiveRecord::Migration[7.2]
  def change
    create_table :utentes do |t|
      t.string :username
      t.string :password_digest
      t.string :nome
      t.string :cognome
      t.date :data_nascita

      t.timestamps
    end
  end
end
