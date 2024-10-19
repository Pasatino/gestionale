module Api
    class UtentesController < ApplicationController
        before_action :set_utente, only: [:show, :update, :destroy]
    
        def index
            @utentes = Utente.all
            render json: @utentes
        end
    
        def show
            render json: @utente
        end
    
        def create
            @utente = Utente.new(utente_params)
    
            if @utente.save
            render json: @utente, status: :created, location: api_utente_url(@utente)
            else
            render json: @utente.errors, status: :unprocessable_entity
            end
        end
    
        def update
            if @utente.update(utente_params)
            render json: @utente
            else
            render json: @utente.errors, status: :unprocessable_entity
            end
        end
    
        def destroy
            @utente.destroy
            head :no_content
        end
    
        private
    
        def set_utente
            @utente = Utente.find(params[:id])
        end
    
        def utente_params
            params.require(:utente).permit(:username, :password, :nome, :cognome, :data_nascita)
        end
    end
end