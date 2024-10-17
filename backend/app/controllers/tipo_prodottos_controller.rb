class TipoProdottosController < ApplicationController
  before_action :set_tipo_prodotto, only: %i[ show edit update destroy ]

  # GET /tipo_prodottos or /tipo_prodottos.json
  def index
    @tipo_prodottos = TipoProdotto.all
  end

  # GET /tipo_prodottos/1 or /tipo_prodottos/1.json
  def show
  end

  # GET /tipo_prodottos/new
  def new
    @tipo_prodotto = TipoProdotto.new
  end

  # GET /tipo_prodottos/1/edit
  def edit
  end

  # POST /tipo_prodottos or /tipo_prodottos.json
  def create
    @tipo_prodotto = TipoProdotto.new(tipo_prodotto_params)

    respond_to do |format|
      if @tipo_prodotto.save
        format.html { redirect_to @tipo_prodotto, notice: "Tipo prodotto was successfully created." }
        format.json { render :show, status: :created, location: @tipo_prodotto }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @tipo_prodotto.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /tipo_prodottos/1 or /tipo_prodottos/1.json
  def update
    respond_to do |format|
      if @tipo_prodotto.update(tipo_prodotto_params)
        format.html { redirect_to @tipo_prodotto, notice: "Tipo prodotto was successfully updated." }
        format.json { render :show, status: :ok, location: @tipo_prodotto }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @tipo_prodotto.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /tipo_prodottos/1 or /tipo_prodottos/1.json
  def destroy
    @tipo_prodotto.destroy!

    respond_to do |format|
      format.html { redirect_to tipo_prodottos_path, status: :see_other, notice: "Tipo prodotto was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tipo_prodotto
      @tipo_prodotto = TipoProdotto.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def tipo_prodotto_params
      params.require(:tipo_prodotto).permit(:tipo)
    end
end
