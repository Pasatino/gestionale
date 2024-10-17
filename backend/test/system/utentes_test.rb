require "application_system_test_case"

class UtentesTest < ApplicationSystemTestCase
  setup do
    @utente = utentes(:one)
  end

  test "visiting the index" do
    visit utentes_url
    assert_selector "h1", text: "Utentes"
  end

  test "should create utente" do
    visit utentes_url
    click_on "New utente"

    fill_in "Cognome", with: @utente.cognome
    fill_in "Data nascita", with: @utente.data_nascita
    fill_in "Nome", with: @utente.nome
    fill_in "Password digest", with: @utente.password_digest
    fill_in "Username", with: @utente.username
    click_on "Create Utente"

    assert_text "Utente was successfully created"
    click_on "Back"
  end

  test "should update Utente" do
    visit utente_url(@utente)
    click_on "Edit this utente", match: :first

    fill_in "Cognome", with: @utente.cognome
    fill_in "Data nascita", with: @utente.data_nascita
    fill_in "Nome", with: @utente.nome
    fill_in "Password digest", with: @utente.password_digest
    fill_in "Username", with: @utente.username
    click_on "Update Utente"

    assert_text "Utente was successfully updated"
    click_on "Back"
  end

  test "should destroy Utente" do
    visit utente_url(@utente)
    click_on "Destroy this utente", match: :first

    assert_text "Utente was successfully destroyed"
  end
end
