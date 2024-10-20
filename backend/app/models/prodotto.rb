class Prodotto < ApplicationRecord
  belongs_to :tipo_prodotto

  validates :nome, presence: true
  validates :data_inserimento, presence: true
end
