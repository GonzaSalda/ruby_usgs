class Comment < ApplicationRecord
  belongs_to :feature
  #Validamos que no este en blanco el body
  validates :body, presence: true
end
