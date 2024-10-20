module Api
    class ProdottosController < ApplicationController
        include JwtAuthenticatable
        before_action :set_prodotto, only: [:show, :update, :destroy]

        # GET /api/prodottos
        def index
            Rails.logger.info "Ricevuta richiesta all'endpoint prodottos#index"
            @prodottos = Prodotto.includes(:tipo_prodotto).all
            render json: @prodottos.as_json(include: { tipo_prodotto: { only: [:id, :tipo] } })
        end
    
        # GET /api/prodottos/1
        def show
            render json: @prodotto.as_json(include: { tipo_prodotto: { only: [:id, :tipo] } })
        end
    
        # POST /api/prodottos
        def create
            @prodotto = Prodotto.new(prodotto_params)
    
            if @prodotto.save
            render json: @prodotto.as_json(include: { tipo_prodotto: { only: [:id, :tipo] } }), status: :created, location: api_prodotto_url(@prodotto)
            else
            render json: @prodotto.errors, status: :unprocessable_entity
            end
        end
    
        # PATCH/PUT /api/prodottos/1
        def update
            if @prodotto.update(prodotto_params)
            render json: @prodotto.as_json(include: { tipo_prodotto: { only: [:id, :tipo] } })
            else
            render json: @prodotto.errors, status: :unprocessable_entity
            end
        end
    
        # DELETE /api/prodottos/1
        def destroy
            @prodotto.destroy
            head :no_content
        end
    
        private
    
        # Use callbacks to share common setup or constraints between actions.
        def set_prodotto
            @prodotto = Prodotto.find(params[:id])
        end
    
        # Only allow a list of trusted parameters through.
        def prodotto_params
        params.require(:prodotto).permit(:nome, :descrizione, :data_inserimento, :tipo_prodotto_id)
        end
    end
end