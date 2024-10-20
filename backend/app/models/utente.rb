class Utente < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, on: :create
    validates :nome, presence: true
    validates :cognome, presence: true
    validates :data_nascita, presence: true
end
