namespace :fetch_features_data do
  desc "persistencia de data a USGS"
  task fetch: :environment do
    require 'httparty'

    url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"
    response = HTTParty.get(url)

    if response.code == 200
      json_data = JSON.parse(response.body)

      json_data["features"].each do |feature|
        properties = feature["properties"]
        coordinates = feature["geometry"]["coordinates"]

      # Validaciones
      next if properties["title"].nil? || properties["url"].nil? || properties["place"].nil? || properties["magType"].nil? || coordinates[0].nil? || coordinates[1].nil?
      next if properties["mag"] < -1.0 || properties["mag"] > 10.0 || coordinates[1] < -90.0 || coordinates[1] > 90.0 || coordinates[0] < -180.0 || coordinates[0] > 180.0


      # Buscar un registro existente por external_id
      existing_feature = Feature.find_or_initialize_by(external_id: properties["code"])

      # Actualizar o crear un nuevo registro
      existing_feature.assign_attributes(
        magnitude: properties["mag"],
        place: properties["place"],
        time: properties["time"],
        url: properties["url"],
        tsunami: properties["tsunami"],
        mag_type: properties["magType"],
        title: properties["title"],
        longitude: coordinates[0],
        latitude: coordinates[1]
      )
      existing_feature.save
      end
      puts "Fetch realizado con exito."
    else
      puts "Fallo el fetch. Response code: #{response.code}"
    end
  end
end
