require "application_system_test_case"

class ProdottosTest < ApplicationSystemTestCase
  setup do
    @prodotto = prodottos(:one)
  end

  test "visiting the index" do
    visit prodottos_url
    assert_selector "h1", text: "Prodottos"
  end

  test "should create prodotto" do
    visit prodottos_url
    click_on "New prodotto"

    fill_in "Data inserimento", with: @prodotto.data_inserimento
    fill_in "Descrizione", with: @prodotto.descrizione
    fill_in "Nome", with: @prodotto.nome
    fill_in "Tipo prodotto", with: @prodotto.tipo_prodotto_id
    click_on "Create Prodotto"

    assert_text "Prodotto was successfully created"
    click_on "Back"
  end

  test "should update Prodotto" do
    visit prodotto_url(@prodotto)
    click_on "Edit this prodotto", match: :first

    fill_in "Data inserimento", with: @prodotto.data_inserimento.to_s
    fill_in "Descrizione", with: @prodotto.descrizione
    fill_in "Nome", with: @prodotto.nome
    fill_in "Tipo prodotto", with: @prodotto.tipo_prodotto_id
    click_on "Update Prodotto"

    assert_text "Prodotto was successfully updated"
    click_on "Back"
  end

  test "should destroy Prodotto" do
    visit prodotto_url(@prodotto)
    click_on "Destroy this prodotto", match: :first

    assert_text "Prodotto was successfully destroyed"
  end
end
