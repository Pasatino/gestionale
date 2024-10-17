require "application_system_test_case"

class TipoProdottosTest < ApplicationSystemTestCase
  setup do
    @tipo_prodotto = tipo_prodottos(:one)
  end

  test "visiting the index" do
    visit tipo_prodottos_url
    assert_selector "h1", text: "Tipo prodottos"
  end

  test "should create tipo prodotto" do
    visit tipo_prodottos_url
    click_on "New tipo prodotto"

    fill_in "Tipo", with: @tipo_prodotto.tipo
    click_on "Create Tipo prodotto"

    assert_text "Tipo prodotto was successfully created"
    click_on "Back"
  end

  test "should update Tipo prodotto" do
    visit tipo_prodotto_url(@tipo_prodotto)
    click_on "Edit this tipo prodotto", match: :first

    fill_in "Tipo", with: @tipo_prodotto.tipo
    click_on "Update Tipo prodotto"

    assert_text "Tipo prodotto was successfully updated"
    click_on "Back"
  end

  test "should destroy Tipo prodotto" do
    visit tipo_prodotto_url(@tipo_prodotto)
    click_on "Destroy this tipo prodotto", match: :first

    assert_text "Tipo prodotto was successfully destroyed"
  end
end
