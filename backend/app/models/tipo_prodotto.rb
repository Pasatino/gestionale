class TipoProdotto < ApplicationRecord
    has_many :prodotti

    validates :tipo, presence: true, uniqueness: true
end
