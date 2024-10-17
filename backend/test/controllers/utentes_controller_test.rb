require "test_helper"

class UtentesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @utente = utentes(:one)
  end

  test "should get index" do
    get utentes_url
    assert_response :success
  end

  test "should get new" do
    get new_utente_url
    assert_response :success
  end

  test "should create utente" do
    assert_difference("Utente.count") do
      post utentes_url, params: { utente: { cognome: @utente.cognome, data_nascita: @utente.data_nascita, nome: @utente.nome, password_digest: @utente.password_digest, username: @utente.username } }
    end

    assert_redirected_to utente_url(Utente.last)
  end

  test "should show utente" do
    get utente_url(@utente)
    assert_response :success
  end

  test "should get edit" do
    get edit_utente_url(@utente)
    assert_response :success
  end

  test "should update utente" do
    patch utente_url(@utente), params: { utente: { cognome: @utente.cognome, data_nascita: @utente.data_nascita, nome: @utente.nome, password_digest: @utente.password_digest, username: @utente.username } }
    assert_redirected_to utente_url(@utente)
  end

  test "should destroy utente" do
    assert_difference("Utente.count", -1) do
      delete utente_url(@utente)
    end

    assert_redirected_to utentes_url
  end
end
