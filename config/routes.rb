Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  # API routes
  namespace :api do
      resources :features, only: [:index,:show] do
        resources :comments, only: [:create, :index]
    end
  end
end
