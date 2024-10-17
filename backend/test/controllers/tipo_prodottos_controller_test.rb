require "test_helper"

class TipoProdottosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @tipo_prodotto = tipo_prodottos(:one)
  end

  test "should get index" do
    get tipo_prodottos_url
    assert_response :success
  end

  test "should get new" do
    get new_tipo_prodotto_url
    assert_response :success
  end

  test "should create tipo_prodotto" do
    assert_difference("TipoProdotto.count") do
      post tipo_prodottos_url, params: { tipo_prodotto: { tipo: @tipo_prodotto.tipo } }
    end

    assert_redirected_to tipo_prodotto_url(TipoProdotto.last)
  end

  test "should show tipo_prodotto" do
    get tipo_prodotto_url(@tipo_prodotto)
    assert_response :success
  end

  test "should get edit" do
    get edit_tipo_prodotto_url(@tipo_prodotto)
    assert_response :success
  end

  test "should update tipo_prodotto" do
    patch tipo_prodotto_url(@tipo_prodotto), params: { tipo_prodotto: { tipo: @tipo_prodotto.tipo } }
    assert_redirected_to tipo_prodotto_url(@tipo_prodotto)
  end

  test "should destroy tipo_prodotto" do
    assert_difference("TipoProdotto.count", -1) do
      delete tipo_prodotto_url(@tipo_prodotto)
    end

    assert_redirected_to tipo_prodottos_url
  end
end
