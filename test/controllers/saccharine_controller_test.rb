require 'test_helper'

class SaccharineControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get saccharine_index_url
    assert_response :success
  end

end
