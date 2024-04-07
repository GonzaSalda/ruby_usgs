class ApplicationController < ActionController::Base
  include ActiveModel::Serializers
  include ActionController::Helpers

  before_action :set_default_response_format

  private

  def set_default_response_format
    request.format = :json
  end
end
