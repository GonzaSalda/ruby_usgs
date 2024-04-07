module Api
  class FeaturesController < ApplicationController
    def index
      features = Feature.all
      features = features.where(mag_type: params[:filters][:mag_type]) if params[:filters].present? && params[:filters][:mag_type].present?
      features = features.page(params[:page]).per(params[:per_page] || 20)

      render json: serialize_features(features), status: :ok
    end

    private

    #siguiendo el formato.
    def serialize_features(features)
      features.map do |feature|
        {
          id: feature.id,
          type: "feature",
          attributes: {
            external_id: feature.external_id,
            magnitude: feature.magnitude,
            place: feature.place,
            time: feature.time,
            tsunami: feature.tsunami,
            mag_type: feature.mag_type,
            title: feature.title,
            coordinates: {
              longitude: feature.longitude,
              latitude: feature.latitude,
            },
          },
          links: {
            external_url: feature.url,
          },
        }
      end

      {
        data: features,
        pagination: {
          current_page: features.current_page,
          total: features.total_count,
          per_page: features.limit_value,
        },
      }
    end
  end
end
