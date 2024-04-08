# Ruby USGS
Esta aplicacion permite:

Visualizar una lista de terremotos recientes con información como magnitud, lugar, fecha y hora.

Filtrar la lista de terremotos por tipo de magnitud.

Ver detalles de un terremoto específico al hacer clic en un elemento de la lista.

Agregar comentarios a un terremoto específico.


*Backend: Ruby on Rails

*Frontend: ReactJS

*Base de datos: PostgreSQL

*API externa: USGS Earthquake Hazards Program.

# Iniciar proyecto con Ruby on rails para el backend

*Crear la base de datos: ruby_usgs

*Migrar la bd con: rails db:migrate

*Realizar el fetch con:  rails fetch_features_data:fetch

*Iniciar el servidor con: rails server

# Iniciar proyecto con React para el frontend

*con el comando 'cd' entrar a la carptea react-frontend-usgs

*Instalar las dependencias con npm i

*Iniciar el servidor con npm start


# Pruebas de endpoints

curl -X GET \
http://127.0.0.1:3000/api/features?page=1&per_page=2%27
-H 'Content-Type: application/vnd.api+json' \
-H 'cache-control: no-cache'

curl -X GET \
http://127.0.0.1:3000/api/features?page=1&per_page=2&mag_type%5B%5D=md%27
-H 'Content-Type: application/vnd.api+json' \
-H 'cache-control: no-cache'


curl --request POST \
http://127.0.0.1:3000/api/features/55555/comments
--header 'content-type: application/json' \
--data '{"body": "This is a comment" }
