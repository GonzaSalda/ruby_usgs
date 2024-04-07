class Feature < ApplicationRecord
  #con Kaminari paginamos los resultados.
  include Kaminari::Activerecord
  has_many :comments
end
