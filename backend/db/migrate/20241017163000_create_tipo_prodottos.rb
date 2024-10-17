class CreateTipoProdottos < ActiveRecord::Migration[7.2]
  def change
    create_table :tipo_prodottos do |t|
      t.string :tipo

      t.timestamps
    end
  end
end
